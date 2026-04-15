import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Leaf, Snowflake, SprayCan, Wrench } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

const categoryFilters = [
  { key: "all", label: "Kõik" },
  { key: "haljastus", label: "Haljastus" },
  { key: "talveteenused", label: "Talv" },
  { key: "koristus", label: "Koristus" },
  { key: "lisa", label: "Lisateenused" },
];

const categories = [
  {
    key: "haljastus",
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
    key: "talveteenused",
    title: "Talveteenused",
    icon: Snowflake,
    services: [
      { name: "Lumelükkamine ja libedusetõrje", desc: "Lükkame lund ja puistame libedusetõrjevahendit — teed ja parklad on turvalised." },
      { name: "Katustelt lume eemaldus", desc: "Eemaldame katustelt ohtliku lume ja jääpurikad ohutuse tagamiseks." },
    ],
  },
  {
    key: "koristus",
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
    key: "lisa",
    title: "Lisateenused",
    icon: Wrench,
    services: [
      { name: "Väiksemad remondi- ja hooldustööd", desc: "Pisiremondi ja hooldus — aitame kiirelt ja mugavalt." },
    ],
  },
];

const Services = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && categoryFilters.some((f) => f.key === hash)) {
      setActiveFilter(hash);
    } else {
      setActiveFilter("all");
    }
  }, [location.hash]);

  const filtered = activeFilter === "all" ? categories : categories.filter((c) => c.key === activeFilter);

  return (
    <Layout>
      <PageHero
        title="Meie teenused"
        subtitle="Pakume laia valiku kinnisvara haldus-, hooldus- ja koristusteenuseid Tallinnas ning Harjumaal."
        breadcrumbs={[{ name: "Avaleht", href: "/" }, { name: "Teenused" }]}
      />

      <section className="section-padding">
        <div className="container">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categoryFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeFilter === f.key
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground border border-border hover:text-foreground hover:border-primary/30"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Service categories */}
          <div className="space-y-12">
            {filtered.map((cat) => (
              <div key={cat.key} className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{cat.title}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.services.map((s) => (
                    <div
                      key={s.name}
                      className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-2">{s.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;
