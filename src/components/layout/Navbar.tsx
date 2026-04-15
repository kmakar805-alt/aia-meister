import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const serviceCategories = [
  { name: "Haljastus ja õuetööd", href: "/teenused#haljastus" },
  { name: "Talveteenused", href: "/teenused#talveteenused" },
  { name: "Koristusteenused", href: "/teenused#koristus" },
  { name: "Lisateenused", href: "/teenused#lisa" },
];

const navLinks = [
  { name: "Avaleht", href: "/" },
  { name: "Teenused", href: "/teenused", hasDropdown: true },
  { name: "Hinnakiri", href: "/hinnad" },
  { name: "Galerii", href: "/galerii" },
  { name: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href.split("#")[0]);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <nav className="bg-card border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">H</span>
          </div>
          <span className="font-bold text-lg text-foreground tracking-tight">HALDUSPROFF</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.href}
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary bg-primary-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </Link>

                {/* Dropdown */}
                <div
                  className={`absolute top-full left-0 pt-2 z-50 transition-all duration-200 ${
                    dropdownOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                >
                  <div className="w-56 bg-card rounded-xl border border-border shadow-lg p-1.5">
                    {serviceCategories.map((cat) => (
                      <Link
                        key={cat.name}
                        to={cat.href}
                        className="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary-light transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-primary bg-primary-light"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/kontakt"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent-hover transition-colors shadow-sm"
          >
            Küsi pakkumist
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card pb-4 animate-fade-in">
          <div className="container flex flex-col gap-1 pt-3">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-primary bg-primary-light"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileServicesOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 flex flex-col gap-0.5 py-1">
                      {serviceCategories.map((cat) => (
                        <Link
                          key={cat.name}
                          to={cat.href}
                          className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-primary-light transition-colors"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary bg-primary-light"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              to="/kontakt"
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
