import { Egg, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader({ adminUrl }: { adminUrl: string }) {
    return (
        <header className="border-b border-foreground/10">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 lg:px-10">
                <a href="#" aria-label="Nôs Ovu — início" className="flex items-center gap-3"><span
                    className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground"><Egg
                    size={25}/></span><span className="text-xl font-bold tracking-tight">Nôs Ovu<span
                    className="block text-[9px] font-medium uppercase tracking-[.26em]">De Cabo Verde, com cuidado</span></span></a>
                <nav aria-label="Navegação principal"
                     className="hidden items-center gap-8 text-sm font-medium md:flex"><a className="nav-link"
                                                                                          href="#sobre">A nossa
                    essência</a><a className="nav-link" href="#encomendar">Como encomendar</a></nav>
                <Button asChild variant="outline" className="rounded-full border-foreground/20 bg-transparent"><a
                    href={adminUrl}><LockKeyhole aria-hidden="true"/> Área administrativa</a></Button>
            </div>
        </header>
    );
}
