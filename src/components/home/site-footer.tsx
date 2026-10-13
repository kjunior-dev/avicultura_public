import {LockKeyhole} from "lucide-react";

export function SiteFooter({adminUrl}: { adminUrl: string }) {
    return (
        <footer
            className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 border-t border-foreground/10 px-6 py-8 text-xs text-foreground/60 lg:px-10">
            <p>
                © {new Date().getFullYear()} Nôs Ovu · Cabo Verde
            </p>
            <a className="nav-link inline-flex items-center gap-2" href={adminUrl}>
                <LockKeyhole size={13} aria-hidden="true"/>
                Área administrativa
            </a>
            <span>Da nossa terra à sua mesa.</span>
        </footer>
    );
}
