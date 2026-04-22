import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, ShieldCheck, Heart, Coffee, BookOpen, Calendar, Globe2, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/nfts")({
  head: () => ({
    meta: [
      { title: "NFTs culturais — Café & Verso" },
      {
        name: "description",
        content: "NFTs de presença, visita e participação cultural — memória digital e pertencimento, sem caráter especulativo.",
      },
      { property: "og:title", content: "NFTs culturais — Café & Verso" },
      {
        property: "og:description",
        content: "Memória digital de cada experiência cultural vivida.",
      },
    ],
  }),
  component: NFTsPage,
});

const COLLECTIONS = [
  { name: "Verso Passport", desc: "Identidade leitora e selo de membro global.", tag: "Identidade", tone: "from-amber-300/30 to-amber-500/10", icon: Globe2 },
  { name: "Verso Moments", desc: "Momentos únicos vividos no ecossistema.", tag: "Coleção", tone: "from-rose-300/30 to-rose-500/10", icon: Sparkles },
  { name: "Presença", desc: "Registro de participação em encontros e clubes.", tag: "Presença", tone: "from-sky-300/30 to-sky-500/10", icon: Calendar },
  { name: "Visita", desc: "Selo digital de visita a cafés parceiros.", tag: "Visita", tone: "from-emerald-300/30 to-emerald-500/10", icon: Coffee },
  { name: "Eventos", desc: "Edições especiais de eventos culturais.", tag: "Evento", tone: "from-violet-300/30 to-violet-500/10", icon: Calendar },
  { name: "Cafés", desc: "Coleções emitidas por cafés embaixadores.", tag: "Café", tone: "from-orange-300/30 to-orange-500/10", icon: Coffee },
  { name: "Livrarias", desc: "Edições culturais de livrarias parceiras.", tag: "Livraria", tone: "from-teal-300/30 to-teal-500/10", icon: BookOpen },
  { name: "Solidários", desc: "NFTs vinculados a doações verificadas.", tag: "Impacto", tone: "from-fuchsia-300/30 to-fuchsia-500/10", icon: Heart },
];

function NFTsPage() {
  return (
    <>
      <PageHero
        eyebrow="NFTs culturais"
        title={<>Memória digital de <span className="italic text-accent">presença</span> e pertencimento.</>}
        subtitle="Os NFTs do Café & Verso registram presença, pertencimento e participação cultural — não são apresentados como investimento, mas como memória, acesso e reputação dentro do ecossistema."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionLabel number="01">Coleções</SectionLabel>
          <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Oito famílias culturais, uma identidade leitora.
          </h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COLLECTIONS.map((c, i) => (
              <article key={c.name} className="group overflow-hidden rounded-2xl border border-border bg-card lift">
                <div className={`relative aspect-[4/5] bg-gradient-to-br ${c.tone}`}>
                  <div className="absolute inset-0 grain" />
                  <svg viewBox="0 0 200 250" className="absolute inset-0 h-full w-full text-foreground/35" fill="none" stroke="currentColor" strokeWidth="0.7">
                    <circle cx="100" cy="120" r="60" />
                    <circle cx="100" cy="120" r="40" />
                    <circle cx="100" cy="120" r="22" />
                    <line x1="20" y1="120" x2="180" y2="120" />
                    <line x1="100" y1="40" x2="100" y2="200" />
                  </svg>
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-border/70 bg-background/80 px-2 py-0.5 font-mono text-[9.5px] tracking-[0.2em] text-muted-foreground uppercase backdrop-blur">
                    <c.icon strokeWidth={1.4} className="h-3 w-3" /> {c.tag}
                  </div>
                  <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9.5px] tracking-[0.18em] text-emerald-700 dark:text-emerald-400 uppercase backdrop-blur">
                    <ShieldCheck strokeWidth={1.5} className="h-3 w-3" /> ed. {(i + 1).toString().padStart(2, "0")}
                  </div>
                </div>
                <div className="border-t border-border p-5">
                  <h3 className="font-serif text-[19px] text-foreground">{c.name}</h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">{c.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[12px] text-foreground underline-grow">
                    Explorar coleção <ArrowUpRight strokeWidth={1.5} className="h-3.5 w-3.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-3 sm:px-8">
          {[
            { t: "Não financeiro", d: "Sem promessa de rendimento, valorização ou saque." },
            { t: "Cultural e utilitário", d: "Acesso, identidade, lembrança e reputação." },
            { t: "Auditável e transparente", d: "Cada emissão pode ser verificada no ecossistema." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-serif text-[18px] text-foreground">{b.t}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
