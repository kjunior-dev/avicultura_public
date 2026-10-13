import { ArrowDown, ArrowRight, Check, ClipboardList, Egg, Leaf, LockKeyhole, MapPin, Package, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Package, title: "Escolha a quantidade", text: "Caixas de 30 ovos, ovos à unidade ou uma combinação dos dois. Peça à sua medida." },
  { icon: ClipboardList, title: "Envie o seu pedido", text: "Na área de clientes, indique o seu nome, contacto e local de entrega." },
  { icon: Check, title: "Acompanhe a encomenda", text: "Guarde o link privado do pedido para consultar o estado e atualizar os seus dados." },
];

export default function Home() {
  const origin = process.env.MANAGEMENT_URL?.trim() || (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "");
  if (!origin) throw new Error("Configure MANAGEMENT_URL com o endereço público de avicultura_management antes de publicar.");
  const management = new URL(origin);
  if (!["http:", "https:"].includes(management.protocol)) throw new Error("MANAGEMENT_URL deve usar HTTP ou HTTPS.");
  const orderUrl = new URL("/cliente", management).href;
  const adminUrl = new URL("/login", management).href;

  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:p-4">Saltar para o conteúdo</a>
      <header className="border-b border-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 lg:px-10">
          <a href="#" aria-label="Nôs Ovu — início" className="flex items-center gap-3"><span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground"><Egg size={25} /></span><span className="text-xl font-bold tracking-tight">Nôs Ovu<span className="block text-[9px] font-medium uppercase tracking-[.26em]">De Cabo Verde, com cuidado</span></span></a>
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-sm font-medium md:flex"><a className="nav-link" href="#sobre">A nossa essência</a><a className="nav-link" href="#encomendar">Como encomendar</a></nav>
          <Button asChild variant="outline" className="rounded-full border-foreground/20 bg-transparent"><a href={adminUrl}><LockKeyhole aria-hidden="true" /> Área administrativa</a></Button>
        </div>
      </header>
      <main id="conteudo">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-20">
          <div>
            <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em]"><span className="size-2 rounded-full bg-primary" /> Nôs Ovu · Cabo Verde</p>
            <h1 className="font-display text-6xl leading-[1.03] tracking-tight sm:text-7xl lg:text-[88px]">Da nossa terra<br />à <span className="italic text-primary">sua mesa.</span></h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-foreground/70">Há coisas simples que fazem parte de um bom dia. Os ovos para o pequeno-almoço, a receita de família e o cuidado de escolher o que chega à mesa.</p>
            <div className="mt-8 flex flex-wrap items-center gap-5"><Button asChild size="lg" className="h-13 rounded-full px-7 text-base"><a href={orderUrl}>Fazer o meu pedido <ArrowRight aria-hidden="true" /></a></Button><a href="#encomendar" className="nav-link flex items-center gap-2 text-sm font-medium">Como funciona <ArrowDown size={15} aria-hidden="true" /></a></div>
            <p className="mt-5 text-xs text-foreground/60">Para a sua casa, o seu negócio ou a sua próxima receita.</p>
          </div>
          <div className="relative mx-auto w-full max-w-xl pb-8 pt-4">
            <div className="egg-scene" role="img" aria-label="Ilustração de ovos castanhos numa taça, sobre um fundo azul e verde-água"><div className="scene-circle" /><div className="scene-caption">SIMPLES POR NATUREZA.</div><div className="egg egg-one" /><div className="egg egg-two" /><div className="egg egg-three" /><div className="egg egg-four" /><div className="bowl" /><div className="scene-leaf"><Sprout size={80} strokeWidth={1} /></div><span className="scene-bottom">Nôs Ovu — CABO VERDE</span></div>
            <div className="absolute -bottom-1 left-3 flex items-center gap-4 rounded-2xl border border-foreground/10 bg-background px-5 py-4 shadow-lg shadow-foreground/5 sm:left-8"><span className="flex size-11 items-center justify-center rounded-full bg-secondary"><Egg aria-hidden="true" /></span><div><p className="font-display text-xl">O bom começa no simples.</p><p className="mt-1 text-xs text-foreground/65">Ovos para os seus momentos à mesa.</p></div></div>
          </div>
        </section>
        <div className="border-y border-foreground/10 bg-secondary/50"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-6 px-6 py-6 text-sm lg:px-10"><span className="flex items-center gap-2"><MapPin size={18} aria-hidden="true" /> Uma marca de Cabo Verde</span><span className="flex items-center gap-2"><Package size={18} aria-hidden="true" /> Caixas de 30 ou à unidade</span><span className="flex items-center gap-2"><ClipboardList size={18} aria-hidden="true" /> Pedidos online, sem complicações</span></div></div>
        <section id="sobre" className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2 lg:px-10"><div><p className="eyebrow">A nossa essência</p><h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">À mesa, há sempre<br />lugar para o que é nosso.</h2></div><div className="flex flex-col justify-center"><Leaf className="mb-5 text-primary" size={30} aria-hidden="true" /><p className="max-w-lg text-lg leading-relaxed text-foreground/70">A Nôs Ovu nasce em Cabo Verde. Queremos aproximar a nossa produção de quem a leva para casa, com uma forma simples e direta de encomendar.</p><p className="mt-4 max-w-lg leading-relaxed text-foreground/70">Seja para uma receita especial ou para o dia a dia do seu negócio, escolha a quantidade de que precisa e envie-nos o seu pedido.</p></div></section>
        <section id="encomendar" className="bg-white/50"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Do pedido à sua mesa</p><h2 className="font-display mt-4 text-4xl sm:text-5xl">Encomendar é simples.</h2></div><p className="max-w-xs text-sm leading-relaxed text-foreground/65">Três passos para fazer o seu pedido na nossa área de clientes.</p></div><div className="mt-12 grid gap-8 md:grid-cols-3">{steps.map(({ icon: Icon, title, text }, index) => <article key={title} className="border-t border-foreground/20 pt-6"><div className="mb-7 flex items-center justify-between"><Icon size={28} strokeWidth={1.5} aria-hidden="true" /><span className="font-display text-3xl text-foreground/30">0{index + 1}</span></div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/65">{text}</p></article>)}</div></div></section>
        <section className="px-6 py-16 lg:px-10"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 rounded-3xl bg-sidebar px-8 py-12 text-primary-foreground sm:px-12"><div><p className="text-xs uppercase tracking-[.18em] text-sidebar-foreground/80">O próximo passo é seu</p><h2 className="font-display mt-4 text-4xl sm:text-5xl">Vamos pôr a mesa?</h2><p className="mt-4 text-sidebar-foreground">Escolha os seus ovos. Nós recebemos o seu pedido.</p></div><Button asChild size="lg" className="h-13 rounded-full bg-accent px-7 text-accent-foreground hover:bg-accent/90"><a href={orderUrl}>Encomendar agora <ArrowRight aria-hidden="true" /></a></Button></div></section>
      </main>
      <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 border-t border-foreground/10 px-6 py-8 text-xs text-foreground/60 lg:px-10"><p>© {new Date().getFullYear()} Nôs Ovu · Cabo Verde</p><a className="nav-link inline-flex items-center gap-2" href={adminUrl}><LockKeyhole size={13} aria-hidden="true" /> Área administrativa</a><span>Da nossa terra à sua mesa.</span></footer>
    </>
  );
}
