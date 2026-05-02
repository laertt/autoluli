import { Search, Clock, Phone, Award } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Kërkim i Shpejtë",
    desc: "Gjej pjesën e duhur sipas markës, modelit ose vitit brenda sekondave.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Clock,
    title: "Përgjigje e Menjëhershme",
    desc: "Ne përgjigjemi shpejt në Instagram dhe telefon për çdo kërkesë.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Award,
    title: "Pjesë Origjinale",
    desc: "Pjesë origjinale dhe rezervë të cilësisë së lartë, me garanci.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "Kontakt Direkt",
    desc: "Na shkruaj në Instagram ose na thirr drejtpërdrejt për çmim.",
    color: "from-emerald-500 to-emerald-600",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Pse të zgjidhni <span className="text-red-600">ne</span>?
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Ofrojmë shërbim profesional dhe një gamë të gjerë pjesësh për të gjitha modelet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}