import { useMemo, useState } from "react";
import { Search, CheckCircle2, XCircle, Filter, Instagram, Phone, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { parts, makes, categories, CarPart } from "@/data/parts";
import { storeInfo } from "@/lib/storeInfo";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [make, setMake] = useState<string>("all");
  const [category, setCategory] = useState<string>("all");
  const [yearFrom, setYearFrom] = useState<string>("");
  const [yearTo, setYearTo] = useState<string>("");
  const [stockOnly, setStockOnly] = useState(false);

  const filtered = useMemo(() => {
    return parts.filter((p) => {
      const q = query.trim().toLowerCase();
      if (q) {
        const haystack = `${p.name} ${p.make} ${p.model} ${p.partNumber} ${p.category}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (make !== "all" && p.make !== make) return false;
      if (category !== "all" && p.category !== category) return false;

      const yf = yearFrom ? parseInt(yearFrom, 10) : null;
      const yt = yearTo ? parseInt(yearTo, 10) : null;
      if (yf && p.yearTo < yf) return false;
      if (yt && p.yearFrom > yt) return false;

      if (stockOnly && !p.inStock) return false;
      return true;
    });
  }, [query, make, category, yearFrom, yearTo, stockOnly]);

  const clearFilters = () => {
    setQuery("");
    setMake("all");
    setCategory("all");
    setYearFrom("");
    setYearTo("");
    setStockOnly(false);
  };

  const hasActiveFilters = query || make !== "all" || category !== "all" || yearFrom || yearTo || stockOnly;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Kërko Pjesë Këmbimi</h1>
            <p className="mt-2 text-slate-300">
              Shkruaj emrin e pjesës, markën, modelin ose numrin për të gjetur çfarë kërkon.
            </p>

            {/* Search bar */}
            <div className="mt-6 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="P.sh. pompë uji, disk frenash, BMW E30..."
                className="pl-12 h-14 text-base bg-white text-slate-900 border-0 rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-24">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-bold text-slate-900 flex items-center gap-2">
                    <Filter className="w-4 h-4" /> Filtro
                  </h2>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1"
                    >
                      <X className="w-3 h-3" /> Pastro
                    </button>
                  )}
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-2">Marka</label>
                    <Select value={make} onValueChange={setMake}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Të gjitha markat</SelectItem>
                        {makes.map((m) => (
                          <SelectItem key={m} value={m}>{m}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-2">Kategoria</label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Të gjitha kategoritë</SelectItem>
                        {categories.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-2">Viti i makinës</label>
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        placeholder="Nga"
                        min={1980}
                        max={2026}
                        value={yearFrom}
                        onChange={(e) => setYearFrom(e.target.value)}
                      />
                      <Input
                        type="number"
                        placeholder="Deri"
                        min={1980}
                        max={2026}
                        value={yearTo}
                        onChange={(e) => setYearTo(e.target.value)}
                      />
                    </div>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={stockOnly}
                      onChange={(e) => setStockOnly(e.target.checked)}
                      className="w-4 h-4 accent-red-600"
                    />
                    <span className="text-sm text-slate-700">Vetëm në stok</span>
                  </label>
                </div>
              </div>
            </aside>

            {/* Results */}
            <section className="lg:col-span-3">
              <div className="flex items-center justify-between mb-5">
                <p className="text-sm text-slate-600">
                  U gjetën <span className="font-bold text-slate-900">{filtered.length}</span> pjesë
                </p>
              </div>

              {filtered.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filtered.map((p) => (
                    <PartCard key={p.id} part={p} />
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function PartCard({ part }: { part: CarPart }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all group">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <Badge variant="secondary" className="mb-2 text-xs">{part.category}</Badge>
          <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-red-600 transition-colors">
            {part.name}
          </h3>
        </div>
        {part.inStock ? (
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold whitespace-nowrap">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Në stok
          </div>
        ) : (
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold whitespace-nowrap">
            <XCircle className="w-3.5 h-3.5" />
            Jo në stok
          </div>
        )}
      </div>

      <div className="mt-4 space-y-1.5 text-sm text-slate-600">
        <div className="flex justify-between">
          <span>Marka:</span>
          <span className="font-medium text-slate-900">{part.make}</span>
        </div>
        <div className="flex justify-between">
          <span>Modeli:</span>
          <span className="font-medium text-slate-900">{part.model}</span>
        </div>
        <div className="flex justify-between">
          <span>Viti:</span>
          <span className="font-medium text-slate-900">{part.yearFrom} – {part.yearTo}</span>
        </div>
        <div className="flex justify-between">
          <span>Numri i pjesës:</span>
          <span className="font-mono text-xs text-slate-700">{part.partNumber}</span>
        </div>
        {part.inStock && (
          <div className="flex justify-between">
            <span>Sasia:</span>
            <span className="font-semibold text-green-700">{part.quantity} copë</span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
        <a
          href={storeInfo.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1"
        >
          <Button size="sm" variant="outline" className="w-full gap-1.5 !bg-transparent !hover:bg-pink-50 hover:border-pink-300 hover:text-pink-600">
            <Instagram className="w-3.5 h-3.5" />
            Instagram
          </Button>
        </a>
        <a href={`tel:${storeInfo.phoneClean}`} className="flex-1">
          <Button size="sm" className="w-full gap-1.5 bg-red-600 hover:bg-red-700 text-white">
            <Phone className="w-3.5 h-3.5" />
            Telefono
          </Button>
        </a>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
        <Search className="w-8 h-8 text-slate-400" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">Nuk u gjet asnjë pjesë</h3>
      <p className="text-slate-600 mb-6 max-w-md mx-auto">
        Provoni filtra të tjerë ose na kontaktoni direkt — mund ta kemi në magazinë ose ta porosisim për ju.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a href={storeInfo.instagramUrl} target="_blank" rel="noreferrer">
          <Button className="gap-2 bg-gradient-to-r from-pink-500 to-amber-500 hover:opacity-90 text-white">
            <Instagram className="w-4 h-4" />
            Shkruaj në Instagram
          </Button>
        </a>
        <a href={`tel:${storeInfo.phoneClean}`}>
          <Button variant="outline" className="gap-2">
            <Phone className="w-4 h-4" />
            {storeInfo.phone}
          </Button>
        </a>
      </div>
    </div>
  );
}