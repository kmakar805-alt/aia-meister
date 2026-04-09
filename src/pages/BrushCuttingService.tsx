import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import ba1 from "@/assets/before-after-1.jpg";
import ba3 from "@/assets/before-after-3.jpg";

const included = [
  "Võsa ja alustaimestiku eemaldamine",
  "Heki vormimine ja lõikus",
  "Professionaalsete tööriistade kasutamine",
  "Tööala koristamine pärast tööd",
  "Haljastusjäätmete äravedu (kokkuleppel)",
  "Tasuta konsultatsioon enne tööd",
];

const forWhom = [
  "Eramaja omanikud",
  "Korteriühistud",
  "Kinnisvaraarendajad",
  "Maaomanikud ja põllumehed",
  "Ärikinnisvara haldajad",
];

const faq = [
  { q: "Kui kaua võsalõikus aega võtab?", a: "Sõltub ala suurusest ja võsa tihedusest. Väiksem krunt võib võtta 2-3 tundi, suurem projekt 1-2 päeva." },
  { q: "Kas oksad ja jäätmed viiakse ära?", a: "Jah, kokkuleppel viime kõik haljastusjäätmed ära. See lisandub hinnale." },
  { q: "Kas te töötate ka talvel?", a: "Peamiselt töötame kevadest sügiseni, aga kergemate töödega saame ka talvel aidata." },
  { q: "Kui palju võsalõikus maksab?", a: "Hind sõltub ala suurusest, võsa tihedusest ja ligipääsust. Küsi tasuta hinnapakkumist!" },
];

const BrushCuttingService = () => {
  return (
    <Layout>
      <PageHero
        title="Võsalõikus ja heki lõikamine"
        subtitle="Professionaalne võsa eemaldamine ja heki hooldus Tallinnas ning Harjumaal."
        breadcrumbs={[
          { name: "Avaleht", href: "/" },
          { name: "Teenused", href: "/teenused" },
          { name: "Võsalõikus" },
        ]}
      />

      {/* Description */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Korralik võsalõikus algusest lõpuni</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Meie meeskond eemaldab võsa kiirelt ja korralikult, kasutades professionaalseid tööriistu. Olenemata sellest, kas tegemist on väikese eramaja krundiga või suure maatükiga — saame hakkama.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pärast tööd koristame ala puhtaks ja viime haljastusjäätmed kokkuleppel ära. Tulemuseks on puhas ja korras krunt, millega saab edasi tegutseda.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img src={ba3} alt="Võsalõikus enne ja pärast" loading="lazy" width={1280} height={720} className="w-full h-72 lg:h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* For whom + included */}
      <section className="section-padding bg-section-alt">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-7 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Kellele sobib?</h3>
            <ul className="space-y-3">
              {forWhom.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-2xl p-7 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Mida sisaldab?</h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Enne ja pärast</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[ba1, ba3].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-card">
                <img src={img} alt={`Enne ja pärast ${i + 1}`} loading="lazy" width={1280} height={720} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing factors */}
      <section className="section-padding bg-section-alt">
        <div className="container container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">Hinda mõjutavad tegurid</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">Iga objekt on erinev, seega hindame igat tööd individuaalselt.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Ala suurus", "Võsa tihedus ja kõrgus", "Ligipääsetavus", "Jäätmete äravedu", "Maapinna reljeeef", "Erikokkulepped"].map((f) => (
              <div key={f} className="bg-card rounded-xl p-4 border border-border text-center text-sm font-medium text-foreground">{f}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Korduma kippuvad küsimused</h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.q} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.q}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA form */}
      <section className="section-padding bg-section-alt">
        <div className="container container-narrow">
          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-section text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">Küsi tasuta hinnapakkumist</h2>
            <p className="text-muted-foreground mb-6">Kirjelda oma vajadust ja saadame sulle kiire hinnangu.</p>
            <Link
              to="/kontaktid"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent-hover transition-colors shadow-md"
            >
              Küsi pakkumist <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BrushCuttingService;
