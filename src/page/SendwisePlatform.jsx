import { Flex } from "antd";
import LabelPrintAnimation from "../components/animations/LabelPrintAnimation";
import ShipmentInsightAnimation from "../components/animations/ShipmentInsightAnimation";
import TicketSupportAnimation from "../components/animations/TicketSupportAnimation";
import BillingInsightAnimation from "../components/animations/BillingInsightAnimation";
import BrandingExperienceAnimation from "../components/animations/BrandingExperienceAnimation";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheck } from "react-icons/fi";


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
    { name: "WooCommerce", src: "/woocommerce-logo.png" },
    { name: "Wix", src: "/wix.png" },
    { name: "Shopify", src: "/shopify-logo.png" },
    { name: "Sendwise API", src: "/sendwise-api.png" },
    { name: "PrestaShop", src: "/prestashop.png" },
    { name: "Orders", src: "/orders.png" },
    { name: "Mijnwebwinkel", src: "/mijnwebwinkel.png" },
    { name: "Magento", src: "/magento.jpg" },
    { name: "Lyra", src: "/lyra.png" },
    { name: "Goedgepickt", src: "/goedgepickt-sendwise-logo.png" },
    { name: "Ecwid", src: "/ecwid-parcxl.png" },
    { name: "CCV", src: "/ccv-icon.svg" },
    { name: "Lightspeed", src: "/lightspeed.png" },
    { name: "bol", src: "/bol-logo.png" },
];

const integrationsColumnB = integrations.slice(4).concat(integrations.slice(0, 4));

const SendwisePlatform = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useGSAP(() => {
        gsap.set("#sendwise-hero-frame", {
            scale: 1,
            transformOrigin: "center center",
            borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "0%",
            marginLeft: "0px",
            marginRight: "0px",
        });

        gsap.to("#sendwise-hero-frame", {
            scale: 0.83,
            borderBottomLeftRadius: "100px",
            borderBottomRightRadius: "100px",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#sendwise-hero-frame",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.fromTo(
            "#sendwise-hero-img",
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
                    trigger: "#sendwise-hero-frame",
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
                    <Flex id="sendwise-hero-frame" className="w-[100%] mask-clip-path">
                        <img
                            id="sendwise-hero-img"
                            src="/074DAC7F-33B0-4769-B2EB-D9A7CAFA53EB.webp"
                            alt="Sendwise platform"
                            className="absolute h-screen sm:h-screen w-[100%] object-cover object-top sm:object-top"
                        />
                        <div id="sendwise-hero-img" className="absolute z-10 bg-gradient-to-l from-transparent to-[#030302] w-[100%] h-screen sm:h-screen" />
                        <Flex className="z-30 sm:ml-[10%] ml-[4%] w-[100%] h-screen sm:h-screen flex-col justify-center items-start pt-16 sm:pt-20 pb-10 sm:pb-14">
                            <div className="flex flex-col items-start space-y-8 sm:space-y-10 translate-y-4 sm:translate-y-6">
                                <Flex className="group text-white/80 inter-semibold w-fit bg-[#514F4A]/30 border px-1 py-1 items-center space-x-4 rounded-3xl border-[#514F4A]/50 backdrop-blur-lg transition-all duration-500 ease-out hover:border-[#514F4A] hover:bg-[#514F4A]/40">
                                    <Flex className="border border-[#514F4A] bg-gradient-to-t to-[#514F4A] from-[#514F4A]/10 px-3 py-[0.4rem] rounded-3xl transition-all duration-500 ease-out group-hover:bg-[#514F4A] group-hover:scale-[1.02]">
                                        <p className="text-[0.85rem] tracking-[0.14em]">PLATFORM</p>
                                    </Flex>
                                </Flex>
                                <div className="flex flex-col pl-1 inter-semibold md:leading-[4rem] leading-[3.1rem] text-white w-fit text-left">
                                    <h1 className="md:text-[4rem] sm:text-[2.5rem] text-[2.85rem]">Het Sendwise platform</h1>
                                </div>
                                <p className="text-white font-light text-[1.25rem] sm:text-[1.1rem] md:text-[1.3rem] max-w-[42rem] leading-[1.4] text-left">
                                    Alles wat je nodig hebt om zendingen te verwerken, volgen en beheren — in één overzichtelijk dashboard.
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
                    <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full">
                        <div className="flex flex-col space-y-4">
                            <div className="relative w-fit">
                                <div className="absolute -inset-x-3 bottom-1 h-3 bg-gradient-to-r from-[#1a5ee5]/25 to-transparent rounded-full" />
                                <p className="relative inter-semibold lg:text-[2rem] sm:text-[1.8rem] text-[1.6rem] text-gray-900">
                                    Eén platform voor al je verzendingen
                                </p>
                            </div>
                            <p className="text-gray-700 inter-medium lg:text-[1.1rem] text-[1rem] max-w-[60rem] leading-relaxed">
                                Het Sendwise platform is de centrale plek waar al je orders, zendingen en vervoerders samenkomen.
                                Koppel je webshop of marketplace, verwerk zendingen met één klik en houd volledig overzicht — van label tot levering.
                            </p>
                        </div>
                    </div>
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
                                        Orders automatisch binnen vanuit je systemen
                                    </h2>
                                    <FeatureList
                                        tone="light"
                                        items={[
                                            "Koppelingen met o.a. Shopify, WooCommerce, bol.com en meer",
                                            "Orders verschijnen realtime in je dashboard",
                                            "Geen handmatige invoer nodig",
                                            "Geschikt voor meerdere shops en accounts",
                                        ]}
                                    />
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
                                    <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[56rem]">
                                        Verwerk orders razendsnel door direct verzendlabels aan te maken en te printen.
                                        Of je nu per stuk verzendt, in bulk werkt of handmatig zendingen toevoegt — alles loopt via hetzelfde proces.
                                    </p>
                                </div>
                                <FeatureList
                                    items={[
                                        "Verzendlabels per order of in bulk",
                                        "Handmatig zendingen aanmaken",
                                        "Zendingen importeren via Excel",
                                        "Ondersteuning voor verschillende labelprinters",
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
                                <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                    Volledig inzicht in elke zending
                                </h2>
                                <FeatureList
                                    items={[
                                        "Realtime status per zending",
                                        "Direct toegang tot track & trace",
                                        "Retourlabels aanmaken vanuit het dashboard",
                                        "Problemen melden bij zendingen met één klik",
                                    ]}
                                />
                            </div>
                            <div className="lg:w-[45%] w-full">
                                <div className="w-full h-[14rem] sm:h-[18rem]">
                                    <ShipmentInsightAnimation />
                                </div>
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
                                <div className="w-full h-[14rem] sm:h-[18rem]">
                                    <TicketSupportAnimation />
                                </div>
                            </div>
                            <div className="lg:w-[55%] w-full flex flex-col space-y-6 text-left">
                                <div className="space-y-3">
                                    <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                        Alles rondom problemen en onderzoeken op één plek
                                    </h2>
                                    <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[54rem]">
                                        Gaat er iets mis met een zending? Dan regel je dat direct vanuit Sendwise.
                                    </p>
                                </div>
                                <FeatureList
                                    items={[
                                        "Overzicht van alle openstaande tickets",
                                        "Updates over onderzoeken bij vervoerders",
                                        "Communicatie gecentraliseerd per zending",
                                        "Geen losse mails of portals meer",
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
                                <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                    Inzicht in kosten en facturen
                                </h2>
                                <FeatureList
                                    items={[
                                        "Overzicht van alle facturen",
                                        "Facturen eenvoudig betalen",
                                        "Volledig inzicht in verzendprijzen",
                                        "Geen verborgen kosten of losse toeslagen",
                                    ]}
                                />
                            </div>
                            <div className="lg:w-[45%] w-full">
                                <div className="w-full h-[14rem] sm:h-[18rem]">
                                    <BillingInsightAnimation />
                                </div>
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
                                <div className="w-full h-[14rem] sm:h-[18rem]">
                                    <BrandingExperienceAnimation />
                                </div>
                            </div>
                            <div className="lg:w-[55%] w-full flex flex-col space-y-6 text-left">
                                <div className="space-y-3">
                                    <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                        Je eigen trackingervaring voor klanten
                                    </h2>
                                    <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[54rem]">
                                        Voor zendingen via CONNECT kun je je verzendcommunicatie volledig aanpassen aan je eigen merk.
                                    </p>
                                </div>
                                <FeatureList
                                    items={[
                                        "Custom trackingpagina",
                                        "Eigen tracking e-mails",
                                        "Consistente merkervaring voor klanten",
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
                                    Alles geregeld vanuit één platform
                                </p>
                                <p className="inter-medium lg:text-[1.15rem] text-[1.05rem] lg:w-[80%]">
                                    Verwerk zendingen sneller, houd overzicht en bespaar op verzendkosten met Sendwise.
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

export default SendwisePlatform;
