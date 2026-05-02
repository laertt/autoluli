import { useState } from "react";
import { Instagram, Phone, MapPin, Clock, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { storeInfo } from "@/lib/storeInfo";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    part: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build Instagram / WhatsApp-friendly message
    const text = `Përshëndetje! Jam ${form.name}.\nPjesa që kërkoj: ${form.part}\n${form.message}\nTel: ${form.phone}`;
    const encoded = encodeURIComponent(text);
    // Open WhatsApp with prefilled message
    window.open(`${storeInfo.whatsappUrl}?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Na Kontakto</h1>
            <p className="mt-4 text-slate-300 text-lg">
              Ju përgjigjemi brenda pak minutash. Zgjidhni mënyrën më të preferuar.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-5">
              <a
                href={storeInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="block group"
              >
                <div className="bg-gradient-to-br from-pink-500 via-red-500 to-amber-500 p-6 rounded-2xl text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <Instagram className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm opacity-90">Na ndiqni dhe na shkruani</div>
                      <div className="text-xl font-bold">@{storeInfo.instagram}</div>
                    </div>
                  </div>
                </div>
              </a>

              <a href={`tel:${storeInfo.phoneClean}`} className="block group">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-red-600 flex items-center justify-center shadow-md">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-500">Na telefono direkt</div>
                      <div className="text-xl font-bold text-slate-900">{storeInfo.phone}</div>
                    </div>
                  </div>
                </div>
              </a>

              <a href={storeInfo.whatsappUrl} target="_blank" rel="noreferrer" className="block group">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-green-600 flex items-center justify-center shadow-md">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-500">WhatsApp</div>
                      <div className="text-xl font-bold text-slate-900">Shkruaj mesazh tani</div>
                    </div>
                  </div>
                </div>
              </a>

              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-500">Vendndodhja</div>
                      <a href={storeInfo.googleMapsUrl} target="_blank" rel="noreferrer" className="font-semibold text-slate-900 hover:text-red-600">
                        {storeInfo.address} — Shiko në hartë ↗
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-500">Orari</div>
                      <div className="font-semibold text-slate-900">{storeInfo.workingHours}</div>
                      <div className="text-xs text-slate-500">E Diel: Mbyllur</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-500">Email</div>
                      <a href={`mailto:${storeInfo.email}`} className="font-semibold text-slate-900 hover:text-red-600">
                        {storeInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Dërgo një mesazh</h2>
              <p className="text-slate-600 mb-6 text-sm">
                Plotësoni formën dhe do t'ju kontaktojmë menjëherë.
              </p>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Faleminderit!</h3>
                  <p className="text-slate-600 mb-6">
                    Mesazhi u përgatit për WhatsApp. Nëse nuk u hap automatikisht,
                    na kontaktoni në Instagram ose telefon.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Dërgo një tjetër
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1.5">Emri juaj *</label>
                    <Input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Shkruani emrin tuaj"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1.5">Numri i telefonit *</label>
                    <Input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+355 ..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1.5">Pjesa që kërkoni *</label>
                    <Input
                      required
                      value={form.part}
                      onChange={(e) => setForm({ ...form, part: e.target.value })}
                      placeholder="P.sh. pompë uji Mercedes W123"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1.5">Detaje shtesë</label>
                    <Textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Viti i makinës, motori, informacione shtesë..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-red-600 hover:bg-red-700 text-white gap-2">
                    <Send className="w-4 h-4" />
                    Dërgo me WhatsApp
                  </Button>
                  <p className="text-xs text-slate-500 text-center">
                    Mesazhi juaj do të dërgohet direkt në WhatsApp-in tonë.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}