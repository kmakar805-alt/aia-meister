const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactPayload {
  name: string;
  phone?: string;
  email: string;
  message: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY ei ole seadistatud');
    }

    const body = (await req.json()) as ContactPayload;
    const { name, phone, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Nimi, e-post ja sõnum on kohustuslikud' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a1a1a; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">
          Uus päring kodulehelt
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px;">Nimi:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">E-post:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Telefon:</td>
            <td style="padding: 8px 0;">${phone ? `<a href="tel:${phone}">${phone}</a>` : '—'}</td>
          </tr>
        </table>
        <h3 style="color: #1a1a1a; margin-top: 30px;">Sõnum:</h3>
        <div style="background: #f7f7f7; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${message}</div>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Haldusproff koduleht <onboarding@resend.dev>',
        to: ['makar.koli2013@gmail.com'],
        reply_to: email,
        subject: `Uus päring kodulehelt — ${name}`,
        html,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error('Resend error:', data);
      return new Response(
        JSON.stringify({ error: 'E-kirja saatmine ebaõnnestus', details: data }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-contact-email error:', err);
    const msg = err instanceof Error ? err.message : 'Tundmatu viga';
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});