import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Languages, Sparkles, Coins, ArrowUpRight, Globe2, Coffee, BookOpen } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos culturais — Café & Verso" },
      {
        name: "description",
        content: "Eventos online, presenciais e híbridos: clubes de leitura, encontros em cafés e experiências em livrarias.",
      },
      { property: "og:title", content: "Eventos — Café & Verso" },
      {
        property: "og:description",
        content: "Agenda cultural global multilíngue.",
      },
    ],
  }),
  component: EventosPage,
});

const TYPES = ["Todos", "Online", "Presencial", "Híbrido", "Clube de leitura", "Encontro em café", "Experiência em livraria", "Multilíngue"];

const EVENTS = [
  { title: "Noite Café & Poesia", host: "Café Aurora", city: "São Paulo · BR", langs: "PT · EN", verso: "+50", nft: true, mode: "Presencial", date: "12 mai · 20:00" },
  { title: "Clube Global de Leitura", host: "Verso House", city: "Online · 6 países", langs: "Multilíngue", verso: "+40", nft: true, mode: "Online", date: "18 mai · 21:00" },
  { title: "Escrita Criativa Internacional", host: "Verso Studio", city: "Online · 12 idiomas", langs: "Multilíngue", verso: "+80", nft: true, mode: "Online", date: "23 mai · 19:00" },
  { title: "Café Filosófico", host: "Páginas & Espresso", city: "Buenos Aires · AR", langs: "ES · PT", verso: "+35", nft: true, mode: "Híbrido", date: "29 mai · 19:30" },
  { title: "Rota Cultural Livrarias", host: "Livraria Atlântica", city: "Lisboa · PT", langs: "PT · EN", verso: "+120", nft: true, mode: "Presencial", date: "04 jun · 18:00" },
  { title: "Berlin Reading Night", host: "Buchhandlung Verso", city: "Berlin · DE", langs: "DE · EN", verso: "+90", nft: true, mode: "Presencial", date: "08 jun · 22:00" },
  { title: "Tokyo Slow Reading", host: "Bunkitsu Annex", city: "Tokyo · JP", langs: "JA · EN", verso: "+60", nft: true, mode: "Presencial", date: "14 jun · 14:00" },
  { title: "Verso Sessions NY", host: "The Reading Cup", city: "New York · US", langs: "EN · ES", verso: "+70", nft: true, mode: "Híbrido", date: "21 jun · 20:00" },
];

function EventosPage() {
  return (
    <>
      <PageHero
        eyebrow="Eventos"
        title={<>Encontros culturais que <span className="italic text-accent">cruzam idiomas</span> e cidades.</>}
        subtitle="Online, presenciais ou híbridos — clubes de leitura, cafés filosóficos, livrarias abertas e experiências em qualquer fuso."
      >
        <div className="flex flex-wrap gap-2">
          {TYPES.map((t, i) => (
            <button
              key={t}
              className={`rounded-full border px-4 py-2 text-[12.5px] transition-all ${
                i === 0
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card text-muted-foreground hover:border-accent/60 hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionLabel number="01">Próximos eventos</SectionLabel>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((e) => (
              <article key={e.title} className="group flex flex-col rounded-2xl border border-border bg-card p-6 lift">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] tracking-[0.2em] text-accent uppercase">
                    <Calendar strokeWidth={1.4} className="h-3.5 w-3.5" /> {e.date}
                  </span>
                  <span className="rounded-full border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                    {e.mode}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-[22px] leading-tight text-foreground">{e.title}</h3>
                <p className="mt-2 text-[13px] text-muted-foreground">por {e.host}</p>

                <div className="mt-5 grid grid-cols-2 gap-3 text-[12px] text-foreground/85">
                  <p className="flex items-center gap-1.5"><MapPin strokeWidth={1.4} className="h-3.5 w-3.5 text-muted-foreground" /> {e.city}</p>
                  <p className="flex items-center gap-1.5"><Languages strokeWidth={1.4} className="h-3.5 w-3.5 text-muted-foreground" /> {e.langs}</p>
                  {e.nft && (
                    <p className="flex items-center gap-1.5"><Sparkles strokeWidth={1.4} className="h-3.5 w-3.5 text-muted-foreground" /> NFT disponível</p>
                  )}
                  <p className="flex items-center gap-1.5"><Coins strokeWidth={1.4} className="h-3.5 w-3.5 text-muted-foreground" /> {e.verso} $VERSO</p>
                </div>

                <button className="mt-7 inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-2.5 text-[12.5px] font-medium text-background transition-all hover:gap-2.5">
                  Participar <ArrowUpRight strokeWidth={1.5} className="h-3.5 w-3.5" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-3 sm:px-8">
          {[
            { i: Globe2, t: "Multilíngue por padrão", d: "Tradução em tempo real entre participantes." },
            { i: Coffee, t: "Em cafés reais", d: "Encontros presenciais com hospedagem cultural." },
            { i: BookOpen, t: "Curadoria literária", d: "Programações guiadas por leitores e editores." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
              <c.i strokeWidth={1.2} className="h-6 w-6 text-foreground" />
              <p className="mt-5 font-serif text-[18px] text-foreground">{c.t}</p>
              <p className="mt-1.5 text-[13px] text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
