import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InlineContactForm from "@/components/shared/InlineContactForm";
import PriceCalculator from "@/components/shared/PriceCalculator";

const factors = [
  { title: "Ala suurus", desc: "Mida suurem objekt, seda rohkem aega ja tööd kulub." },
  { title: "Töö keerukus", desc: "Raskesti ligipääsetavad alad või keerulised pinnad mõjutavad hinda." },
  { title: "Regulaarsus", desc: "Püsiklientidele pakume soodsamaid kuutasusid." },
  { title: "Jäätmete käitlus", desc: "Prahi, okste ja lehtede äravedu lisandub hinnale." },
  { title: "Hooaeg", desc: "Talvised ja kiirtellimused võivad mõjutada hinda." },
  { title: "Lisateenused", desc: "Mitme teenuse kombineerimine võib anda soodsama paketi." },
];

const examples = [
  { title: "Muru niitmine", range: "alates 40 €", note: "Väike eramaja krunt" },
  { title: "Hekkide lõikus", range: "alates 3 €/m", note: "Sõltub kõrgusest ja tihedusest" },
  { title: "Trepikoja koristus", range: "alates 60 €/kuu", note: "Regulaarne kuuhooldus" },
  { title: "Lumelükkamine", range: "alates 50 €", note: "Ühe korra hind, sõltub alast" },
  { title: "Survepesu", range: "alates 4 €/m²", note: "Terrassid ja kivipinnad" },
  { title: "Kodu koristus", range: "alates 15 €/h", note: "Tunnitasu, min 2 tundi" },
];

const Pricing = () => {
  return (
    <Layout>
      <PageHero
        title="Hinnad"
        subtitle="Iga objekt on unikaalne — hindame igat tööd individuaalselt ja ausalt."
        breadcrumbs={[{ name: "Avaleht", href: "/" }, { name: "Hinnad" }]}
      />

      <section className="pt-10 md:pt-12 pb-4 md:pb-6">
        <div className="container container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">Orienteeruvad näidishinnad</h2>
          <p className="text-center text-muted-foreground mb-6">Need hinnad on näitlikud ja võivad varieeruda. Allpool saad arvutada täpsema hinna.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

      <section className="py-6 md:py-8 bg-section-alt">
        <div className="container container-narrow">
          <PriceCalculator />
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">Hinda mõjutavad tegurid</h2>
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

      <section className="py-8 md:py-12 bg-section-alt">
        <div id="paringu-vorm" className="container container-narrow scroll-mt-24">
          <div className="text-center mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">Küsi hinnapakkumist</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Vajad usaldusväärset halduspartnerit?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Saada päring vormi kaudu või kirjuta meile aadressile{" "}
              <span className="font-semibold text-foreground">info@haldusproff.ee</span>
            </p>
          </div>
          <InlineContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
