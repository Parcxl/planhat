import { Flex } from "antd";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheck, FiFileText, FiTrendingUp, FiCreditCard, FiShield } from "react-icons/fi";
import LabelPrintAnimation from "../components/animations/LabelPrintAnimation";
import ConnectFlowAnimation from "../components/animations/ConnectFlowAnimation";
import ProWarehouseCard from "../components/ProWarehouseCard";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const FeatureList = ({ items, tone = "dark", className = "", align = "left" }) => {
    const isLight = tone === "light";
    const isRight = align === "right";
    const textClass = isLight ? "text-white/90" : "text-gray-700";
    const iconClass = isLight ? "bg-white/15 text-white" : "bg-[#1a5ee5]/10 text-[#1a5ee5]";

    return (
        <ul className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${isRight ? "text-right" : "text-left"} ${className}`}>
            {items.map((item) => (
                <li
                    key={item}
                    className={`flex items-start gap-3 inter-medium text-[0.98rem] ${textClass} ${isRight ? "flex-row-reverse justify-end" : ""}`}
                >
                    <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${iconClass}`}>
                        <FiCheck className="text-[0.9rem]" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                </li>
            ))}
        </ul>
    );
};

const uspCards = [
    { title: "Geen contracten", Icon: FiFileText },
    { title: "Geen abonnementskosten", Icon: FiShield },
    { title: "Eerlijke indexeringen", Icon: FiTrendingUp },
    { title: "Duidelijke tarieven per zending", Icon: FiCreditCard },
];

const VoorWebshops = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useGSAP(() => {
        gsap.set("#webshops-hero-frame", {
            scale: 1,
            transformOrigin: "center center",
            borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "0%",
            marginLeft: "0px",
            marginRight: "0px",
        });

        gsap.to("#webshops-hero-frame", {
            scale: 0.83,
            borderBottomLeftRadius: "100px",
            borderBottomRightRadius: "100px",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#webshops-hero-frame",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.fromTo(
            "#webshops-hero-img",
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
                    trigger: "#webshops-hero-frame",
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
                    <Flex id="webshops-hero-frame" className="w-[100%] mask-clip-path">
                        <img
                            id="webshops-hero-img"
                            src="/sendwise-2.png"
                            alt="Sendwise voor webshops"
                            className="absolute h-screen sm:h-screen w-[100%] object-cover object-top"
                        />
                        <div id="webshops-hero-img" className="absolute z-10 bg-gradient-to-l from-transparent to-[#030302] w-[100%] h-screen sm:h-screen" />
                        <Flex className="z-30 sm:ml-[10%] ml-[4%] w-[100%] h-screen sm:h-screen flex-col justify-center items-start pt-16 sm:pt-20 pb-10 sm:pb-14">
                            <div className="flex flex-col items-start space-y-8 sm:space-y-10 translate-y-4 sm:translate-y-6">
                                <Flex className="group text-white/80 inter-semibold w-fit bg-[#514F4A]/30 border px-1 py-1 items-center space-x-4 rounded-3xl border-[#514F4A]/50 backdrop-blur-lg transition-all duration-500 ease-out hover:border-[#514F4A] hover:bg-[#514F4A]/40">
                                    <Flex className="border border-[#514F4A] bg-gradient-to-t to-[#514F4A] from-[#514F4A]/10 px-3 py-[0.4rem] rounded-3xl transition-all duration-500 ease-out group-hover:bg-[#514F4A] group-hover:scale-[1.02]">
                                        <p className="text-[0.85rem] tracking-[0.14em]">WEBSHOPS</p>
                                    </Flex>
                                </Flex>
                                <div className="flex flex-col pl-1 inter-semibold md:leading-[4rem] leading-[3.1rem] text-white w-fit text-left">
                                    <h1 className="md:text-[4rem] sm:text-[2.5rem] text-[2.85rem]">Slim verzenden voor webshops</h1>
                                </div>
                                <p className="text-white font-light text-[1.25rem] sm:text-[1.1rem] md:text-[1.3rem] max-w-[44rem] leading-[1.4] text-left">
                                    Sendwise helpt webshops om sneller, goedkoper en zonder gedoe te verzenden. Van labels en tracking tot fulfilment en internationale verzending — alles via één platform.
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-6 sm:space-y-0">
                                    <Link
                                        to="/start-met-sendwise"
                                        className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[1rem] cursor-pointer text-white px-7 py-3 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl w-fit relative overflow-hidden group inline-flex items-center"
                                    >
                                        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                        <span className="relative z-10">Start met Sendwise</span>
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white hover:text-white inter-medium border border-white/30 items-center space-x-3 cursor-pointer text-[0.95rem] px-7 py-3 rounded-3xl w-fit flex isolate"
                                    >
                                        <span className="relative z-10 text-white group-hover:text-white">Plan een kennismaking</span>
                                    </Link>
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
                        <div className="absolute inset-0 opacity-40 noise-overlay" />
                        <Flex className="relative z-20 w-full p-7 sm:p-10 lg:p-12">
                            <Flex className="text-white w-[100%] items-center flex-col text-center space-y-4">
                                <p className="inter-semibold lg:text-[2.2rem] sm:text-[1.9rem] text-[1.6rem]">
                                    Alles wat je als webshop nodig hebt om te verzenden
                                </p>
                                <p className="inter-medium lg:text-[1.2rem] text-[1rem] leading-relaxed lg:max-w-[52rem]">
                                    Of je nu 5 of 5.000 orders per dag verzendt — verzenden moet simpel, betaalbaar en betrouwbaar zijn. Sendwise is gebouwd voor webshops die willen groeien, zonder vast te zitten aan contracten, ingewikkelde tarieven of meerdere vervoerders.
                                </p>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                            <div className="lg:w-[45%] w-full">
                                <div className="w-full h-[14rem] sm:h-[18rem]">
                                    <LabelPrintAnimation />
                                </div>
                            </div>
                            <div className="lg:w-[55%] w-full flex flex-col space-y-6 text-left">
                                <div className="space-y-3">
                                    <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                        Labels aanmaken en printen in seconden
                                    </h2>
                                </div>
                                <FeatureList
                                    items={[
                                        "Orders komen automatisch binnen vanuit je webshop",
                                        "Handmatig verzenden of via Excel import",
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                            <div className="lg:w-[55%] w-full flex flex-col space-y-6 text-left">
                                <div className="space-y-3">
                                    <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                        Goedkoper verzenden met CONNECT
                                    </h2>
                                    <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[56rem]">
                                        Met CONNECT verzend je via Sendwise met vaste, betrouwbare vervoerders — in Nederland én Europa. Geen losse contracten, geen meerdere pickups en geen verrassingen achteraf. Je verzendt per land altijd met de beste optie voor prijs en kwaliteit.
                                    </p>
                                </div>
                                <FeatureList
                                    items={[
                                        "Eén pickup voor al je zendingen",
                                        "Scherpe all-in tarieven",
                                        "Geen contracten of abonnementskosten",
                                        "Altijd de juiste vervoerder per land",
                                    ]}
                                />
                            </div>
                            <div className="lg:w-[45%] w-full">
                                <div className="relative w-full h-[16rem] sm:h-[20rem] overflow-hidden rounded-2xl bg-[rgba(26,94,229,0.06)]">
                                    <div className="absolute inset-0 opacity-30 noise-overlay" />
                                    <div className="relative w-full h-full">
                                        <ConnectFlowAnimation />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Flex>
            </section>

            <section className="w-full">
                <ProWarehouseCard
                    title="Fulfilmentsoftware voor webshops"
                    description="Met Sendwise PRO stroomlijn je het fulfilmentproces binnen je webshop. Van orderinname en picklijsten tot voorraadbeheer en magazijninrichting — alles is ontworpen om sneller te werken en fouten te voorkomen."
                />
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full">
                        <div className="flex flex-col space-y-3 text-center">
                            <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                Geen verrassingen. Geen verplichtingen.
                            </h2>
                        </div>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {uspCards.map(({ title, Icon }) => (
                                <div
                                    key={title}
                                    className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1a5ee5]/10 text-[#1a5ee5]">
                                        <Icon className="text-[1.2rem]" />
                                    </div>
                                    <p className="mt-4 inter-semibold text-[1.05rem] text-gray-900">{title}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-gray-700 inter-medium text-[1rem] text-center">
                            Je betaalt alleen voor wat je verzendt. Niet meer, niet minder.
                        </p>
                    </div>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="lg:w-[80%] w-[95%] mx-auto">
                    <Flex className="relative w-full h-[22rem] sm:h-[31rem] lg:h-[34rem] overflow-hidden rounded-2xl">
                        <div className="absolute z-10 bg-gradient-to-b from-transparent to-[#030302]/80 w-[100%] h-full rounded-2xl" />
                        <div className="absolute z-10 inset-0 rounded-2xl bg-black/55 sm:bg-black/35" />
                        <img src="/sendwise-2.png" alt="Sendwise" className="object-cover w-[100%] h-full rounded-2xl" />
                        <Flex className="absolute z-20 inset-0 w-full h-full">
                            <Flex className="text-white items-start flex-col space-y-6 w-full h-full justify-center px-6 sm:px-10 lg:pl-20">
                                <p className="inter-semibold lg:text-[3rem] sm:text-[2.4rem] text-[1.9rem] lg:leading-[3.4rem]">
                                    Klaar om slimmer te verzenden met je webshop?
                                </p>
                                <p className="inter-medium lg:text-[1.15rem] text-[1.05rem] lg:w-[80%]">
                                    Ontdek hoe Sendwise webshops helpt om verzendkosten te verlagen en processen te vereenvoudigen — zonder overstapstress.
                                </p>
                                <Flex className="flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                                    <Link
                                        to="/start-met-sendwise"
                                        className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[1rem] cursor-pointer text-white px-7 py-3 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl relative overflow-hidden group inline-flex items-center"
                                    >
                                        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                        <span className="relative z-10">Start met Sendwise</span>
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white hover:text-white inter-medium border border-white/30 items-center space-x-3 cursor-pointer text-[0.95rem] px-7 py-3 rounded-3xl flex isolate"
                                    >
                                        <span className="relative z-10 text-white group-hover:text-white">Plan een kennismaking</span>
                                    </Link>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </section>
        </Flex>
    );
};

export default VoorWebshops;
