import { Phone, MessageCircle, Globe } from "lucide-react";
import { useState } from "react";

const TopBar = () => {
  const [lang, setLang] = useState<"EST" | "RU">("EST");

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container flex items-center justify-between h-10 text-sm">
        <div className="flex items-center gap-5">
          <a href="tel:+3725551234" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone className="w-3.5 h-3.5" />
            <span>+372 555 1234</span>
          </a>
          <a
            href="https://wa.me/3725551234"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5" />
          <button
            onClick={() => setLang("EST")}
            className={`px-1 transition-opacity ${lang === "EST" ? "font-semibold" : "opacity-70 hover:opacity-100"}`}
          >
            EST
          </button>
          <span className="opacity-40">|</span>
          <button
            onClick={() => setLang("RU")}
            className={`px-1 transition-opacity ${lang === "RU" ? "font-semibold" : "opacity-70 hover:opacity-100"}`}
          >
            RU
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
