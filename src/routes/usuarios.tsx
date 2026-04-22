import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Languages, MapPin, Sparkles, Wallet, BookOpen, Coffee, Calendar } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/usuarios")({
  head: () => ({
    meta: [
      { title: "Para usuários — Café & Verso" },
      {
        name: "description",
        content:
          "Crie seu perfil cultural, participe de comunidades multilíngues, visite cafés parceiros e registre experiências com NFTs.",
      },
      { property: "og:title", content: "Para usuários — Café & Verso" },
      {
        property: "og:description",
        content: "Sua jornada cultural, em qualquer idioma.",
      },
    ],
  }),
  component: UsuariosPage,
});

function UsuariosPage() {
  return (
    <>
      <PageHero
        eyebrow="Para usuários"
        title={<>Sua jornada cultural,<br /><span className="italic text-accent">em qualquer idioma</span>.</>}
        subtitle="Crie seu perfil, escolha seus interesses, participe de comunidades, visite estabelecimentos parceiros e registre suas experiências com NFTs personalizados."
      />
      <Profile />
      <Feed />
      <Multilingual />
      <WalletDemo />
      <NFTGallery />
      <ExperiencesMap />
    </>
  );
}

function Profile() {
  return (
    <section className="border-b border-border py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
        <div>
          <SectionLabel number="01">Perfil cultural</SectionLabel>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Identidade leitora, traçada por interesses.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Defina idiomas, gêneros literários e tipos de experiência. O Café &amp; Verso
            recomenda comunidades, eventos e espaços alinhados ao seu universo.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-7 lift">
          <div className="flex items-start gap-5">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-accent/40 to-primary/30">
              <div className="absolute inset-0 grain" />
              <span className="absolute inset-0 grid place-items-center font-serif text-2xl text-foreground">R</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-serif text-[22px] text-foreground">Rafaela Alves</p>
              <p className="mt-1 font-mono text-[10.5px] tracking-[0.2em] text-muted-foreground uppercase">
                São Paulo · BR · membro desde 2025
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
                Leitor Global · nível 03
              </span>
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <Field label="Idioma de entrada" value="Português" />
            <Field label="Idioma de saída" value="Inglês" />
          </div>
          <div className="mt-4">
            <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Interesses</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Poesia", "Cafés especiais", "Filosofia", "Fantasia", "Escrita criativa"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-secondary px-3 py-1 text-[12px] text-foreground/90">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-3.5">
      <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">{label}</p>
      <p className="mt-1.5 flex items-center gap-1.5 font-serif text-[16px] text-foreground">
        <Languages strokeWidth={1.4} className="h-4 w-4 text-accent" /> {value}
      </p>
    </div>
  );
}

function Feed() {
  const items = [
    { type: "Convite · Evento", title: "Noite Café & Poesia", meta: "12 mai · São Paulo", icon: Calendar },
    { type: "Recomendação", title: "Café Aurora", meta: "Vila Madalena · BR", icon: Coffee },
    { type: "Clube de leitura", title: "Fantasia Global · capítulo 7", meta: "Hoje · 21:00", icon: BookOpen },
    { type: "NFT recebido", title: "Berlin Reading Night", meta: "#00482 · presença", icon: Sparkles },
    { type: "Sugestão", title: "Filosofia à Meia-Noite", meta: "Comunidade · 1.7k", icon: Languages },
  ];

  return (
    <section className="border-b border-border bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel number="02">Feed cultural</SectionLabel>
        <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          Curadoria viva — nada de algoritmo de vitrine.
        </h2>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.title} className="rounded-2xl border border-border bg-card p-6 lift">
              <div className="flex items-center gap-2 font-mono text-[10.5px] tracking-[0.2em] text-accent uppercase">
                <it.icon strokeWidth={1.4} className="h-3.5 w-3.5" /> {it.type}
              </div>
              <h3 className="mt-5 font-serif text-[20px] leading-tight text-foreground">{it.title}</h3>
              <p className="mt-2 text-[12.5px] text-muted-foreground">{it.meta}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                <span className="text-[12px] text-muted-foreground">Abrir detalhes</span>
                <ArrowUpRight strokeWidth={1.5} className="h-4 w-4 text-foreground" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Multilingual() {
  const messages = [
    { user: "Lukas", city: "Berlin · DE", text: "Ich finde Pessoas Heteronyme faszinierend.", view: "Acho os heterônimos do Pessoa fascinantes.", side: "left" as const },
    { user: "Sarah", city: "New York · US", text: "Heteronyms feel like parallel selves.", view: "Heterônimos parecem eus paralelos.", side: "right" as const },
    { user: "Rafaela", city: "São Paulo · BR", text: "Pessoa fez de cada nome um universo.", view: "Pessoa made every name a universe.", side: "left" as const },
  ];
  return (
    <section className="border-b border-border py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
        <div>
          <SectionLabel number="03">Salas multilíngues</SectionLabel>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Cada pessoa escolhe como escreve <span className="italic text-accent">e</span> como lê.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            A tradução acontece entre os pontos — o que você escreve em português pode
            ser lido em alemão, espanhol, japonês ou inglês. Em tempo real.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <p className="font-serif text-[16px] text-foreground">Sala · Pessoa &amp; Heterônimos</p>
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">PT · EN · DE</span>
          </div>
          <div className="mt-5 space-y-5">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.side === "right" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl border border-border p-4 ${m.side === "right" ? "bg-secondary" : "bg-background"}`}>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    {m.user} · {m.city}
                  </p>
                  <p className="mt-2 text-[14px] text-foreground/90">{m.text}</p>
                  <p className="mt-2 border-t border-border/60 pt-2 text-[12.5px] italic text-muted-foreground">
                    {m.view}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WalletDemo() {
  return (
    <section className="border-b border-border bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel number="04">Wallet &amp; $VERSO</SectionLabel>
        <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          Sua bolsa cultural, acompanhada com clareza.
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-3xl border border-border bg-card p-7 lift">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Saldo $VERSO</p>
              <Wallet strokeWidth={1.3} className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="mt-4 font-serif text-[64px] leading-none text-foreground">2.140<span className="text-muted-foreground/50">.00</span></p>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
              <Mini n="6" l="eventos" />
              <Mini n="3" l="doações" />
              <Mini n="11" l="NFTs" />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7">
            <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Histórico</p>
            <div className="mt-4 divide-y divide-border/60">
              {[
                { t: "Bonificação · presença Berlin", d: "12 abr", v: "+ 120" },
                { t: "Evento · Café Filosófico", d: "08 abr", v: "− 50" },
                { t: "Doação · Biblioteca Viva", d: "02 abr", v: "− 80" },
                { t: "Visita · Café Aurora", d: "29 mar", v: "+ 35" },
                { t: "NFT · Verso Passport", d: "18 mar", v: "+ 200" },
              ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between py-3.5">
                  <div>
                    <p className="text-[14px] text-foreground/90">{tx.t}</p>
                    <p className="mt-0.5 font-mono text-[10.5px] tracking-[0.18em] text-muted-foreground uppercase">{tx.d}</p>
                  </div>
                  <span className={`font-mono text-[13px] ${tx.v.startsWith("+") ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"}`}>{tx.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mini({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-serif text-2xl text-foreground">{n}</p>
      <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">{l}</p>
    </div>
  );
}

function NFTGallery() {
  const items = [
    { name: "Verso Passport", tone: "from-amber-300/30 to-amber-500/10" },
    { name: "Poesia & Espresso", tone: "from-rose-300/30 to-rose-500/10" },
    { name: "Berlin Reading Night", tone: "from-sky-300/30 to-sky-500/10" },
    { name: "São Paulo Coffee Visit", tone: "from-emerald-300/30 to-emerald-500/10" },
    { name: "Livraria Aurora Badge", tone: "from-violet-300/30 to-violet-500/10" },
  ];
  return (
    <section className="border-b border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel number="05">Galeria NFT</SectionLabel>
        <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          Memórias culturais, em forma colecionável.
        </h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((n, i) => (
            <article key={n.name} className="group overflow-hidden rounded-2xl border border-border bg-card lift">
              <div className={`relative aspect-[3/4] bg-gradient-to-br ${n.tone}`}>
                <div className="absolute inset-0 grain" />
                <svg viewBox="0 0 200 260" className="absolute inset-0 h-full w-full text-foreground/35" fill="none" stroke="currentColor" strokeWidth="0.8">
                  <rect x="50" y="60" width="100" height="140" rx="6" />
                  <line x1="60" y1="90" x2="140" y2="90" />
                  <line x1="60" y1="110" x2="130" y2="110" />
                  <line x1="60" y1="130" x2="140" y2="130" />
                </svg>
                <span className="absolute left-3 top-3 rounded-full border border-border/70 bg-background/80 px-2 py-0.5 font-mono text-[9.5px] tracking-[0.2em] text-muted-foreground uppercase backdrop-blur">
                  #00{i + 21}
                </span>
              </div>
              <div className="border-t border-border p-4">
                <p className="font-serif text-[15px] text-foreground">{n.name}</p>
                <p className="mt-1 font-mono text-[10.5px] tracking-[0.18em] text-muted-foreground uppercase">Coleção pessoal</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperiencesMap() {
  return (
    <section className="border-b border-border bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel number="06">Mapa de experiências</SectionLabel>
        <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          Tudo o que está perto, em um único mapa cultural.
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Cafés próximos", n: "12", icon: Coffee },
            { t: "Livrarias parceiras", n: "07", icon: BookOpen },
            { t: "Eventos locais", n: "05", icon: Calendar },
            { t: "NFTs disponíveis", n: "09", icon: Sparkles },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6 lift">
              <c.icon strokeWidth={1.2} className="h-6 w-6 text-foreground" />
              <p className="mt-5 font-serif text-3xl text-foreground">{c.n}</p>
              <p className="mt-1 text-[13px] text-muted-foreground">{c.t}</p>
              <div className="mt-5 flex items-center gap-1.5 font-mono text-[10.5px] tracking-[0.18em] text-accent uppercase">
                <MapPin strokeWidth={1.4} className="h-3 w-3" /> em 5 km
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
