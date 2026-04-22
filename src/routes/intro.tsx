import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Coffee, Globe, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/intro")({
  head: () => ({
    meta: [
      { title: "Bem-vindo ao Café & Verso" },
      {
        name: "description",
        content:
          "Uma comunidade global onde leitura, café e encontros culturais se transformam em experiências digitais.",
      },
    ],
  }),
  component: IntroPage,
});

function IntroPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* ambient */}
      <div className="gradient-radial pointer-events-none absolute inset-0" />
      <div className="editorial-grid pointer-events-none absolute inset-0 opacity-[0.18]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <Logo />
        <ThemeToggle />
      </header>

      <main className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="fade-up font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
            cafeeverso.fun · prólogo
          </p>
          <h1 className="fade-up delay-100 mt-6 text-balance font-serif text-[44px] leading-[1.02] tracking-tight text-foreground sm:text-[64px] lg:text-[80px]">
            Bem-vindo ao{" "}
            <span className="italic text-accent">Café &amp; Verso</span>
          </h1>
          <p className="fade-up delay-200 mt-7 max-w-xl text-balance text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
            Uma comunidade global onde leitura, café e encontros culturais se transformam
            em experiências digitais, presença tokenizada e conexões sem fronteiras.
          </p>

          <div className="fade-up delay-300 mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-[13.5px] font-medium tracking-wide text-background transition-all hover:gap-3 hover:bg-foreground/90"
            >
              Entrar na experiência
              <ArrowRight strokeWidth={1.5} className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-[13.5px] font-medium text-foreground transition-all hover:border-accent/60 hover:bg-secondary"
            >
              Conhecer a proposta
            </Link>
          </div>

          <p className="fade-up delay-400 mt-12 max-w-md text-[13px] leading-relaxed text-muted-foreground/90">
            Para leitores, cafeterias, livrarias, curadores, comunidades culturais e
            experiências globais.
          </p>
        </div>

        {/* Abstract illustration */}
        <div className="relative aspect-square w-full max-w-[560px] justify-self-center lg:justify-self-end">
          <AbstractScene />
        </div>
      </main>

      <footer className="relative z-10 mx-auto max-w-7xl px-5 pb-8 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-5 font-mono text-[10.5px] tracking-[0.22em] text-muted-foreground/80 uppercase">
          <span>Leitura · Café · Comunidade</span>
          <span>Global edition · 2026</span>
        </div>
      </footer>
    </div>
  );
}

function AbstractScene() {
  return (
    <div className="blur-in relative h-full w-full">
      {/* Concentric world */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full text-foreground/15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="300" cy="300" r="280" />
        <circle cx="300" cy="300" r="220" />
        <circle cx="300" cy="300" r="160" />
        <circle cx="300" cy="300" r="100" />
        {/* meridians */}
        <ellipse cx="300" cy="300" rx="280" ry="120" />
        <ellipse cx="300" cy="300" rx="280" ry="60" />
        <line x1="20" y1="300" x2="580" y2="300" />
        <line x1="300" y1="20" x2="300" y2="580" />
      </svg>

      {/* Center: book + cup composition */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full text-foreground"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Open book */}
        <path d="M180 340 C 230 320, 280 320, 300 340 C 320 320, 370 320, 420 340 L 420 410 C 370 390, 320 390, 300 410 C 280 390, 230 390, 180 410 Z" />
        <line x1="300" y1="340" x2="300" y2="410" />
        <line x1="210" y1="350" x2="280" y2="350" />
        <line x1="210" y1="365" x2="270" y2="365" />
        <line x1="210" y1="380" x2="280" y2="380" />
        <line x1="320" y1="350" x2="390" y2="350" />
        <line x1="320" y1="365" x2="380" y2="365" />
        <line x1="320" y1="380" x2="390" y2="380" />

        {/* Cup */}
        <path d="M260 220 L 340 220 L 332 290 Q 300 308 268 290 Z" />
        <path d="M340 235 Q 372 235 372 260 Q 372 285 340 285" />
        {/* steam */}
        <path d="M280 195 C 285 180, 275 175, 280 160" className="text-accent" stroke="currentColor" />
        <path d="M300 195 C 305 180, 295 175, 300 160" className="text-accent" stroke="currentColor" />
        <path d="M320 195 C 325 180, 315 175, 320 160" className="text-accent" stroke="currentColor" />
      </svg>

      {/* Floating cards */}
      <FloatingCard
        className="left-[-2%] top-[12%] w-[180px] fade-up delay-300"
        icon={<BookOpen strokeWidth={1.25} className="h-3.5 w-3.5" />}
        label="Berlin Reading Night"
        meta="EVT · 22:00"
      />
      <FloatingCard
        className="right-[-2%] top-[28%] w-[170px] fade-up delay-400"
        icon={<Coffee strokeWidth={1.25} className="h-3.5 w-3.5" />}
        label="Café Aurora · SP"
        meta="Parceiro verificado"
      />
      <FloatingCard
        className="left-[4%] bottom-[10%] w-[180px] fade-up delay-500"
        icon={<Globe strokeWidth={1.25} className="h-3.5 w-3.5" />}
        label="Sala Multilíngue"
        meta="PT · EN · DE"
      />
      <FloatingCard
        className="right-[2%] bottom-[18%] w-[170px] fade-up delay-500"
        icon={<Sparkles strokeWidth={1.25} className="h-3.5 w-3.5" />}
        label="Verso Passport"
        meta="NFT #00482"
      />

      {/* Connection dots */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full text-accent"
        fill="currentColor"
      >
        <circle cx="120" cy="180" r="3" />
        <circle cx="480" cy="220" r="3" />
        <circle cx="100" cy="450" r="3" />
        <circle cx="500" cy="430" r="3" />
        <circle cx="300" cy="80" r="3" />
        <circle cx="300" cy="540" r="3" />
      </svg>
    </div>
  );
}

function FloatingCard({
  className = "",
  icon,
  label,
  meta,
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
  meta: string;
}) {
  return (
    <div
      className={`absolute rounded-xl border border-border bg-card/90 p-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.3)] backdrop-blur-md ${className}`}
    >
      <div className="flex items-center gap-2 text-foreground">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-foreground/80">
          {icon}
        </span>
        <span className="font-serif text-[13px]">{label}</span>
      </div>
      <p className="mt-1.5 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
        {meta}
      </p>
    </div>
  );
}
