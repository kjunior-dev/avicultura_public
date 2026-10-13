import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EggIllustration } from "./egg-illustration";

export function HeroSection({ orderUrl }: { orderUrl: string }) {
    return (
        <section
            className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-20">
            <div>
                <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em]">
                    <span className="size-2 rounded-full bg-primary"/> Nôs Ovu · Cabo Verde</p>
                <h1 className="font-display text-6xl leading-[1.03] tracking-tight sm:text-7xl lg:text-[88px]">Da
                    nossa terra<br/>à <span className="italic text-primary">sua mesa.</span></h1>
                <p className="mt-7 max-w-md text-lg leading-relaxed text-foreground/70">Há coisas simples que
                    fazem parte de um bom dia. Os ovos para o pequeno-almoço, a receita de família e o cuidado
                    de escolher o que chega à mesa.</p>
                <div className="mt-8 flex flex-wrap items-center gap-5"><Button asChild size="lg"
                                                                                className="h-13 rounded-full px-7 text-base"><a
                    href={orderUrl}>Fazer o meu pedido <ArrowRight aria-hidden="true"/></a></Button><a
                    href="#encomendar" className="nav-link flex items-center gap-2 text-sm font-medium">Como
                    funciona <ArrowDown size={15} aria-hidden="true"/></a></div>
                <p className="mt-5 text-xs text-foreground/60">Para a sua casa, o seu negócio ou a sua próxima
                    receita.</p>
            </div>
            <EggIllustration />
        </section>
    );
}
