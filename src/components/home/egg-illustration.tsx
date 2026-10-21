"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion-preference";

const companions = [
  { top: "6%", left: "4%", width: "3.6rem", height: "4.5rem" },
  { top: "18%", right: "2%", width: "2.6rem", height: "3.3rem" },
  { bottom: "16%", left: "10%", width: "3rem", height: "3.8rem" },
];

function Egg({ tone = "cream", cracks = 0 }: { tone?: "cream" | "chestnut" | "speckled"; cracks?: number }) {
  const gradientId = useId();
  const colors = tone === "chestnut" ? ["#eec49b", "#c18a58", "#95613d"] : ["#fff8e9", "#eed9b6", "#c6a079"];

  return (
    <svg viewBox="0 0 240 310" className="size-full" aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="32%" cy="27%" r="78%">
          <stop offset="0%" stopColor={colors[0]} />
          <stop offset="62%" stopColor={colors[1]} />
          <stop offset="100%" stopColor={colors[2]} />
        </radialGradient>
      </defs>
      <path d="M120 10C63 10 12 117 12 198c0 65 43 102 108 102s108-37 108-102C228 117 177 10 120 10Z" fill={`url(#${gradientId})`} />
      <path d="M85 46C62 64 40 107 34 144" fill="none" stroke="#fff" strokeOpacity=".45" strokeWidth="9" strokeLinecap="round" />
      {tone === "speckled" && (
        <g fill="#95613d" opacity=".5">
          {[[89, 64], [143, 81], [63, 121], [166, 139], [100, 166], [51, 196], [183, 205], [130, 234], [78, 259], [157, 271]].map(([cx, cy], i) => (
            <ellipse key={i} cx={cx} cy={cy} rx={i % 2 ? 3 : 2} ry={i % 2 ? 2 : 4} />
          ))}
        </g>
      )}
      <g fill="none" stroke="#89654c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {cracks >= 1 && <path d="m120 86-13 28 20 16-19 26 15 15" />}
        {cracks >= 2 && <path d="m108 156-29 11-12 25-25-6m81-15 25 12 9-24 30-12m-60-17 25-12 6-25" />}
      </g>
    </svg>
  );
}

function Chick() {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 280 330" className="h-auto w-full" aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="36%" cy="24%" r="80%">
          <stop offset="0%" stopColor="#fff3a6" />
          <stop offset="100%" stopColor="#edb73f" />
        </radialGradient>
      </defs>
      <g stroke="#d99332" strokeWidth="8" strokeLinecap="round">
        <path d="M112 282v28m0-6-15 9m15-9 12 9M168 282v28m0-6-12 9m12-9 15 9" />
      </g>
      <ellipse cx="140" cy="222" rx="84" ry="72" fill={`url(#${gradientId})`} />
      <path d="M72 194c-38 5-48 39-24 50 14 6 26-7 32-19m128-31c38 5 48 39 24 50-14 6-26-7-32-19" fill="#efc34f" />
      <path d="M130 62c-18-25-8-40 7-13 2-35 22-35 17-2 22-20 29-7 8 15" fill="#f2c74f" />
      <circle cx="140" cy="126" r="77" fill={`url(#${gradientId})`} />
      <ellipse cx="112" cy="124" rx="7" ry="10" fill="#493d38" />
      <ellipse cx="168" cy="124" rx="7" ry="10" fill="#493d38" />
      <g fill="#fff">
        <circle cx="114" cy="121" r="2.5" />
        <circle cx="170" cy="121" r="2.5" />
      </g>
      <g fill="#e99b73" opacity=".5">
        <ellipse cx="93" cy="147" rx="13" ry="7" />
        <ellipse cx="187" cy="147" rx="13" ry="7" />
      </g>
      <path d="m125 145 15-7 15 7-15 17Z" fill="#dc8d30" strokeLinejoin="round" />
      <path d="M70 257 90 269l19-17 22 19 22-17 20 15 22-14 15 9c-10 29-32 38-70 38-36 0-60-15-70-45Z" fill="#f7e7ce" />
    </svg>
  );
}

function Confetti() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {Array.from({ length: 16 }, (_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        return (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/3 h-3 w-2 rounded-sm"
            style={{ backgroundColor: ["#edb73f", "var(--primary)", "var(--accent)", "#e99b73"][i % 4] }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{ x: Math.cos(angle) * 125, y: [0, Math.sin(angle) * 120 - 50, Math.sin(angle) * 120 + 70], opacity: [0, 1, 1, 0], scale: [0, 1, 1], rotate: i * 65 }}
            transition={{ duration: 1.4, delay: i % 4 * 0.04, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}

export function EggIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const eggRef = useRef<HTMLButtonElement>(null);
  const resetRef = useRef<HTMLButtonElement>(null);
  const previouslyHatched = useRef(false);
  const reduce = useReducedMotionPreference();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const eggY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const [stage, setStage] = useState(0);
  const hatched = stage >= 3;

  useEffect(() => {
    if (hatched) resetRef.current?.focus({ preventScroll: true });
    else if (previouslyHatched.current) eggRef.current?.focus({ preventScroll: true });
    previouslyHatched.current = hatched;
  }, [hatched]);

  return (
    <div ref={ref} className="relative isolate mx-auto w-full max-w-md overflow-clip">
      <motion.div style={{ y: reduce ? 0 : eggY }} className="relative flex h-112 items-center justify-center sm:h-120">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute aspect-square w-[85%] rounded-full"
          animate={reduce ? { scale: 1 } : { scale: [1, 1.12, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {companions.map((style, i) => (
          <motion.div
            key={i}
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={style}
            animate={reduce ? { y: 0, rotate: 0 } : { y: [0, -18, 0], rotate: [0, 8, -6, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
          >
            <Egg tone={i === 1 ? "chestnut" : i === 2 ? "speckled" : "cream"} />
          </motion.div>
        ))}

        <div className="relative flex h-[24rem] w-full max-w-[20rem] items-end justify-center px-6 pb-8 sm:h-[26rem]">
          <AnimatePresence initial={false}>
            {!hatched ? (
              <motion.button
                key="egg"
                ref={eggRef}
                type="button"
                tabIndex={0}
                onClick={() => setStage((current) => Math.min(3, current + 1))}
                aria-label={`Toque no ovo para chocar. ${stage} de 3 toques.`}
                className="relative z-10 h-[21rem] w-full max-w-[18rem] cursor-pointer rounded-[50%] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:h-[24rem]"
                initial={false}
                animate={{ scale: 1, opacity: 1, rotate: reduce ? 0 : stage > 1 ? [0, -6, 6, -4, 4, 0] : [0, -2.5, 2.5, 0] }}
                exit={{ scale: reduce ? 1 : 1.4, opacity: 0, transition: { duration: reduce ? 0 : 0.35 } }}
                whileHover={reduce ? undefined : { scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.93 }}
                transition={{ type: "spring", stiffness: 130, damping: 15, rotate: { duration: stage > 1 ? 0.7 : 3.4, repeat: Infinity, ease: "easeInOut" } }}
              >
                <Egg cracks={stage} />
              </motion.button>
            ) : (
              <motion.div
                key="chick"
                className="absolute inset-x-6 bottom-8 z-10 mx-auto w-[calc(100%-3rem)] max-w-[17rem]"
                initial={reduce ? false : { scale: 0, y: 60 }}
                animate={{ scale: 1, y: 0 }}
                transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 210, damping: 13, delay: 0.25 }}
              >
                <Chick />
                {!reduce && <Confetti />}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-6 h-4 w-40 rounded-full bg-foreground/15 blur-md"
            animate={reduce || hatched ? { scaleX: 1 } : { scaleX: [1, 0.85, 1] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {!hatched ? (
          <motion.p
            aria-hidden="true"
            className="absolute bottom-4 text-sm text-muted-foreground"
            animate={reduce ? { opacity: 1, y: 0 } : { opacity: [0.4, 1, 0.4], y: [0, -6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            toque no ovo{stage > 0 && ` · ${stage} ${stage === 1 ? "toque" : "toques"}`}
          </motion.p>
        ) : (
          <motion.button
            ref={resetRef}
            type="button"
            onClick={() => setStage(0)}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={reduce ? undefined : { scale: 1.05 }}
            className="absolute bottom-2 z-20 cursor-pointer rounded-full border border-border bg-background/85 px-4 py-2 text-sm text-foreground hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            chocar outro ovo
          </motion.button>
        )}
      </motion.div>
      <p role="status" className="sr-only">
        {hatched ? "O pintainho nasceu! Pode chocar outro ovo." : stage > 0 ? `${stage} de 3 toques. O ovo está a rachar.` : "Toque três vezes no ovo para conhecer o pintainho."}
      </p>
    </div>
  );
}
