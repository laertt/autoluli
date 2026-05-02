import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CLASSIC_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1179576/2026-05-02/nyh67uiaafma/classic-car-parts.png";
const MODERN_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1179576/2026-05-02/nyh66iiaaflq/modern-car-parts.png";

export default function EraShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Nga Klasike deri tek Moderne
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Specialistë në pjesë për çdo epokë: nga viti 1980 deri në modelet më të reja 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative rounded-3xl overflow-hidden shadow-xl h-96 cursor-pointer">
            <img
              src={CLASSIC_IMG}
              alt="Pjesë klasike makinash"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-500/90 text-slate-900 text-xs font-bold mb-3">
                1980 – 2000
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Pjesë Klasike</h3>
              <p className="text-slate-200 mb-4 max-w-md">
                Karburatorë, motorë të vjetër, pasqyra origjinale, pjesë të vështira për t'u gjetur. 
                Kemi rezervuar thesarin për makinat tuaja të vjetra.
              </p>
              <Link to="/kerko">
                <Button variant="secondary" className="gap-2">
                  Shfleto Pjesët Klasike <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden shadow-xl h-96 cursor-pointer">
            <img
              src={MODERN_IMG}
              alt="Pjesë moderne makinash"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-block px-3 py-1 rounded-full bg-red-500/90 text-white text-xs font-bold mb-3">
                2000 – 2026
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Pjesë Moderne</h3>
              <p className="text-slate-200 mb-4 max-w-md">
                Sensorë, module elektronike, LED-e, module hibride dhe gjithçka që ju nevojitet 
                për makinat e reja të teknologjisë së fundit.
              </p>
              <Link to="/kerko">
                <Button variant="secondary" className="gap-2">
                  Shfleto Pjesët Moderne <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}