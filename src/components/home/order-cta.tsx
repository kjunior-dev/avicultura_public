import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";

export function OrderCta({orderUrl}: { orderUrl: string }) {
    return (
        <section className="px-6 py-16 lg:px-10">
            <div
                className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 rounded-3xl bg-sidebar px-8 py-12 text-primary-foreground sm:px-12">
                <div>
                    <p className="text-xs uppercase tracking-[.18em] text-sidebar-foreground/80">
                        O próximo passo é seu
                    </p>
                    <h2 className="font-display mt-4 text-4xl sm:text-5xl">
                        Vamos pôr a mesa?
                    </h2>
                    <p className="mt-4 text-sidebar-foreground">
                        Escolha os seus ovos. Nós recebemos o seu pedido.
                    </p>
                </div>
                <Button asChild size="lg"
                        className="h-13 rounded-full bg-accent px-7 text-accent-foreground hover:bg-accent/90">
                    <a href={orderUrl}>
                        Encomendar agora
                        <ArrowRight aria-hidden="true"/>
                    </a>
                </Button>
            </div>
        </section>
    );
}
