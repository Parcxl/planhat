import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const invoices = [
  { id: "INV-2401", period: "Jan 2026", amount: "€ 1.284,40", status: "Open", color: "#1A5EE5" },
  { id: "INV-2399", period: "Dec 2025", amount: "€ 1.112,10", status: "Betaald", color: "#16a34a" },
  { id: "INV-2398", period: "Nov 2025", amount: "€ 987,75", status: "Betaald", color: "#16a34a" },
];

type Phase = "overview" | "transition" | "detail" | "pay" | "back";

const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

const BillingInsightAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const middleCardRef = useRef<HTMLDivElement | null>(null);
  const payButtonRef = useRef<HTMLButtonElement | null>(null);
  const timeoutsRef = useRef<number[]>([]);

  const [ready, setReady] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const [paying, setPaying] = useState(false);
  const [paid, setPaid] = useState(false);

  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorScale, setCursorScale] = useState(1);
  const [showClickRing, setShowClickRing] = useState(false);
  const [clickPulseKey, setClickPulseKey] = useState(0);

  const startPosRef = useRef({ x: 0, y: 0 });
  const cardPosRef = useRef({ x: 0, y: 0 });
  const payPosRef = useRef({ x: 0, y: 0 });
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

      if (payButtonRef.current) {
        const rect = payButtonRef.current.getBoundingClientRect();
        payPosRef.current = {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
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
  }, [showDetail, paying, paid]);

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
      setShowDetail(false);
      setHighlight(false);
      setPaying(false);
      setPaid(false);
      setCursorVisible(false);
      setCursorScale(1);
      setShowClickRing(false);

      const enterDelay = 800;
      const moveDuration = 1100;
      const transitionDelay = 250;
      const transitionDuration = 750;
      const payMoveDelay = 850;
      const payDelay = 1000;
      const loadingTime = 800;
      const pauseDuration = 1700;
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
          setCursorVisible(true);
          setCursorFrom(cardPosRef.current);
          setCursorTo(payPosRef.current);
        }, detailStart + payMoveDelay)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          triggerClick();
          setPaying(true);
        }, detailStart + payMoveDelay + payDelay)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setPaying(false);
          setPaid(true);
          setCursorVisible(false);
        }, detailStart + payMoveDelay + payDelay + loadingTime)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setShowDetail(false);
        }, detailStart + payMoveDelay + payDelay + loadingTime + pauseDuration)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          schedule();
        },
        detailStart + payMoveDelay + payDelay + loadingTime + pauseDuration + backDuration)
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
              Facturen & kosten
            </p>
            <p className="text-sm inter-normal text-[#475569]">
              Volledig inzicht in je verzendkosten
            </p>
          </div>
          <div className="mt-5 space-y-3">
            {invoices.map((invoice, index) => (
              <div
                key={invoice.id}
                ref={index === 1 ? middleCardRef : null}
                className={`flex items-center justify-between gap-6 rounded-[16px] px-5 py-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  highlight && index === 1
                    ? "bg-[rgba(26,94,229,0.06)] shadow-[0_10px_28px_rgba(26,94,229,0.18)]"
                    : "bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm inter-semibold text-[#0F172A]">
                    {invoice.id}
                  </span>
                  <span className="text-sm inter-normal text-[#475569]">
                    {invoice.period}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm inter-semibold text-[#0F172A]">
                    {invoice.amount}
                  </span>
                  <div className="flex items-center gap-2 text-xs inter-normal text-[#475569]">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: invoice.color }}
                    />
                    <span className="whitespace-nowrap">{invoice.status}</span>
                  </div>
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
              Factuuroverzicht
            </p>
            <p className="text-sm inter-normal text-[#475569]">
              Geen verborgen kosten
            </p>
          </div>
          <div className="mt-5 space-y-3">
            {[
              { label: "Verzendkosten", value: "€ 1.084,40" },
              { label: "Totaalbedrag", value: "€ 1.284,40" },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between text-sm">
                <span className="inter-normal text-[#475569]">{row.label}</span>
                <span className="inter-semibold text-[#0F172A]">{row.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-xs inter-normal text-[#475569]">
            <span>Status</span>
            <span className={`inter-semibold ${paid ? "text-[#16a34a]" : "text-[#1A5EE5]"}`}>
              {paid ? "Betaald" : "Open"}
            </span>
          </div>
          <button
            ref={payButtonRef}
            type="button"
            className="mt-5 w-full rounded-md bg-[#1A5EE5] px-3 py-2 text-xs inter-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_8px_18px_rgba(26,94,229,0.22)]"
          >
            {paying ? "Bezig met betalen..." : paid ? "Betaald" : "Factuur betalen"}
          </button>
          {paid && (
            <motion.div
              className="mt-3 flex items-center gap-2 text-xs inter-semibold text-[#0F172A]"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easeOutCubic }}
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#16a34a] text-[0.55rem] text-white">
                ✓
              </span>
              <span>Betaling ontvangen</span>
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

export default BillingInsightAnimation;
