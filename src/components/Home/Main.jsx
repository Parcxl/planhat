import { Flex } from "antd";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
    const [selected, setSelected] = useState('CONNECT')

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
                <img id="hero-img" src="/sendwise-hero-picture.png" alt="main" className="absolute h-screen sm:h-screen w-[100%] object-cover object-right sm:object-center" />
                <div id="hero-img" className="absolute z-10 bg-gradient-to-l from-transparent to-[#030302] w-[100%] h-screen sm:h-screen " />
                <Flex className="z-30 sm:ml-[10%] ml-[4%] justify-start sm:justify-evenly w-[100%] h-screen sm:h-screen sm:pt-24 pt-44 sm:pb-16 pb-16 flex-col space-y-10 sm:space-y-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        className=" w-full"
                    >
                        <Flex className="group text-white/80 inter-semibold w-fit hover:bg-gradient-to-t from-[#514F4A]/50 to-transparent bg-[#514F4A]/30 border px-1 py-1 items-center space-x-4 rounded-3xl hover:border-[#514F4A] border-[#514F4A]/50 backdrop-blur-lg transition-all duration-300 ease-out">
                            <Flex className={`${selected === 'CONNECT' && 'border border-[#514F4A] group-hover:bg-[#514F4A] group-hover:scale-105 bg-gradient-to-t to-[#514F4A] from-[#514F4A]/10 '} px-3 py-[0.4rem] rounded-3xl transition-all duration-300 ease-out`}>
                                <p className="text-[0.85rem] ">CONNECT</p>
                            </Flex>
                            <Flex className={`${selected === 'Eén verzendstandaard voor schaal' && 'border border-[#514F4A] group-hover:bg-[#514F4A] group-hover:scale-105 bg-gradient-to-t to-[#514F4A] from-[#514F4A]/30 '} pr-3 py-[0.4rem] rounded-3xl transition-all duration-300 ease-out`}>
                                <p className="sm:text-[0.85rem] text-[0.7rem]">Eén verzendstandaard voor schaal</p>
                            </Flex>
                        </Flex>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                        className=" w-full sm:-mt-6 mt-4"
                    >
                        <Flex className="flex-col pl-1 inter-semibold md:leading-[4rem] leading-[3.1rem] text-white w-fit">
                            <p className="md:text-[4rem] sm:text-[2.5rem] text-[2.85rem]">Het platform voor<br />schaalbaar verzenden</p>
                        </Flex>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1.4, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
                        className=" w-full sm:-mt-8 mt-4"
                    >
                        <p className="text-white font-light text-[1.25rem] sm:text-[1.1rem] md:text-[1.3rem]">
                            <strong className="font-bold">Verzenden is onnodig complex geworden.</strong> Sendwise
                            maakt het weer eenvoudig. Eén vaste methode, één
                            <br className="hidden sm:block" />
                            prijs en altijd dezelfde betrouwbare levering.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.8, ease: "easeOut", delay: 1.8 }}
                        className=" w-full sm:-mt-6 mt-4"
                    >
                        <Flex className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[1rem] cursor-pointer text-white px-7 py-3 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl w-fit relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                            <p className="relative z-10">Account aanmaken</p>
                        </Flex>
                    </motion.div>
                    <IoIosArrowDown className="md:hidden flex text-[#D6D7D5]/60 absolute bottom-6 animate-bounce  w-[90%] mx-auto text-[3rem]"/>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Main;
