import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const easeInOut: [number, number, number, number] = [0.45, 0, 0.55, 1];

const ConnectBrandingAnimation = () => {
  const prefersReducedMotion = useReducedMotion();
  const timeoutsRef = useRef<number[]>([]);
  const [showEditor, setShowEditor] = useState(false);
  const [brandShift, setBrandShift] = useState(false);
  const [showDelivered, setShowDelivered] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const clearTimers = () => {
      timeoutsRef.current.forEach((id) => window.clearTimeout(id));
      timeoutsRef.current = [];
    };

    const schedule = () => {
      setShowEditor(false);
      setBrandShift(false);
      setShowDelivered(false);
      setShowConfirm(false);

      timeoutsRef.current.push(
        window.setTimeout(() => setShowEditor(true), 800)
      );
      timeoutsRef.current.push(
        window.setTimeout(() => setBrandShift(true), 1700)
      );
      timeoutsRef.current.push(
        window.setTimeout(() => setShowDelivered(true), 2600)
      );
      timeoutsRef.current.push(
        window.setTimeout(() => setShowConfirm(true), 3400)
      );
      timeoutsRef.current.push(
        window.setTimeout(() => schedule(), 5200)
      );
    };

    clearTimers();
    schedule();

    return () => clearTimers();
  }, [prefersReducedMotion]);

  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute inset-0"
        animate={showEditor ? { x: -50, opacity: 0, scale: 0.98 } : { x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        <div
          className="h-full rounded-2xl bg-white p-6"
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
              Orderoverzicht
            </p>
          </div>
          <div className="mt-5 rounded-2xl bg-white px-5 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm inter-semibold text-[#0F172A]">
                  Order #SW-20314
                </span>
                <span className="text-xs inter-normal text-[#475569]">
                  Verzonden
                </span>
              </div>
              <span className="rounded-full bg-[#1A5EE5]/10 px-3 py-1 text-xs inter-semibold text-[#1A5EE5]">
                Verzonden
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        initial={{ x: 60, opacity: 0, scale: 0.98 }}
        animate={showEditor ? { x: 0, opacity: 1, scale: 1 } : { x: 60, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.6, ease: easeInOut }}
      >
        <div
          className="h-full rounded-2xl bg-white p-5"
          style={{
            boxShadow:
              "0 12px 32px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.04)",
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[1.05rem] inter-semibold text-[#0F172A]">
                Tracking editor
              </p>
              <p className="text-xs inter-normal text-[#475569]">
                Pas je branding aan
              </p>
            </div>
            <span className="text-xs inter-semibold text-[#1A5EE5]">Opslaan</span>
          </div>

          <div className="mt-5 grid grid-cols-[1.05fr_1.3fr] gap-4">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
              <div className="space-y-3">
                <p className="text-xs inter-semibold text-[#0F172A] uppercase tracking-[0.08em]">
                  Instellingen
                </p>
                <div className="rounded-xl border border-[#E2E8F0] px-3 py-2">
                  <p className="text-xs inter-medium text-[#0F172A]">Logo</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-[#F8FAFC]" />
                    <span className="text-xs text-[#64748B]">Selecteer</span>
                  </div>
                </div>
                <div className="rounded-xl border border-[#E2E8F0] px-3 py-2">
                  <p className="text-xs inter-medium text-[#0F172A]">Accentkleur</p>
                  <div className="mt-2 h-2.5 w-full rounded-full bg-[#1A5EE5]/30">
                    <motion.div
                      className="h-2.5 rounded-full"
                      animate={{
                        width: brandShift ? "100%" : "55%",
                        backgroundColor: brandShift ? "#16A34A" : "#1A5EE5",
                      }}
                      transition={{ duration: 0.6, ease: easeInOut }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
              <div className="rounded-2xl bg-white p-4 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
                <div className="flex items-center justify-between">
                  <motion.img
                    src="/connect-brand-logo.png"
                    alt="Webshop logo"
                    className="h-8 w-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: brandShift ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: easeInOut }}
                  />
                  <motion.span
                    className="rounded-full px-3 py-1 text-[0.65rem] inter-semibold"
                    animate={{
                      color: brandShift ? "#16A34A" : "#1A5EE5",
                      backgroundColor: brandShift
                        ? "rgba(22,163,74,0.12)"
                        : "rgba(26,94,229,0.12)",
                    }}
                    transition={{ duration: 0.5, ease: easeInOut }}
                  >
                    Onderweg
                  </motion.span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-4/5 rounded-full bg-[#E2E8F0]" />
                  <div className="h-2 w-3/5 rounded-full bg-[#E2E8F0]" />
                </div>
                <motion.div
                  className="mt-4 rounded-xl px-3 py-2 text-xs inter-semibold"
                  animate={{
                    color: showDelivered ? "#16A34A" : "#1A5EE5",
                    backgroundColor: showDelivered
                      ? "rgba(22,163,74,0.12)"
                      : "rgba(26,94,229,0.12)",
                  }}
                  transition={{ duration: 0.5, ease: easeInOut }}
                >
                  {showDelivered ? "Bezorgd" : "Onderweg"}
                </motion.div>
              </div>
              <motion.p
                className="mt-3 text-xs inter-medium text-[#64748B]"
                initial={{ opacity: 0 }}
                animate={{ opacity: showConfirm ? 1 : 0 }}
                transition={{ duration: 0.4, ease: easeInOut }}
              >
                Zo ziet jouw tracking eruit
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ConnectBrandingAnimation;
