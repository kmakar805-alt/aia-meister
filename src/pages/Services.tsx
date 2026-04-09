import { Link } from "react-router-dom";
import { TreePine, Scissors, Leaf, Trash2, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

const services = [
  { icon: TreePine, name: "Võsalõikus", desc: "Eemaldame võsa nii erakruntidelt, teeservadelt kui ka kasutamata maatükkidelt. Kasutame professionaalseid tööriistu ja tagame korraliku tulemuse.", href: "/vosaloikus" },
  { icon: Scissors, name: "Heki lõikamine", desc: "Anname hekile korraliku ja ühtlase vormi. Hooldame nii uusi kui ka vanemaid hekke, et need näeksid välja hoolitsetud ja korras.", href: "/heki-loikus" },
  { icon: Leaf, name: "Põõsaste hooldus", desc: "Kujundame ja hooldame ilupõõsaid, tagades neile hea vormi ja tervisliku kasvu. Sobib nii aedadele kui avalikele aladele.", href: "/teenused" },
  { icon: TreePine, name: "Viljapuude lõikamine", desc: "Professionaalne viljapuude lõikus parema saagi ja tervema puu jaoks. Teostame nii kevad- kui sügislõikust.", href: "/viljapuude-loikus" },
  { icon: Trash2, name: "Krundi puhastus", desc: "Puhastame kinnistu võsast, umbrohust ja liigsest taimestikust. Ideaalne enne ehitust, müüki või lihtsalt korrastamiseks.", href: "/krundi-puhastus" },
  { icon: Trash2, name: "Okste äravedu", desc: "Viime kõik haljastusjäätmed, oksad ja lehed ära. Tööala jääb alati puhas ja korras.", href: "/teenused" },
];

const Services = () => {
  return (
    <Layout>
      <PageHero
        title="Meie teenused"
        subtitle="Pakume professionaalseid aiahooldus- ja haljastusteenuseid Tallinnas ning Harjumaal."
        breadcrumbs={[{ name: "Avaleht", href: "/" }, { name: "Teenused" }]}
      />
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.name}
                to={s.href}
                className="group bg-card rounded-2xl p-7 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Vaata lähemalt <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
};

export default Services;
