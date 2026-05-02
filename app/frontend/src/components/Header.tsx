import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Wrench, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { storeInfo } from "@/lib/storeInfo";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Kryefaqja" },
  { to: "/kerko", label: "Kërko Pjesë" },
  { to: "/rreth-nesh", label: "Rreth Nesh" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-lg tracking-tight">{storeInfo.name}</span>
              <span className="text-slate-400 text-[10px] hidden sm:block">Pjesë Origjinale & Rezervë</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === link.to
                    ? "text-white bg-slate-800"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${storeInfo.phoneClean}`}>
              <Button className="bg-red-600 hover:bg-red-700 text-white gap-2">
                <Phone className="w-4 h-4" />
                {storeInfo.phone}
              </Button>
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-1 border-t border-slate-800 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-2 rounded-md text-sm font-medium",
                  location.pathname === link.to
                    ? "text-white bg-slate-800"
                    : "text-slate-300 hover:bg-slate-800/60"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${storeInfo.phoneClean}`}
              className="flex items-center gap-2 px-4 py-2 text-red-400 font-medium"
            >
              <Phone className="w-4 h-4" />
              {storeInfo.phone}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}