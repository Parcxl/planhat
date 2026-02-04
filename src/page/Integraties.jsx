import { Flex } from "antd";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const tabs = ["Alle", "Webshop", "Marketplace", "WMS"];

const integrations = [
    { name: "WooCommerce", src: "/woocommerce-logo.png", category: "Webshop", to: "/integraties/woocommerce" },
    { name: "Shopify", src: "/shopify-logo.png", category: "Webshop" },
    { name: "CCV Shop", src: "/ccv-icon.svg", category: "Webshop", to: "/integraties/ccv-shop" },
    { name: "Lightspeed", src: "/lightspeed.png", category: "Webshop" },
    { name: "Magento", src: "/magento.jpg", category: "Webshop" },
    { name: "Mijnwebwinkel", src: "/mijnwebwinkel.png", category: "Webshop" },
    { name: "Ecwid", src: "/ecwid-parcxl.png", category: "Webshop" },
    { name: "Wix", src: "/wix.png", category: "Webshop" },
    { name: "PrestaShop", src: "/prestashop.png", category: "Webshop" },
    { name: "Bol.com", src: "/bol-logo.png", category: "Marketplace" },
    { name: "Lyra", src: "/lyra.png", category: "WMS" },
    { name: "GoedGepickt", src: "/goedgepickt-sendwise-logo.png", category: "WMS" },
];

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

    return (
        <Flex className="flex-col w-[100%] space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16 mb-10">
            <section className="w-full pt-24 sm:pt-28">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="rounded-3xl border border-gray-200 bg-white p-7 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.1)] w-full">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                            <div className="relative w-fit">
                                <div className="absolute -inset-x-3 bottom-1 h-3 bg-gradient-to-r from-[#1a5ee5]/25 to-transparent rounded-full" />
                                <h1 className="relative inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                    Integraties
                                </h1>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="relative w-full sm:w-[16rem]">
                                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                                    <input
                                        type="text"
                                        value={query}
                                        onChange={(event) => setQuery(event.target.value)}
                                        placeholder="Zoek integratie"
                                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-2.5 pl-11 text-gray-700 inter-medium focus:border-[#1a5ee5] focus:outline-none focus:ring-2 focus:ring-[#1a5ee5]/20 transition-all duration-300 ease-out"
                                    />
                                </div>
                                {tabs.map((tab) => {
                                    const active = activeTab === tab;
                                    return (
                                        <button
                                            key={tab}
                                            type="button"
                                            onClick={() => setActiveTab(tab)}
                                            className={`px-4 py-2 rounded-full text-[0.9rem] inter-medium transition-all duration-300 ease-out ${
                                                active
                                                    ? "bg-[#1a5ee5] text-white shadow"
                                                    : "text-gray-600 hover:text-gray-800 border border-gray-200"
                                            }`}
                                        >
                                            {tab}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {filtered.map((item, index) => {
                            const Card = Link;
                            const cardProps = { to: item.to || "/integraties" };
                            return (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
                                >
                                    <Card
                                        {...cardProps}
                                        className="rounded-3xl border border-gray-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.1)] flex transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-transform hover:-translate-y-1 hover:scale-[1.01] hover:border-[#1a5ee5]/30 hover:shadow-[0_30px_70px_rgba(15,23,42,0.16)]"
                                    >
                                        <div className="flex items-center gap-5 w-full">
                                            <div className="h-16 w-16 flex items-center justify-center">
                                                <img src={item.src} alt={item.name} className="h-12 w-12 object-contain" />
                                            </div>
                                            <div className="flex flex-col flex-1">
                                                <p className="inter-semibold text-[1.1rem] text-gray-900">{item.name}</p>
                                                <span className="mt-2 w-fit rounded-full bg-[#1a5ee5]/10 px-3 py-1 text-[0.75rem] inter-medium text-[#1a5ee5]">
                                                    {item.category}
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </Flex>
            </section>
        </Flex>
    );
};

export default Integraties;
