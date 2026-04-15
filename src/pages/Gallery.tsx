import { Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import ba1 from "@/assets/ba-property-1.jpg";
import ba2 from "@/assets/ba-property-2.jpg";
import ba3 from "@/assets/ba-property-3.jpg";

const projects = [
  { img: ba1, title: "Hoovi korrastus", type: "Eramaja, Nõmme", desc: "Muru niitmine, hekkide lõikus ja lehtede koristus." },
  { img: ba2, title: "Trepikoja koristus", type: "Korteriühistu, Mustamäe", desc: "Regulaarne trepikoja ja ühispindade koristus." },
  { img: ba3, title: "Terrass survepesu", type: "Eramaja, Viimsi", desc: "Kiviterrass sai survepesuga puhtaks." },
  { img: ba1, title: "Hooajaline aiahooldus", type: "Eramaja, Pirita", desc: "Kevadine puhastus ja aia ettevalmistus." },
  { img: ba2, title: "Ehitusjärgne koristus", type: "Ärikinnisvara, Kesklinn", desc: "Põhjalik puhastus pärast remonditöid." },
  { img: ba3, title: "Lumelükkamine", type: "Korteriühistu, Lasnamäe", desc: "Regulaarne lumelükkamine ja libedusetõrje." },
];

const projectTypes = ["Eramajad", "Korteriühistud", "Ärikinnisvara"];

const testimonials = [
  { name: "Maris K.", location: "Nõmme", text: "Väga professionaalne teenus! Hoov on alati korras ja puhas." },
  { name: "Andres T.", location: "Viimsi", text: "Kiire reageerimine ja aus hind. Kasutan jätkuvalt." },
  { name: "Kati L.", location: "Harku vald", text: "Suurepärane kogemus — meeskond on alati kohal õigel ajal." },
  { name: "Jüri P.", location: "Mustamäe", text: "Trepikoja koristus on alati korralik. Oleme väga rahul." },
];

const Gallery = () => {
  return (
    <Layout>
      <PageHero
        title="Galerii"
        subtitle="Vaata meie tehtud töid ja veendu kvaliteedis."
        breadcrumbs={[{ name: "Avaleht", href: "/" }, { name: "Galerii" }]}
      />

      {/* Project types */}
      <section className="py-10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {projectTypes.map((t) => (
              <span key={t} className="px-5 py-2 rounded-full bg-primary-light text-primary text-sm font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden border border-border shadow-card">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-48 object-cover" />
                <div className="p-5">
                  <span className="text-xs text-accent font-medium">{p.type}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-section-alt">
        <div className="container">
          <SectionHeading title="Klientide tagasiside" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-6 border border-border shadow-card">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">"{t.text}"</p>
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

export default Gallery;
