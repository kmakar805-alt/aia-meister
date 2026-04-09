import { CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import ba1 from "@/assets/before-after-1.jpg";

const FruitTreePruning = () => (
  <Layout>
    <PageHero
      title="Viljapuude lõikamine"
      subtitle="Professionaalne viljapuude lõikus parema saagi ja tervema puu jaoks."
      breadcrumbs={[{ name: "Avaleht", href: "/" }, { name: "Teenused", href: "/teenused" }, { name: "Viljapuude lõikamine" }]}
    />
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Terved puud, parem saak</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Õige lõikus tagab viljapuudele parema vormi, rohkem valgust ja suurema saagi. Teostame nii kevad- kui sügislõikust.
            </p>
            <ul className="space-y-2">
              {["Õunapuude lõikus", "Pirnipuude lõikus", "Ploomipuude lõikus", "Noorte puude kujunduslõikus", "Vanade puude hoolduslõikus"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={ba1} alt="Viljapuude lõikamine" loading="lazy" width={1280} height={720} className="w-full h-72 lg:h-80 object-cover" />
          </div>
        </div>
      </div>
    </section>
    <CTASection title="Vajad viljapuude lõikust?" subtitle="Saada meile pildid ja saad kiire hinnangu." />
  </Layout>
);

export default FruitTreePruning;
