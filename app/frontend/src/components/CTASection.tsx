import { Instagram, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { storeInfo } from "@/lib/storeInfo";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-red-500 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-500 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Nuk e gjetët pjesën që kërkoni?
        </h2>
        <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
          Na kontaktoni direkt — kemi gjithmonë stok shtesë dhe mund ta porosisim për ju.
          Përgjigja brenda pak minutash!
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={storeInfo.instagramUrl} target="_blank" rel="noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 via-red-500 to-amber-500 hover:opacity-90 text-white gap-2 h-14 px-8 text-base w-full sm:w-auto">
              <Instagram className="w-5 h-5" />
              Na Shkruaj në Instagram
            </Button>
          </a>
          <a href={`tel:${storeInfo.phoneClean}`}>
            <Button size="lg" variant="outline" className="border-white/30 !bg-transparent !hover:bg-white/10 text-white gap-2 h-14 px-8 text-base w-full sm:w-auto">
              <Phone className="w-5 h-5" />
              {storeInfo.phone}
            </Button>
          </a>
          <a href={storeInfo.whatsappUrl} target="_blank" rel="noreferrer">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2 h-14 px-8 text-base w-full sm:w-auto">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}