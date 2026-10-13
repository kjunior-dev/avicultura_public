import { Egg, Sprout } from "lucide-react";

export function EggIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-xl pb-8 pt-4">
        <div className="egg-scene" role="img"
             aria-label="Ilustração de ovos castanhos numa taça, sobre um fundo azul e verde-água">
            <div className="scene-circle"/>
            <div className="scene-caption">SIMPLES POR NATUREZA.</div>
            <div className="egg egg-one"/>
            <div className="egg egg-two"/>
            <div className="egg egg-three"/>
            <div className="egg egg-four"/>
            <div className="bowl"/>
            <div className="scene-leaf"><Sprout size={80} strokeWidth={1}/></div>
            <span className="scene-bottom">Nôs Ovu — CABO VERDE</span></div>
        <div
            className="absolute -bottom-1 left-3 flex items-center gap-4 rounded-2xl border border-foreground/10 bg-background px-5 py-4 shadow-lg shadow-foreground/5 sm:left-8">
            <span className="flex size-11 items-center justify-center rounded-full bg-secondary"><Egg
                aria-hidden="true"/></span>
            <div><p className="font-display text-xl">O bom começa no simples.</p><p
                className="mt-1 text-xs text-foreground/65">Ovos para os seus momentos à mesa.</p></div>
        </div>
    </div>
  );
}
