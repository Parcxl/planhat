import { motion } from "framer-motion";

const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ConnectNLVisual = () => {
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
              Nederland route
            </p>
            <p className="text-sm inter-normal text-[#475569]">
              Eén pickup, meerdere carriers
            </p>
          </div>

          <div className="mt-6 flex items-center gap-6">
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1A5EE5]/10 text-[#1A5EE5] text-lg inter-semibold"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: easeOutCubic }}
            >
              NL
            </motion.div>
            <div className="flex-1">
              <div className="h-1.5 w-full rounded-full bg-[#E2E8F0]">
                <motion.div
                  className="h-1.5 rounded-full bg-[#1A5EE5]"
                  initial={{ width: "40%" }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 1.2, ease: easeOutCubic, repeat: Infinity, repeatType: "mirror" }}
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={`carrier-${index}`}
                    className="rounded-[12px] bg-white px-3 py-2 text-[0.65rem] inter-semibold text-[#475569] shadow-[0_6px_16px_rgba(15,23,42,0.08)]"
                  >
                    Carrier {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs inter-normal text-[#475569]">
            <span>Beste optie per zending</span>
            <span className="text-[#1A5EE5] inter-semibold">Next day beschikbaar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectNLVisual;
