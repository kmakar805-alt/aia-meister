import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

const CTASection = ({
  title = "Vajad abi heki või võsaga?",
  subtitle = "Võta meiega ühendust ja saad kiire hinnangu oma tööle. Vastame samal päeval!",
}: CTASectionProps) => (
  <section className="bg-primary section-padding">
    <div className="container text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
        {title}
      </h2>
      <p className="mt-4 text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto">
        {subtitle}
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/kontaktid"
          className="inline-flex items-center px-7 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent-hover transition-colors shadow-md"
        >
          Küsi pakkumist
        </Link>
        <a
          href="tel:+3725551234"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Helista kohe
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
