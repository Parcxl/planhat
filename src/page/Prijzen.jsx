import { Flex } from "antd";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosArrowDown, IoIosInformationCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Prijzen = () => {
    const [shipments, setShipments] = useState(50);
    const [period, setPeriod] = useState("day");
    const [shipmentType, setShipmentType] = useState("Pakket");
    const [destination, setDestination] = useState("Nederland");
    const resultTimerRef = useRef(0);
    const [resultKey, setResultKey] = useState(0);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [showVolumeInfo, setShowVolumeInfo] = useState(false);
    const typeDropdownRef = useRef(null);
    const destinationDropdownRef = useRef(null);

    const range = period === "day"
        ? { min: 0, max: 1000, step: 50, label: "per werkdag" }
        : period === "month"
            ? { min: 0, max: 30000, step: 50, label: "per maand" }
            : { min: 0, max: 400000, step: 1000, label: "per jaar" };
    const formattedShipments = new Intl.NumberFormat("nl-NL").format(shipments);
    const isNederland = destination === "Nederland";
    const sliderStep = shipments < 100 ? 1 : range.step;
    const isCustomQuote = (period === "day" && shipments >= 300)
        || (period === "month" && shipments >= 10000)
        || (period === "year" && shipments >= 120000);
    const WORKDAYS_PER_YEAR = 253;
    const WORKDAYS_PER_MONTH = 21;
    const isWorkdayUnit = period === "day";
    const rawWorkdays = period === "day"
        ? shipments
        : period === "month"
            ? shipments / WORKDAYS_PER_MONTH
            : shipments / WORKDAYS_PER_YEAR;
    const priceFormatter = new Intl.NumberFormat("nl-NL", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    const workdayVolume = Math.max(1, Math.floor(rawWorkdays));
    const nlBrievenbusTable = [
        { min: 1, max: 10, price: 3.85 },
        { min: 11, max: 25, price: 3.75 },
        { min: 26, max: 50, price: 3.60 },
        { min: 51, max: 100, price: 3.40 },
        { min: 101, max: 200, price: 3.15 },
        { min: 201, max: 300, price: 2.95 },
        { min: 301, max: 400, price: 2.80 },
        { min: 401, max: 500, price: 2.65 },
        { min: 501, max: 650, price: 2.55 },
        { min: 651, max: 800, price: 2.50 },
        { min: 801, max: 1000, price: 2.50 },
    ];
    const nlPakketTable = [
        { min: 1, max: 10, price: 5.95 },
        { min: 11, max: 25, price: 5.85 },
        { min: 26, max: 50, price: 5.70 },
        { min: 51, max: 75, price: 5.35 },
        { min: 76, max: 100, price: 5.05 },
        { min: 101, max: 150, price: 4.70 },
        { min: 151, max: 200, price: 4.40 },
        { min: 201, max: 250, price: 4.15 },
        { min: 251, max: 300, price: 3.95 },
        { min: 301, max: 350, price: 3.80 },
        { min: 351, max: 400, price: 3.68 },
        { min: 401, max: 450, price: 3.58 },
        { min: 451, max: 500, price: 3.50 },
        { min: 501, max: 600, price: 3.48 },
        { min: 601, max: 700, price: 3.47 },
        { min: 701, max: 800, price: 3.46 },
        { min: 801, max: 1000, price: 3.45 },
    ];
    const bePakketTable = [
        { min: 1, max: 10, price: 6.35 },
        { min: 11, max: 25, price: 6.10 },
        { min: 26, max: 50, price: 5.85 },
        { min: 51, max: 75, price: 5.40 },
        { min: 76, max: 100, price: 5.15 },
        { min: 101, max: 150, price: 5.00 },
        { min: 151, max: 200, price: 4.98 },
        { min: 201, max: 250, price: 4.97 },
        { min: 251, max: 300, price: 4.96 },
        { min: 301, max: 350, price: 4.95 },
        { min: 351, max: 400, price: 4.94 },
        { min: 401, max: 450, price: 4.93 },
        { min: 451, max: 500, price: 4.92 },
        { min: 501, max: 600, price: 4.91 },
        { min: 601, max: 700, price: 4.90 },
        { min: 701, max: 800, price: 4.89 },
        { min: 801, max: 900, price: 4.88 },
        { min: 901, max: 1000, price: 4.87 },
    ];
    const dePakketTable = [
        { min: 1, max: 10, price: 7.45 },
        { min: 11, max: 25, price: 7.10 },
        { min: 26, max: 50, price: 6.75 },
        { min: 51, max: 75, price: 6.10 },
        { min: 76, max: 100, price: 5.65 },
        { min: 101, max: 150, price: 5.10 },
        { min: 151, max: 200, price: 4.75 },
        { min: 201, max: 250, price: 4.55 },
        { min: 251, max: 300, price: 4.45 },
        { min: 301, max: 350, price: 4.44 },
        { min: 351, max: 400, price: 4.43 },
        { min: 401, max: 450, price: 4.42 },
        { min: 451, max: 500, price: 4.42 },
        { min: 501, max: 600, price: 4.42 },
        { min: 601, max: 700, price: 4.42 },
        { min: 701, max: 800, price: 4.42 },
        { min: 801, max: 900, price: 4.42 },
        { min: 901, max: 1000, price: 4.42 },
    ];
    const frPakketTable = [
        { min: 1, max: 10, price: 9.10 },
        { min: 11, max: 25, price: 8.70 },
        { min: 26, max: 50, price: 8.20 },
        { min: 51, max: 75, price: 6.90 },
        { min: 76, max: 100, price: 6.20 },
        { min: 101, max: 150, price: 5.30 },
        { min: 151, max: 200, price: 4.80 },
        { min: 201, max: 250, price: 4.45 },
        { min: 251, max: 300, price: 4.30 },
        { min: 301, max: 350, price: 4.29 },
        { min: 351, max: 400, price: 4.29 },
        { min: 401, max: 450, price: 4.29 },
        { min: 451, max: 500, price: 4.29 },
        { min: 501, max: 600, price: 4.29 },
        { min: 601, max: 700, price: 4.29 },
        { min: 701, max: 800, price: 4.29 },
        { min: 801, max: 900, price: 4.29 },
        { min: 901, max: 1000, price: 4.29 },
    ];
    const itPakketTable = [
        { min: 1, max: 10, price: 9.95 },
        { min: 11, max: 25, price: 9.40 },
        { min: 26, max: 50, price: 8.95 },
        { min: 51, max: 75, price: 8.10 },
        { min: 76, max: 100, price: 7.60 },
        { min: 101, max: 150, price: 7.10 },
        { min: 151, max: 200, price: 6.85 },
        { min: 201, max: 250, price: 6.75 },
        { min: 251, max: 300, price: 6.70 },
        { min: 301, max: 1000, price: 6.69 },
    ];
    const plPakketTable = [
        { min: 1, max: 10, price: 13.95 },
        { min: 11, max: 25, price: 12.95 },
        { min: 26, max: 50, price: 11.95 },
        { min: 51, max: 75, price: 7.20 },
        { min: 76, max: 100, price: 6.10 },
        { min: 101, max: 150, price: 5.20 },
        { min: 151, max: 200, price: 4.70 },
        { min: 201, max: 250, price: 4.45 },
        { min: 251, max: 300, price: 4.38 },
        { min: 301, max: 1000, price: 4.37 },
    ];
    const esPakketTable = [
        { min: 1, max: 10, price: 6.95 },
        { min: 11, max: 25, price: 6.60 },
        { min: 26, max: 50, price: 6.25 },
        { min: 51, max: 75, price: 5.85 },
        { min: 76, max: 100, price: 5.55 },
        { min: 101, max: 150, price: 5.35 },
        { min: 151, max: 200, price: 5.25 },
        { min: 201, max: 250, price: 5.20 },
        { min: 251, max: 300, price: 5.18 },
        { min: 301, max: 1000, price: 5.17 },
    ];
    const ptPakketTable = [
        { min: 1, max: 10, price: 13.95 },
        { min: 11, max: 25, price: 12.95 },
        { min: 26, max: 50, price: 11.95 },
        { min: 51, max: 75, price: 8.20 },
        { min: 76, max: 100, price: 7.40 },
        { min: 101, max: 150, price: 6.90 },
        { min: 151, max: 200, price: 6.65 },
        { min: 201, max: 250, price: 6.50 },
        { min: 251, max: 300, price: 6.47 },
        { min: 301, max: 1000, price: 6.46 },
    ];
    const dkPakketTable = [
        { min: 1, max: 10, price: 15.95 },
        { min: 11, max: 25, price: 14.95 },
        { min: 26, max: 50, price: 13.95 },
        { min: 51, max: 75, price: 7.40 },
        { min: 76, max: 100, price: 6.40 },
        { min: 101, max: 150, price: 5.90 },
        { min: 151, max: 200, price: 5.50 },
        { min: 201, max: 250, price: 5.30 },
        { min: 251, max: 300, price: 5.22 },
        { min: 301, max: 1000, price: 5.21 },
    ];
    const resolvePrice = (table, volume) => {
        const match = table.find((tier) => volume >= tier.min && volume <= tier.max);
        return match ? match.price : null;
    };
    const pricingConfigs = {
        Nederland: {
            Brievenbus: { table: nlBrievenbusTable },
            Pakket: { table: nlPakketTable },
        },
        België: {
            Pakket: { table: bePakketTable, minPrice: 4.96 },
        },
        Duitsland: {
            Pakket: { table: dePakketTable, minPrice: 4.42 },
        },
        Frankrijk: {
            Pakket: { table: frPakketTable, minPrice: 4.29 },
        },
        Italië: {
            Pakket: { table: itPakketTable, minPrice: 6.69 },
        },
        Polen: {
            Pakket: { table: plPakketTable, minPrice: 4.37 },
        },
        Spanje: {
            Pakket: { table: esPakketTable, minPrice: 5.17 },
        },
        Portugal: {
            Pakket: { table: ptPakketTable, minPrice: 6.46 },
        },
        Denemarken: {
            Pakket: { table: dkPakketTable, minPrice: 5.21 },
        },
    };
    const activeConfig = pricingConfigs[destination]?.[shipmentType] || null;
    const isPricingSupported = Boolean(activeConfig);
    const staffelMax = activeConfig ? activeConfig.table[activeConfig.table.length - 1].max : null;
    const cappedWorkdayVolume = activeConfig ? Math.min(workdayVolume, staffelMax) : null;
    const isOverCap = activeConfig ? workdayVolume > staffelMax : false;
    const resolvedPrice = isPricingSupported ? resolvePrice(activeConfig.table, cappedWorkdayVolume) : null;
    const finalPrice = resolvedPrice !== null
        ? Math.max(resolvedPrice, activeConfig.minPrice ?? resolvedPrice)
        : null;
    const priceText = isCustomQuote
        ? "Prijs op aanvraag"
        : finalPrice !== null
            ? `€ ${priceFormatter.format(finalPrice)} per zending`
            : "Prijs op aanvraag";
    const destinationOptions = [
        "Nederland",
        "België",
        "Duitsland",
        "Frankrijk",
        "Italië",
        "Polen",
        "Spanje",
        "Portugal",
        "Denemarken",
    ];
    const shipmentTypeOptions = ["Pakket", "Brievenbus"];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (!isNederland && shipmentType === "Brievenbus") {
            setShipmentType("Pakket");
        }
    }, [isNederland, shipmentType]);

    useEffect(() => {
        setShipments((prev) => Math.min(Math.max(prev, range.min), range.max));
    }, [period, range.min, range.max]);

    useEffect(() => {
        window.clearTimeout(resultTimerRef.current);
        resultTimerRef.current = window.setTimeout(() => {
            setResultKey((prev) => prev + 1);
        }, 180);
        return () => window.clearTimeout(resultTimerRef.current);
    }, [shipments, shipmentType, destination, period, workdayVolume]);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!openDropdown) return;
            const ref = openDropdown === "type" ? typeDropdownRef : destinationDropdownRef;
            if (ref?.current && !ref.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [openDropdown]);

    const handleScrollToCalculator = () => {
        const section = document.getElementById("pricing-calculator");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleShipmentsChange = (value) => {
        const nextValue = Math.min(Math.max(value, range.min), range.max);
        setShipments(nextValue);
    };

    const handlePeriodChange = (nextPeriod) => {
        if (nextPeriod === period) return;
        setPeriod(nextPeriod);
        if (nextPeriod === "day") {
            setShipments(50);
        } else if (nextPeriod === "month") {
            setShipments(1000);
        } else {
            setShipments(12000);
        }
    };

    useGSAP(() => {
        gsap.set("#pricing-hero-frame", {
            scale: 1,
            transformOrigin: "center center",
            borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "0%",
            marginLeft: "0px",
            marginRight: "0px",
        });

        gsap.to("#pricing-hero-frame", {
            scale: 0.83,
            borderBottomLeftRadius: "100px",
            borderBottomRightRadius: "100px",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#pricing-hero-frame",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.fromTo(
            "#pricing-hero-img",
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
                    trigger: "#pricing-hero-frame",
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
                    <Flex id="pricing-hero-frame" className="w-[100%] mask-clip-path">
                        <img
                            id="pricing-hero-img"
                            src="/sendwise-prijzen.png"
                            alt="Sendwise"
                            className="absolute h-screen sm:h-screen w-[100%] object-cover object-right sm:object-center"
                        />
                        <div id="pricing-hero-img" className="absolute z-10 bg-gradient-to-l from-transparent to-[#030302] w-[100%] h-screen sm:h-screen" />
                        <Flex className="z-30 sm:ml-[10%] ml-[4%] w-[100%] h-screen sm:h-screen flex-col justify-center items-start pt-16 sm:pt-20 pb-10 sm:pb-14">
                            <div className="flex flex-col items-start space-y-8 sm:space-y-10 translate-y-4 sm:translate-y-6">
                                <Flex className="group text-white/80 inter-semibold w-fit bg-[#514F4A]/30 border px-1 py-1 items-center space-x-4 rounded-3xl border-[#514F4A]/50 backdrop-blur-lg transition-all duration-500 ease-out hover:border-[#514F4A] hover:bg-[#514F4A]/40">
                                    <Flex className="border border-[#514F4A] bg-gradient-to-t to-[#514F4A] from-[#514F4A]/10 px-3 py-[0.4rem] rounded-3xl transition-all duration-500 ease-out group-hover:bg-[#514F4A] group-hover:scale-[1.02]">
                                        <p className="text-[0.85rem] tracking-[0.14em]">PRIJZEN</p>
                                    </Flex>
                                </Flex>
                                <div className="flex flex-col pl-1 inter-semibold md:leading-[4rem] leading-[3.1rem] text-white w-fit text-left">
                                    <h1 className="md:text-[4rem] sm:text-[2.5rem] text-[2.85rem]">Eerlijke verzendprijzen, zonder verrassingen</h1>
                                </div>
                                <p className="text-white font-light text-[1.25rem] sm:text-[1.1rem] md:text-[1.3rem] max-w-[42rem] leading-[1.4] text-left">
                                    All-in tarieven zonder contracten, abonnementskosten of verborgen fees.
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-6 sm:space-y-0">
                                    <button
                                        type="button"
                                        onClick={handleScrollToCalculator}
                                        className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[1rem] cursor-pointer text-white px-7 py-3 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl w-fit relative overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                        <p className="relative z-10">Bereken je tarief</p>
                                    </button>
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
                            <Flex className="text-white w-[100%] items-center text-center flex-col space-y-4">
                                <p className="inter-semibold lg:text-[2.2rem] sm:text-[1.9rem] text-[1.6rem]">
                                    Zo betaal je minder per zending
                                </p>
                                <p className="inter-medium lg:text-[1.2rem] text-[1rem] leading-relaxed lg:w-[80%]">
                                    Sendwise hanteert scherpe all-in verzendtarieven op basis van volume. Zonder contracten, zonder maandelijkse kosten en met eerlijke indexeringen. Zo weet je altijd waar je aan toe bent, terwijl je profiteert van schaalvoordeel.
                                </p>
                                <button
                                    type="button"
                                    onClick={handleScrollToCalculator}
                                    className="pt-2 group"
                                >
                                    <Flex className="items-center space-x-2 text-white inter-medium text-[0.95rem] cursor-pointer transition-colors duration-300 group-hover:text-white/80">
                                        <span>Prijs berekenen</span>
                                        <IoIosArrowDown className="text-[1.1rem]" />
                                    </Flex>
                                </button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </section>

            <section className="w-full" id="pricing-calculator">
                <Flex className="flex-col items-center text-center w-[95%] lg:w-[80%] mx-auto">
                    <p className="inter-medium lg:text-[3rem] md:text-[2.6rem] sm:text-[2.2rem] text-[2rem] text-gray-900">
                        Bereken je verzendkosten met Sendwise
                    </p>
                    <p className="mt-3 text-gray-600 inter-medium lg:text-[1.05rem] text-[0.95rem]">
                        Krijg direct inzicht in wat je per zending betaalt met Sendwise.
                    </p>
                </Flex>
                <Flex className="w-[95%] lg:w-[80%] mx-auto mt-8 sm:mt-10">
                    <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col space-y-4 md:col-span-2">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                                    <div className="flex items-center space-x-2">
                                        <p className="text-gray-900 inter-medium text-[0.95rem]">Aantal zendingen</p>
                                        <button
                                            type="button"
                                            onClick={() => setShowVolumeInfo((prev) => !prev)}
                                            className="text-gray-400 hover:text-[#1a5ee5] transition-colors duration-200"
                                            aria-label="Uitleg over totaalvolume"
                                        >
                                            <IoIosInformationCircleOutline className="text-[1rem]" />
                                        </button>
                                    </div>
                                    <div className="flex items-center rounded-full border border-gray-200 bg-white/80 p-1 shadow-sm transition-all duration-300 ease-out">
                                        <button
                                            type="button"
                                            onClick={() => handlePeriodChange("day")}
                                            className={`px-4 py-1.5 rounded-full text-[0.85rem] inter-medium transition-all duration-300 ease-out ${period === "day" ? "bg-[#1a5ee5] text-white shadow" : "text-gray-500 hover:text-gray-700"}`}
                                        >
                                            Per werkdag
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handlePeriodChange("month")}
                                            className={`px-4 py-1.5 rounded-full text-[0.85rem] inter-medium transition-all duration-300 ease-out ${period === "month" ? "bg-[#1a5ee5] text-white shadow" : "text-gray-500 hover:text-gray-700"}`}
                                        >
                                            Per maand
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handlePeriodChange("year")}
                                            className={`px-4 py-1.5 rounded-full text-[0.85rem] inter-medium transition-all duration-300 ease-out ${period === "year" ? "bg-[#1a5ee5] text-white shadow" : "text-gray-500 hover:text-gray-700"}`}
                                        >
                                            Per jaar
                                        </button>
                                    </div>
                                </div>
                                {showVolumeInfo && (
                                    <p className="text-[0.8rem] text-gray-500 inter-medium leading-relaxed">
                                        Dit is het totale aantal zendingen dat je gemiddeld verstuurt.
                                        Het volume geldt voor alle bestemmingen en verzendmethodes samen, niet per land.
                                    </p>
                                )}
                                <motion.div
                                    key={period}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="flex items-baseline space-x-3"
                                >
                                    <p className="text-gray-900 inter-semibold text-[1.6rem] sm:text-[1.9rem]">
                                        {formattedShipments} zendingen
                                    </p>
                                    <span className="text-gray-500 inter-medium text-[0.95rem]">{range.label}</span>
                                </motion.div>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                                    <input
                                        type="range"
                                        min={range.min}
                                        max={range.max}
                                        step={sliderStep}
                                        value={shipments}
                                        onChange={(event) => handleShipmentsChange(Number(event.target.value))}
                                        className="w-full accent-[#1a5ee5] transition-all duration-300 ease-out"
                                    />
                                    <input
                                        type="number"
                                        min={range.min}
                                        max={range.max}
                                        step="1"
                                        value={shipments}
                                        onChange={(event) => handleShipmentsChange(Number(event.target.value))}
                                        className="w-full sm:w-[150px] rounded-2xl border border-gray-200 bg-white px-4 py-2 text-gray-700 inter-medium focus:border-[#1a5ee5] focus:outline-none focus:ring-2 focus:ring-[#1a5ee5]/20 transition-all duration-300 ease-out"
                                    />
                                </div>
                                <div className="flex justify-between text-[0.8rem] text-gray-500 inter-medium">
                                    <span>{range.min.toLocaleString("nl-NL")}</span>
                                    <span>{range.max.toLocaleString("nl-NL")}</span>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-3 md:col-span-2">
                                <label className="text-gray-900 inter-medium text-[0.95rem]">Type zending</label>
                                <div ref={typeDropdownRef} className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setOpenDropdown(openDropdown === "type" ? null : "type")}
                                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-700 inter-medium flex items-center justify-between focus:border-[#1a5ee5] focus:outline-none focus:ring-2 focus:ring-[#1a5ee5]/20 transition-all duration-300 ease-out"
                                    >
                                        <span>{shipmentType}</span>
                                        <IoIosArrowDown className={`text-[1rem] transition-transform duration-200 ${openDropdown === "type" ? "rotate-180" : ""}`} />
                                    </button>
                                    {openDropdown === "type" && (
                                        <div className="absolute z-30 mt-2 w-full rounded-2xl border border-gray-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] overflow-hidden">
                                            {shipmentTypeOptions.map((option) => {
                                                const isDisabled = option === "Brievenbus" && !isNederland;
                                                const isSelected = option === shipmentType;
                                                return (
                                                    <button
                                                        key={option}
                                                        type="button"
                                                        disabled={isDisabled}
                                                        onClick={() => {
                                                            if (isDisabled) return;
                                                            setShipmentType(option);
                                                            setOpenDropdown(null);
                                                        }}
                                                        className={`w-full text-left px-4 py-3 text-[0.95rem] inter-medium transition-colors ${isDisabled ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-[#1a5ee5]/10 hover:text-[#1a5ee5]"} ${isSelected ? "bg-[#1a5ee5]/10 text-[#1a5ee5]" : ""}`}
                                                    >
                                                        {option}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                                {!isNederland && (
                                    <p className="text-[0.8rem] text-gray-500 inter-medium">
                                        Brievenbuszendingen zijn alleen beschikbaar binnen Nederland.
                                    </p>
                                )}
                            </div>
                            <div className="md:col-span-2">
                                <motion.div
                                    key={resultKey}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="flex flex-col justify-between rounded-2xl border border-[#1a5ee5]/30 bg-[#1a5ee5]/5 p-6 shadow-[0_10px_30px_rgba(26,94,229,0.12)]"
                                >
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                            <div className="space-y-2">
                                                <p className="text-[#1a5ee5] inter-medium text-[0.95rem]">Indicatief tarief vanaf</p>
                                            <p className="text-gray-900 inter-semibold text-[1.8rem] sm:text-[2rem]">
                                                {priceText}
                                            </p>
                                            </div>
                                            <div className="w-full sm:w-[220px]">
                                                <p className="text-gray-500 inter-medium text-[0.8rem]">Bestemming</p>
                                                <div ref={destinationDropdownRef} className="relative mt-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => setOpenDropdown(openDropdown === "destination" ? null : "destination")}
                                                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-2 text-gray-700 inter-medium flex items-center justify-between focus:border-[#1a5ee5] focus:outline-none focus:ring-2 focus:ring-[#1a5ee5]/20 transition-all duration-300 ease-out"
                                                    >
                                                        <span>{destination}</span>
                                                        <IoIosArrowDown className={`text-[1rem] transition-transform duration-200 ${openDropdown === "destination" ? "rotate-180" : ""}`} />
                                                    </button>
                                                    {openDropdown === "destination" && (
                                                        <div className="absolute z-30 mt-2 w-full rounded-2xl border border-gray-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] overflow-hidden max-h-[200px] overflow-y-auto">
                                                            {destinationOptions.map((option) => (
                                                                <button
                                                                    key={option}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setDestination(option);
                                                                        setOpenDropdown(null);
                                                                    }}
                                                                    className={`w-full text-left px-4 py-3 text-[0.95rem] inter-medium transition-colors ${option === destination ? "bg-[#1a5ee5]/10 text-[#1a5ee5]" : "text-gray-700 hover:bg-[#1a5ee5]/10 hover:text-[#1a5ee5]"}`}
                                                                >
                                                                    {option}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {isCustomQuote ? (
                                            <p className="text-gray-600 inter-medium text-[0.85rem]">
                                                Neem contact met ons op zodat we samen kunnen kijken naar de beste service en tarieven voor jouw volumes.
                                            </p>
                                        ) : isPricingSupported ? (
                                            <div className="space-y-2 text-gray-600 inter-medium text-[0.85rem]">
                                                <p>
                                                    Indicatief tarief per zending naar dit land, gebaseerd op volume en de laagste gewichtsklasse.
                                                </p>
                                                {!isWorkdayUnit && (
                                                    <p>Omgerekend naar gemiddeld aantal werkdagzendingen.</p>
                                                )}
                                                {isOverCap && (
                                                    <p>Voor hogere volumes gelden maatwerktarieven.</p>
                                                )}
                                            </div>
                                        ) : (
                                            <p className="text-gray-600 inter-medium text-[0.85rem]">
                                                Indicatieve berekening is momenteel alleen beschikbaar voor Nederland, België, Duitsland, Frankrijk, Italië, Polen, Spanje, Portugal en Denemarken.
                                            </p>
                                        )}
                                    </div>
                                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                                        <div className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[0.95rem] cursor-pointer text-white px-6 py-2 rounded-3xl transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-fit relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                            <p className="relative z-10">Plan een kennismaking</p>
                                        </div>
                                        <button className="text-[#1a5ee5] inter-medium text-[0.95rem] transition-all duration-300 ease-out hover:text-[#0f3d9e] hover:translate-x-0.5">
                                            Start met Sendwise
                                        </button>
                                    </div>
                                </motion.div>
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
                                    Klaar om te besparen op je verzending?
                                </p>
                                <p className="inter-medium lg:text-[1.15rem] text-[1.05rem] lg:w-[80%]">
                                    Scherpe all-in tarieven, zonder contracten of vaste kosten. Ons team denkt graag met je mee.
                                </p>
                                <Flex className="flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                                    <Flex className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[1rem] cursor-pointer text-white px-7 py-3 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                        <p className="relative z-10">Plan een kennismaking</p>
                                    </Flex>
                                    <Flex className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 items-center space-x-3 cursor-pointer text-[0.95rem] px-7 py-3 rounded-3xl">
                                        <span>Start met Sendwise</span>
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

export default Prijzen;
