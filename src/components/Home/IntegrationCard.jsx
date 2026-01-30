import { motion } from "framer-motion";

const IntegrationCard = ({
    label,
    subLabel,
    animated = false,
    floatY = 8,
    floatX = 6,
    duration = 10,
    delay = 0,
    className = "",
}) => {
    const animate = animated
        ? { y: [0, -floatY, 0], x: [0, floatX, 0] }
        : undefined;

    return (
        <motion.div
            className={`relative rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_0_30px_rgba(26,94,229,0.25)] will-change-transform ${className}`}
            style={{ transformStyle: "preserve-3d" }}
            animate={animate}
            transition={
                animated
                    ? {
                          duration,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay,
                      }
                    : undefined
            }
            whileHover={
                animated
                    ? {
                          scale: 1.04,
                          rotateX: -6,
                          rotateY: 8,
                      }
                    : undefined
            }
        >
            <div
                className="absolute inset-0 rounded-2xl"
                style={{
                    background:
                        "radial-gradient(120% 120% at 20% 10%, rgba(26,94,229,0.18), transparent 60%)",
                }}
            />
            <div className="relative z-10 flex items-center justify-center px-6 py-5">
                <div className="flex items-center space-x-3">
                    <div className="h-11 w-11 rounded-full bg-white/70 shadow-[0_6px_20px_rgba(26,94,229,0.2)] flex items-center justify-center text-[#1a5ee5] font-semibold">
                        {label?.[0] || "S"}
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="text-gray-900 inter-semibold">{label}</span>
                        {subLabel ? (
                            <span className="text-gray-500 text-[0.85rem] inter-medium">
                                {subLabel}
                            </span>
                        ) : null}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default IntegrationCard;
