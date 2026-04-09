import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";

const posts = [
  {
    title: "Millal hekke lõigata?",
    excerpt: "Hekkide lõikamise aeg sõltub liigist. Üldiselt on parim aeg juuni ja august, kuid mõned hekid vajavad lõikust ka kevadel.",
    date: "15. märts 2026",
    slug: "millal-hekke-loigata",
  },
  {
    title: "Kuidas valmistuda võsalõikuseks?",
    excerpt: "Enne võsalõikust tasub kontrollida, et alal ei oleks takistusi. Siin on mõned soovitused enne meie tulekut.",
    date: "8. märts 2026",
    slug: "kuidas-valmistuda-vosaloikuseks",
  },
  {
    title: "Kas oksad viiakse ära?",
    excerpt: "Jah! Pakume haljastusjäätmete äraveo teenust. Siin selgitame, kuidas see toimib ja mida see maksab.",
    date: "1. märts 2026",
    slug: "kas-oksad-viiakse-ara",
  },
  {
    title: "Mida mõjutab töö hind?",
    excerpt: "Hind sõltub mitmest tegurist: ala suurus, võsa tihedus, ligipääs ja jäätmete äravedu. Loe lähemalt.",
    date: "22. veebruar 2026",
    slug: "mida-mojutab-too-hind",
  },
];

const Blog = () => {
  return (
    <Layout>
      <PageHero
        title="Blogi"
        subtitle="Nõuanded, info ja vastused levinud küsimustele aiahoolduse kohta."
        breadcrumbs={[{ name: "Avaleht", href: "/" }, { name: "Blogi" }]}
      />
      <section className="section-padding">
        <div className="container container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-card rounded-2xl p-7 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 group">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
                <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Loe edasi <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
