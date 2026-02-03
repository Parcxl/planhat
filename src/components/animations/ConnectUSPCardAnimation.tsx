import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const uspItems = [
  {
    title: "Geen contracten",
    body: "Altijd vrij om te schalen zonder vast te zitten aan minimale volumes of looptijden.",
  },
  {
    title: "Geen abonnementskosten",
    body: "Je betaalt alleen voor wat je verzendt. Geen maandelijkse kosten of verborgen fees.",
  },
  {
    title: "Snellere levertijden",
    body: "Door directe routes en minder schakels.",
  },
  {
    title: "Eén aanspreekpunt bij problemen",
    body: "Geen losse portals of carriers, Sendwise regelt het.",
  },
  {
    title: "Eerlijke indexeringen",
    body: "Transparante prijsaanpassingen zonder onverwachte verhogingen.",
  },
  {
    title: "Altijd het beste tarief per land",
    body: "Per bestemming de juiste vervoerder voor de beste prijs en kwaliteit.",
  },
  {
    title: "Lagere verzendkosten",
    body: "Door directe routes en minder schakels betaal je structureel minder per zending.",
  },
];

const ConnectUSPCardAnimation = () => {
  const prefersReducedMotion = useReducedMotion();
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(1);
  const [isTopExiting, setIsTopExiting] = useState(false);
  const [enteringIndex, setEnteringIndex] = useState<number | null>(null);
  const [isEntering, setIsEntering] = useState(true);
  const bottomIndexRef = useRef(bottomIndex);
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    bottomIndexRef.current = bottomIndex;
  }, [bottomIndex]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const stepExit = 420;
    const stepShift = 520;
    const cycleDuration = 3200;
    let cancelled = false;

    const schedule = (fn: () => void, delay: number) => {
      const id = window.setTimeout(() => {
        fn();
        timeoutsRef.current = timeoutsRef.current.filter((item) => item !== id);
      }, delay);
      timeoutsRef.current.push(id);
    };

    const runCycle = () => {
      schedule(() => {
        if (cancelled) return;
        setIsTopExiting(true);

        schedule(() => {
          if (cancelled) return;
          const currentBottom = bottomIndexRef.current;
          const nextIndex = (currentBottom + 1) % uspItems.length;

          setIsTopExiting(false);
          setIsEntering(false);
          setEnteringIndex(nextIndex);
          setTopIndex(currentBottom);
          setBottomIndex(nextIndex);

          schedule(() => {
            if (cancelled) return;
            setIsEntering(true);
          }, stepShift);
        }, stepExit);
      }, 0);

      schedule(() => {
        if (cancelled) return;
        runCycle();
      }, cycleDuration);
    };

    runCycle();

    return () => {
      cancelled = true;
      timeoutsRef.current.forEach((id) => window.clearTimeout(id));
      timeoutsRef.current = [];
    };
  }, [prefersReducedMotion]);

  const visibleItems = useMemo(
    () => [uspItems[topIndex], uspItems[bottomIndex]],
    [topIndex, bottomIndex]
  );

  return (
    <div className="w-full h-full">
      <div className="flex h-full flex-col gap-4 px-4 sm:px-5 py-4 sm:py-5">
        {visibleItems.map((item, index) => {
          const isTop = index === 0;
          const isEnteringCard = item === uspItems[enteringIndex ?? -1];
          const animateState = prefersReducedMotion
            ? { opacity: 1, y: 0 }
            : isTop && isTopExiting
              ? { opacity: 0, y: -12 }
              : isEnteringCard && !isEntering
                ? { opacity: 0, y: 12 }
                : { opacity: 1, y: 0 };

          return (
            <motion.div
              key={item.title}
              layout="position"
              initial={false}
              animate={animateState}
              transition={{
                ease: "easeInOut",
                duration: isTop && isTopExiting ? 0.42 : 0.42,
                opacity: { duration: 0.36 },
                layout: { duration: 0.52, ease: "easeInOut" },
              }}
              className="flex-1 rounded-2xl bg-white px-5 py-4 shadow-lg shadow-blue-500/10"
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-1.5 rounded-full bg-[#1a5ee5]" />
                <p className="text-[1.05rem] inter-semibold text-[#0F172A]">
                  {item.title}
                </p>
              </div>
              <p className="mt-3 text-sm inter-normal text-[#475569] leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectUSPCardAnimation;
