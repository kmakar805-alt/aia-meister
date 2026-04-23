import { Link } from "react-router-dom";
import { Clock, MapPin, Shield, Leaf, Snowflake, SprayCan, Wrench, ArrowRight, CheckCircle, Star, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import heroImg from "@/assets/hero-property.jpg";
import ba1 from "@/assets/ba-property-1.jpg";
import ba2 from "@/assets/ba-property-2.jpg";
import ba3 from "@/assets/ba-property-3.jpg";
import catHaljastus from "@/assets/services/muru-niitmine.jpg";
import catTalv from "@/assets/services/lumelukkamine.jpg";
import catKoristus from "@/assets/services/kodu-koristus.jpg";
import catLisa from "@/assets/services/remont.jpg";

const trustBadges = [
  { icon: Clock, text: "Vastus samal päeval" },
  { icon: MapPin, text: "Tallinn ja Harjumaa" },
  { icon: Shield, text: "Kvaliteetne ja usaldusväärne" },
];

const serviceCategories = [
  { icon: Leaf, name: "Haljastus ja õuetööd", desc: "Muru niitmine, hekkide lõikus, lehtede riisumine ja hooajaline aiahooldus.", href: "/teenused#haljastus", img: catHaljastus },
  { icon: Snowflake, name: "Talveteenused", desc: "Lumelükkamine, libedusetõrje ja katustelt lume eemaldamine.", href: "/teenused#talveteenused", img: catTalv },
  { icon: SprayCan, name: "Koristusteenused", desc: "Kodu-, kontori- ja trepikodade koristus ning ehitusjärgne puhastus.", href: "/teenused#koristus", img: catKoristus },
  { icon: Wrench, name: "Lisateenused", desc: "Survepesu, väiksemad remondi- ja hooldustööd.", href: "/teenused#lisa", img: catLisa },
];

const benefits = [
  { title: "Kiire reageerimine", desc: "Vastame päringutele samal päeval ja lepime aja kiirelt kokku." },
  { title: "Aus hinnastamine", desc: "Hindame igat tööd individuaalselt ja anname ausa hinna." },
  { title: "Kvaliteetne tulemus", desc: "Kasutame professionaalseid tööriistu ja tagame parima tulemuse." },
  { title: "Tööala koristus", desc: "Pärast tööd jätame ala puhtaks ja korras." },
  { title: "Lai teenuste valik", desc: "Haljastusest koristuseni — kõik ühest kohast." },
  { title: "Kogemusega meeskond", desc: "Meie meeskonnal on aastatepikkune kogemus haldustöödega." },
];

const steps = [
  { num: "01", title: "Kirjelda vajadust", desc: "Saada meile oma soov ja võimalusel fotod objektist." },
  { num: "02", title: "Saad hinnangu", desc: "Anname kiire ja ausa hinnapakkumise." },
  { num: "03", title: "Lepime aja kokku", desc: "Valime sulle sobiva aja ja kinnitame tellimuse." },
  { num: "04", title: "Teeme töö ära", desc: "Tuleme kohale, teeme töö ja koristame tööala puhtaks." },
];

const testimonials = [
  { name: "Maris K.", location: "Tallinn, Nõmme", text: "Väga professionaalne teenus! Hoov sai ilusaks ja kõik jäi puhtaks. Soovitan soojalt!" },
  { name: "Andres T.", location: "Viimsi", text: "Kiire reageerimine ja aus hind. Trepikoja koristus on alati korralik. Kasutan jätkuvalt." },
  { name: "Kati L.", location: "Harku vald", text: "Tellisime muru niitmise ja survepesu. Meeskond oli kohal õigel ajal ja tulemus suurepärane." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Kinnisvara haldus" width={1920} height={1080} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        </div>
        <div className="relative container py-20 md:py-28 lg:py-36">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground leading-tight text-balance">
              Usaldusväärne haldus- ja koristusteenus
            </h1>
            <p className="mt-5 text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
              Hooldame teie kinnisvara, hoiame hoovi korras ja tagame puhtuse — aasta ringi, professionaalselt.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent-hover transition-colors shadow-md text-base"
              >
                Küsi pakkumist
              </Link>
              <Link
                to="/teenused"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors text-base"
              >
                Vaata teenuseid
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-4 md:gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                  <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                    <badge.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading title="Meie teenused" subtitle="Pakume laia valiku haldus-, hooldus- ja koristusteenuseid nii eramajadele kui ärikinnisvarale." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceCategories.map((s) => (
              <Link
                key={s.name}
                to={s.href}
                className="group bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Vaata lähemalt <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-padding bg-section-alt">
        <div className="container">
          <SectionHeading title="Miks valida meid?" subtitle="Meie eesmärk on pakkuda parimat kogemust — algusest lõpuni." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading title="Kuidas see käib?" subtitle="Neli lihtsat sammu korraliku tulemuseni." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative text-center">
                <div className="text-5xl font-extrabold text-primary/10 mb-3">{step.num}</div>
                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 w-6">
                    <ArrowRight className="w-5 h-5 text-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section-padding bg-section-alt">
        <div className="container">
          <SectionHeading title="Enne ja pärast" subtitle="Vaata, millist vahet meie töö teeb." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[ba1, ba2, ba3].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-card">
                <img src={img} alt={`Enne ja pärast ${i + 1}`} loading="lazy" width={1280} height={720} className="w-full h-56 object-cover" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/galerii" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Vaata kõiki projekte <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading title="Mida ütlevad meie kliendid?" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-6 border border-border shadow-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
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

export default Index;
