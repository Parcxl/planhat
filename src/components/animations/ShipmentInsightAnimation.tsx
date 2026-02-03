import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const shipments = [
  { id: "SW-4189", name: "H. de Jong", status: "Onderweg", color: "#16a34a" },
  { id: "SW-4190", name: "J. Bakker", status: "Aangemeld", color: "#1A5EE5" },
  { id: "SW-4191", name: "L. van Dijk", status: "Vertraging", color: "#f97316" },
];

const timelineSteps = [
  "Zending aangemeld",
  "Opgehaald door vervoerder",
  "Onderweg",
  "Aangekomen bij sorteercentrum",
  "Onderweg naar ontvanger",
  "Afgeleverd",
];

type Phase = "overview" | "transition" | "tracking" | "back";

const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ShipmentInsightAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const middleCardRef = useRef<HTMLDivElement | null>(null);
  const timeoutsRef = useRef<number[]>([]);

  const [ready, setReady] = useState(false);
  const [phase, setPhase] = useState<Phase>("overview");
  const [showTracking, setShowTracking] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const [trackingIndex, setTrackingIndex] = useState(-1);
  const [delivered, setDelivered] = useState(false);

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
        x: containerRect.width * 0.16,
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
    timeoutsRef.current.push(
      window.setTimeout(() => setCursorScale(1), 160)
    );
    timeoutsRef.current.push(
      window.setTimeout(() => setShowClickRing(false), 420)
    );
  };

  useEffect(() => {
    if (!ready) return;

    const clearTimers = () => {
      timeoutsRef.current.forEach((id) => window.clearTimeout(id));
      timeoutsRef.current = [];
    };

    const schedule = () => {
      timeoutsRef.current = [];
      setPhase("overview");
      setShowTracking(false);
      setHighlight(false);
      setTrackingIndex(-1);
      setDelivered(false);
      setCursorVisible(false);
      setCursorScale(1);
      setShowClickRing(false);

      const enterDelay = 800;
      const moveDuration = 1100;
      const transitionDelay = 250;
      const transitionDuration = 700;
      const stepDuration = 600;
      const pauseDuration = 1400;
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
          setPhase("transition");
          setShowTracking(true);
          setCursorVisible(false);
          setHighlight(false);
        }, enterDelay + moveDuration + transitionDelay)
      );

      const trackingStart = enterDelay + moveDuration + transitionDelay + transitionDuration;

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setPhase("tracking");
          setTrackingIndex(0);
        }, trackingStart)
      );

      timelineSteps.slice(1).forEach((_, index) => {
        timeoutsRef.current.push(
          window.setTimeout(() => {
            setTrackingIndex(index + 1);
            if (index + 1 === timelineSteps.length - 1) {
              setDelivered(true);
            }
          }, trackingStart + stepDuration * (index + 1))
        );
      });

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setPhase("back");
          setShowTracking(false);
        }, trackingStart + stepDuration * (timelineSteps.length - 1) + pauseDuration)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          schedule();
        },
        trackingStart + stepDuration * (timelineSteps.length - 1) + pauseDuration + backDuration)
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

  const trackingVariants = {
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
        animate={showTracking ? "shifted" : "initial"}
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
              Zendingen klaar voor verzending
            </p>
            <p className="text-sm inter-normal text-[#475569]">
              Selecteer een zending om een label te printen
            </p>
          </div>
          <div className="mt-5 space-y-3">
            {shipments.map((shipment, index) => (
              <div
                key={shipment.id}
                ref={index === 1 ? middleCardRef : null}
                className={`flex items-center justify-between gap-6 rounded-[16px] px-5 py-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  highlight && index === 1
                    ? "bg-[rgba(26,94,229,0.06)] shadow-[0_10px_28px_rgba(26,94,229,0.18)]"
                    : "bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm inter-semibold text-[#0F172A]">
                    {shipment.id}
                  </span>
                  <span className="text-sm inter-normal text-[#475569]">
                    {shipment.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs inter-normal text-[#475569]">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: shipment.color }}
                  />
                  <span className="whitespace-nowrap">{shipment.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-20 p-4 sm:p-5"
        animate={showTracking ? "active" : "initial"}
        variants={trackingVariants}
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
              Zending volgen
            </p>
            <p className="text-sm inter-normal text-[#475569]">
              Realtime status en updates
            </p>
          </div>

          <div className="mt-5 space-y-4">
            {timelineSteps.map((step, index) => {
              const isVisible = trackingIndex >= index;
              const isCompleted = trackingIndex > index || (delivered && index === timelineSteps.length - 1);
              const isActive = trackingIndex === index && !isCompleted;

              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 8 }}
                  transition={{ duration: 0.35, ease: easeOutCubic }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex flex-col items-center">
                    {isCompleted ? (
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#16a34a] text-[0.6rem] text-white">
                        ✓
                      </span>
                    ) : (
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          isActive ? "bg-[#1A5EE5]" : "bg-[#CBD5F5]"
                        }`}
                      />
                    )}
                    {index < timelineSteps.length - 1 && (
                      <span className="mt-2 h-6 w-px bg-[#E2E8F0]" />
                    )}
                  </div>
                  <div>
                    <p
                      className={`text-sm inter-normal ${
                        isActive
                          ? "text-[#0F172A]"
                          : isCompleted
                            ? "text-[#0F172A]"
                            : "text-[#94A3B8]"
                      }`}
                    >
                      {step}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {delivered && (
            <motion.div
              className="mt-5 flex items-center gap-2 text-sm inter-semibold text-[#0F172A]"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easeOutCubic }}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16a34a] text-[0.6rem] text-white">
                ✓
              </span>
              <span>Zending succesvol bezorgd</span>
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
          duration: 1,
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

export default ShipmentInsightAnimation;
