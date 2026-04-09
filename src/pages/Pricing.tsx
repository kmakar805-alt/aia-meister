import { Link } from "react-router-dom";
import { ArrowRight, Info } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

const factors = [
  { title: "Heki pikkus", desc: "Mida pikem hekk, seda rohkem tööd ja aega kulub." },
  { title: "Kõrgus", desc: "Kõrge hekk nõuab lisavarustust ja rohkem tööaega." },
  { title: "Võsa tihedus", desc: "Paks ja vana võsa on aeganõudvam kui hõre taimestik." },
  { title: "Ligipääs", desc: "Raskesti ligipääsetav ala võib mõjutada hinda." },
  { title: "Jäätmete äravedu", desc: "Okste ja haljastusjäätmete äravedu lisandub hinnale." },
  { title: "Ala suurus", desc: "Suuremate kruntide puhul pakume soodsamat hinda." },
];

const examples = [
  { title: "Heki lõikus", range: "alates 3 €/m", note: "Sõltub kõrgusest ja tihedusest" },
  { title: "Võsalõikus", range: "alates 80 €", note: "Väike ala, kerge võsa" },
  { title: "Krundi puhastus", range: "alates 150 €", note: "Keskmine krunt" },
  { title: "Okste äravedu", range: "alates 50 €", note: "Sõltub kogusest ja kaugusest" },
];

const Pricing = () => {
  return (
    <Layout>
      <PageHero
        title="Hinnad"
        subtitle="Iga objekt on unikaalne — hindame igat tööd individuaalselt ja ausalt."
        breadcrumbs={[{ name: "Avaleht", href: "/" }, { name: "Hinnad" }]}
      />

      {/* Notice */}
      <section className="py-10">
        <div className="container container-narrow">
          <div className="bg-primary-light rounded-2xl p-6 flex items-start gap-3">
            <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Individuaalne hindamine</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kuna iga objekt on erinev, ei paku me fikseeritud hinnakirja. Allpool olevad näidishinnad on orienteeruvad ja võivad sõltuda konkreetsetest tingimustest. Küsi alati personaalset pakkumist!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Factors */}
      <section className="section-padding bg-section-alt">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Hinda mõjutavad tegurid</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {factors.map((f) => (
              <div key={f.title} className="bg-card rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-foreground mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example prices */}
      <section className="section-padding">
        <div className="container container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">Orienteeruvad näidishinnad</h2>
          <p className="text-center text-muted-foreground mb-10">Need hinnad on näitlikud ja võivad varieeruda.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {examples.map((e) => (
              <div key={e.title} className="bg-card rounded-2xl p-6 border border-border shadow-card text-center">
                <h3 className="font-semibold text-foreground mb-1">{e.title}</h3>
                <div className="text-2xl font-bold text-accent my-2">{e.range}</div>
                <p className="text-xs text-muted-foreground">{e.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Soovid täpset hinnapakkumist?" subtitle="Saada meile oma objekti kirjeldus ja pildid — vastame samal päeval!" />
    </Layout>
  );
};

export default Pricing;
