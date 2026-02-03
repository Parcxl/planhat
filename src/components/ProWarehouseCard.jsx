import { Flex } from "antd";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { PalletRackShowcase } from "./pallet-rack-showcase";

const ProWarehouseCard = ({ title, description, ctaLabel = "Start met Sendwise" }) => {
    const proSectionRef = useRef(null);
    const { scrollYProgress: proScrollProgress } = useScroll({
        target: proSectionRef,
        offset: ["start end", "end start"],
    });

    const leftRackX = useTransform(proScrollProgress, [0, 0.9], ["-180px", "-50px"], { clamp: true });
    const rightRackX = useTransform(proScrollProgress, [0, 0.9], ["180px", "60px"], { clamp: true });
    const leftRackRotate = useTransform(proScrollProgress, [0, 0.9], [-12, 0], { clamp: true });
    const rightRackRotate = useTransform(proScrollProgress, [0, 0.9], [12, 0], { clamp: true });
    const [leftRackAngle, setLeftRackAngle] = useState(-20);
    const [rightRackAngle, setRightRackAngle] = useState(20);

    useMotionValueEvent(leftRackRotate, "change", (v) => setLeftRackAngle(v));
    useMotionValueEvent(rightRackRotate, "change", (v) => setRightRackAngle(v));

    return (
        <Flex ref={proSectionRef} className="lg:w-[80%] w-[95%] lg:h-[39.5rem] sm:h-[26rem] h-[24rem] mx-auto mb-16 sm:mb-20 group relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl z-0" />
            <div className="absolute inset-0 opacity-40 z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay' }} />
            <div className="hidden md:block absolute right-[-14%] bottom-[-10%] z-10 pointer-events-none opacity-85" style={{ perspective: "1400px" }}>
                <motion.div
                    style={{ x: rightRackX, transformStyle: "preserve-3d", transformOrigin: "center" }}
                    className="will-change-transform"
                >
                    <div style={{ transform: "translateY(-2%) scaleX(-1)", backfaceVisibility: "hidden" }}>
                        <PalletRackShowcase
                            width={5.5}
                            columns={5}
                            rackRotateY={rightRackAngle}
                            className="w-[520px] lg:w-[720px] h-[420px] lg:h-[540px]"
                        />
                    </div>
                </motion.div>
            </div>
            <div className="hidden md:block absolute left-[-11.5%] bottom-[-10%] z-10 pointer-events-none opacity-85" style={{ perspective: "1400px" }}>
                <motion.div
                    style={{ x: leftRackX, transformStyle: "preserve-3d", transformOrigin: "center" }}
                    className="will-change-transform"
                >
                    <div style={{ transform: "translateY(-2%)", backfaceVisibility: "hidden" }}>
                        <PalletRackShowcase
                            width={5.5}
                            columns={5}
                            rackRotateY={leftRackAngle}
                            className="w-[520px] lg:w-[720px] h-[420px] lg:h-[540px]"
                        />
                    </div>
                </motion.div>
            </div>
            <div className="md:hidden absolute right-[-18%] bottom-[-12%] z-10 pointer-events-none opacity-70" style={{ perspective: "1400px" }}>
                <motion.div style={{ x: rightRackX, transformStyle: "preserve-3d", transformOrigin: "center" }} className="will-change-transform">
                    <div style={{ transform: "translateY(-2%) scaleX(-1)", backfaceVisibility: "hidden" }}>
                        <PalletRackShowcase
                            width={4.6}
                            columns={4}
                            rackRotateY={rightRackAngle}
                            className="w-[300px] h-[260px]"
                        />
                    </div>
                </motion.div>
            </div>
            <div className="md:hidden absolute left-[-18%] bottom-[-12%] z-10 pointer-events-none opacity-70" style={{ perspective: "1400px" }}>
                <motion.div style={{ x: leftRackX, transformStyle: "preserve-3d", transformOrigin: "center" }} className="will-change-transform">
                    <div style={{ transform: "translateY(-2%)", backfaceVisibility: "hidden" }}>
                        <PalletRackShowcase
                            width={4.6}
                            columns={4}
                            rackRotateY={leftRackAngle}
                            className="w-[300px] h-[260px]"
                        />
                    </div>
                </motion.div>
            </div>
            <Flex className="absolute z-20 top-0 w-[90%] left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 lg:left-20">
                <Flex className="text-white w-[100%] justify-center pt-7 sm:pt-9 lg:pt-10 lg:pl-0 sm:pl-7 pl-0 lg:items-center sm:items-start items-center flex-col space-y-4">
                    <p className="inter-semibold lg:text-[2rem] sm:text-[1.8rem] text-[1.5rem] lg:text-center sm:text-start text-center">
                        {title}
                    </p>
                    <p className="lg:text-center sm:text-start text-center md:w-[75%] lg:mx-auto md:mx-0 mx-auto inter-medium lg:pl-0 pl-2 lg:text-[1.2rem]">
                        {description}
                    </p>
                    <Flex className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 w-[13rem] items-center space-x-4 cursor-pointer text-[0.9rem] hover:bg-white mt-10 pl-4 py-1 rounded-3xl">
                        <p className="whitespace-nowrap">{ctaLabel}</p>
                        <Flex className="group-hover:bg-[#D44A00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-full p-2 text-[1.5rem]">
                            <GoArrowUpRight />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ProWarehouseCard;
