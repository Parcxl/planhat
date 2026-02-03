import { motion } from "framer-motion";

const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

const DirectCarrierVisual = () => {
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
              Directe koppeling
            </p>
            <p className="text-sm inter-normal text-[#475569]">
              De juiste carrier zonder tussenstap
            </p>
          </div>

          <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <motion.div
              className="rounded-[16px] bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOutCubic }}
            >
              <p className="text-sm inter-semibold text-[#0F172A]">CONNECT</p>
              <p className="text-xs inter-normal text-[#475569]">Zending klaar</p>
            </motion.div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-6 w-[2px] rounded-full bg-[#E2E8F0]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#1A5EE5]" />
              <div className="h-6 w-[2px] rounded-full bg-[#E2E8F0]" />
            </div>
            <motion.div
              className="rounded-[16px] bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOutCubic, delay: 0.1 }}
            >
              <p className="text-sm inter-semibold text-[#0F172A]">Lokale carrier</p>
              <p className="text-xs inter-normal text-[#475569]">Directe bezorging</p>
            </motion.div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs inter-normal text-[#475569]">
            <span>Minder schakels</span>
            <span className="text-[#1A5EE5] inter-semibold">Altijd juiste route</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectCarrierVisual;
