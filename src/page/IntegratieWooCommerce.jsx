import { Flex } from "antd";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

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

const WooCommerceHeroCard = () => (
    <Flex className="lg:w-[80%] w-[95%] lg:h-[24rem] sm:h-[17rem] h-[16rem] mx-auto mb-8 sm:mb-10 group relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl z-0" />
        <div className="absolute inset-0 opacity-40 z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay' }} />
        <Flex className="absolute inset-0 z-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full h-full items-center px-6 sm:px-10 lg:px-20">
                <Flex className="text-white w-full flex-col space-y-4 items-start text-left justify-center">
                    <p className="inter-semibold lg:text-[2rem] sm:text-[1.8rem] text-[1.5rem] text-left">
                        Het verzendplatform voor WooCommerce
                    </p>
                    <p className="text-left md:w-[90%] lg:mx-0 inter-medium lg:pl-0 pl-2 lg:text-[1.2rem]">
                        Verbind je WooCommerce-webshop en verzend sneller, goedkoper en zonder gedoe.
                    </p>
                    <Link
                        to="/start-met-sendwise"
                        className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 w-[14.5rem] items-center space-x-4 cursor-pointer text-[0.9rem] hover:bg-white mt-10 pl-4 py-1 rounded-3xl self-start overflow-hidden flex"
                    >
                        <span className="whitespace-nowrap">Start met Sendwise</span>
                        <Flex className="group-hover:bg-[#D44A00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-full p-2 text-[1.5rem]">
                            <GoArrowUpRight />
                        </Flex>
                    </Link>
                </Flex>
                <div className="relative flex items-center justify-center" style={{ perspective: "900px" }}>
                    <div className="absolute -bottom-6 left-1/2 h-6 w-40 -translate-x-1/2 rounded-full bg-black/30 blur-xl" />
                    <motion.img
                        src="/woocommerce-logo.png"
                        alt="WooCommerce"
                        className="w-[11rem] sm:w-[14rem] lg:w-[18rem] h-auto object-contain drop-shadow-[0_36px_80px_rgba(15,23,42,0.5)] transform-gpu"
                        style={{ transformPerspective: 900, rotateY: -24, rotateX: 6, transformStyle: "preserve-3d" }}
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </div>
        </Flex>
    </Flex>
);

const WhySendwiseSection = () => (
    <section className="w-full -mt-16 sm:-mt-20">
        <Flex className="lg:flex-row flex-col lg:items-center lg:space-x-12 lg:space-y-0 space-y-8 lg:w-[80%] w-[95%] mx-auto lg:pt-10 md:pt-8 sm:pt-6 pt-4">
            <Flex className="lg:w-[55%] w-[100%] flex-col space-y-6">
                <h2 className="inter-medium lg:text-[3.1rem] md:text-[2.7rem] sm:text-[2.3rem] text-[1.9rem] lg:leading-[3.6rem] md:leading-[3.1rem] sm:leading-[2.7rem] leading-[2.3rem] text-gray-900">
                    Gebruik <span className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] bg-clip-text text-transparent font-semibold">Sendwise</span> met WooCommerce
                </h2>
                <div className="flex flex-col space-y-6 inter-medium lg:text-[1.15rem] md:text-[1.08rem] text-[0.98rem] leading-[1.7rem] text-gray-600 lg:max-w-[34rem] w-full">
                    <p className="text-gray-700">
                        Gebruik Sendwise als centrale verzendlaag bovenop je WooCommerce‑shop. Orders uit WooCommerce komen automatisch binnen en staan direct klaar in je verzenddashboard. Je hoeft niets handmatig te exporteren of bij te houden, alles blijft netjes gesynchroniseerd. Zo blijft je fulfilmentproces strak en overzichtelijk.
                    </p>
                    <p className="text-gray-700">
                        Vanuit Sendwise selecteer je per order een vervoerder en maak je direct labels aan. Vervolgens stuur je tracking en statusupdates automatisch terug naar WooCommerce.
                    </p>
                </div>
                <Flex className="pt-2">
                    <Link
                        to="/start-met-sendwise"
                        className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-[#1a5ee5]/10 hover:border-transparent text-[#1a5ee5] inter-medium border border-[#1a5ee5] w-[15rem] items-center space-x-4 cursor-pointer text-[0.9rem] pl-4 py-1 rounded-3xl flex"
                    >
                        <span className="whitespace-nowrap">Start met Sendwise</span>
                        <Flex className="text-[#1a5ee5] group-hover:text-white group-hover:bg-[#D44A00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-full p-2 text-[1.5rem]">
                            <GoArrowUpRight />
                        </Flex>
                    </Link>
                </Flex>
            </Flex>
            <Flex className="lg:w-[45%] w-[100%] items-center justify-center self-center">
                <div
                    className="w-full lg:max-w-[420px] md:max-w-[520px] max-w-[460px] relative p-2"
                    style={{ perspective: "1200px" }}
                >
                    <motion.div
                        className="relative will-change-transform"
                        style={{ rotateY: 0, rotateX: 0, transformStyle: "preserve-3d" }}
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
);

const IntegrationStepSection = ({ title, text, reverse = false, placeholder, imageSrc, imageAlt }) => (
    <section className="w-full mt-12 sm:mt-16 lg:mt-20">
        <Flex className="w-[95%] lg:w-[80%] mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full">
                <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center gap-8 lg:gap-12`}>
                    <div className="lg:w-[45%] w-full">
                        <div className="w-full h-[14rem] sm:h-[18rem] rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center">
                            {imageSrc ? (
                                <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-slate-400 text-sm">{placeholder}</span>
                            )}
                        </div>
                    </div>
                    <div className="lg:w-[55%] w-full flex flex-col space-y-6 text-left">
                        <div className="space-y-3">
                            <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                {title}
                            </h2>
                            <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[56rem]">
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Flex>
    </section>
);

const IntegratieWooCommerce = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Flex className="flex-col w-[100%] overflow-hidden mb-10 pt-24 sm:pt-28 space-y-6 sm:space-y-8 lg:space-y-10">
            <WooCommerceHeroCard />

            <WhySendwiseSection />
            <div className="h-6 sm:h-8 lg:h-10" />
            <IntegrationStepSection
                step={1}
                title="Stap 1 — Maak API-sleutels aan in WooCommerce"
                text="Ga in je WooCommerce-dashboard naar Instellingen → Geavanceerd → REST API. Klik op Sleutel toevoegen, geef de sleutel een duidelijke naam (bijvoorbeeld “Sendwise”) en zet de rechten op Lezen & schrijven. Klik vervolgens op API-sleutel genereren. Je krijgt nu een Consumer key en Consumer secret te zien."
                placeholder="Screenshot placeholder (WooCommerce REST API scherm)."
                imageSrc="/woocommerce-step-1.png"
                imageAlt="WooCommerce REST API"
            />
            <IntegrationStepSection
                step={2}
                reverse
                title="Stap 2 — Vul je WooCommerce-gegevens in bij Sendwise"
                text="Ga in Sendwise naar Integraties → WooCommerce. Plak hier de Consumer key en Consumer secret uit WooCommerce en vul het domein van je webshop in."
                placeholder="Screenshot placeholder (Sendwise WooCommerce integratieformulier)."
                imageSrc="/woocommerce-step-2.png"
                imageAlt="Sendwise WooCommerce integratieformulier"
            />
            <IntegrationStepSection
                step={3}
                title="Stap 3 — Test de verbinding"
                text="Klik op Test verbinding. Sendwise controleert automatisch of je webshop bereikbaar is en of de API-sleutels correct zijn ingesteld. Bij een succesvolle test ontvang je direct een bevestiging."
                placeholder="Screenshot placeholder (succesmelding “Verbinding geslaagd”)."
                imageSrc="/woocommerce-step-3.png"
                imageAlt="Verbinding geslaagd"
            />
            <IntegrationStepSection
                step={4}
                reverse
                title="Stap 4 — Activeer de integratie"
                text="Klik op Integratie toevoegen om de koppeling te activeren. Vanaf dit moment worden nieuwe WooCommerce-orders automatisch in je Sendwise-dashboard ingeladen."
                placeholder="Screenshot placeholder (Sendwise orders overzicht)."
                imageSrc="/woocommerce-step-3.png"
                imageAlt="Sendwise orders overzicht"
            />
        </Flex>
    );
};

export default IntegratieWooCommerce;
