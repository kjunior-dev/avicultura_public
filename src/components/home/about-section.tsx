import {Leaf} from "lucide-react";

export function AboutSection() {
    return (
        <section id="sobre" className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2 lg:px-10">
            <div>
                <p className="eyebrow">
                    A nossa essência
                </p>
                <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">À mesa, há sempre<br/>lugar
                    para o que é nosso.
                </h2>
            </div>
            <div className="flex flex-col justify-center">
                <Leaf className="mb-5 text-primary" size={30} aria-hidden="true"/>
                <p className="max-w-lg text-lg leading-relaxed text-foreground/70">
                    A Nôs Ovu nasce em Cabo Verde.
                    Queremos aproximar a nossa produção de quem a leva para casa, com uma forma simples e direta de
                    encomendar.
                </p>
                <p className="mt-4 max-w-lg leading-relaxed text-foreground/70">
                    Seja para uma receita especial ou para o dia a dia do seu negócio, escolha a quantidade de que
                    precisa e
                    envie-nos o seu pedido.
                </p>
            </div>
        </section>
    );
}
