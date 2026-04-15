import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Täname! Võtame teiega peagi ühendust.");
  };

  return (
    <Layout>
      <PageHero
        title="Võta ühendust"
        subtitle="Kirjelda oma vajadust ja saadame sulle kiire hinnapakkumise."
        breadcrumbs={[{ name: "Avaleht", href: "/" }, { name: "Kontakt" }]}
      />

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-5">
              {[
                { icon: Phone, title: "Telefon", value: "+372 555 1234", href: "tel:+3725551234" },
                { icon: Mail, title: "E-post", value: "info@haldusproff.ee", href: "mailto:info@haldusproff.ee" },
                { icon: MapPin, title: "Teeninduspiirkond", value: "Tallinn ja Harjumaa" },
                { icon: Clock, title: "Tööaeg", value: "E–R 8:00–18:00, L 9:00–15:00" },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-5 border border-border flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/3725551234"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-dark transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Kirjuta WhatsAppis
              </a>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-7 md:p-8 border border-border shadow-section">
                <h2 className="text-xl font-bold text-foreground mb-6">Küsi pakkumist</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Nimi</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                      placeholder="Sinu nimi"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Telefon</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                      placeholder="+372 ..."
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-1.5">E-post</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="sinu@email.ee"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-1.5">Sõnum</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none resize-none"
                    placeholder="Kirjelda oma vajadust — mis tööd on vaja teha, kui suur on ala jne."
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-1.5">Fotod (valikuline)</label>
                  <div className="border-2 border-dashed border-input rounded-lg p-6 text-center text-sm text-muted-foreground">
                    Lohista fotod siia või kliki üleslaadimiseks
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent-hover transition-colors shadow-md"
                >
                  <Send className="w-4 h-4" />
                  Saada päring
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-0">
        <div className="w-full h-64 md:h-80 bg-muted flex items-center justify-center">
          <p className="text-muted-foreground text-sm">Kaardi kohatäide – Tallinn ja Harjumaa</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
