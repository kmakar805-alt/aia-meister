import { CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import ba3 from "@/assets/before-after-3.jpg";

const LandClearing = () => (
  <Layout>
    <PageHero
      title="Krundi puhastus"
      subtitle="Puhastame kinnistu võsast, umbrohust ja liigsest taimestikust."
      breadcrumbs={[{ name: "Avaleht", href: "/" }, { name: "Teenused", href: "/teenused" }, { name: "Krundi puhastus" }]}
    />
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Puhas ja korras krunt</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Puhastame kinnistu võsast ja liigsest taimestikust. Ideaalne enne ehitust, müüki või lihtsalt korrastamiseks.
            </p>
            <ul className="space-y-2">
              {["Võsa eemaldamine", "Umbrohu eemaldamine", "Prügi koristamine", "Maapinna tasandamine", "Jäätmete äravedu"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={ba3} alt="Krundi puhastus" loading="lazy" width={1280} height={720} className="w-full h-72 lg:h-80 object-cover" />
          </div>
        </div>
      </div>
    </section>
    <CTASection title="Vajad krundi puhastust?" subtitle="Kirjelda oma objekti ja saad kiire hinnangu." />
  </Layout>
);

export default LandClearing;
