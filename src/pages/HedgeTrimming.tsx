import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import ba2 from "@/assets/before-after-2.jpg";

const HedgeTrimming = () => (
  <Layout>
    <PageHero
      title="Heki lõikamine"
      subtitle="Professionaalne heki lõikus ja vormimine Tallinnas ning Harjumaal."
      breadcrumbs={[{ name: "Avaleht", href: "/" }, { name: "Teenused", href: "/teenused" }, { name: "Heki lõikamine" }]}
    />
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Korralik ja ühtlane hekk</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hoiame teie hekid korras ja ilusad. Olenemata sellest, kas tegemist on madala piirhekiga või kõrge tujahekkiga — meil on olemas õiged tööriistad ja kogemus.
            </p>
            <ul className="space-y-2">
              {["Vormi lõikus ja hooldus", "Kõrgete hekkide lõikus", "Regulaarne hooldus", "Okste koristus ja äravedu"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={ba2} alt="Heki lõikamine" loading="lazy" width={1280} height={720} className="w-full h-72 lg:h-80 object-cover" />
          </div>
        </div>
      </div>
    </section>
    <CTASection title="Vajad heki lõikust?" subtitle="Saada meile pildid oma hekist ja saad kiire hinnangu!" />
  </Layout>
);

export default HedgeTrimming;
