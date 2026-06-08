import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosInformationCircleOutline } from "react-icons/io";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiCreditCard, FiFileText, FiShield, FiTrendingDown } from "react-icons/fi";
import Homepage2Header from "../components/Homepage2/Header";
import Homepage2Footer from "../components/Homepage2/Footer";

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

    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#0d1321]">
            <Homepage2Header />

            <section className="relative overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-44">
                <div className="absolute left-0 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#eaf2ff] blur-3xl" />
                <div className="mx-auto grid min-h-[650px] w-full max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:pb-24">
                    <div className="relative z-10 max-w-[690px] lg:pb-10">
                        <div className="mb-5 flex items-center gap-3 text-[#6f7694]">
                            <div className="flex -space-x-2">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-[#1a5ee5] text-white shadow-[0_10px_24px_rgba(26,94,229,0.25)]">
                                    <FiCreditCard />
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white text-[#1a5ee5] shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
                                    <FiShield />
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-[#f2f7ff] text-[#1a5ee5] shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                                    <FiTrendingDown />
                                </span>
                            </div>
                            <p className="inter-medium text-[0.95rem]">Olivier denkt mee over je verzendtarieven</p>
                        </div>
                        <h1 className="inter-semibold text-[3rem] leading-[0.98] tracking-[0px] text-[#0d1321] sm:text-[4.2rem] lg:text-[5.2rem]">
                            <span className="block sm:whitespace-nowrap">Eerlijke tarieven.</span>
                            <span className="block sm:whitespace-nowrap text-[#1a5ee5]">Geen verrassingen.</span>
                        </h1>
                        <p className="mt-7 max-w-[560px] text-[1.08rem] leading-[1.75] text-[#4e5a73] sm:text-[1.2rem]">
                            Bereken direct je indicatieve verzendtarief. Zonder contracten, zonder vaste maandkosten en met duidelijke all-in prijzen per zending.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <button
                                type="button"
                                onClick={handleScrollToCalculator}
                                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#1a5ee5] px-7 py-3.5 text-[0.98rem] font-semibold text-white shadow-[0_18px_42px_rgba(26,94,229,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#154fca]"
                            >
                                Bereken je tarief
                                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                            <Link
                                to="/contact"
                                className="inline-flex w-fit items-center gap-3 rounded-full border border-[#d8e3f2] bg-white px-7 py-3.5 text-[0.98rem] font-semibold text-[#0d1321] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1a5ee5]/30 hover:text-[#1a5ee5]"
                            >
                                Plan een kennismaking
                            </Link>
                        </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-center lg:min-h-[520px] lg:justify-end">
                        <div className="absolute right-2 top-10 hidden h-24 w-24 rounded-[28px] bg-[#1a5ee5]/10 lg:block" />
                        <div className="relative w-full max-w-[560px] overflow-hidden rounded-[34px] border border-[#dbe7f5] bg-[#f4f8ff] shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
                            <img
                                src="/profile-olivier.png"
                                alt="Olivier van Sendwise"
                                className="aspect-[1.02/1] w-full scale-[1.12] object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f7fbff] px-6 py-16 lg:py-20">
                <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
                    <article className="rounded-[24px] border border-[#dfeaf7] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef5ff] text-[#1a5ee5]">
                            <FiFileText className="text-[1.25rem]" />
                        </div>
                        <h2 className="inter-semibold text-[1.25rem] text-[#0d1321]">Geen contracten</h2>
                        <p className="mt-3 text-[0.98rem] leading-[1.7] text-[#5a667c]">
                            Je zit nergens lang aan vast. Tarieven blijven helder en passen mee met je volume.
                        </p>
                    </article>
                    <article className="rounded-[24px] border border-[#dfeaf7] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef5ff] text-[#1a5ee5]">
                            <FiShield className="text-[1.25rem]" />
                        </div>
                        <h2 className="inter-semibold text-[1.25rem] text-[#0d1321]">Geen vaste kosten</h2>
                        <p className="mt-3 text-[0.98rem] leading-[1.7] text-[#5a667c]">
                            Geen abonnementskosten of verborgen toeslagen. Je betaalt voor wat je verzendt.
                        </p>
                    </article>
                    <article className="rounded-[24px] border border-[#dfeaf7] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef5ff] text-[#1a5ee5]">
                            <FiTrendingDown className="text-[1.25rem]" />
                        </div>
                        <h2 className="inter-semibold text-[1.25rem] text-[#0d1321]">Schaalvoordeel</h2>
                        <p className="mt-3 text-[0.98rem] leading-[1.7] text-[#5a667c]">
                            Meer zendingen betekent scherpere staffels. De calculator laat direct de impact zien.
                        </p>
                    </article>
                </div>
            </section>

            <section className="bg-white px-6 py-16 lg:py-24" id="pricing-calculator">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 max-w-3xl">
                        <p className="inter-medium text-[0.95rem] text-[#1a5ee5]">Prijscalculator</p>
                        <h2 className="inter-semibold mt-3 text-[2.4rem] leading-[1.08] text-[#0d1321] sm:text-[3.2rem]">
                            Bereken je verzendkosten
                        </h2>
                        <p className="mt-4 max-w-2xl text-[1.05rem] leading-[1.7] text-[#5a667c]">
                            Krijg direct inzicht in wat je per zending betaalt met Sendwise. De uitkomst is indicatief en gebaseerd op volume, bestemming en type zending.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
                        <aside className="rounded-[28px] border border-[#dfeaf7] bg-[#f7fbff] p-7 lg:p-8">
                            <p className="inter-semibold text-[1.35rem] text-[#0d1321]">Zo werkt het</p>
                            <div className="mt-6 space-y-5">
                                {[
                                    "Kies je gemiddelde verzendvolume.",
                                    "Selecteer bestemming en type zending.",
                                    "Bekijk direct het indicatieve tarief.",
                                ].map((item) => (
                                    <div key={item} className="flex gap-3">
                                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1a5ee5] text-white">
                                            <FiCheck className="text-[0.85rem]" />
                                        </span>
                                        <p className="text-[0.98rem] leading-[1.55] text-[#4e5a73]">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 rounded-[22px] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                                <p className="inter-semibold text-[1rem] text-[#0d1321]">Liever persoonlijk advies?</p>
                                <p className="mt-2 text-[0.92rem] leading-[1.65] text-[#5a667c]">
                                    Olivier kijkt graag met je mee naar je huidige tarieven en verzendmix.
                                </p>
                                <Link
                                    to="/contact"
                                    className="mt-4 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[#1a5ee5] transition-colors duration-300 hover:text-[#154fca]"
                                >
                                    Neem contact op
                                    <FiArrowRight />
                                </Link>
                            </div>
                        </aside>

                        <div className="rounded-[28px] border border-[#dfeaf7] bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                        <div className="flex items-center gap-2">
                                            <p className="inter-semibold text-[1rem] text-[#0d1321]">Aantal zendingen</p>
                                            <button
                                                type="button"
                                                onClick={() => setShowVolumeInfo((prev) => !prev)}
                                                className="text-[#8b96aa] transition-colors duration-200 hover:text-[#1a5ee5]"
                                                aria-label="Uitleg over totaalvolume"
                                            >
                                                <IoIosInformationCircleOutline className="text-[1.1rem]" />
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-3 rounded-full border border-[#d8e3f2] bg-[#f7fbff] p-1 shadow-sm">
                                            <button
                                                type="button"
                                                onClick={() => handlePeriodChange("day")}
                                                className={`rounded-full px-3 py-2 text-[0.82rem] font-semibold transition-all duration-300 sm:px-4 ${period === "day" ? "bg-[#1a5ee5] text-white shadow" : "text-[#5a667c] hover:text-[#0d1321]"}`}
                                            >
                                                Werkdag
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handlePeriodChange("month")}
                                                className={`rounded-full px-3 py-2 text-[0.82rem] font-semibold transition-all duration-300 sm:px-4 ${period === "month" ? "bg-[#1a5ee5] text-white shadow" : "text-[#5a667c] hover:text-[#0d1321]"}`}
                                            >
                                                Maand
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handlePeriodChange("year")}
                                                className={`rounded-full px-3 py-2 text-[0.82rem] font-semibold transition-all duration-300 sm:px-4 ${period === "year" ? "bg-[#1a5ee5] text-white shadow" : "text-[#5a667c] hover:text-[#0d1321]"}`}
                                            >
                                                Jaar
                                            </button>
                                        </div>
                                    </div>

                                    {showVolumeInfo && (
                                        <p className="rounded-2xl bg-[#f7fbff] px-4 py-3 text-[0.86rem] leading-relaxed text-[#5a667c]">
                                            Dit is het totale aantal zendingen dat je gemiddeld verstuurt. Het volume geldt voor alle bestemmingen en verzendmethodes samen, niet per land.
                                        </p>
                                    )}

                                    <Motion.div
                                        key={period}
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                        className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3"
                                    >
                                        <p className="inter-semibold text-[2rem] leading-none text-[#0d1321] sm:text-[2.35rem]">
                                            {formattedShipments} zendingen
                                        </p>
                                        <span className="text-[0.98rem] font-medium text-[#6f7694]">{range.label}</span>
                                    </Motion.div>

                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                        <input
                                            type="range"
                                            min={range.min}
                                            max={range.max}
                                            step={sliderStep}
                                            value={shipments}
                                            onChange={(event) => handleShipmentsChange(Number(event.target.value))}
                                            className="w-full accent-[#1a5ee5]"
                                        />
                                        <input
                                            type="number"
                                            min={range.min}
                                            max={range.max}
                                            step="1"
                                            value={shipments}
                                            onChange={(event) => handleShipmentsChange(Number(event.target.value))}
                                            className="w-full rounded-2xl border border-[#d8e3f2] bg-white px-4 py-2.5 text-[#0d1321] outline-none transition-all duration-300 focus:border-[#1a5ee5] focus:ring-4 focus:ring-[#1a5ee5]/10 sm:w-[160px]"
                                        />
                                    </div>
                                    <div className="flex justify-between text-[0.82rem] font-medium text-[#8b96aa]">
                                        <span>{range.min.toLocaleString("nl-NL")}</span>
                                        <span>{range.max.toLocaleString("nl-NL")}</span>
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-3">
                                        <label className="inter-semibold text-[0.95rem] text-[#0d1321]">Type zending</label>
                                        <div ref={typeDropdownRef} className="relative">
                                            <button
                                                type="button"
                                                onClick={() => setOpenDropdown(openDropdown === "type" ? null : "type")}
                                                className="flex w-full items-center justify-between rounded-2xl border border-[#d8e3f2] bg-white px-4 py-3 text-left font-medium text-[#0d1321] outline-none transition-all duration-300 focus:border-[#1a5ee5] focus:ring-4 focus:ring-[#1a5ee5]/10"
                                            >
                                                <span>{shipmentType}</span>
                                                <IoIosArrowDown className={`text-[1rem] transition-transform duration-200 ${openDropdown === "type" ? "rotate-180" : ""}`} />
                                            </button>
                                            {openDropdown === "type" && (
                                                <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-2xl border border-[#d8e3f2] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
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
                                                                className={`w-full px-4 py-3 text-left text-[0.95rem] font-medium transition-colors ${isDisabled ? "cursor-not-allowed text-[#a8b2c3]" : "text-[#0d1321] hover:bg-[#eef5ff] hover:text-[#1a5ee5]"} ${isSelected ? "bg-[#eef5ff] text-[#1a5ee5]" : ""}`}
                                                            >
                                                                {option}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                        {!isNederland && (
                                            <p className="text-[0.82rem] font-medium text-[#6f7694]">
                                                Brievenbuszendingen zijn alleen beschikbaar binnen Nederland.
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-3">
                                        <label className="inter-semibold text-[0.95rem] text-[#0d1321]">Bestemming</label>
                                        <div ref={destinationDropdownRef} className="relative">
                                            <button
                                                type="button"
                                                onClick={() => setOpenDropdown(openDropdown === "destination" ? null : "destination")}
                                                className="flex w-full items-center justify-between rounded-2xl border border-[#d8e3f2] bg-white px-4 py-3 text-left font-medium text-[#0d1321] outline-none transition-all duration-300 focus:border-[#1a5ee5] focus:ring-4 focus:ring-[#1a5ee5]/10"
                                            >
                                                <span>{destination}</span>
                                                <IoIosArrowDown className={`text-[1rem] transition-transform duration-200 ${openDropdown === "destination" ? "rotate-180" : ""}`} />
                                            </button>
                                            {openDropdown === "destination" && (
                                                <div className="absolute z-30 mt-2 max-h-[220px] w-full overflow-y-auto rounded-2xl border border-[#d8e3f2] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                                                    {destinationOptions.map((option) => (
                                                        <button
                                                            key={option}
                                                            type="button"
                                                            onClick={() => {
                                                                setDestination(option);
                                                                setOpenDropdown(null);
                                                            }}
                                                            className={`w-full px-4 py-3 text-left text-[0.95rem] font-medium transition-colors ${option === destination ? "bg-[#eef5ff] text-[#1a5ee5]" : "text-[#0d1321] hover:bg-[#eef5ff] hover:text-[#1a5ee5]"}`}
                                                        >
                                                            {option}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <Motion.div
                                    key={resultKey}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="rounded-[24px] border border-[#bcd3f7] bg-[#eef5ff] p-6 shadow-[0_18px_45px_rgba(26,94,229,0.12)]"
                                >
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <p className="inter-semibold text-[0.95rem] text-[#1a5ee5]">Indicatief tarief vanaf</p>
                                            <p className="inter-semibold mt-2 text-[2rem] leading-tight text-[#0d1321] sm:text-[2.35rem]">
                                                {priceText}
                                            </p>
                                        </div>
                                        <div className="rounded-2xl bg-white px-4 py-3 text-[0.9rem] font-semibold text-[#4e5a73] shadow-sm">
                                            {shipmentType} naar {destination}
                                        </div>
                                    </div>

                                    {isCustomQuote ? (
                                        <p className="mt-5 text-[0.95rem] leading-[1.7] text-[#5a667c]">
                                            Neem contact met ons op zodat we samen kunnen kijken naar de beste service en tarieven voor jouw volumes.
                                        </p>
                                    ) : isPricingSupported ? (
                                        <div className="mt-5 space-y-2 text-[0.92rem] leading-[1.65] text-[#5a667c]">
                                            <p>Indicatief tarief per zending naar dit land, gebaseerd op volume en de laagste gewichtsklasse.</p>
                                            {!isWorkdayUnit && (
                                                <p>Omgerekend naar gemiddeld aantal werkdagzendingen.</p>
                                            )}
                                            {isOverCap && (
                                                <p>Voor hogere volumes gelden maatwerktarieven.</p>
                                            )}
                                        </div>
                                    ) : (
                                        <p className="mt-5 text-[0.95rem] leading-[1.7] text-[#5a667c]">
                                            Indicatieve berekening is momenteel alleen beschikbaar voor Nederland, België, Duitsland, Frankrijk, Italië, Polen, Spanje, Portugal en Denemarken.
                                        </p>
                                    )}

                                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                                        <Link
                                            to="/contact"
                                            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#1a5ee5] px-6 py-3 text-[0.95rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#154fca]"
                                        >
                                            Plan een kennismaking
                                            <FiArrowRight />
                                        </Link>
                                        <Link
                                            to="/start-met-sendwise"
                                            className="inline-flex w-fit items-center gap-2 px-2 py-3 text-[0.95rem] font-semibold text-[#1a5ee5] transition-colors duration-300 hover:text-[#154fca]"
                                        >
                                            Start met Sendwise
                                        </Link>
                                    </div>
                                </Motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f7fbff] px-6 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="relative overflow-hidden rounded-[30px] bg-[#1a5ee5] px-7 py-10 text-white shadow-[0_28px_70px_rgba(26,94,229,0.24)] sm:px-10 lg:px-14 lg:py-14">
                        <div className="absolute right-[-80px] top-[-120px] h-[300px] w-[300px] rounded-full bg-white/14 blur-2xl" />
                        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="inter-medium text-[0.95rem] text-white/75">Samen besparen</p>
                                <h2 className="inter-semibold mt-3 max-w-2xl text-[2rem] leading-[1.12] sm:text-[3rem]">
                                    Klaar om je verzendkosten scherper te krijgen?
                                </h2>
                                <p className="mt-4 max-w-2xl text-[1.05rem] leading-[1.7] text-white/80">
                                    Deel je huidige verzendmix en Olivier kijkt met je mee waar je direct kunt besparen.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-[0.98rem] font-semibold text-[#1a5ee5] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f4f8ff]"
                                >
                                    Plan een kennismaking
                                    <FiArrowRight />
                                </Link>
                                <Link
                                    to="/start-met-sendwise"
                                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-[0.98rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                                >
                                    Start met Sendwise
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Homepage2Footer />
        </main>
    );
};

export default Prijzen;
