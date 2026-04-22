import { createFileRoute } from "@tanstack/react-router";
import { Search, MapPin, ShieldCheck, ArrowUpRight, Coffee, BookOpen, Calendar, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { WorldMap } from "./index";

export const Route = createFileRoute("/mapa")({
  head: () => ({
    meta: [
      { title: "Mapa global — Café & Verso" },
      {
        name: "description",
        content: "Cafés, livrarias, eventos e comunidades culturais em um único mapa global multilíngue.",
      },
      { property: "og:title", content: "Mapa global — Café & Verso" },
      {
        property: "og:description",
        content: "Explore o ecossistema cultural Café & Verso em escala global.",
      },
    ],
  }),
  component: MapaPage,
});

const PINS = [
  { city: "São Paulo", country: "BR", x: 30, y: 68, kind: "Café" as const },
  { city: "Berlin", country: "DE", x: 53, y: 32, kind: "Livraria" as const },
  { city: "New York", country: "US", x: 25, y: 38, kind: "Evento" as const },
  { city: "Lisbon", country: "PT", x: 46, y: 40, kind: "Café" as const },
  { city: "Tokyo", country: "JP", x: 84, y: 42, kind: "Comunidade" as const },
  { city: "Buenos Aires", country: "AR", x: 31, y: 78, kind: "Livraria" as const },
  { city: "Paris", country: "FR", x: 49, y: 35, kind: "Café" as const },
];

const PLACES = [
  { name: "Café Aurora", city: "São Paulo · BR", plan: "Comunidade", verified: true, kind: "Café" },
  { name: "Buchhandlung Verso", city: "Berlin · DE", plan: "Embaixador", verified: true, kind: "Livraria" },
  { name: "The Reading Cup", city: "New York · US", plan: "Comunidade", verified: true, kind: "Café" },
  { name: "Livraria Atlântica", city: "Lisboa · PT", plan: "Embaixador", verified: true, kind: "Livraria" },
  { name: "Bunkitsu Annex", city: "Tokyo · JP", plan: "Essencial", verified: true, kind: "Espaço cultural" },
  { name: "Páginas & Espresso", city: "Buenos Aires · AR", plan: "Comunidade", verified: true, kind: "Café · Livraria" },
];

function MapaPage() {
  return (
    <>
      <PageHero
        eyebrow="Mapa global"
        title={<>Cafés, livrarias e cultura, <span className="italic text-accent">em todo lugar</span>.</>}
        subtitle="Explore o ecossistema Café & Verso em escala global. Filtre por categoria, país, idioma ou tipo de experiência."
      >
        <div className="flex flex-wrap gap-2.5">
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-[13px] text-muted-foreground sm:w-80">
            <Search strokeWidth={1.4} className="h-3.5 w-3.5" />
            <input placeholder="Cidade, país, café, livraria…" className="w-full bg-transparent text-foreground placeholder:text-muted-foreground/70 focus:outline-none" />
          </div>
          {["País", "Cidade", "Categoria", "Idioma"].map((f) => (
            <button key={f} className="rounded-full border border-border bg-card px-4 py-2.5 text-[12.5px] text-foreground hover:border-accent/60">
              {f}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="border-b border-border py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <WorldMap pins={PINS} />
            </div>

            <aside className="space-y-3">
              {PLACES.map((p) => (
                <article key={p.name} className="group rounded-2xl border border-border bg-card p-4 lift">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-serif text-[16px] text-foreground">{p.name}</p>
                      <p className="mt-1 flex items-center gap-1.5 text-[12px] text-muted-foreground">
                        <MapPin strokeWidth={1.4} className="h-3 w-3" /> {p.city}
                      </p>
                    </div>
                    {p.verified && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] tracking-[0.18em] text-emerald-700 dark:text-emerald-400 uppercase">
                        <ShieldCheck strokeWidth={1.5} className="h-3 w-3" /> verificado
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-border bg-secondary px-2 py-0.5 text-[10.5px] text-foreground">{p.plan}</span>
                      <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">{p.kind}</span>
                    </div>
                    <button className="inline-flex items-center gap-1 text-[12px] text-foreground underline-grow">
                      Ver experiência <ArrowUpRight strokeWidth={1.5} className="h-3 w-3" />
                    </button>
                  </div>
                </article>
              ))}
            </aside>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {[
              { i: Coffee, n: "642", l: "cafés parceiros" },
              { i: BookOpen, n: "318", l: "livrarias" },
              { i: Calendar, n: "342", l: "eventos ativos" },
              { i: Users, n: "126", l: "comunidades" },
            ].map((s) => (
              <div key={s.l} className="bg-card p-6">
                <s.i strokeWidth={1.2} className="h-5 w-5 text-foreground" />
                <p className="mt-4 font-serif text-3xl text-foreground">{s.n}</p>
                <p className="mt-1 font-mono text-[10.5px] tracking-[0.2em] text-muted-foreground uppercase">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
