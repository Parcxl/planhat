import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

const CarrierAssuranceAnimation = () => {
  const [phase, setPhase] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    let timeouts: number[] = [];

    const schedule = () => {
      timeouts = [];
      setPhase(0);

      const startDelay = 900;
      const detailDelay = 1200;
      const shippedDelay = 2100;
      const deliveredDelay = 3000;
      const pauseDuration = 1600;

      timeouts.push(window.setTimeout(() => setPhase(1), startDelay));
      timeouts.push(window.setTimeout(() => setPhase(2), startDelay + detailDelay));
      timeouts.push(window.setTimeout(() => setPhase(3), startDelay + shippedDelay));
      timeouts.push(window.setTimeout(() => setPhase(4), startDelay + deliveredDelay));
      timeouts.push(
        window.setTimeout(() => {
          setResetKey((prev) => prev + 1);
          schedule();
        }, startDelay + deliveredDelay + pauseDuration)
      );
    };

    schedule();
    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
      timeouts = [];
    };
  }, []);

  return (
    <div className="relative w-full h-full rounded-[24px] border border-[#E2E8F0] bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[rgba(26,94,229,0.06)]" />
      <div className="relative z-10 h-full p-4 sm:p-5">
        <div
          className="rounded-[20px] bg-white p-[28px] h-full"
          style={{
            boxShadow:
              "0 12px 32px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.04)",
          }}
        >
          <motion.div
            key={resetKey}
            className="h-full"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="space-y-1"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: phase >= 1 ? 0 : 1, y: phase >= 1 ? -4 : 0 }}
              transition={{ duration: 0.4, ease: easeOutCubic }}
            >
              <p className="text-[1.05rem] inter-semibold text-[#0F172A] tracking-[-0.01em]">
                Orderoverzicht
              </p>
              <p className="text-sm inter-normal text-[#475569]">
                CONNECT verzendingen
              </p>
            </motion.div>

            <motion.div
              className="mt-5 rounded-[16px] bg-white px-5 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: phase >= 1 ? 0 : 1, y: phase >= 1 ? 6 : 0 }}
              transition={{ duration: 0.4, ease: easeOutCubic }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs inter-normal text-[#475569]">Order</p>
                  <p className="text-sm inter-semibold text-[#0F172A]">#SW-10421</p>
                </div>
                <div>
                  <p className="text-xs inter-normal text-[#475569]">Bestemming</p>
                  <p className="text-sm inter-semibold text-[#0F172A]">Duitsland</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 12 }}
              transition={{ duration: 0.5, ease: easeOutCubic }}
            >
              <div className="space-y-1">
                <p className="text-[1.05rem] inter-semibold text-[#0F172A] tracking-[-0.01em]">
                  Order #SW-10421
                </p>
                <p className="text-sm inter-normal text-[#475569]">
                  Vaste vervoerder per land
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
                    <div>
                      <p className="text-sm inter-semibold text-[#0F172A]">DHL</p>
                      <p className="text-[0.7rem] inter-normal text-[#475569]">Vervoerder</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[14px] bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                <div className="flex items-center justify-between">
                  <p className="text-sm inter-semibold text-[#0F172A]">Status</p>
                  <motion.span
                    className={`text-xs inter-semibold ${
                      phase >= 4
                        ? "text-[#16a34a]"
                        : phase >= 3
                        ? "text-[#1A5EE5]"
                        : "text-[#475569]"
                    }`}
                    animate={{ opacity: 1 }}
                  >
                    {phase >= 4 ? "Bezorgd" : phase >= 3 ? "Verzonden" : "Gereed"}
                  </motion.span>
                </div>
                <motion.div
                  className="mt-2 h-1.5 rounded-full bg-[#E2E8F0]"
                  initial={{ width: "35%" }}
                  animate={{ width: phase >= 4 ? "100%" : phase >= 3 ? "70%" : "35%" }}
                  transition={{ duration: 0.8, ease: easeOutCubic }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CarrierAssuranceAnimation;
