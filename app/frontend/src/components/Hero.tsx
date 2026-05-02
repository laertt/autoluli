import { Link } from "react-router-dom";
import { Search, Wrench, Calendar, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1179576/2026-05-02/nyh7f7qaafnq/hero-vintage-modern-cars.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Pjesë makinash klasike dhe moderne"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-medium mb-6 backdrop-blur-sm">
            <Calendar className="w-3.5 h-3.5" />
            Pjesë për makina 1980 – 2026
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Gjej <span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">pjesën e duhur</span>
            <br />për makinën tënde
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
            Nga Mercedes W123 e vitit 1980 deri tek modelet më të reja 2026 — dyqani ynë
            ka mijëra pjesë këmbimi origjinale dhe rezervë. Kërko pjesën, shiko nëse e kemi
            në stok dhe na kontakto menjëherë.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/kerko">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2 text-base h-12 px-6 w-full sm:w-auto">
                <Search className="w-5 h-5" />
                Kërko Pjesë Tani
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button size="lg" variant="outline" className="border-white/30 !bg-transparent !hover:bg-white/10 text-white gap-2 text-base h-12 px-6 w-full sm:w-auto">
                Na Kontakto
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            <div className="flex items-start gap-2">
              <Wrench className="w-5 h-5 text-red-500 mt-1" />
              <div>
                <div className="text-white font-bold text-xl">10,000+</div>
                <div className="text-slate-400 text-xs">Pjesë në stok</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Calendar className="w-5 h-5 text-amber-500 mt-1" />
              <div>
                <div className="text-white font-bold text-xl">25</div>
                <div className="text-slate-400 text-xs">Vite në treg</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-5 h-5 text-green-500 mt-1" />
              <div>
                <div className="text-white font-bold text-xl">100%</div>
                <div className="text-slate-400 text-xs">Besim & cilësi</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
}