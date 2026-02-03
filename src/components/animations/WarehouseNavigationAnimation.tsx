import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const locations = [
  { code: "A-12", label: "Gang A", status: "Startpunt", color: "#1A5EE5" },
  { code: "B-07", label: "Gang B", status: "Volgend", color: "#64748b" },
  { code: "C-03", label: "Gang C", status: "Daarna", color: "#64748b" },
];

const steps = [
  "Locatie gevonden",
  "Product gescand",
  "Locatie bevestigd",
];

const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WarehouseNavigationAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const middleCardRef = useRef<HTMLDivElement | null>(null);
  const timeoutsRef = useRef<number[]>([]);

  const [ready, setReady] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const [stepIndex, setStepIndex] = useState(-1);
  const [showComplete, setShowComplete] = useState(false);

  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorScale, setCursorScale] = useState(1);
  const [showClickRing, setShowClickRing] = useState(false);
  const [clickPulseKey, setClickPulseKey] = useState(0);

  const startPosRef = useRef({ x: 0, y: 0 });
  const cardPosRef = useRef({ x: 0, y: 0 });
  const [cursorFrom, setCursorFrom] = useState({ x: 0, y: 0 });
  const [cursorTo, setCursorTo] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      if (!containerRef.current || !middleCardRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const cardRect = middleCardRef.current.getBoundingClientRect();

      startPosRef.current = {
        x: containerRect.width * 0.18,
        y: containerRect.height * 0.78,
      };
      cardPosRef.current = {
        x: cardRect.left - containerRect.left + cardRect.width * 0.5,
        y: cardRect.top - containerRect.top + cardRect.height * 0.5,
      };

      setReady(true);
    };

    measure();
    const handleResize = () => requestAnimationFrame(measure);
    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const triggerClick = () => {
    setCursorScale(0.75);
    setShowClickRing(true);
    setClickPulseKey((prev) => prev + 1);
    timeoutsRef.current.push(window.setTimeout(() => setCursorScale(1), 160));
    timeoutsRef.current.push(window.setTimeout(() => setShowClickRing(false), 420));
  };

  useEffect(() => {
    if (!ready) return;

    const clearTimers = () => {
      timeoutsRef.current.forEach((id) => window.clearTimeout(id));
      timeoutsRef.current = [];
    };

    const schedule = () => {
      timeoutsRef.current = [];
      setShowDetail(false);
      setHighlight(false);
      setStepIndex(-1);
      setShowComplete(false);
      setCursorVisible(false);
      setCursorScale(1);
      setShowClickRing(false);

      const enterDelay = 850;
      const moveDuration = 1100;
      const transitionDelay = 250;
      const transitionDuration = 700;
      const stepDuration = 600;
      const pauseDuration = 3200;
      const backDuration = 900;

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setCursorVisible(true);
          setCursorFrom(startPosRef.current);
          setCursorTo(cardPosRef.current);
        }, enterDelay)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          triggerClick();
          setHighlight(true);
        }, enterDelay + moveDuration)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setShowDetail(true);
          setCursorVisible(false);
          setHighlight(false);
        }, enterDelay + moveDuration + transitionDelay)
      );

      const detailStart = enterDelay + moveDuration + transitionDelay + transitionDuration;

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setStepIndex(0);
        }, detailStart)
      );

      steps.slice(1).forEach((_, index) => {
        timeoutsRef.current.push(
          window.setTimeout(() => {
            const nextIndex = index + 1;
            setStepIndex(nextIndex);
            if (nextIndex === steps.length - 1) {
              setShowComplete(true);
            }
          }, detailStart + stepDuration * (index + 1))
        );
      });

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setShowDetail(false);
        }, detailStart + stepDuration * (steps.length - 1) + pauseDuration)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          schedule();
        }, detailStart + stepDuration * (steps.length - 1) + pauseDuration + backDuration)
      );
    };

    clearTimers();
    schedule();

    return () => clearTimers();
  }, [ready]);

  const overviewVariants = {
    initial: { x: 0, opacity: 1, scale: 1 },
    shifted: { x: -50, opacity: 0, scale: 0.98 },
  };

  const detailVariants = {
    initial: { x: 60, opacity: 0, scale: 0.98 },
    active: { x: 0, opacity: 1, scale: 1 },
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-[24px] border border-[#E2E8F0] bg-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[rgba(26,94,229,0.06)]" />

      <motion.div
        className="absolute inset-0 z-10 p-4 sm:p-5"
        animate={showDetail ? "shifted" : "initial"}
        variants={overviewVariants}
        transition={{ duration: 0.6, ease: easeOutCubic }}
      >
        <div
          className="rounded-[20px] bg-white p-[28px]"
          style={{
            boxShadow:
              "0 12px 32px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.04)",
          }}
        >
          <div className="space-y-1">
            <p className="text-[1.05rem] inter-semibold text-[#0F172A] tracking-[-0.01em]">
              Magazijnroute
            </p>
            <p className="text-sm inter-normal text-[#475569]">
              Locatiegestuurd picken
            </p>
          </div>
          <div className="mt-5 space-y-3">
            {locations.map((location, index) => (
              <div
                key={location.code}
                ref={index === 1 ? middleCardRef : null}
                className={`flex items-center justify-between gap-6 rounded-[16px] px-5 py-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  highlight && index === 1
                    ? "bg-[rgba(26,94,229,0.06)] shadow-[0_10px_28px_rgba(26,94,229,0.18)]"
                    : "bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm inter-semibold text-[#0F172A]">
                    {location.code}
                  </span>
                  <span className="text-sm inter-normal text-[#475569]">
                    {location.label}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs inter-normal text-[#475569]">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: location.color }}
                  />
                  <span className="whitespace-nowrap">{location.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-20 p-4 sm:p-5"
        animate={showDetail ? "active" : "initial"}
        variants={detailVariants}
        transition={{ duration: 0.6, ease: easeOutCubic }}
      >
        <div
          className="rounded-[20px] bg-white p-[28px]"
          style={{
            boxShadow:
              "0 12px 32px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.04)",
          }}
        >
          <div className="space-y-1">
            <p className="text-[1.05rem] inter-semibold text-[#0F172A] tracking-[-0.01em]">
              Locatie A-12
            </p>
            <p className="text-sm inter-normal text-[#475569]">
              Scan en bevestig onderweg
            </p>
          </div>

          <div className="mt-4 rounded-[16px] bg-white p-4 shadow-[0_6px_18px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between">
              <span className="text-sm inter-semibold text-[#0F172A]">Scanner</span>
              <span className="text-xs inter-normal text-[#475569]">
                {stepIndex >= 1 ? "Scan OK" : "Gereed"}
              </span>
            </div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-[#E2E8F0]" />
            <motion.div
              className="mt-2 h-1.5 rounded-full"
              animate={{ width: stepIndex >= 1 ? "100%" : "40%", backgroundColor: stepIndex >= 1 ? "#1A5EE5" : "#CBD5E1" }}
              transition={{ duration: 0.5, ease: easeOutCubic }}
            />
          </div>

          <div className="mt-4 space-y-3">
            {steps.map((step, index) => {
              const isDone = stepIndex > index;
              const isActive = stepIndex === index;
              const dotColor = isDone ? "#16a34a" : isActive ? "#1A5EE5" : "#CBD5E1";
              return (
                <div key={step} className="flex items-start gap-3">
                  <span
                    className="mt-1 h-2 w-2 rounded-full"
                    style={{ backgroundColor: dotColor }}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm inter-semibold text-[#0F172A]">
                      {step}
                    </span>
                    <span className="text-xs inter-normal text-[#475569]">
                      Statusupdate per locatie
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {showComplete && (
            <motion.div
              className="mt-3 flex items-center gap-2 text-xs inter-semibold text-[#0F172A]"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easeOutCubic }}
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#16a34a] text-[0.55rem] text-white">
                ✓
              </span>
              <span>Locatie bevestigd</span>
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div
        className="absolute left-0 top-0 z-30 h-2.5 w-2.5 rounded-full bg-[#1A5EE5]"
        animate={{
          opacity: cursorVisible ? 1 : 0,
          x: [
            cursorFrom.x,
            cursorFrom.x + (cursorTo.x - cursorFrom.x) * 0.6 + 10,
            cursorTo.x + (cursorTo.x - cursorFrom.x) * 0.04,
            cursorTo.x,
          ],
          y: [
            cursorFrom.y,
            cursorFrom.y + (cursorTo.y - cursorFrom.y) * 0.3 - 10,
            cursorTo.y - 4,
            cursorTo.y,
          ],
          scale: cursorScale,
        }}
        transition={{
          duration: 1.1,
          ease: easeOutCubic,
          times: [0, 0.6, 0.85, 1],
        }}
      >
        {showClickRing && (
          <motion.span
            key={clickPulseKey}
            className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1A5EE5]"
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default WarehouseNavigationAnimation;
