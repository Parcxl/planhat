import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

const BrandingExperienceAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackingRef = useRef<HTMLDivElement | null>(null);
  const timeoutsRef = useRef<number[]>([]);

  const [ready, setReady] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const [brandShift, setBrandShift] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorScale, setCursorScale] = useState(1);
  const [showClickRing, setShowClickRing] = useState(false);
  const [clickPulseKey, setClickPulseKey] = useState(0);

  const startPosRef = useRef({ x: 0, y: 0 });
  const targetPosRef = useRef({ x: 0, y: 0 });
  const [cursorFrom, setCursorFrom] = useState({ x: 0, y: 0 });
  const [cursorTo, setCursorTo] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      if (!containerRef.current || !trackingRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const targetRect = trackingRef.current.getBoundingClientRect();

      startPosRef.current = {
        x: containerRect.width * 0.18,
        y: containerRect.height * 0.78,
      };
      targetPosRef.current = {
        x: targetRect.left - containerRect.left + targetRect.width * 0.5,
        y: targetRect.top - containerRect.top + targetRect.height * 0.5,
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
      setBrandShift(false);
      setShowEmail(false);
      setShowConfirm(false);
      setCursorVisible(false);
      setCursorScale(1);
      setShowClickRing(false);

      const enterDelay = 900;
      const moveDuration = 1200;
      const transitionDelay = 250;
      const transitionDuration = 800;
      const brandShiftDelay = 700;
      const emailDelay = 1600;
      const confirmDelay = 2600;
      const pauseDuration = 1400;
      const backDuration = 900;

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setCursorVisible(true);
          setCursorFrom(startPosRef.current);
          setCursorTo(targetPosRef.current);
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
          setBrandShift(true);
        }, detailStart + brandShiftDelay)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setShowEmail(true);
        }, detailStart + emailDelay)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setShowConfirm(true);
        }, detailStart + confirmDelay)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setShowDetail(false);
        }, detailStart + confirmDelay + pauseDuration)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          schedule();
        }, detailStart + confirmDelay + pauseDuration + backDuration)
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
              Branding & tracking
            </p>
            <p className="text-sm inter-normal text-[#475569]">
              Pas je verzendcommunicatie aan naar je eigen merk
            </p>
          </div>
          <div className="mt-5 space-y-3">
            <div
              ref={trackingRef}
              className={`flex items-center justify-between gap-6 rounded-[16px] px-5 py-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                highlight
                  ? "bg-[rgba(26,94,229,0.06)] shadow-[0_10px_28px_rgba(26,94,229,0.18)]"
                  : "bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-sm inter-semibold text-[#0F172A]">
                  Tracking instellingen
                </span>
                <span className="text-xs inter-normal text-[#475569]">
                  Pas kleuren & logo aan
                </span>
              </div>
              <span className="text-xs inter-semibold text-[#1A5EE5]">Openen</span>
            </div>
            <div className="flex items-center justify-between gap-6 rounded-[16px] px-5 py-4 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
              <div className="flex flex-col">
                <span className="text-sm inter-semibold text-[#0F172A]">
                  E-mail previews
                </span>
                <span className="text-xs inter-normal text-[#475569]">
                  Bekijk updates in je merkstijl
                </span>
              </div>
              <span className="text-xs inter-normal text-[#475569]">Preview</span>
            </div>
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
              Tracking instellingen
            </p>
            <p className="text-sm inter-normal text-[#475569]">
              Voorbeeld van je klantbeleving
            </p>
          </div>

          <motion.div
            className="mt-5 space-y-3"
            animate={{ y: showEmail ? -6 : 0 }}
            transition={{ duration: 0.5, ease: easeOutCubic }}
          >
            <div
              className="rounded-[16px] bg-white p-4"
              style={{ boxShadow: "0 8px 24px rgba(15,23,42,0.08)" }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="h-9 w-9 rounded-md flex items-center justify-center text-xs inter-semibold text-white"
                    animate={{ backgroundColor: brandShift ? "#16a34a" : "#1A5EE5" }}
                    transition={{ duration: 0.6, ease: easeOutCubic }}
                  >
                    {brandShift ? "NW" : "SW"}
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="text-sm inter-semibold text-[#0F172A]">
                      Trackingpagina
                    </span>
                    <div className="relative h-4">
                      <motion.span
                        className="absolute left-0 top-0 text-xs inter-normal text-[#475569]"
                        animate={{ opacity: brandShift ? 0 : 1, y: brandShift ? -4 : 0 }}
                        transition={{ duration: 0.4, ease: easeOutCubic }}
                      >
                        Verzendupdates in Sendwise-stijl
                      </motion.span>
                      <motion.span
                        className="absolute left-0 top-0 text-xs inter-normal text-[#475569]"
                        animate={{ opacity: brandShift ? 1 : 0, y: brandShift ? 0 : 4 }}
                        transition={{ duration: 0.4, ease: easeOutCubic }}
                      >
                        Verzendupdates in jouw merkstijl
                      </motion.span>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="h-3 w-3 rounded-full"
                  animate={{ backgroundColor: brandShift ? "#16a34a" : "#1A5EE5" }}
                  transition={{ duration: 0.6, ease: easeOutCubic }}
                />
              </div>
              <div className="mt-4 space-y-2 pt-1">
                <motion.div
                  className="h-1.5 w-[86%] rounded-full"
                  animate={{ backgroundColor: brandShift ? "#16a34a" : "#1A5EE5" }}
                  transition={{ duration: 0.6, ease: easeOutCubic }}
                />
                <div className="h-1.5 w-[86%] rounded-full bg-[#E2E8F0]" />
                <div className="h-1.5 w-[86%] rounded-full bg-[#E2E8F0]" />
              </div>
            </div>

            <motion.div
              className="rounded-[16px] bg-white p-4"
              style={{ boxShadow: "0 8px 24px rgba(15,23,42,0.08)" }}
              animate={{ opacity: showEmail ? 1 : 0, y: showEmail ? 0 : 10 }}
              transition={{ duration: 0.5, ease: easeOutCubic }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs inter-semibold text-[#0F172A]">
                  Je pakket is onderweg
                </span>
                <span className="text-[0.7rem] inter-normal text-[#475569]">
                  Preview
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs inter-normal text-[#475569]">
                  Afzender
                </span>
                <motion.span
                  className="text-xs inter-semibold"
                  animate={{ color: brandShift ? "#16a34a" : "#1A5EE5" }}
                  transition={{ duration: 0.5, ease: easeOutCubic }}
                >
                  {brandShift ? "Nordic Ware" : "Sendwise"}
                </motion.span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-[#E2E8F0]" />
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-xs inter-semibold text-[#0F172A]"
              animate={{ opacity: showConfirm ? 1 : 0, y: showConfirm ? 0 : 6 }}
              transition={{ duration: 0.4, ease: easeOutCubic }}
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#16a34a] text-[0.55rem] text-white">
                ✓
              </span>
              <span>Consistente merkervaring actief</span>
            </motion.div>
          </motion.div>
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
          duration: 1.2,
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

export default BrandingExperienceAnimation;
