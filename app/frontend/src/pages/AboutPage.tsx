import { Wrench, Calendar, ShieldCheck, Users, Truck, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const WORKSHOP_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1179576/2026-05-02/nyh652aaafna/mechanic-workshop.png";

const values = [
  { icon: ShieldCheck, title: "Besueshmëri", desc: "Pjesë të kontrolluara dhe të testuara para se t'ju mbërrijnë." },
  { icon: Calendar, title: "46 vite mbulim", desc: "Nga viti 1980 deri më 2026 — pjesë për çdo epokë makinash." },
  { icon: Users, title: "Konsulencë Personale", desc: "Ju ndihmojmë të zgjidhni pjesën e duhur për makinën tuaj." },
  { icon: Truck, title: "Dërgim i Shpejtë", desc: "Dërgim në të gjithë Shqipërinë brenda 24-48 orëve." },
  { icon: Heart, title: "Pasion për Makina Klasike", desc: "Mbledhim pjesë të rralla për modelet vintage dhe koleksionistëve." },
  { icon: Wrench, title: "Eksperiencë", desc: "Mbi dekada eksperiencë në sektorin e pjesëve të këmbimit." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={WORKSHOP_IMG} alt="Punishte mekanike" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-900/80" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Rreth Nesh
            </h1>
            <p className="mt-6 text-lg text-slate-200 leading-relaxed">
              Jemi dyqani juaj i besuar i pjesëve të këmbimit në Shqipëri, i specializuar
              në makina nga viti 1980 deri më 2026. Kuptojmë pasionin për makinat e vjetra
              dhe kërkesat e teknologjisë së re.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Historia Jonë</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Nisëm si një dyqan i vogël pjesësh këmbimi me një dashuri të veçantë për makinat
              klasike — Mercedes W123, BMW E30, Fiat Uno, Yugo dhe shumë të tjera që kanë
              formuar historinë e automobilizmit shqiptar.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Me kalimin e viteve, kemi zgjeruar koleksionin tonë për të përfshirë edhe pjesë
              për modelet më moderne — nga sensorët elektronikë te modulet hibride të makinave
              të reja 2025 dhe 2026. Kjo na bën unikë në treg: <strong>ne kemi pjesë për
              çdo makinë që qarkullon në Shqipëri.</strong>
            </p>
            <p className="text-slate-700 leading-relaxed">
              Besojmë se një makinë e mbajtur mirë është një investim për brezat. Prandaj,
              çdo pjesë që shesim kalon nëpër kontroll cilësie, dhe çdo klient trajtohet me
              respektin dhe vëmendjen që meriton.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Vlerat Tona
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                Çfarë na bën zgjedhjen e parë për mijëra drejtues makinash.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center mb-4 shadow-md">
                    <v.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{v.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}