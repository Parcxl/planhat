import { Flex } from "antd";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProWarehouseCard from "../ProWarehouseCard";

const Works = () => {
    const data = [
        { detail: '“High touch CSMs have been able to more efficiently manage their day, unlocking substantial cost savings.”', name: 'Pam Dickson Fishman', title: 'VP Customer Success, Basis Technologies', route: '' },
        { detail: '“Over the past 11 months, Planhat has enabled us to improve the average health of our customer base by +43%.”', name: 'Mychael Mulhern', title: 'Director of Customer Success, May Mobility', route: '' },
        { detail: '“Proactive customer management in Planhat has transformed our teams operating performance.”', name: 'Alexey Smolyanyy', title: 'Director of Customer Success Strategy and Operations, Redis', route: '' },
        { detail: '“Just during our first month of using the platform we saved more than 100 hours.”', name: 'Lasse Thomsen', title: 'Head of Commercial Operations, Trustpilot', route: '' },
        { detail: '“Planhat removed the need for an additional full-time CSM monitoring operations.”', name: 'Emil Chroona', title: 'Chief Growth Officer, Bannerflow', route: '' },
    ]
    const progressRefs = useRef([]);
    const sectionRef = useRef(null);
    const integrationsRef = useRef(null);
    progressRefs.current = [];
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"],
    });
    const rotateY = useTransform(scrollYProgress, [0, 1], [0, -15]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [0, 3]);
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
    const [isCarouselPaused, setIsCarouselPaused] = useState(false);
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });
    const [tooltipContent, setTooltipContent] = useState({
        title: "",
        body: "",
        cta: "Meer informatie",
        src: "",
    });
    const [isTooltipHover, setIsTooltipHover] = useState(false);
    const hideTimeoutRef = useRef(0);
    const handleLogoEnter = (integration, event) => {
        window.clearTimeout(hideTimeoutRef.current);
        const rect = event.currentTarget.getBoundingClientRect();
        const containerRect = integrationsRef.current?.getBoundingClientRect();
        const tooltipWidth = 280;
        const offset = 6;
        let x = rect.right + offset - 6;
        let y = rect.top;
        const maxX = window.innerWidth - tooltipWidth - 12;
        if (x > maxX) x = rect.left - tooltipWidth - offset;
        if (x < 12) x = 12;
        if (y < 12) y = 12;
        if (containerRect) {
            x = x - containerRect.left;
            y = y - containerRect.top;
        }
        setIsCarouselPaused(true);
        setTooltipContent({
            title: integration.name,
            body: `Koppel ${integration.name} om orders, verzending en tracking automatisch te synchroniseren.`,
            cta: "Meer informatie",
            src: integration.src,
        });
        setTooltip({
            visible: true,
            x,
            y,
        });
    };
    const handleLogoLeave = () => {
        hideTimeoutRef.current = window.setTimeout(() => {
            if (!isTooltipHover) {
                setIsCarouselPaused(false);
                setTooltip((prev) => ({ ...prev, visible: false }));
            }
        }, 80);
    };
    const onAutoplayTimeLeft = (swiper, time, progress) => {
        const activeIndex = swiper.realIndex;

        progressRefs.current.forEach((bar, index) => {
            if (!bar) return;

            if (index < activeIndex) {
                // Already completed
                bar.style.width = "100%";
            } else if (index === activeIndex) {
                // Animate current slide fill
                const totalTime = swiper.params.autoplay.delay;
                bar.style.transition = `width ${totalTime / 1000}s linear`;
                bar.style.width = "100%";
            } else {
                // Not yet reached
                bar.style.transition = "none";
                bar.style.width = "0%";
            }
        });
    };

    return (
        <Flex className=" w-[100%] space-y-6 mb-32 mx-auto flex-col lg:pt-24 md:pt-40 sm:pt-48 pt-0">
            {/* Duplicated carts side by side */}
            <Flex className="lg:flex-row flex-col lg:space-x-6 lg:space-y-0 space-y-6 lg:w-[80%] w-[95%] mx-auto mt-0 sm:mt-2 md:mt-16 lg:mt-20">
                <Flex className="lg:w-[50%] w-[100%] lg:h-[24rem] sm:h-[16rem] h-[16rem] group relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl" />
                    <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay' }} />
                    <Flex className="relative z-20 w-full h-full p-6 sm:p-8 pt-10 pb-10 lg:pl-12 sm:pl-8">
                        <Flex className="text-white w-[100%] items-start flex-col space-y-6 justify-center h-full">
                            <p className="inter-semibold lg:text-[2rem] sm:text-[1.8rem] text-[1.5rem] text-left">Voor webshops</p>
                            <p className="text-left md:w-[90%] w-[100%] inter-medium lg:text-[1.2rem] text-[1rem]">Schaal je verzending met vaste tarieven, multi-carrier shipping en branded tracking — zonder contracten of complexiteit.</p>
                            <Link
                                to="/voor-webshops"
                                className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-white/60 text-white hover:text-white inter-medium border border-white/30 w-[15rem] items-center space-x-4 cursor-pointer text-[0.9rem] pl-4 sm:py-1 py-3 sm:min-h-0 min-h-[48px] rounded-3xl flex relative overflow-hidden"
                            >
                                <span className="whitespace-nowrap relative z-20 text-white opacity-100 mix-blend-normal">Start met Sendwise</span>
                                <Flex className="relative z-20 text-white mix-blend-normal group-hover:bg-[#D44A00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-full sm:p-2 p-1.5 sm:text-[1.5rem] text-[1.2rem] sm:mt-0 mt-1">
                                    <GoArrowUpRight />
                                </Flex>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="lg:w-[50%] w-[100%] lg:h-[24rem] sm:h-[16rem] h-[16rem] group relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl" />
                    <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay' }} />
                    <Flex className="relative z-20 w-full h-full p-6 sm:p-8 pt-10 pb-10 lg:pl-12 sm:pl-8">
                        <Flex className="text-white w-[100%] items-start flex-col space-y-6 justify-center h-full">
                            <p className="inter-semibold lg:text-[2rem] sm:text-[1.8rem] text-[1.5rem] text-left">Voor fulfilmentcenters</p>
                            <p className="text-left md:w-[90%] w-[100%] inter-medium lg:text-[1.2rem] text-[1rem]">Verzend goedkoper op schaal met tientallen carriers via één pickup — zonder contracten, zonder complexiteit.</p>
                            <Link
                                to="/voor-fulfilmentcenters"
                                className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-white/60 text-white hover:text-white inter-medium border border-white/30 w-[15rem] items-center space-x-4 cursor-pointer text-[0.9rem] pl-4 sm:py-1 py-3 sm:min-h-0 min-h-[48px] rounded-3xl flex relative overflow-hidden"
                            >
                                <span className="whitespace-nowrap relative z-20 text-white opacity-100 mix-blend-normal">Start met Sendwise</span>
                                <Flex className="relative z-20 text-white mix-blend-normal group-hover:bg-[#D44A00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-full sm:p-2 p-1.5 sm:text-[1.5rem] text-[1.2rem] sm:mt-0 mt-1">
                                    <GoArrowUpRight />
                                </Flex>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            
            {/* Wat Sendwise oplost section */}
            <div ref={sectionRef}>
            <Flex className="lg:flex-row flex-col lg:space-x-12 lg:space-y-0 space-y-8 lg:w-[80%] w-[95%] mx-auto lg:pt-28 md:pt-20 sm:pt-16 pt-14">
                {/* Left column - Text */}
                <Flex className="lg:w-[55%] w-[100%] flex-col space-y-6">
                    <h2 className="inter-semibold lg:text-[3.1rem] md:text-[2.7rem] sm:text-[2.3rem] text-[1.9rem] lg:leading-[3.6rem] md:leading-[3.1rem] sm:leading-[2.7rem] leading-[2.3rem] text-gray-900">
                        Wat Sendwise <span className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] bg-clip-text text-transparent font-bold italic">oplost</span>
                    </h2>
                    
                    <div className="flex flex-col space-y-6 inter-medium lg:text-[1.15rem] md:text-[1.08rem] text-[0.98rem] leading-[1.7rem] text-gray-600 lg:max-w-[34rem] w-full">
                        <p className="text-gray-700">
                            <span className="font-semibold text-gray-900">Verzenden is voor veel webshops en fulfilmentcenters onnodig duur en complex.</span> Je zit vast aan <em>contracten</em>, <em>abonnementen</em>, <em>hoge indexeringen</em> en beperkte flexibiliteit, terwijl grip op kosten en het verzendproces ontbreekt.
                        </p>
                        
                        <p>
                            <span className="font-semibold text-gray-900">Sendwise doorbreekt dat model met één verzendplatform en één vaste verzendmethode: CONNECT.</span> We brengen tientallen vervoerders samen onder één pickup en één platform, terwijl op de achtergrond altijd de beste optie wordt gebruikt.
                        </p>
                        
                        <p>
                            Daardoor kunnen we <em>structureel lage verzendtarieven</em> aanbieden, zonder <em>abonnementskosten</em>, <em>contracten</em> of <em>labelbijdrages</em>, en met eerlijke indexeringen. Tegelijk zorgt Sendwise voor minder fouten, <em>realtime inzicht</em> in zendingen en volledige controle over branding en verzendcommunicatie.
                        </p>
                    </div>

                    <Flex className="items-center space-x-6 pt-2">
                        <Link
                            to="/start-met-sendwise"
                            className="group relative overflow-hidden bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] hover:backdrop-blur-md text-white hover:text-white inter-medium text-[0.95rem] cursor-pointer px-5 py-2 rounded-3xl transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl items-center space-x-3 flex isolate"
                        >
                            <span className="relative z-10 text-white group-hover:text-white">Direct starten</span>
                            <Flex className="relative z-10 text-white group-hover:text-white rounded-full p-2 transition-all duration-300 ease-in-out group-hover:bg-[#D44A00] group-hover:translate-x-1 group-hover:-translate-y-1">
                                <GoArrowUpRight />
                            </Flex>
                        </Link>
                        <Link
                            to="/contact"
                            className="text-[#1a5ee5] inter-medium text-[0.95rem] cursor-pointer hover:text-[#0f3d9e] transition-colors duration-300"
                        >
                            Contact opnemen
                        </Link>
                    </Flex>
                </Flex>
                
                {/* Right column - Image */}
                <Flex className="lg:w-[45%] w-[100%] items-center justify-center">
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
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
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
            </div>

            {/* Integrations section */}
            <section className="w-full py-20 md:py-28 relative" ref={integrationsRef}>
                <div className="relative w-[95%] lg:w-[80%] mx-auto">
                    <div className="relative flex flex-col items-center justify-center text-center">
                        <h3 className="inter-semibold lg:text-[3rem] md:text-[2.6rem] sm:text-[2.2rem] text-[2rem] text-gray-900">
                            Onze integraties
                        </h3>
                        <div className="mt-3 h-[4px] w-[140px] rounded-full bg-gradient-to-r from-transparent via-[#1a5ee5]/80 to-transparent shadow-[0_0_16px_rgba(26,94,229,0.45)]" />
                    </div>
                </div>

                <div className="mt-12 w-full overflow-hidden">
                    <div
                        className="lightspeed-track"
                        style={{ animationPlayState: isCarouselPaused ? "paused" : "running" }}
                    >
                        <div className="lightspeed-group">
                            {integrations.map((integration, index) => (
                                <div
                                    key={`a-${integration.name}`}
                                    className="lightspeed-icon"
                                    style={{
                                        animationDelay: `${index * 0.15}s`,
                                        animationDuration: `${8 + (index % 4)}s`,
                                    }}
                                    onMouseEnter={(event) => handleLogoEnter(integration, event)}
                                    onMouseLeave={handleLogoLeave}
                                >
                                    <img
                                        src={integration.src}
                                        alt={`${integration.name} integratie`}
                                        className="h-20 w-20 md:h-24 md:w-24 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="lightspeed-group" aria-hidden="true">
                            {integrations.map((integration, index) => (
                                <div
                                    key={`b-${integration.name}`}
                                    className="lightspeed-icon"
                                    style={{
                                        animationDelay: `${index * 0.15}s`,
                                        animationDuration: `${8 + (index % 4)}s`,
                                    }}
                                    onMouseEnter={(event) => handleLogoEnter(integration, event)}
                                    onMouseLeave={handleLogoLeave}
                                >
                                    <img
                                        src={integration.src}
                                        alt=""
                                        className="h-20 w-20 md:h-24 md:w-24 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {tooltip.visible ? (
                    <div
                        className="absolute z-50 max-w-[280px] rounded-2xl border border-white/30 bg-white/95 px-4 py-4 text-left shadow-[0_14px_40px_rgba(15,23,42,0.14)] backdrop-blur-md tooltip-anim"
                        style={{
                            left: tooltip.x,
                            top: tooltip.y,
                        }}
                        onMouseEnter={() => {
                            window.clearTimeout(hideTimeoutRef.current);
                            setIsTooltipHover(true);
                            setIsCarouselPaused(true);
                        }}
                        onMouseLeave={() => {
                            setIsTooltipHover(false);
                            setIsCarouselPaused(false);
                            setTooltip((prev) => ({ ...prev, visible: false }));
                        }}
                    >
                        <Flex className="items-center space-x-3">
                            <div className="h-9 w-9 flex items-center justify-center">
                                <img
                                    src={tooltipContent.src}
                                    alt=""
                                    className="h-7 w-7 object-contain"
                                />
                            </div>
                            <p className="inter-semibold text-[0.95rem] text-gray-900">
                                {tooltipContent.title}
                            </p>
                        </Flex>
                        <p className="mt-2 inter-medium text-[0.85rem] leading-[1.3rem] text-gray-600">
                            {tooltipContent.body}
                        </p>
                        <Flex className="mt-3 items-center space-x-1">
                            <p className="inter-medium text-appear bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] bg-clip-text text-transparent">
                                {tooltipContent.cta}
                            </p>
                            <GoArrowUpRight className="text-[#1a5ee5]" />
                        </Flex>
                    </div>
                ) : null}

                <div className="mt-10 flex justify-center">
                    <Link
                        to="/integraties"
                        className="group relative overflow-hidden border border-[#1a5ee5] text-[#1a5ee5] hover:text-[#1a5ee5] hover:bg-[#1a5ee5]/10 inter-medium text-[0.95rem] cursor-pointer px-6 py-2 rounded-3xl transition-all duration-300 ease-in-out items-center space-x-3 flex isolate"
                    >
                        <span className="relative z-10 text-[#1a5ee5] group-hover:text-[#1a5ee5]">Bekijk alle integraties</span>
                        <Flex className="relative z-10 text-[#1a5ee5] group-hover:text-white rounded-full p-2 transition-all duration-300 ease-in-out group-hover:bg-[#D44A00] group-hover:translate-x-1 group-hover:-translate-y-1">
                            <GoArrowUpRight />
                        </Flex>
                    </Link>
                </div>
            </section>
            
            <ProWarehouseCard
                title={
                    <>
                        Sendwise{" "}
                        <span className="font-bold italic lg:text-[2.6rem] sm:text-[2.2rem] text-[1.9rem] align-baseline">PRO</span>
                    </>
                }
                description="Ontwerp je magazijn, optimaliseer pickroutes en schaal fulfilment zonder complexiteit."
            />

            {/* Het eerlijke verzendmodel section */}
            <Flex className="flex-col items-center text-center w-[95%] lg:w-[80%] mx-auto mt-40 sm:mt-48 pt-8 sm:pt-14 mb-2 sm:mb-0">
                <p className="inter-semibold lg:text-[3rem] md:text-[2.6rem] sm:text-[2.2rem] text-[2rem] text-gray-900">
                    Het eerlijke <span className="text-[#1a5ee5] font-semibold">verzendmodel</span>
                </p>
            </Flex>
            <div className="h-0 sm:h-6 hidden sm:block" />

            <Flex className="w-[95%] lg:w-[80%] mx-auto mt-1 sm:mt-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    <div className="relative rounded-2xl overflow-hidden p-6">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl" />
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay' }} />
                        <p className="relative inter-semibold text-[1.2rem] text-white">Geen contracten</p>
                        <p className="relative inter-medium mt-2 text-[0.95rem] text-white/90">
                            Stap in en schaal zonder langdurige verplichtingen.
                        </p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden p-6">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl" />
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay' }} />
                        <p className="relative inter-semibold text-[1.2rem] text-white">Geen maandelijkse kosten</p>
                        <p className="relative inter-medium mt-2 text-[0.95rem] text-white/90">
                            Betaal alleen voor wat je verzendt.
                        </p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden p-6">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl" />
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay' }} />
                        <p className="relative inter-semibold text-[1.2rem] text-white">Geen labelbijdrages</p>
                        <p className="relative inter-medium mt-2 text-[0.95rem] text-white/90">
                            Geen verborgen fees per label.
                        </p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden p-6">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl" />
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay' }} />
                        <p className="relative inter-semibold text-[1.2rem] text-white">Eerlijke indexeringen</p>
                        <p className="relative inter-medium mt-2 text-[0.95rem] text-white/90">
                            Transparante prijsaanpassingen, zonder carrier-lock-in.
                        </p>
                    </div>
                </div>
            </Flex>

            <div className="h-0 sm:h-6 hidden sm:block" />
            <Flex className="mt-3 sm:mt-32 mb-4 sm:mb-20 w-full justify-center">
                <Link
                    to="/start-met-sendwise"
                    className="group relative overflow-hidden border border-[#1a5ee5] text-[#1a5ee5] hover:text-[#1a5ee5] hover:bg-[#1a5ee5]/10 inter-medium text-[0.95rem] cursor-pointer px-5 py-2 rounded-3xl transition-all duration-300 ease-in-out items-center space-x-3 flex isolate"
                >
                    <span className="relative z-10 text-[#1a5ee5] group-hover:text-[#1a5ee5]">Direct starten</span>
                    <Flex className="relative z-10 text-[#1a5ee5] group-hover:text-white rounded-full p-2 transition-all duration-300 ease-in-out group-hover:bg-[#D44A00] group-hover:translate-x-1 group-hover:-translate-y-1">
                        <GoArrowUpRight />
                    </Flex>
                </Link>
            </Flex>
            <div className="h-2 sm:h-10" />
            {/* Intuitive yet deep + testimonial swiper section removed */}
            {/* testimonial video section removed */}
        </Flex>
    );
};

export default Works;

//  <Swiper
//                         slidesPerView={1}
//                         spaceBetween={21}
//                         centeredSlides={true}
//                         grabCursor={true}
//                         pagination={{ clickable: true }}
//                         modules={[Pagination]}
//                         className="testimonial-swiper w-full h-[42rem] rounded-2xl overflow-visible"
//                     >
//                         {data?.map((item, index) => (
//                             <SwiperSlide
//                                 key={index}
//                                 className="bg-[#F5F5F5] border border-black rounded-2xl shadow-lg"
//                             >
//                                 <Flex className="items-start flex-col space-y-6 p-7">
//                                     <Flex className="flex-col h-[38rem] justify-between">
//                                         <Flex className="flex-col">
//                                             <p className="inter-medium text-[0.9rem]">{item?.name}</p>
//                                             <p className="inter-medium text-[0.9rem] text-gray-600">{item?.title}</p>
//                                         </Flex>
//                                     </Flex>
//                                     <Flex className="text-[#ED7E00] inter-medium w-[11.7rem] items-center cursor-pointer text-[0.9rem] hover:bg-white pl-4 py-1 rounded-3xl">
//                                         <p>Read impact study</p>
//                                         <Flex className="text-[#D44A00] rounded-full text-[1.1rem]">
//                                             <GoArrowUpRight />
//                                         </Flex>
//                                     </Flex>
//                                 </Flex>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
