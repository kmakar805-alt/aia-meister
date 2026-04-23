import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InlineContactForm from "@/components/shared/InlineContactForm";

const Contact = () => {
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
              <h2 className="text-xl font-bold text-foreground mb-4">Küsi pakkumist</h2>
              <InlineContactForm />
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;
