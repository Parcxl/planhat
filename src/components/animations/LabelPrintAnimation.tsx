import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const orders = [
  { id: "SW-3021", name: "Mevrouw Jansen" },
  { id: "SW-3022", name: "Dhr. Peters" },
  { id: "SW-3023", name: "Sanne de Vries" },
];

const barcode = [2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2];

type Phase = "dashboard" | "select" | "popup" | "print" | "label";

const LabelPrintAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const popupButtonRef = useRef<HTMLButtonElement | null>(null);
  const timeoutsRef = useRef<number[]>([]);
  const startPosRef = useRef({ x: 0, y: 0 });
  const rowPosRef = useRef({ x: 0, y: 0 });
  const buttonPosRef = useRef({ x: 0, y: 0 });

  const [ready, setReady] = useState(false);
  const [phase, setPhase] = useState<Phase>("dashboard");
  const [highlight, setHighlight] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorScale, setCursorScale] = useState(1);
  const [showClickRing, setShowClickRing] = useState(false);
  const [clickPulseKey, setClickPulseKey] = useState(0);

  const [cursorFrom, setCursorFrom] = useState({ x: 0, y: 0 });
  const [cursorTo, setCursorTo] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      if (!containerRef.current || !rowRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const rowRect = rowRef.current.getBoundingClientRect();

      startPosRef.current = {
        x: containerRect.width * 0.12,
        y: containerRect.height * 0.78,
      };
      rowPosRef.current = {
        x: rowRect.left - containerRect.left + rowRect.width * 0.5,
        y: rowRect.top - containerRect.top + rowRect.height * 0.5,
      };

      if (popupButtonRef.current) {
        const buttonRect = popupButtonRef.current.getBoundingClientRect();
        buttonPosRef.current = {
          x: buttonRect.left - containerRect.left + buttonRect.width / 2,
          y: buttonRect.top - containerRect.top + buttonRect.height / 2,
        };
      }

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
  }, [popupVisible]);

  const triggerClick = () => {
    setCursorScale(0.75);
    setShowClickRing(true);
    setClickPulseKey((prev) => prev + 1);
    timeoutsRef.current.push(
      window.setTimeout(() => setCursorScale(1), 140)
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
      setPhase("dashboard");
      setHighlight(false);
      setPopupVisible(false);
      setCursorVisible(false);
      setCursorScale(1);
      setShowClickRing(false);

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setPhase("select");
          setCursorVisible(true);
          setCursorFrom(startPosRef.current);
          setCursorTo(rowPosRef.current);
        }, 800)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          triggerClick();
          setHighlight(true);
        }, 800 + 1100)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setPopupVisible(true);
          setPhase("popup");
        }, 800 + 1100 + 400)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setPhase("print");
          setCursorFrom(rowPosRef.current);
          setCursorTo(buttonPosRef.current);
        }, 800 + 1100 + 1100)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          triggerClick();
          setPopupVisible(false);
          setPhase("label");
          setHighlight(false);
          setCursorVisible(false);
        }, 800 + 1100 + 1100 + 1100)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          schedule();
        }, 800 + 1100 + 1100 + 1100 + 2400)
      );
    };

    clearTimers();
    schedule();

    return () => clearTimers();
  }, [ready]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-xl border border-[#E2E8F0] bg-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(26,94,229,0.08),rgba(26,94,229,0.04))] backdrop-blur-[6px]" />

      <motion.div
        className="relative z-10 p-4 sm:p-5"
        animate={
          phase === "label"
            ? { opacity: 0, y: 6, scale: 0.98, filter: "blur(4px)" }
            : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
        }
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
            {orders.map((order, index) => (
              <div
                key={order.id}
                ref={index === 1 ? rowRef : null}
                className={`flex items-center justify-between gap-6 rounded-[14px] px-5 py-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  highlight && index === 1
                    ? "bg-[rgba(26,94,229,0.06)] shadow-[0_10px_28px_rgba(26,94,229,0.18)]"
                    : "bg-white shadow-[0_4px_12px_rgba(15,23,42,0.06)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.10)] hover:-translate-y-0.5"
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm inter-semibold text-[#0F172A]">
                    {order.id}
                  </span>
                  <span className="text-sm inter-normal text-[#475569]">
                    {order.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs inter-normal text-[#475569]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a]" />
                  <span className="whitespace-nowrap">
                    Klaar voor verzending
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {popupVisible && (
          <motion.div
            className="absolute left-1/2 top-[38%] z-20 w-[200px] -translate-x-1/2 rounded-[16px] bg-white px-3 py-3 text-left"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              boxShadow: "0 16px 40px rgba(15,23,42,0.16)",
            }}
          >
            <p className="text-sm inter-semibold text-[#0F172A]">
              Label uitprinten
            </p>
            <button
              ref={popupButtonRef}
              type="button"
              className="mt-3 w-full rounded-md border border-[#1A5EE5] bg-[#1A5EE5] px-3 py-1.5 text-xs inter-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#1A5EE5]/95 hover:shadow-[0_8px_18px_rgba(26,94,229,0.22)]"
            >
              Uitprinten
            </button>
            <button
              type="button"
              className="mt-2 w-full rounded-md border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs inter-normal text-[#475569] transition-colors duration-300 ease-in-out hover:bg-[#F8FAFC]"
            >
              Annuleren
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {phase === "label" && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center p-4 sm:p-5"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="w-full max-w-[320px] rounded-lg border border-[#E2E8F0] bg-white px-4 py-4"
              style={{ boxShadow: "0 12px 32px rgba(15,23,42,0.12)" }}
            >
              <p className="text-sm text-[#0F172A] inter-semibold">
                Verzendlabel aangemaakt
              </p>
              <div className="mt-3 flex items-center gap-[3px]">
                {barcode.map((width, index) => (
                  <span
                    key={`${width}-${index}`}
                    className="h-8 bg-[#0F172A]"
                    style={{ width: `${width}px` }}
                  />
                ))}
              </div>
              <div className="mt-4 text-xs text-[#475569] inter-normal">
                Trackingnummer
              </div>
              <div className="text-sm text-[#0F172A] inter-semibold font-mono">
                SW-TRK-293184
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
          times: [0, 0.6, 0.85, 1],
        }}
      >
        <AnimatePresence>
          {showClickRing && (
            <motion.span
              key={clickPulseKey}
              className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1A5EE5]"
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 3, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default LabelPrintAnimation;
