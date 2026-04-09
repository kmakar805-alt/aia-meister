import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { name: string; href?: string }[];
}

const PageHero = ({ title, subtitle, breadcrumbs }: PageHeroProps) => (
  <section className="bg-primary py-12 md:py-16">
    <div className="container">
      <nav className="flex items-center gap-1.5 text-sm text-primary-foreground/60 mb-4">
        {breadcrumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
            {crumb.href ? (
              <Link to={crumb.href} className="hover:text-primary-foreground/90 transition-colors">
                {crumb.name}
              </Link>
            ) : (
              <span className="text-primary-foreground/90">{crumb.name}</span>
            )}
          </span>
        ))}
      </nav>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-primary-foreground/75 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHero;
