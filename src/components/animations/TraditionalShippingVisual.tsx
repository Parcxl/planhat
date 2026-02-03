import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  { label: "Pickup", detail: "Lokale carrier" },
  { label: "Sorteercentrum", detail: "Nationaal" },
  { label: "Overdracht", detail: "Internationale hub" },
  { label: "Regionaal netwerk", detail: "Nieuwe sortering" },
  { label: "Bezorging", detail: "Lokale carrier" },
];

const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

const TraditionalShippingVisual = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let timeouts: number[] = [];

    const schedule = () => {
      timeouts = [];
      setActiveStep(0);

      const startDelay = 700;
      const stepDuration = 700;
      const pauseDuration = 1400;

      steps.forEach((_, index) => {
        timeouts.push(
          window.setTimeout(() => {
            setActiveStep(index);
          }, startDelay + stepDuration * index)
        );
      });

      timeouts.push(
        window.setTimeout(() => {
          schedule();
        }, startDelay + stepDuration * (steps.length - 1) + pauseDuration)
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
          <div className="space-y-1">
            <p className="text-[1.05rem] inter-semibold text-[#0F172A] tracking-[-0.01em]">
              Traditionele route
            </p>
            <p className="text-sm inter-normal text-[#475569]">
              Meerdere overdrachten onderweg
            </p>
          </div>
          <div className="mt-5 space-y-3">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isPast = activeStep > index;
              const dotColor = isActive ? "#1A5EE5" : isPast ? "#94A3B8" : "#CBD5E1";
              const showHandoff = index > 0 && index < steps.length - 1;
              return (
                <motion.div
                  key={step.label}
                  className={`flex items-center justify-between gap-4 rounded-[14px] px-4 py-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? "bg-[rgba(26,94,229,0.06)]" : "bg-white"
                  } shadow-[0_6px_18px_rgba(15,23,42,0.08)]`}
                  animate={{ opacity: isActive ? 1 : 0.85 }}
                  transition={{ duration: 0.4, ease: easeOutCubic }}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: dotColor }} />
                    <div className="flex flex-col">
                      <span className="text-sm inter-semibold text-[#0F172A]">
                        {step.label}
                      </span>
                      <span className="text-xs inter-normal text-[#475569]">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                  <span className={`text-xs inter-normal ${showHandoff ? "text-[#94A3B8]" : "text-transparent select-none"}`}>
                    Overdracht
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraditionalShippingVisual;
