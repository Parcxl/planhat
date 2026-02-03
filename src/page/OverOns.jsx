import { Flex } from "antd";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const OverOns = () => {
    const sectionRef = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"],
    });
    const rotateY = useTransform(scrollYProgress, [0, 1], [0, -15]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [0, 3]);

    useGSAP(() => {
        gsap.set("#about-hero-frame", {
            scale: 1,
            transformOrigin: "center center",
            borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "0%",
            marginLeft: "0px",
            marginRight: "0px",
        });

        gsap.to("#about-hero-frame", {
            scale: 0.83,
            borderBottomLeftRadius: "100px",
            borderBottomRightRadius: "100px",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#about-hero-frame",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.fromTo(
            "#about-hero-img",
            {
                scale: 1,
                borderBottomLeftRadius: "0%",
                borderBottomRightRadius: "0%",
            },
            {
                scale: 1,
                ease: "power1.out",
                borderBottomLeftRadius: "100px",
                borderBottomRightRadius: "100px",
                scrollTrigger: {
                    trigger: "#about-hero-frame",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
    });

    return (
        <Flex className="flex-col w-[100%] overflow-hidden space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16 mb-10">
            <section className="w-full">
                <Flex>
                    <Flex id="about-hero-frame" className="w-[100%] mask-clip-path">
                        <img
                            id="about-hero-img"
                            src="/sendwise-contact.webp"
                            alt="Sendwise"
                            className="absolute h-screen sm:h-screen w-[100%] object-cover object-right sm:object-center"
                        />
                        <div id="about-hero-img" className="absolute z-10 bg-gradient-to-l from-transparent to-[#030302] w-[100%] h-screen sm:h-screen" />
                        <Flex className="z-30 sm:ml-[10%] ml-[4%] w-[100%] h-screen sm:h-screen flex-col justify-center items-start pt-16 sm:pt-20 pb-10 sm:pb-14">
                            <div className="flex flex-col items-start space-y-8 sm:space-y-10 translate-y-4 sm:translate-y-6">
                                <Flex className="group text-white/80 inter-semibold w-fit bg-[#514F4A]/30 border px-1 py-1 items-center space-x-4 rounded-3xl border-[#514F4A]/50 backdrop-blur-lg transition-all duration-500 ease-out hover:border-[#514F4A] hover:bg-[#514F4A]/40">
                                    <Flex className="border border-[#514F4A] bg-gradient-to-t to-[#514F4A] from-[#514F4A]/10 px-3 py-[0.4rem] rounded-3xl transition-all duration-500 ease-out group-hover:bg-[#514F4A] group-hover:scale-[1.02]">
                                        <p className="text-[0.85rem] tracking-[0.06em]">Over Sendwise</p>
                                    </Flex>
                                </Flex>
                                <div className="flex flex-col pl-1 inter-semibold md:leading-[4rem] leading-[3.1rem] text-white w-fit text-left">
                                    <h1 className="md:text-[4rem] sm:text-[2.5rem] text-[2.85rem]">Over Sendwise</h1>
                                </div>
                                <p className="text-white font-light text-[1.25rem] sm:text-[1.1rem] md:text-[1.3rem] max-w-[42rem] leading-[1.4] text-left">
                                    Wij maken verzenden eenvoudiger, eerlijker en schaalbaar — zonder contracten of vaste kosten.
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-6 sm:space-y-0">
                                    <div className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[1rem] cursor-pointer text-white px-7 py-3 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl w-fit relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                        <p className="relative z-10">Start met Sendwise</p>
                                    </div>
                                    <div className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 items-center space-x-3 cursor-pointer text-[0.95rem] px-7 py-3 rounded-3xl w-fit">
                                        <span>Plan een kennismaking</span>
                                    </div>
                                </div>
                            </div>
                        </Flex>
                    </Flex>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <Flex className="w-full group relative rounded-[2.25rem] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-[2.25rem]" />
                        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: "overlay" }} />
                        <Flex className="relative z-20 w-full p-7 sm:p-10 lg:p-12">
                            <Flex className="text-white w-[100%] items-start flex-col space-y-4">
                                <p className="inter-semibold lg:text-[2.2rem] sm:text-[1.9rem] text-[1.6rem] text-left">Wie zijn wij</p>
                                <p className="text-left inter-medium lg:text-[1.2rem] text-[1rem] leading-relaxed lg:w-[85%]">
                                    Wij zijn Sendwise: een verzendplatform voor webshops en fulfilmentcenters. Ons doel is om verzenden eenvoudiger, goedkoper en voorspelbaar te maken. Met slimme software en eerlijke all-in tarieven zorgen we dat jij minder tijd kwijt bent aan logistiek en meer ruimte hebt om te schalen.
                                </p>
                                <Flex className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 w-[15rem] items-center space-x-4 cursor-pointer text-[0.9rem] hover:bg-white pl-4 py-1 rounded-3xl">
                                    <p className="whitespace-nowrap">Start met Sendwise</p>
                                    <Flex className="group-hover:bg-[#D44A00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-full p-2 text-[1.5rem]">
                                        <GoArrowUpRight />
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </section>

            <section className="w-full" ref={sectionRef}>
                <Flex className="lg:flex-row flex-col lg:items-center lg:space-x-12 lg:space-y-0 space-y-8 lg:w-[80%] w-[95%] mx-auto lg:pt-10 md:pt-8 sm:pt-6 pt-4">
                    <Flex className="lg:w-[55%] w-[100%] flex-col space-y-6">
                        <h2 className="inter-medium lg:text-[3.1rem] md:text-[2.7rem] sm:text-[2.3rem] text-[1.9rem] lg:leading-[3.6rem] md:leading-[3.1rem] sm:leading-[2.7rem] leading-[2.3rem] text-gray-900">
                            Waarom we <span className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] bg-clip-text text-transparent font-semibold">Sendwise</span> zijn gestart
                        </h2>
                        <div className="flex flex-col space-y-6 inter-medium lg:text-[1.15rem] md:text-[1.08rem] text-[0.98rem] leading-[1.7rem] text-gray-600 lg:max-w-[34rem] w-full">
                            <p className="text-gray-700">
                                <span className="font-semibold text-gray-900">Verzenden is voor veel webshops en fulfilmentcenters onnodig complex en duur geworden.</span> Je zit vast aan <em>contracten</em>, <em>abonnementen</em>, <em>hoge indexeringen</em> en losse vervoerders, waardoor schaalbaar verzenden lastig en onvoorspelbaar wordt.
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold text-gray-900">Sendwise is opgericht om dat model te doorbreken.</span> Met <em>één platform</em>, <em>eerlijke all-in tarieven</em> en volledige transparantie maken we verzenden weer overzichtelijk.
                            </p>
                        </div>
                        <Flex className="pt-2">
                            <Flex className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-[#1a5ee5]/10 hover:border-transparent text-[#1a5ee5] inter-medium border border-[#1a5ee5] w-[15rem] items-center space-x-4 cursor-pointer text-[0.9rem] pl-4 py-1 rounded-3xl">
                                <p className="whitespace-nowrap">Start met Sendwise</p>
                                <Flex className="text-[#1a5ee5] group-hover:text-white group-hover:bg-[#D44A00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-full p-2 text-[1.5rem]">
                                    <GoArrowUpRight />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex className="lg:w-[45%] w-[100%] items-center justify-center self-center">
                        <div
                            className="w-full lg:max-w-[420px] md:max-w-[520px] max-w-[460px] relative p-2"
                            style={{ perspective: "1200px" }}
                        >
                            <motion.div
                                className="relative will-change-transform"
                                style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
                            >
                                <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 relative">
                                    <img
                                        src="/foto-sendwise-kopie.webp"
                                        alt="Logistics and shipping"
                                        className="w-full h-full object-cover rounded-2xl"
                                        onError={(e) => {
                                            e.target.style.display = "none";
                                            e.target.nextSibling.style.display = "flex";
                                        }}
                                    />
                                    <div className="hidden absolute inset-0 bg-gradient-to-br from-[#1a5ee5]/20 to-[#3b82f6]/20 rounded-2xl items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#1a5ee5] to-[#3b82f6] rounded-2xl opacity-20"></div>
                                            <p className="inter-medium text-gray-600">Logistics & Shipping</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Flex>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="flex-col items-center text-center w-[95%] lg:w-[80%] mx-auto">
                    <p className="inter-medium lg:text-[3rem] md:text-[2.6rem] sm:text-[2.2rem] text-[2rem] text-gray-900">
                        Onze aanpak
                    </p>
                    <div className="mt-3 h-[4px] w-[140px] rounded-full bg-gradient-to-r from-transparent via-[#1a5ee5]/80 to-transparent shadow-[0_0_16px_rgba(26,94,229,0.45)]" />
                </Flex>
                <Flex className="w-[95%] lg:w-[80%] mx-auto mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        <div className="relative rounded-2xl overflow-hidden p-6">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl" />
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")`, mixBlendMode: "overlay" }} />
                            <p className="relative inter-semibold text-[1.2rem] text-white">Eén platform</p>
                            <p className="relative inter-medium mt-2 text-[0.95rem] text-white/90">
                                Alles rondom verzending in één centrale omgeving.
                            </p>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden p-6">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl" />
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")`, mixBlendMode: "overlay" }} />
                            <p className="relative inter-semibold text-[1.2rem] text-white">All-in tarieven</p>
                            <p className="relative inter-medium mt-2 text-[0.95rem] text-white/90">
                                Scherpe verzendtarieven zonder verborgen kosten.
                            </p>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden p-6">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl" />
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")`, mixBlendMode: "overlay" }} />
                            <p className="relative inter-semibold text-[1.2rem] text-white">Geen contracten</p>
                            <p className="relative inter-medium mt-2 text-[0.95rem] text-white/90">
                                Geen verplichtingen, geen lock-in, direct starten.
                            </p>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden p-6">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl" />
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")`, mixBlendMode: "overlay" }} />
                            <p className="relative inter-semibold text-[1.2rem] text-white">Eerlijke indexeringen</p>
                            <p className="relative inter-medium mt-2 text-[0.95rem] text-white/90">
                                Transparante prijsaanpassingen, voorspelbaar en duidelijk.
                            </p>
                        </div>
                    </div>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto flex-col space-y-8">
                    <Flex className="flex-col items-center text-center">
                        <p className="inter-medium lg:text-[3rem] md:text-[2.6rem] sm:text-[2.2rem] text-[2rem] text-gray-900">
                            Oplossingen voor schaalbare verzending
                        </p>
                        <div className="mt-3 h-[4px] w-[180px] rounded-full bg-gradient-to-r from-transparent via-[#1a5ee5]/80 to-transparent shadow-[0_0_16px_rgba(26,94,229,0.45)]" />
                    </Flex>
                    <Flex className="lg:flex-row flex-col lg:space-x-6 lg:space-y-0 space-y-6 w-full">
                        <Flex className="lg:w-[50%] w-[100%] lg:h-[24rem] sm:h-[16rem] h-[16rem] group relative rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl" />
                            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: "overlay" }} />
                            <Flex className="relative z-20 w-full h-full p-6 sm:p-8 pt-10 pb-10 lg:pl-12 sm:pl-8">
                                <Flex className="text-white w-[100%] items-start flex-col space-y-6 justify-center h-full">
                                    <p className="inter-semibold lg:text-[2rem] sm:text-[1.8rem] text-[1.5rem] text-left">Voor webshops</p>
                                    <p className="text-left md:w-[90%] w-[100%] inter-medium lg:text-[1.2rem] text-[1rem]">Schaal je verzending met vaste tarieven, multi-carrier shipping en branded tracking — zonder contracten of complexiteit.</p>
                                    <Flex className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 w-[15rem] items-center space-x-4 cursor-pointer text-[0.9rem] hover:bg-white pl-4 py-1 rounded-3xl">
                                        <p className="whitespace-nowrap">Start met Sendwise</p>
                                        <Flex className="group-hover:bg-[#D44A00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-full p-2 text-[1.5rem]">
                                            <GoArrowUpRight />
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex className="lg:w-[50%] w-[100%] lg:h-[24rem] sm:h-[16rem] h-[16rem] group relative rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl" />
                            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: "overlay" }} />
                            <Flex className="relative z-20 w-full h-full p-6 sm:p-8 pt-10 pb-10 lg:pl-12 sm:pl-8">
                                <Flex className="text-white w-[100%] items-start flex-col space-y-6 justify-center h-full">
                                    <p className="inter-semibold lg:text-[2rem] sm:text-[1.8rem] text-[1.5rem] text-left">Voor fulfilmentcenters</p>
                                    <p className="text-left md:w-[90%] w-[100%] inter-medium lg:text-[1.2rem] text-[1rem]">Verzend goedkoper op schaal met tientallen carriers via één pickup — zonder contracten, zonder complexiteit.</p>
                                    <Flex className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 w-[15rem] items-center space-x-4 cursor-pointer text-[0.9rem] hover:bg-white pl-4 py-1 rounded-3xl">
                                        <p className="whitespace-nowrap">Start met Sendwise</p>
                                        <Flex className="group-hover:bg-[#D44A00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-full p-2 text-[1.5rem]">
                                            <GoArrowUpRight />
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="lg:w-[80%] w-[95%] mx-auto">
                    <Flex className="relative w-full h-[22rem] sm:h-[31rem] lg:h-[34rem] overflow-hidden rounded-2xl">
                        <div className="absolute z-10 bg-gradient-to-b from-transparent to-[#030302]/80 w-[100%] h-full rounded-2xl" />
                        <div className="absolute z-10 inset-0 rounded-2xl bg-black/55 sm:bg-black/35" />
                        <img src="/team-foto-sendwise.webp" alt="Sendwise team" className="object-cover w-[100%] h-full rounded-2xl" />
                        <Flex className="absolute z-20 inset-0 w-full h-full">
                            <Flex className="text-white items-start flex-col space-y-6 w-full h-full justify-center px-6 sm:px-10 lg:pl-20">
                                <p className="inter-semibold lg:text-[3rem] sm:text-[2.4rem] text-[1.9rem] lg:leading-[3.4rem]">
                                    Klaar om met Sendwise te werken?
                                </p>
                                <p className="inter-medium lg:text-[1.15rem] text-[1.05rem] lg:w-[80%]">
                                    Ons team denkt graag met je mee over volumes, tarieven en schaalbaarheid.
                                </p>
                                <Flex className="flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                                    <Flex className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[1rem] cursor-pointer text-white px-7 py-3 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                        <p className="relative z-10">Start met Sendwise</p>
                                    </Flex>
                                    <Flex className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 items-center space-x-3 cursor-pointer text-[0.95rem] px-7 py-3 rounded-3xl">
                                        <span>Plan een kennismaking</span>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </section>
        </Flex>
    );
};

export default OverOns;
