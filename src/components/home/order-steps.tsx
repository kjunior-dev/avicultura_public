import {Check, ClipboardList, Package} from "lucide-react";

const steps = [
    {
        icon: Package,
        title: "Escolha a quantidade",
        text: "Caixas de 30 ovos, ovos à unidade ou uma combinação dos dois. Peça à sua medida."
    },
    {
        icon: ClipboardList,
        title: "Envie o seu pedido",
        text: "Na área de clientes, indique o seu nome, contacto e local de entrega."
    },
    {
        icon: Check,
        title: "Acompanhe a encomenda",
        text: "Guarde o link privado do pedido para consultar o estado e atualizar os seus dados."
    },
];

export function OrderSteps() {
    return (
        <section id="encomendar" className="bg-white/50">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
                <div className="flex flex-wrap items-end justify-between gap-5">
                    <div><p className="eyebrow">Do pedido à sua mesa</p><h2
                        className="font-display mt-4 text-4xl sm:text-5xl">Encomendar é simples.</h2></div>
                    <p className="max-w-xs text-sm leading-relaxed text-foreground/65">Três passos para fazer o
                        seu pedido na nossa área de clientes.</p></div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {steps.map(({
                                    icon: Icon,
                                    title,
                                    text
                                }, index) => <article key={title}
                                                      className="border-t border-foreground/20 pt-6">
                        <div className="mb-7 flex items-center justify-between">
                            <Icon size={28} strokeWidth={1.5} aria-hidden="true"/>
                            <span className="font-display text-3xl text-foreground/30">
                            0{index + 1}
                        </span>
                        </div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/65">
                            {text}
                        </p>
                    </article>)}
                </div>
            </div>
        </section>
    );
}
