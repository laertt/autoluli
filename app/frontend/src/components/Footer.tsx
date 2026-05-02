import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, Clock, Wrench, Mail } from "lucide-react";
import { storeInfo } from "@/lib/storeInfo";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg">{storeInfo.name}</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Specialistët e pjesëve origjinale dhe rezervë për makina nga viti 1980 deri më 2026.
            Besim, cilësi dhe shërbim i shpejtë.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Lidhje të Shpejta</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-red-400 transition-colors">Kryefaqja</Link></li>
            <li><Link to="/kerko" className="hover:text-red-400 transition-colors">Kërko Pjesë</Link></li>
            <li><Link to="/rreth-nesh" className="hover:text-red-400 transition-colors">Rreth Nesh</Link></li>
            <li><Link to="/kontakt" className="hover:text-red-400 transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Kontakti</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-red-500" />
              <a href={`tel:${storeInfo.phoneClean}`} className="hover:text-red-400">{storeInfo.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Instagram className="w-4 h-4 mt-0.5 text-red-500" />
              <a href={storeInfo.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-red-400">@{storeInfo.instagram}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-red-500" />
              <a href={`mailto:${storeInfo.email}`} className="hover:text-red-400">{storeInfo.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-red-500" />
              <a href={storeInfo.googleMapsUrl} target="_blank" rel="noreferrer" className="hover:text-red-400">{storeInfo.address}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Orari</h3>
          <div className="flex items-start gap-2 text-sm">
            <Clock className="w-4 h-4 mt-0.5 text-red-500" />
            <span>{storeInfo.workingHours}</span>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            E Diel: Mbyllur
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {storeInfo.name}. Të gjitha të drejtat e rezervuara.
      </div>
    </footer>
  );
}