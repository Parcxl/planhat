import { useEffect, useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiFilter, FiSearch, FiZap } from "react-icons/fi";
import Homepage2Header from "../components/Homepage2/Header";
import Homepage2Footer from "../components/Homepage2/Footer";

const tabs = ["Alle", "Webshop", "Marketplace", "WMS"];

const integrations = [
    {
        name: "WooCommerce",
        src: "/woocommerce-logo.png",
        category: "Webshop",
        description: "Open-source webshopplatform voor WordPress. Haal orders automatisch op en maak verzendlabels direct vanuit Sendwise.",
    },
    {
        name: "Shopify",
        src: "/shopify-logo.png",
        category: "Webshop",
        description: "Populair e-commerceplatform voor snelgroeiende webshops. Synchroniseer orders, adressen en tracking zonder handmatig werk.",
    },
    {
        name: "CCV Shop",
        src: "/ccv-icon.svg",
        category: "Webshop",
        description: "Nederlands webshopplatform voor online retailers. Verwerk CCV Shop-orders eenvoudig in je Sendwise verzendflow.",
    },
    {
        name: "Lightspeed",
        src: "/lightspeed.png",
        category: "Webshop",
        description: "Retail- en webshopplatform voor voorraad, verkoop en online orders. Koppel je orderstroom aan Sendwise.",
    },
    {
        name: "Magento",
        src: "/magento.jpg",
        category: "Webshop",
        description: "Flexibel e-commerceplatform voor grotere webshops. Automatiseer verzending vanuit complexe catalogi en orderflows.",
    },
    {
        name: "Mijnwebwinkel",
        src: "/mijnwebwinkel.png",
        category: "Webshop",
        description: "Toegankelijk webshopplatform voor ondernemers. Zet binnenkomende orders snel om naar verzendklare zendingen.",
    },
    {
        name: "Ecwid",
        src: "/ecwid-parcxl.png",
        category: "Webshop",
        description: "Webshopoplossing voor verkoop via websites, social en marketplaces. Breng je verzending samen in Sendwise.",
    },
    {
        name: "Wix",
        src: "/wix.png",
        category: "Webshop",
        description: "Website- en webshopbuilder voor kleine en middelgrote webshops. Koppel orders aan een duidelijke verzendworkflow.",
    },
    {
        name: "PrestaShop",
        src: "/prestashop.png",
        category: "Webshop",
        description: "Open-source webshopplatform met veel configuratiemogelijkheden. Automatiseer labels, tracking en orderverwerking.",
    },
    {
        name: "Bol.com",
        src: "/bol-logo.png",
        category: "Marketplace",
        description: "Marketplace voor Nederlandse en Belgische verkoop. Verwerk marketplace-orders naast je eigen webshoporders.",
    },
    {
        name: "Lyra",
        src: "/lyra.png",
        category: "WMS",
        description: "WMS voor fulfilment en magazijnprocessen. Verbind pick, pack en verzending met je Sendwise labelproces.",
    },
    {
        name: "GoedGepickt",
        src: "/goedgepickt-sendwise-logo.png",
        category: "WMS",
        description: "WMS voor voorraadbeheer, orderpicking en fulfilment. Stuur orders soepel door naar Sendwise voor verzending.",
    },
];

const featuredLogos = integrations.slice(0, 6);

const Integraties = () => {
    const [activeTab, setActiveTab] = useState("Alle");
    const [query, setQuery] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filtered = useMemo(() => {
        const term = query.trim().toLowerCase();
        return integrations.filter((item) => {
            const matchesTab = activeTab === "Alle" || item.category === activeTab;
            const matchesQuery = !term || item.name.toLowerCase().includes(term);
            return matchesTab && matchesQuery;
        });
    }, [activeTab, query]);

    const handleScrollToIntegrations = (event) => {
        event.preventDefault();
        document.getElementById("integratie-overzicht")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#0d1321]">
            <Homepage2Header />

            <section className="relative overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-44">
                <div className="absolute left-0 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#eaf2ff] blur-3xl" />
                <div className="mx-auto grid min-h-[650px] w-full max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-[0.92fr_1.08fr] lg:pb-24">
                    <div className="relative z-10 max-w-[690px] lg:pb-10">
                        <div className="mb-5 flex items-center gap-3 text-[#6f7694]">
                            <div className="flex -space-x-2">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-[#1a5ee5] text-white shadow-[0_10px_24px_rgba(26,94,229,0.25)]">
                                    <FiZap />
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white text-[#1a5ee5] shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
                                    <FiCheck />
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-[#f2f7ff] text-[#1a5ee5] shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                                    <FiFilter />
                                </span>
                            </div>
                            <p className="inter-medium text-[0.95rem]">Koppel Sendwise aan je bestaande systemen</p>
                        </div>
                        <h1 className="inter-semibold text-[3rem] leading-[0.98] tracking-[0px] text-[#0d1321] sm:text-[4.2rem] lg:text-[5.2rem]">
                            <span className="block sm:whitespace-nowrap">Alles gekoppeld.</span>
                            <span className="block sm:whitespace-nowrap text-[#1a5ee5]">Meteen verzenden.</span>
                        </h1>
                        <p className="mt-7 max-w-[570px] text-[1.08rem] leading-[1.75] text-[#4e5a73] sm:text-[1.2rem]">
                            Verbind je webshop, marketplace of WMS met Sendwise. Orders komen automatisch binnen, labels zijn direct klaar en je houdt grip op elke zending.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <a
                                href="#integratie-overzicht"
                                onClick={handleScrollToIntegrations}
                                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#1a5ee5] px-7 py-3.5 text-[0.98rem] font-semibold text-white shadow-[0_18px_42px_rgba(26,94,229,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#154fca]"
                            >
                                Bekijk integraties
                                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                            <Link
                                to="/contact"
                                className="inline-flex w-fit items-center gap-3 rounded-full border border-[#d8e3f2] bg-white px-7 py-3.5 text-[0.98rem] font-semibold text-[#0d1321] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1a5ee5]/30 hover:text-[#1a5ee5]"
                            >
                                Integratie aanvragen
                            </Link>
                        </div>
                    </div>

                    <div className="relative z-10 lg:min-h-[520px]">
                        <div className="relative mx-auto w-full max-w-[600px] rounded-[34px] border border-[#dbe7f5] bg-[#f7fbff] p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:p-7">
                            <div className="rounded-[26px] border border-[#e1eaf7] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="inter-semibold text-[1.2rem] text-[#0d1321]">Integratiehub</p>
                                        <p className="mt-1 text-[0.9rem] text-[#6f7694]">Orders, labels en tracking in sync</p>
                                    </div>
                                    <span className="rounded-full bg-[#eaf2ff] px-3 py-1.5 text-[0.78rem] font-semibold text-[#1a5ee5]">
                                        Live
                                    </span>
                                </div>
                                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                                    {featuredLogos.map((item) => (
                                        <div key={item.name} className="flex aspect-[1.25/1] items-center justify-center rounded-2xl border border-[#e1eaf7] bg-[#fbfdff] p-4">
                                            <img src={item.src} alt={item.name} className="max-h-12 max-w-[110px] object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-4 grid gap-3 sm:grid-cols-3">
                                <div className="rounded-2xl bg-white p-4 shadow-[0_14px_34px_rgba(15,23,42,0.05)]">
                                    <p className="inter-semibold text-[1.6rem] text-[#0d1321]">12+</p>
                                    <p className="mt-1 text-[0.82rem] text-[#6f7694]">Koppelingen</p>
                                </div>
                                <div className="rounded-2xl bg-white p-4 shadow-[0_14px_34px_rgba(15,23,42,0.05)]">
                                    <p className="inter-semibold text-[1.6rem] text-[#0d1321]">3</p>
                                    <p className="mt-1 text-[0.82rem] text-[#6f7694]">Categorieen</p>
                                </div>
                                <div className="rounded-2xl bg-white p-4 shadow-[0_14px_34px_rgba(15,23,42,0.05)]">
                                    <p className="inter-semibold text-[1.6rem] text-[#0d1321]">API</p>
                                    <p className="mt-1 text-[0.82rem] text-[#6f7694]">Maatwerk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f7fbff] px-6 py-16 lg:py-20">
                <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
                    <article className="rounded-[24px] border border-[#dfeaf7] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                        <h2 className="inter-semibold text-[1.2rem] text-[#0d1321]">Orders automatisch binnen</h2>
                        <p className="mt-3 text-[0.98rem] leading-[1.7] text-[#5a667c]">
                            Nieuwe orders verschijnen direct in Sendwise, inclusief adresgegevens en verzendvoorkeuren.
                        </p>
                    </article>
                    <article className="rounded-[24px] border border-[#dfeaf7] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                        <h2 className="inter-semibold text-[1.2rem] text-[#0d1321]">Labels zonder dubbel werk</h2>
                        <p className="mt-3 text-[0.98rem] leading-[1.7] text-[#5a667c]">
                            Maak labels aan vanuit dezelfde orderflow en voorkom handmatig overtypen.
                        </p>
                    </article>
                    <article className="rounded-[24px] border border-[#dfeaf7] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                        <h2 className="inter-semibold text-[1.2rem] text-[#0d1321]">Tracking terug naar je shop</h2>
                        <p className="mt-3 text-[0.98rem] leading-[1.7] text-[#5a667c]">
                            Houd klanten automatisch op de hoogte met actuele verzendstatussen.
                        </p>
                    </article>
                </div>
            </section>

            <section id="integratie-overzicht" className="bg-white px-6 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-9 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="inter-medium text-[0.95rem] text-[#1a5ee5]">Overzicht</p>
                            <h2 className="inter-semibold mt-3 text-[2.4rem] leading-[1.08] text-[#0d1321] sm:text-[3.2rem]">
                                Kies je koppeling
                            </h2>
                            <p className="mt-4 max-w-2xl text-[1.05rem] leading-[1.7] text-[#5a667c]">
                                Filter op type systeem of zoek direct naar de integratie die je gebruikt.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="relative w-full sm:w-[18rem]">
                                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b96aa]" />
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                    placeholder="Zoek integratie"
                                    className="w-full rounded-full border border-[#d8e3f2] bg-white px-5 py-3 pl-11 text-[#0d1321] outline-none transition-all duration-300 placeholder:text-[#8b96aa] focus:border-[#1a5ee5] focus:ring-4 focus:ring-[#1a5ee5]/10"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 flex flex-wrap gap-2">
                        {tabs.map((tab) => {
                            const active = activeTab === tab;
                            return (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className={`rounded-full px-5 py-2.5 text-[0.92rem] font-semibold transition-all duration-300 ${
                                        active
                                            ? "bg-[#1a5ee5] text-white shadow-[0_12px_28px_rgba(26,94,229,0.22)]"
                                            : "border border-[#d8e3f2] bg-white text-[#5a667c] hover:border-[#bfd4f8] hover:text-[#1a5ee5]"
                                    }`}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((item, index) => (
                            <Motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                            >
                                <article className="group flex min-h-[245px] rounded-[24px] border border-[#e1eaf7] bg-[#fbfdff] p-7 shadow-[0_18px_55px_rgba(7,17,31,0.055)] transition duration-300 hover:-translate-y-1 hover:border-[#bfd4f8] hover:bg-white hover:shadow-[0_26px_75px_rgba(7,17,31,0.10)]">
                                    <div className="flex w-full flex-col">
                                        <div className="flex items-start justify-between gap-4">
                                            <img src={item.src} alt={item.name} className="h-16 max-w-[170px] object-contain object-left" />
                                            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#536175] ring-1 ring-[#e1eaf7]">
                                                {item.category}
                                            </span>
                                        </div>
                                        <div className="mt-7">
                                            <h3 className="inter-semibold text-[1.45rem] leading-tight text-[#07115a]">{item.name}</h3>
                                            <p className="mt-3 text-[0.96rem] leading-[1.7] text-[#667085]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </Motion.div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="rounded-[24px] border border-[#e1eaf7] bg-[#fbfdff] p-8 text-center">
                            <p className="inter-semibold text-[1.2rem] text-[#0d1321]">Geen integratie gevonden</p>
                            <p className="mt-2 text-[#5a667c]">Neem contact op, dan kijken we mee naar een passende koppeling.</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="bg-[#f7fbff] px-6 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="relative overflow-hidden rounded-[30px] bg-[#1a5ee5] px-7 py-10 text-white shadow-[0_28px_70px_rgba(26,94,229,0.24)] sm:px-10 lg:px-14 lg:py-14">
                        <div className="absolute right-[-80px] top-[-120px] h-[300px] w-[300px] rounded-full bg-white/14 blur-2xl" />
                        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="inter-medium text-[0.95rem] text-white/75">Maatwerk nodig?</p>
                                <h2 className="inter-semibold mt-3 max-w-2xl text-[2rem] leading-[1.12] sm:text-[3rem]">
                                    Staat je systeem er niet tussen?
                                </h2>
                                <p className="mt-4 max-w-2xl text-[1.05rem] leading-[1.7] text-white/80">
                                    We denken mee over API-koppelingen, WMS-integraties en specifieke orderflows.
                                </p>
                            </div>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-[0.98rem] font-semibold text-[#1a5ee5] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f4f8ff]"
                            >
                                Bespreek je koppeling
                                <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Homepage2Footer />
        </main>
    );
};

export default Integraties;
