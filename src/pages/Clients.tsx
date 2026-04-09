import { Star, Building2, Home, Briefcase } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";

const testimonials = [
  { name: "Maris K.", location: "Tallinn, Nõmme", text: "Väga professionaalne teenus! Hekk sai ilusaks ja kogu tööala oli pärast puhas. Soovitan soojalt!", rating: 5 },
  { name: "Andres T.", location: "Viimsi", text: "Kiire reageerimine ja aus hind. Võsa sai eemaldatud ühe päevaga. Kindlasti kasutan uuesti.", rating: 5 },
  { name: "Kati L.", location: "Harku vald", text: "Tellisime krundi puhastuse ja viljapuude lõikuse. Meeskond oli kohal õigel ajal ja tulemus oli suurepärane.", rating: 5 },
  { name: "Peeter S.", location: "Tallinn, Mustamäe", text: "Korterühistu jaoks tellisime heki lõikuse. Tulemus on palju parem kui ootasime. Väga rahul!", rating: 5 },
  { name: "Liina R.", location: "Rae vald", text: "Professionaalne ja usaldusväärne. Soovitan kõigile, kes vajavad aiahooldusteenust.", rating: 5 },
  { name: "Mart V.", location: "Saue", text: "Krunt sai puhtaks ja korras. Meeskond oli sõbralik ja töökas. Suur aitäh!", rating: 5 },
];

const projectTypes = [
  { icon: Home, name: "Eramajad", desc: "Aiahooldus ja haljastustööd eramajadele üle Tallinna ja Harjumaa." },
  { icon: Building2, name: "Korteriühistud", desc: "Ühistualade hooldus, heki lõikus ja kruntide korrastamine." },
  { icon: Briefcase, name: "Ärikinnisvara", desc: "Professionaalne haljastushooldus äri- ja büroohoonetele." },
];

const Clients = () => {
  return (
    <Layout>
      <PageHero
        title="Meie kliendid ja tööd"
        subtitle="Vaata meie tehtud töid ja loe, mida kliendid meie kohta ütlevad."
        breadcrumbs={[{ name: "Avaleht", href: "/" }, { name: "Meie kliendid" }]}
      />

      {/* Project types */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Kellele töötame?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projectTypes.map((p) => (
              <div key={p.name} className="bg-card rounded-2xl p-7 border border-border shadow-card text-center">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-section-alt">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Tehtud tööd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[ba1, ba2, ba3, ba3, ba1, ba2].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-card group">
                <img src={img} alt={`Projekt ${i + 1}`} loading="lazy" width={1280} height={720} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Klientide tagasiside</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-6 border border-border shadow-card">
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <p className="font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Clients;
