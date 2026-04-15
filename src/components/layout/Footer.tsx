import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">H</span>
              </div>
              <span className="font-bold text-lg tracking-tight">HALDUSPROFF</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Professionaalne kinnisvara haldus, aiahooldus ja koristusteenused Tallinnas ning Harjumaal.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-70">Lehekülg</h4>
            <ul className="space-y-2.5">
              {[
                { name: "Avaleht", href: "/" },
                { name: "Teenused", href: "/teenused" },
                { name: "Hinnad", href: "/hinnad" },
                { name: "Galerii", href: "/galerii" },
                { name: "Kontakt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-70">Teenused</h4>
            <ul className="space-y-2.5">
              {["Muru niitmine", "Hekkide lõikus", "Koristusteenused", "Lumelükkamine", "Survepesu", "Hooldustööd"].map((s) => (
                <li key={s}>
                  <Link to="/teenused" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-70">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm opacity-80">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+3725551234" className="hover:opacity-100 transition-opacity">+372 555 1234</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm opacity-80">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@haldusproff.ee" className="hover:opacity-100 transition-opacity">info@haldusproff.ee</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm opacity-80">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Tallinn ja Harjumaa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-60">
          <p>© {new Date().getFullYear()} Haldusproff. Kõik õigused kaitstud.</p>
          <p>Haldus- ja koristusteenused</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
