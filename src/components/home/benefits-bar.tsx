import { ClipboardList, MapPin, Package } from "lucide-react";

export function BenefitsBar() {
    return (
        <div className="border-y border-foreground/10 bg-secondary/50">
            <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-6 px-6 py-6 text-sm lg:px-10">
                <span className="flex items-center gap-2"><MapPin size={18} aria-hidden="true"/> Uma marca de Cabo Verde</span><span
                className="flex items-center gap-2"><Package size={18} aria-hidden="true"/> Caixas de 30 ou à unidade</span><span
                className="flex items-center gap-2"><ClipboardList size={18} aria-hidden="true"/> Pedidos online, sem complicações</span>
            </div>
        </div>
    );
}
