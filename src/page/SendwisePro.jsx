import { Flex } from "antd";
import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheck } from "react-icons/fi";
import OrderPickingAnimation from "../components/animations/OrderPickingAnimation";
import WarehouseNavigationAnimation from "../components/animations/WarehouseNavigationAnimation";
import PackingControlAnimation from "../components/animations/PackingControlAnimation";
import InventoryOverviewAnimation from "../components/animations/InventoryOverviewAnimation";
import ProWarehouseCard from "../components/ProWarehouseCard";

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

const SendwisePro = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useGSAP(() => {
        gsap.set("#pro-hero-frame", {
            scale: 1,
            transformOrigin: "center center",
            borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "0%",
            marginLeft: "0px",
            marginRight: "0px",
        });

        gsap.to("#pro-hero-frame", {
            scale: 0.83,
            borderBottomLeftRadius: "100px",
            borderBottomRightRadius: "100px",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#pro-hero-frame",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.fromTo(
            "#pro-hero-img",
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
                    trigger: "#pro-hero-frame",
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
                    <Flex id="pro-hero-frame" className="w-[100%] mask-clip-path">
                        <img
                            id="pro-hero-img"
                            src="/sendwise-pro.png"
                            alt="Sendwise PRO"
                            className="absolute h-screen sm:h-screen w-[100%] object-cover object-top"
                        />
                        <div id="pro-hero-img" className="absolute z-10 bg-gradient-to-l from-transparent to-[#030302] w-[100%] h-screen sm:h-screen" />
                        <Flex className="z-30 sm:ml-[10%] ml-[4%] w-[100%] h-screen sm:h-screen flex-col justify-center items-start pt-16 sm:pt-20 pb-10 sm:pb-14">
                            <div className="flex flex-col items-start space-y-8 sm:space-y-10 translate-y-4 sm:translate-y-6">
                                <Flex className="group text-white/80 inter-semibold w-fit bg-[#514F4A]/30 border px-1 py-1 items-center space-x-4 rounded-3xl border-[#514F4A]/50 backdrop-blur-lg transition-all duration-500 ease-out hover:border-[#514F4A] hover:bg-[#514F4A]/40">
                                    <Flex className="border border-[#514F4A] bg-gradient-to-t to-[#514F4A] from-[#514F4A]/10 px-3 py-[0.4rem] rounded-3xl transition-all duration-500 ease-out group-hover:bg-[#514F4A] group-hover:scale-[1.02]">
                                        <p className="text-[0.85rem] tracking-[0.14em]">PRO</p>
                                    </Flex>
                                </Flex>
                                <div className="flex flex-col pl-1 inter-semibold md:leading-[4rem] leading-[3.1rem] text-white w-fit text-left">
                                    <h1 className="md:text-[4rem] sm:text-[2.5rem] text-[2.85rem]">Sendwise PRO</h1>
                                </div>
                                <p className="text-white font-light text-[1.25rem] sm:text-[1.1rem] md:text-[1.3rem] max-w-[42rem] leading-[1.4] text-left">
                                    Fulfilmentsoftware voor webshops die sneller, foutloos en schaalbaar willen werken.
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-6 sm:space-y-0">
                                    <div className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[1rem] cursor-pointer text-white px-7 py-3 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl w-fit relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                        <p className="relative z-10">Start met Sendwise PRO</p>
                                    </div>
                                    <div className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 items-center space-x-3 cursor-pointer text-[0.95rem] px-7 py-3 rounded-3xl w-fit">
                                        <span>Plan een demo</span>
                                    </div>
                                </div>
                            </div>
                        </Flex>
                    </Flex>
                </Flex>
            </section>

            <section className="w-full">
                <ProWarehouseCard
                    title="Alles voor fulfilment, op één plek"
                    description="Sendwise PRO is het fulfilmentdashboard voor webshops. Van orderinname tot picken, packen en voorraadbeheer — alles is ingericht om sneller te werken, fouten te verminderen en mee te schalen met je volume."
                />
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                            <div className="lg:w-[45%] w-full">
                                <div className="w-full h-[14rem] sm:h-[18rem]">
                                    <OrderPickingAnimation />
                                </div>
                            </div>
                            <div className="lg:w-[55%] w-full flex flex-col space-y-6 text-left">
                                <div className="space-y-3">
                                    <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                        Slim picken, sneller door je magazijn
                                    </h2>
                                    <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[56rem]">
                                        Orders komen automatisch binnen en worden omgezet in slimme picklijsten. Sendwise PRO helpt je met het efficiënt verzamelen van producten, met minder loopmeters en minder fouten.
                                    </p>
                                </div>
                                <FeatureList
                                    items={[
                                        "Automatische picklijsten",
                                        "Batch & single picking",
                                        "Route-optimalisatie",
                                        "Ondersteuning voor scanners en mobiel",
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
                                        Altijd weten waar je moet zijn
                                    </h2>
                                    <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[56rem]">
                                        Tijdens het picken begeleidt Sendwise PRO je stap voor stap door het magazijn. Je ziet precies welke locatie je nodig hebt, in de juiste volgorde.
                                    </p>
                                </div>
                                <FeatureList
                                    items={[
                                        "Locatiegestuurd picken",
                                        "Smartphone als scanner",
                                        "Handheld scanners",
                                        "Realtime foutdetectie",
                                    ]}
                                />
                            </div>
                            <div className="lg:w-[45%] w-full">
                                <div className="w-full h-[14rem] sm:h-[18rem]">
                                    <WarehouseNavigationAnimation />
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
                                    <PackingControlAnimation />
                                </div>
                            </div>
                            <div className="lg:w-[55%] w-full flex flex-col space-y-6 text-left">
                                <div className="space-y-3">
                                    <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                        Efficiënt en foutloos inpakken
                                    </h2>
                                    <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[56rem]">
                                        Bij het inpakken controleert Sendwise PRO automatisch of de juiste producten worden verwerkt, zodat fouten direct worden voorkomen.
                                    </p>
                                </div>
                                <FeatureList
                                    items={[
                                        "Packcontrole per order",
                                        "Sneller werken aan de inpaktafel",
                                        "Minder fouten en retouren",
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
                                        Volledig inzicht in je voorraad
                                    </h2>
                                    <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[56rem]">
                                        Beheer producten, locaties en voorraad vanuit één overzichtelijk dashboard.
                                    </p>
                                </div>
                                <FeatureList
                                    items={[
                                        "Realtime voorraad per locatie",
                                        "Producten beheren en bewerken",
                                        "Minder out-of-stock situaties",
                                    ]}
                                />
                            </div>
                            <div className="lg:w-[45%] w-full">
                                <div className="w-full h-[14rem] sm:h-[18rem]">
                                    <InventoryOverviewAnimation />
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
                                    <div className="relative w-full h-full">
                                        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[26px] bg-[#1a5ee5]/10" />
                                        <div className="relative h-full w-full rounded-[26px] overflow-hidden border border-white/60 bg-white shadow-[0_26px_60px_rgba(15,23,42,0.18)]">
                                            <img
                                                src="/pro-warehouse-3d.png"
                                                alt="Sendwise PRO magazijnweergave"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[55%] w-full flex flex-col space-y-6 text-left">
                                <div className="space-y-3">
                                    <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                        Je magazijn in 3D
                                    </h2>
                                    <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[56rem]">
                                        Ontwerp en visualiseer je magazijn in 3D. Zie direct waar producten liggen en hoeveel voorraad er beschikbaar is.
                                    </p>
                                </div>
                                <FeatureList
                                    items={[
                                        "3D weergave van stellingen",
                                        "Overzicht per zone of gang",
                                        "Direct inzicht in voorraadverdeling",
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full">
                        <div className="flex flex-col space-y-3">
                            <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                Transparante prijzen, zonder verrassingen
                            </h2>
                            <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[56rem]">
                                Eenvoudig en duidelijk, per webshop gefactureerd.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ scale: 1.02 }}
                                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-shadow duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                            >
                                <div className="flex flex-col space-y-2">
                                    <p className="inter-semibold text-[1.2rem] text-gray-900">Sendwise</p>
                                    <p className="inter-semibold text-[2.3rem] text-gray-900">€0</p>
                                    <p className="text-sm inter-normal text-[#475569]">Geen maandelijkse kosten</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                                whileHover={{ scale: 1.02 }}
                                className="rounded-2xl border border-[#1a5ee5]/30 bg-[#F8FAFC] p-6 sm:p-8 shadow-[0_16px_40px_rgba(26,94,229,0.16)] transition-shadow duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_24px_60px_rgba(26,94,229,0.18)]"
                            >
                                <div className="flex flex-col space-y-2">
                                    <p className="inter-semibold text-[1.2rem] text-gray-900">Sendwise PRO</p>
                                    <p className="inter-semibold text-[2.3rem] text-gray-900">
                                        €20 <span className="text-base text-[#475569] inter-normal">/ maand</span>
                                    </p>
                                    <p className="text-sm inter-normal text-[#475569]">Per webshop</p>
                                </div>
                                <div className="mt-6">
                                    <div className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[0.95rem] cursor-pointer text-white px-6 py-2.5 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl w-fit relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                        <p className="relative z-10">Start met Sendwise PRO</p>
                                    </div>
                                </div>
                            </motion.div>
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
                                    Klaar om fulfilment slimmer aan te pakken?
                                </p>
                                <p className="inter-medium lg:text-[1.15rem] text-[1.05rem] lg:w-[80%]">
                                    Ontdek hoe Sendwise PRO je helpt sneller te picken, foutloos te verpakken en overzicht te houden.
                                </p>
                                <Flex className="flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                                    <Flex className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[1rem] cursor-pointer text-white px-7 py-3 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                        <p className="relative z-10">Start met Sendwise PRO</p>
                                    </Flex>
                                    <Flex className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 items-center space-x-3 cursor-pointer text-[0.95rem] px-7 py-3 rounded-3xl">
                                        <span>Plan een demo</span>
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

export default SendwisePro;
