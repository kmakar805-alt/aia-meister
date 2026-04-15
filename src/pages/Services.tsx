import { Leaf, Snowflake, SprayCan, Wrench, Scissors, TreePine, Wind, Home, Building, Hammer } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";

const categories = [
  {
    title: "Haljastus ja õuetööd",
    icon: Leaf,
    services: [
      { name: "Muru niitmine ja trimmerdamine", desc: "Hoiame muru korras kogu hooaja vältel — regulaarne niitmine ja trimmerdustöö." },
      { name: "Hekkide lõikus", desc: "Anname hekile korraliku vormi ja hoiame seda ilusat aastaringselt." },
      { name: "Lehtede riisumine ja hoovi korrastus", desc: "Koristame lehed, oksad ja prahi, et hoov oleks puhas ja korras." },
      { name: "Hooajaline aiahooldus", desc: "Kevadine ja sügisene aiahooldus — puhastus, väetamine ja ettevalmistus." },
    ],
  },
  {
    title: "Talveteenused",
    icon: Snowflake,
    services: [
      { name: "Lumelükkamine ja libedusetõrje", desc: "Lükkame lund ja puistame libedusetõrjevahendit — teed ja parklad on turvalised." },
      { name: "Katustelt lume eemaldus", desc: "Eemaldame katustelt ohtliku lume ja jääpurikad ohutuse tagamiseks." },
    ],
  },
  {
    title: "Koristusteenused",
    icon: SprayCan,
    services: [
      { name: "Kodu- ja kontorikoristus", desc: "Regulaarne ja ühekordne koristus kodudele ja kontoritele." },
      { name: "Trepikodade koristus", desc: "Professionaalne trepikodade ja ühiskasutatavate pindade koristus." },
      { name: "Ehitusjärgne koristus", desc: "Põhjalik puhastus pärast ehitus- või remonditöid." },
      { name: "Survepesu", desc: "Terrasside, kivipindade ja fassaadide survepesu — nagu uus!" },
    ],
  },
  {
    title: "Lisateenused",
    icon: Wrench,
    services: [
      { name: "Väiksemad remondi- ja hooldustööd", desc: "Pisiremondi ja hooldus — aitame kiirelt ja mugavalt." },
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHero
        title="Meie teenused"
        subtitle="Pakume laia valiku kinnisvara haldus-, hooldus- ja koristusteenuseid Tallinnas ning Harjumaal."
        breadcrumbs={[{ name: "Avaleht", href: "/" }, { name: "Teenused" }]}
      />

      {categories.map((cat, ci) => (
        <section key={cat.title} className={`section-padding ${ci % 2 === 1 ? "bg-section-alt" : ""}`}>
          <div className="container">
            <SectionHeading title={cat.title} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {cat.services.map((s) => (
                <div
                  key={s.name}
                  className="bg-card rounded-2xl p-6 border border-border shadow-card"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </Layout>
  );
};

export default Services;
