import { Flex } from "antd";
import { FiMail, FiMapPin } from "react-icons/fi";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useGSAP(() => {
        gsap.set("#contact-hero-frame", {
            scale: 1,
            transformOrigin: "center center",
            borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "0%",
            marginLeft: "0px",
            marginRight: "0px",
        });

        gsap.to("#contact-hero-frame", {
            scale: 0.83,
            borderBottomLeftRadius: "100px",
            borderBottomRightRadius: "100px",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#contact-hero-frame",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.fromTo(
            "#contact-hero-img",
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
                    trigger: "#contact-hero-frame",
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
                    <Flex id="contact-hero-frame" className="w-[100%] mask-clip-path">
                        <img
                            id="contact-hero-img"
                            src="/sendwise-contact.webp"
                            alt="Sendwise"
                            className="absolute h-screen sm:h-screen w-[100%] object-cover object-right sm:object-center"
                        />
                        <div id="contact-hero-img" className="absolute z-10 bg-gradient-to-l from-transparent to-[#030302] w-[100%] h-screen sm:h-screen" />
                        <Flex className="z-30 sm:ml-[10%] ml-[4%] w-[100%] h-screen sm:h-screen flex-col justify-center items-start pt-16 sm:pt-20 pb-10 sm:pb-14">
                            <div className="flex flex-col items-start space-y-10 sm:space-y-12 translate-y-4 sm:translate-y-6">
                                <div className="flex flex-col pl-1 inter-semibold md:leading-[4rem] leading-[3.1rem] text-white w-fit text-left">
                                    <p className="md:text-[4rem] sm:text-[2.5rem] text-[2.85rem]">
                                        Neem contact op
                                    </p>
                                </div>
                                <p className="text-white font-light text-[1.25rem] sm:text-[1.1rem] md:text-[1.3rem] max-w-[42rem] leading-[1.4] text-left">
                                    Ontdek hoeveel tijd en geld je kunt besparen op iedere verzending. We denken graag mee over jouw verzendproces.
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-6 sm:space-y-0">
                                    <div className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[1rem] cursor-pointer text-white px-7 py-3 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl w-fit relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                        <p className="relative z-10">Plan een kennismaking</p>
                                    </div>
                                    <div className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 items-center space-x-3 cursor-pointer text-[0.95rem] px-7 py-3 rounded-3xl w-fit">
                                        <span>Start met Sendwise</span>
                                    </div>
                                </div>
                            </div>
                        </Flex>
                    </Flex>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full">
                        <div className="flex flex-col space-y-4">
                            <div className="relative w-fit">
                                <div className="absolute -inset-x-3 bottom-1 h-3 bg-gradient-to-r from-[#1a5ee5]/25 to-transparent rounded-full" />
                                <p className="relative inter-semibold lg:text-[2rem] sm:text-[1.8rem] text-[1.6rem] text-gray-900">
                                    Meer verzenden. Minder gedoe.
                                </p>
                            </div>
                            <p className="text-gray-700 inter-medium lg:text-[1.1rem] text-[1rem] max-w-[60rem]">
                                Sendwise biedt scherpe all-in verzendtarieven zonder contracten of maandelijkse kosten, met eerlijke indexeringen en volledige grip op je verzendingen.
                            </p>
                        </div>
                    </div>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                            <div className="flex items-center space-x-4">
                                <div className="h-11 w-11 rounded-full bg-[#1a5ee5]/10 text-[#1a5ee5] flex items-center justify-center text-[1.2rem]">
                                    <FiMail />
                                </div>
                                <div>
                                    <p className="text-[#1a5ee5] inter-semibold text-[0.8rem] tracking-[0.12em]">DIRECT CONTACT</p>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-col space-y-5">
                                <div className="space-y-2">
                                    <p className="text-gray-500 inter-medium text-[0.8rem]">Email</p>
                                    <a
                                        href="mailto:info@sendwise.nl"
                                        className="text-gray-900 inter-semibold text-[1.3rem] sm:text-[1.4rem] hover:text-[#1a5ee5] transition-colors"
                                    >
                                        info@sendwise.nl
                                    </a>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-500 inter-medium text-[0.8rem]">Telefoon</p>
                                    <a
                                        href="tel:+31619156123"
                                        className="text-gray-900 inter-semibold text-[1.3rem] sm:text-[1.4rem] hover:text-[#1a5ee5] transition-colors"
                                    >
                                        +31 6 19156123
                                    </a>
                                    <p className="text-gray-500 inter-medium text-[0.85rem]">Ma–vr, 09:00–17:00</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                            <div className="flex items-center space-x-4">
                                <div className="h-11 w-11 rounded-full bg-[#1a5ee5]/10 text-[#1a5ee5] flex items-center justify-center text-[1.2rem]">
                                    <FiMapPin />
                                </div>
                                <div>
                                    <p className="text-[#1a5ee5] inter-semibold text-[0.8rem] tracking-[0.12em]">ADRES</p>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-col space-y-4">
                                <p className="text-gray-900 inter-semibold text-[1.2rem] sm:text-[1.3rem] leading-relaxed">
                                    Ondernemingsweg 66
                                    <br />
                                    2404HN Alphen aan den Rijn
                                </p>
                            </div>
                        </div>
                    </div>
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
                                    Direct aan de slag met Sendwise?
                                </p>
                                <p className="inter-medium lg:text-[1.15rem] text-[1.05rem] lg:w-[80%]">
                                    Maak een account aan of plan een kennismaking om te kijken hoe Sendwise past bij jouw volumes en processen.
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
                                <p className="text-white/70 inter-medium text-[0.85rem]">
                                    Geen contracten · Geen maandelijkse kosten · Eerlijke indexeringen
                                </p>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </section>

        </Flex>
    );
};

export default Contact;
