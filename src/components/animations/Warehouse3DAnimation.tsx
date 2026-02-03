import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const zones = [
  { id: "Zone A", label: "Stellingen A", status: "Actief" },
  { id: "Zone B", label: "Stellingen B", status: "Geselecteerd" },
  { id: "Zone C", label: "Stellingen C", status: "Vrij" },
];

const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Warehouse3DAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const middleCardRef = useRef<HTMLDivElement | null>(null);
  const timeoutsRef = useRef<number[]>([]);

  const [ready, setReady] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const [zoneFocus, setZoneFocus] = useState(false);
  const [cameraShift, setCameraShift] = useState(false);

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
      setZoneFocus(false);
      setCameraShift(false);
      setCursorVisible(false);
      setCursorScale(1);
      setShowClickRing(false);

      const enterDelay = 900;
      const moveDuration = 1100;
      const transitionDelay = 250;
      const transitionDuration = 750;
      const focusDelay = 800;
      const cameraDelay = 1800;
      const pauseDuration = 2600;
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
          setZoneFocus(true);
        }, detailStart + focusDelay)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setCameraShift(true);
        }, detailStart + cameraDelay)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setCameraShift(false);
        }, detailStart + cameraDelay + 900)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setShowDetail(false);
        }, detailStart + cameraDelay + pauseDuration)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          schedule();
        }, detailStart + cameraDelay + pauseDuration + backDuration)
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
              Magazijnontwerp
            </p>
            <p className="text-sm inter-normal text-[#475569]">
              3D overzicht per zone
            </p>
          </div>
          <div className="mt-5 space-y-3">
            {zones.map((zone, index) => (
              <div
                key={zone.id}
                ref={index === 1 ? middleCardRef : null}
                className={`flex items-center justify-between gap-6 rounded-[16px] px-5 py-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  highlight && index === 1
                    ? "bg-[rgba(26,94,229,0.06)] shadow-[0_10px_28px_rgba(26,94,229,0.18)]"
                    : "bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm inter-semibold text-[#0F172A]">
                    {zone.id}
                  </span>
                  <span className="text-sm inter-normal text-[#475569]">
                    {zone.label}
                  </span>
                </div>
                <span className="text-xs inter-normal text-[#475569]">
                  {zone.status}
                </span>
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
              3D weergave
            </p>
            <p className="text-sm inter-normal text-[#475569]">
              Inzicht in voorraadverdeling
            </p>
          </div>

          <div className="mt-4 rounded-[16px] border border-[#E2E8F0] bg-[#F8FAFC] p-4">
            <motion.div
              className="relative h-[110px]"
              animate={{
                x: cameraShift ? 3 : 0,
                y: cameraShift ? -2 : 0,
              }}
              transition={{ duration: 0.8, ease: easeOutCubic }}
            >
              <div className="absolute inset-0 grid grid-cols-3 gap-3 transform-gpu skew-y-[-6deg]">
                {Array.from({ length: 9 }).map((_, index) => {
                  const isFocus = zoneFocus && index % 3 === 1;
                  return (
                    <div
                      key={`rack-${index}`}
                      className={`relative h-8 rounded-md border border-[#E2E8F0] ${
                        isFocus ? "bg-[rgba(26,94,229,0.08)]" : "bg-white"
                      } shadow-[0_6px_14px_rgba(15,23,42,0.08)]`}
                    >
                      <div className="absolute inset-x-1 top-1 h-1 rounded-full bg-[#E2E8F0]" />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs inter-normal text-[#475569]">
            <span>Zone B geselecteerd</span>
            <span className="text-[#1A5EE5] inter-semibold">Beschikbaar</span>
          </div>
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

export default Warehouse3DAnimation;
