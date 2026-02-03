import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const orders = [
  { id: "#SW-10231", country: "Duitsland", status: "Klaar voor verzending" },
  { id: "#SW-10232", country: "Nederland", status: "Klaar voor verzending" },
];

const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ConnectFlowAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const orderRef = useRef<HTMLDivElement | null>(null);
  const sendButtonRef = useRef<HTMLButtonElement | null>(null);
  const timeoutsRef = useRef<number[]>([]);

  const [ready, setReady] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const [loading, setLoading] = useState(false);

  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorScale, setCursorScale] = useState(1);
  const [showClickRing, setShowClickRing] = useState(false);
  const [clickPulseKey, setClickPulseKey] = useState(0);

  const startPosRef = useRef({ x: 0, y: 0 });
  const orderPosRef = useRef({ x: 0, y: 0 });
  const sendPosRef = useRef({ x: 0, y: 0 });
  const [cursorFrom, setCursorFrom] = useState({ x: 0, y: 0 });
  const [cursorTo, setCursorTo] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      if (!containerRef.current || !orderRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const orderRect = orderRef.current.getBoundingClientRect();

      startPosRef.current = {
        x: containerRect.width * 0.16,
        y: containerRect.height * 0.78,
      };
      orderPosRef.current = {
        x: orderRect.left - containerRect.left + orderRect.width * 0.5,
        y: orderRect.top - containerRect.top + orderRect.height * 0.5,
      };

      if (sendButtonRef.current) {
        const btnRect = sendButtonRef.current.getBoundingClientRect();
        sendPosRef.current = {
          x: btnRect.left - containerRect.left + btnRect.width * 0.5,
          y: btnRect.top - containerRect.top + btnRect.height * 0.5,
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
  }, [showDetail, loading, showLabel]);

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
      setShowLabel(false);
      setHighlight(false);
      setLoading(false);
      setCursorVisible(false);
      setCursorScale(1);
      setShowClickRing(false);

      const enterDelay = 900;
      const moveDuration = 1100;
      const transitionDelay = 260;
      const transitionDuration = 700;
      const sendMoveDelay = 650;
      const sendMoveDuration = 900;
      const loadingTime = 900;
      const labelPause = 1600;
      const backDuration = 900;

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setCursorVisible(true);
          setCursorFrom(startPosRef.current);
          setCursorTo(orderPosRef.current);
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
          setCursorFrom(orderPosRef.current);
          setCursorTo(sendPosRef.current);
        }, detailStart + sendMoveDelay)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          triggerClick();
          setLoading(true);
        }, detailStart + sendMoveDelay + sendMoveDuration)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setLoading(false);
          setShowDetail(false);
          setShowLabel(true);
          setCursorVisible(false);
        }, detailStart + sendMoveDelay + sendMoveDuration + loadingTime)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setShowLabel(false);
        }, detailStart + sendMoveDelay + sendMoveDuration + loadingTime + labelPause)
      );

      timeoutsRef.current.push(
        window.setTimeout(() => {
          schedule();
        }, detailStart + sendMoveDelay + sendMoveDuration + loadingTime + labelPause + backDuration)
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

  const labelVariants = {
    initial: { opacity: 0, scale: 0.98 },
    active: { opacity: 1, scale: 1 },
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-[24px] border border-[#E2E8F0] bg-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[rgba(26,94,229,0.06)]" />

      <motion.div
        className="absolute inset-0 z-10 p-4 sm:p-5"
        animate={showDetail || showLabel ? "shifted" : "initial"}
        variants={overviewVariants}
        transition={{ duration: 0.6, ease: easeOutCubic }}
      >
        <div
          className="rounded-[20px] bg-white p-[28px] h-full"
          style={{
            boxShadow:
              "0 12px 32px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.04)",
          }}
        >
          <div className="space-y-1">
            <p className="text-[1.05rem] inter-semibold text-[#0F172A] tracking-[-0.01em]">
              Orders
            </p>
            <p className="text-sm inter-normal text-[#475569]">
              Overzicht zendingen
            </p>
          </div>

          <div className="mt-5 grid grid-cols-[1.1fr_1fr_1.4fr] gap-4 text-[0.7rem] uppercase tracking-[0.12em] text-[#94A3B8]">
            <span>Ordernummer</span>
            <span>Bestemming</span>
            <span>Status</span>
          </div>

          <div className="mt-3 space-y-3">
            {orders.map((order, index) => (
              <div
                key={order.id}
                ref={index === 0 ? orderRef : null}
                className={`grid grid-cols-[1.1fr_1fr_1.4fr] items-center gap-4 rounded-[16px] px-5 py-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  highlight && index === 0
                    ? "bg-[rgba(26,94,229,0.06)] shadow-[0_10px_28px_rgba(26,94,229,0.18)]"
                    : "bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
                }`}
              >
                <span className="text-sm inter-semibold text-[#0F172A]">{order.id}</span>
                <span className="text-sm inter-normal text-[#475569]">{order.country}</span>
                <span className="text-sm inter-normal text-[#475569]">{order.status}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-20 p-4 sm:p-5"
        animate={showDetail && !showLabel ? "active" : "initial"}
        variants={detailVariants}
        transition={{ duration: 0.6, ease: easeOutCubic }}
      >
        <div
          className="rounded-[20px] bg-white p-[28px] h-full"
          style={{
            boxShadow:
              "0 12px 32px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.04)",
          }}
        >
          <div className="space-y-1">
            <p className="text-[1.05rem] inter-semibold text-[#0F172A] tracking-[-0.01em]">
              Order #SW-10231
            </p>
            <p className="text-sm inter-normal text-[#475569]">
              Vaste carrier voor Duitsland
            </p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-[16px] bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
              <p className="text-xs inter-normal text-[#475569]">Bestemming</p>
              <p className="text-sm inter-semibold text-[#0F172A]">Duitsland</p>
            </div>
            <div className="rounded-[16px] bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
              <p className="text-xs inter-normal text-[#475569]">Vervoerder</p>
              <div className="mt-2 flex items-center gap-2">
                <img src="/sendwise-dhl.svg" alt="DHL" className="h-5" />
                <p className="text-sm inter-semibold text-[#0F172A]">DHL</p>
              </div>
            </div>
          </div>

          <button
            ref={sendButtonRef}
            type="button"
            className="mt-6 w-full rounded-md bg-[#1A5EE5] px-3 py-2 text-xs inter-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_8px_18px_rgba(26,94,229,0.22)]"
          >
            {loading ? "Verzenden..." : "Verzenden"}
          </button>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-30 flex items-center justify-center p-4 sm:p-5"
        animate={showLabel ? "active" : "initial"}
        variants={labelVariants}
        transition={{ duration: 0.6, ease: easeOutCubic }}
      >
        <div
          className="w-full max-w-[18rem] rounded-[20px] bg-white p-5"
          style={{ boxShadow: "0 18px 40px rgba(15,23,42,0.14)" }}
        >
          <div className="flex items-center justify-between">
            <img src="/sendwise-dhl.svg" alt="DHL" className="h-5" />
            <span className="text-xs inter-normal text-[#475569]">Label</span>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <img src="/barcode.png" alt="Barcode" className="h-10 w-[70%] object-contain" />
          </div>
          <div className="mt-4 space-y-1">
            <p className="text-xs inter-normal text-[#475569]">Bestemming</p>
            <p className="text-sm inter-semibold text-[#0F172A]">Duitsland</p>
          </div>
          <div className="mt-3 space-y-1">
            <p className="text-xs inter-normal text-[#475569]">Trackingnummer</p>
            <p className="text-sm inter-semibold text-[#0F172A]">DHL-9843-9921</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-0 top-0 z-40 h-2.5 w-2.5 rounded-full bg-[#1A5EE5]"
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

export default ConnectFlowAnimation;
