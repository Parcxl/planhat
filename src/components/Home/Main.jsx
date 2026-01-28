import { Flex } from "antd";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
    const [selected, setSelected] = useState('In the Field')

    useGSAP(() => {
        gsap.set("#video-frame", {
            scale: 1,
            transformOrigin: "center center",
            borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "0%",
            marginLeft: "0px",
            marginRight: "0px",
        });

        gsap.to("#video-frame", {
            scale: 0.83,
            borderBottomLeftRadius: "100px",
            borderBottomRightRadius: "100px",
            // marginLeft: "1400px",
            // marginRight: "1400px",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });


        gsap.fromTo(
            "#hero-img",
            {
                scale: 1,
                borderBottomLeftRadius: "0%",
                borderBottomRightRadius: "0%",
            }, // start zoomed-in
            {
                scale: 1,
                ease: "power1.out",
                borderBottomLeftRadius: "100px",
                borderBottomRightRadius: "100px",
                scrollTrigger: {
                    trigger: "#video-frame",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
    });
    return (
        <Flex >
            <Flex id="video-frame" className="w-[100%] mask-clip-path">
                <img id="hero-img" src="main.avif" alt="main" className="absolute h-screen w-[100%] object-cover" />
                <div id="hero-img" className="absolute z-10 bg-gradient-to-l from-transparent to-[#030302]/90 w-[100%] h-screen " />
                <Flex className="z-30 sm:ml-[10%] ml-[2%] justify-evenly w-[100%] h-screen pt-24 pb-16 flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        className=" w-full"
                    >
                        <Flex className="group text-white/80 inter-semibold w-fit hover:bg-gradient-to-t from-[#514F4A]/50 to-transparent bg-[#514F4A]/30 border px-1 py-1 items-center space-x-4 rounded-3xl hover:border-[#514F4A] border-[#514F4A]/50   backdrop-blur-lg">
                            <Flex className={`${selected === 'In the Field' && 'border border-[#514F4A] group-hover:bg-[#514F4A] group-hover:scale-105 bg-gradient-to-t to-[#514F4A] from-[#514F4A]/10 '} px-3 py-[0.4rem] rounded-3xl`}>
                                <p className="text-[0.85rem] ">In the Field</p>
                            </Flex>
                            <Flex className={`${selected === 'Planhat x Basic Technologies' && 'border border-[#514F4A] group-hover:bg-[#514F4A] group-hover:scale-105 bg-gradient-to-t to-[#514F4A] from-[#514F4A]/30 '} pr-3 py-[0.4rem] rounded-3xl`}>
                                <p className="sm:text-[0.85rem] text-[0.7rem]">Planhat x Basic Technologies</p>
                            </Flex>
                        </Flex>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                        className=" w-full"
                    >
                        <Flex className="flex-col pl-1 inter-semibold md:leading-[7rem] leading-[3.5rem] text-white w-fit">
                            <p className="md:text-[7rem] sm:text-[4rem] text-[3rem]">Know them.</p>
                            <p className="md:text-[7rem] sm:text-[4rem] text-[3rem]">Grow them.</p>
                        </Flex>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1.4, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
                        className=" w-full"
                    >
                        <p className="text-white inter-semibold md:text-[1.3rem]">The unified customer platform for growing lifelong revenue.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.8, ease: "easeOut", delay: 1.8 }}
                        className=" w-full"
                    >
                        <Flex className="bg-[#D44A00] w-fit hover:bg-[#EB5200] inter-medium text-[0.95rem] cursor-pointer text-white px-7 py-3 rounded-3xl">
                            <p>Request a demo</p>
                        </Flex>
                    </motion.div>
                    <IoIosArrowDown className="md:hidden flex text-[#D6D7D5]/60 absolute bottom-6 animate-bounce  w-[90%] mx-auto text-[3rem]"/>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Main;