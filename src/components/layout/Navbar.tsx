import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Võsalõikus", href: "/vosaloikus" },
  { name: "Heki lõikamine", href: "/heki-loikus" },
  { name: "Viljapuude lõikamine", href: "/viljapuude-loikus" },
  { name: "Krundi puhastus", href: "/krundi-puhastus" },
];

const navLinks = [
  { name: "Avaleht", href: "/" },
  { name: "Teenused", href: "/teenused", dropdown: true },
  { name: "Hinnad", href: "/hinnad" },
  { name: "Meie kliendid", href: "/meie-kliendid" },
  { name: "Blogi", href: "/blogi" },
  { name: "Kontaktid", href: "/kontaktid" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-card border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">A</span>
          </div>
          <span className="font-bold text-lg text-foreground tracking-tight">AIAMEISTER24</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname.startsWith("/teenused") || services.some(s => isActive(s.href))
                      ? "text-primary bg-primary-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl border border-border shadow-card-hover py-2 z-50">
                    <Link
                      to="/teenused"
                      className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      Kõik teenused
                    </Link>
                    <div className="h-px bg-border mx-3 my-1" />
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          isActive(s.href) ? "text-primary font-medium bg-primary-light" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href) ? "text-primary bg-primary-light" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/kontaktid"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent-hover transition-colors shadow-sm"
          >
            Küsi pakkumist
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card pb-4">
          <div className="container flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href) ? "text-primary bg-primary-light" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 flex flex-col gap-0.5">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                          isActive(s.href) ? "text-primary bg-primary-light" : "text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/kontaktid"
              className="mt-2 mx-4 text-center px-5 py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm"
            >
              Küsi pakkumist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
