import { Flex } from "antd";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheck, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import ConnectFlowAnimation from "../components/animations/ConnectFlowAnimation";
import ConnectUSPCardAnimation from "../components/animations/ConnectUSPCardAnimation";
import ConnectBrandingAnimation from "../components/animations/ConnectBrandingAnimation";

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

const integrations = [
    { name: "GLS", src: "/gls-logo-sendwise.png" },
    { name: "DHL", src: "/sendwise-dhl.svg" },
    { name: "DAO", src: "/dao-logo-sendwise.png" },
    { name: "Colissimo", src: "/colissimo-logo-sendwise.png" },
    { name: "PostNL", src: "/postnl-icoon.png" },
    { name: "Sendwise", src: "/Sendwise zonder connect.png" },
    { name: "Gofo", src: "/gofo-logo-sendwise.png" },
    { name: "Carrier 10", src: "/10.png" },
    { name: "MRW", src: "/mrw-logo-sendwise.png" },
    { name: "Correos", src: "/CORREOS-logo-sendwise.png" },
    { name: "AT POST", src: "/AT POST-logo-sendwise.png" },
    { name: "CTT", src: "/ctt-logo-sendwise.png" },
];

const integrationsColumnB = integrations.slice(4).concat(integrations.slice(0, 4));

const SendwiseConnect = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useGSAP(() => {
        gsap.set("#connect-hero-frame", {
            scale: 1,
            transformOrigin: "center center",
            borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "0%",
            marginLeft: "0px",
            marginRight: "0px",
        });

        gsap.to("#connect-hero-frame", {
            scale: 0.83,
            borderBottomLeftRadius: "100px",
            borderBottomRightRadius: "100px",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#connect-hero-frame",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.fromTo(
            "#connect-hero-img",
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
                    trigger: "#connect-hero-frame",
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
                    <Flex id="connect-hero-frame" className="w-[100%] mask-clip-path">
                        <img
                            id="connect-hero-img"
                            src="/connect-age.png"
                            alt="CONNECT"
                            className="absolute h-screen sm:h-screen w-[100%] object-cover object-top"
                        />
                        <div id="connect-hero-img" className="absolute z-10 bg-gradient-to-l from-transparent to-[#030302] w-[100%] h-screen sm:h-screen" />
                        <Flex className="z-30 sm:ml-[10%] ml-[4%] w-[100%] h-screen sm:h-screen flex-col justify-center items-start pt-16 sm:pt-20 pb-10 sm:pb-14">
                            <div className="flex flex-col items-start space-y-8 sm:space-y-10 translate-y-4 sm:translate-y-6">
                                <Flex className="group text-white/80 inter-semibold w-fit bg-[#514F4A]/30 border px-1 py-1 items-center space-x-4 rounded-3xl border-[#514F4A]/50 backdrop-blur-lg transition-all duration-500 ease-out hover:border-[#514F4A] hover:bg-[#514F4A]/40">
                                    <Flex className="border border-[#514F4A] bg-gradient-to-t to-[#514F4A] from-[#514F4A]/10 px-3 py-[0.4rem] rounded-3xl transition-all duration-500 ease-out group-hover:bg-[#514F4A] group-hover:scale-[1.02]">
                                        <p className="text-[0.85rem] tracking-[0.14em]">CONNECT</p>
                                    </Flex>
                                </Flex>
                                <div className="flex flex-col pl-1 inter-semibold md:leading-[4rem] leading-[3.1rem] text-white w-fit text-left">
                                    <h1 className="md:text-[4rem] sm:text-[2.5rem] text-[2.85rem]">CONNECT</h1>
                                </div>
                                <p className="text-white font-light text-[1.25rem] sm:text-[1.1rem] md:text-[1.3rem] max-w-[42rem] leading-[1.4] text-left">
                                    De standaard verzendmethode van Sendwise.
                                    <span className="mt-3 block text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] text-white/80">
                                        Betrouwbaar verzenden tegen scherpe tarieven, zonder contracten of gedoe.
                                    </span>
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-6 sm:space-y-0">
                                    <div className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[1rem] cursor-pointer text-white px-7 py-3 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl w-fit relative overflow-hidden group">
                                        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                        <p className="relative z-10">Start met CONNECT</p>
                                    </div>
                                    <div className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 items-center space-x-3 cursor-pointer text-[0.95rem] px-7 py-3 rounded-3xl w-fit">
                                        <span>Bekijk tarieven</span>
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
                        <div className="absolute inset-0 opacity-40 noise-overlay" />
                        <Flex className="relative z-20 w-full p-7 sm:p-10 lg:p-12">
                            <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 w-full">
                                <div className="flex flex-col space-y-6 lg:w-[55%]">
                                    <h2 className="inter-medium lg:text-[3rem] md:text-[2.6rem] sm:text-[2.2rem] text-[1.9rem] lg:leading-[3.4rem] md:leading-[3rem] sm:leading-[2.6rem] leading-[2.2rem] text-white text-left">
                                        De slimme standaard voor Nederland en Europa
                                    </h2>
                                    <p className="text-white/90 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[36rem]">
                                        CONNECT maakt verzenden weer overzichtelijk. Geen losse vervoerders, geen meerdere pickups en geen versnipperde tarieven. Eén methode, één pickup en altijd de beste vervoerder per land — betrouwbaar en scherp geprijsd.
                                    </p>
                                </div>
                                <div className="lg:w-[45%] w-[calc(100%+3.5rem)] sm:w-[calc(100%+5rem)] lg:-my-12 -ml-7 sm:-ml-10 lg:ml-0 lg:mx-0 flex self-stretch">
                                    <div className="w-full h-full min-h-[18rem] sm:min-h-[20rem] overflow-hidden">
                                        <div className="h-full grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-[auto_auto] lg:justify-center gap-3 lg:gap-[2px]">
                                            <div className="vertical-marquee w-full lg:w-[11rem] xl:w-[12rem]">
                                                <div className="vertical-marquee-track vertical-marquee-track--slow vertical-marquee-track--down">
                                                    {integrations.map((integration) => (
                                                        <div
                                                            key={`a-${integration.name}`}
                                                            className="integration-logo-item"
                                                        >
                                                            <img
                                                                src={integration.src}
                                                                alt={`${integration.name} integratie`}
                                                                className="integration-logo"
                                                            />
                                                        </div>
                                                    ))}
                                                    {integrations.map((integration) => (
                                                        <div
                                                            key={`a-dup-${integration.name}`}
                                                            className="integration-logo-item"
                                                            aria-hidden="true"
                                                        >
                                                            <img
                                                                src={integration.src}
                                                                alt=""
                                                                className="integration-logo"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="vertical-marquee w-full lg:w-[11rem] xl:w-[12rem]">
                                                <div className="vertical-marquee-track vertical-marquee-track--fast">
                                                    {integrationsColumnB.map((integration) => (
                                                        <div
                                                            key={`b-${integration.name}`}
                                                            className="integration-logo-item"
                                                        >
                                                            <img
                                                                src={integration.src}
                                                                alt={`${integration.name} integratie`}
                                                                className="integration-logo"
                                                            />
                                                        </div>
                                                    ))}
                                                    {integrationsColumnB.map((integration) => (
                                                        <div
                                                            key={`b-dup-${integration.name}`}
                                                            className="integration-logo-item"
                                                            aria-hidden="true"
                                                        >
                                                            <img
                                                                src={integration.src}
                                                                alt=""
                                                                className="integration-logo"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Flex>
                    </Flex>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-[#F8FAFC] to-white p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full">
                        <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-12">
                            <motion.div
                                className="lg:w-[55%] w-full flex flex-col space-y-5 text-left"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="space-y-3">
                                    <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                        Waarom verzenden vaak onnodig ingewikkeld is
                                    </h2>
                                    <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[56rem]">
                                        Voor veel webshops bestaat verzenden uit losse vervoerders, verschillende afspraken en versnipperde processen. Dat maakt iets eenvoudigs onnodig complex — en vaak ook duurder dan nodig.
                                    </p>
                                </div>
                            </motion.div>
                            <div className="lg:w-[45%] w-full flex flex-col space-y-4">
                                {[
                                    "Meerdere vervoerders en contracten",
                                    "Verschillende pickups en werkwijzen",
                                    "Onvoorspelbare tarieven en indexeringen",
                                    "Support verdeeld over meerdere partijen",
                                ].map((item, index) => (
                                    <motion.div
                                        key={item}
                                        className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(15,23,42,0.12)]"
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.4 }}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                                    >
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a5ee5]/10 text-[#94A3B8]">
                                            <FiX className="text-[0.95rem]" />
                                        </span>
                                        <span className="text-sm inter-medium text-[#475569]">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                            <div className="lg:w-[45%] w-full">
                                <div className="w-full h-[16rem] sm:h-[20rem]">
                                    <ConnectFlowAnimation />
                                </div>
                            </div>
                            <div className="lg:w-[55%] w-full flex flex-col space-y-6 text-left">
                                <div className="space-y-3">
                                    <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                        CONNECT maakt verzenden overzichtelijk
                                    </h2>
                                    <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[56rem]">
                                        Met CONNECT verzend je via één vaste verzendmethode, waarbij per land wordt gewerkt met vaste, betrouwbare vervoerders. Je weet altijd welke vervoerder wordt gebruikt, terwijl je zelf werkt met één pickup, één methode en één aanspreekpunt.
                                    </p>
                                </div>
                                <FeatureList
                                    items={[
                                        "Eén vaste verzendmethode",
                                        "Per land vaste, betrouwbare vervoerders",
                                        "Eén pickup voor alle zendingen",
                                        "Duidelijke tarieven en voorspelbare levering",
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="rounded-2xl border border-gray-200 overflow-hidden w-full shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                        <div className="flex flex-col lg:flex-row lg:items-stretch">
                            <div className="lg:w-[55%] w-full bg-white p-6 sm:p-10 flex flex-col space-y-6 text-left">
                                <div className="space-y-3">
                                    <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                        Waarom bedrijven verzenden met CONNECT
                                    </h2>
                                    <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[56rem]">
                                        CONNECT is niet alleen eenvoudiger, maar structureel voordeliger dan traditionele verzendcontracten. Geen verplichtingen, geen verrassingen — wel volledige grip op je verzendingen.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:w-[45%] w-full bg-[rgba(26,94,229,0.06)]">
                                <div className="w-full h-full min-h-[16rem] sm:min-h-[18rem]">
                                    <ConnectUSPCardAnimation />
                                </div>
                            </div>
                        </div>
                    </div>
                </Flex>
            </section>

            

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                            <div className="lg:w-[45%] w-full">
                                <div className="w-full h-[16rem] sm:h-[20rem]">
                                    <ConnectBrandingAnimation />
                                </div>
                            </div>
                            <div className="lg:w-[55%] w-full flex flex-col space-y-6 text-left">
                                <div className="space-y-3">
                                    <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                        Branding & tracking in jouw eigen stijl
                                    </h2>
                                    <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[56rem]">
                                        Voor zendingen via CONNECT bepaal je zelf hoe klanten hun pakket volgen. Ontwerp je eigen trackingpagina en tracking e-mails, volledig in je eigen huisstijl — zonder extra tooling.
                                    </p>
                                </div>
                                <FeatureList
                                    items={[
                                        "Eigen trackingpagina ontwerpen",
                                        "Volledig in je eigen branding",
                                    ]}
                                />
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
                        <img src="/sendwise-2.png" alt="Sendwise" className="object-cover w-[100%] h-full rounded-2xl" />
                        <Flex className="absolute z-20 inset-0 w-full h-full">
                            <Flex className="text-white items-start flex-col space-y-6 w-full h-full justify-center px-6 sm:px-10 lg:pl-20">
                                <p className="inter-semibold lg:text-[3rem] sm:text-[2.4rem] text-[1.9rem] lg:leading-[3.4rem]">
                                    Maak verzenden eenvoudiger en goedkoper
                                </p>
                                <p className="inter-medium lg:text-[1.15rem] text-[1.05rem] lg:w-[80%]">
                                    Met CONNECT werk je met vaste tarieven, één pickup en de beste vervoerder per land. Minder gedoe, betere kwaliteit en structureel lagere kosten.
                                </p>
                                <Flex className="flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                                    <Flex className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[1rem] cursor-pointer text-white px-7 py-3 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl relative overflow-hidden group">
                                        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                        <p className="relative z-10">Start met CONNECT</p>
                                    </Flex>
                                    <Flex className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 items-center space-x-3 cursor-pointer text-[0.95rem] px-7 py-3 rounded-3xl">
                                        <span>Bekijk tarieven</span>
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

export default SendwiseConnect;
