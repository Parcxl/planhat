import { Flex } from "antd";
import { useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    "Je vraagt een account aan",
    "We nemen binnen 24 uur contact op",
    "Samen kiezen we de beste oplossing en tarieven",
    "Je start direct met verzenden",
];
const expectations = [
    "Geen contracten of vaste verplichtingen",
    "Geen abonnementskosten",
    "Geen labelbijdrages",
    "Eerlijke, all-in verzendtarieven",
    "Persoonlijk contact en begeleiding",
    "Een aanspreekpunt bij problemen",
];

const StartMetSendwise = () => {
    const [formData, setFormData] = useState({
        bedrijfsnaam: "",
        kvk: "",
        website: "",
        voornaam: "",
        achternaam: "",
        email: "",
        telefoon: "",
    });
    const [status, setStatus] = useState({ state: "idle", message: "" });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fields = useMemo(
        () => [
            { name: "bedrijfsnaam", label: "Bedrijfsnaam", type: "text" },
            { name: "kvk", label: "KVK-nummer", type: "text" },
            { name: "website", label: "Website", type: "url" },
            { name: "voornaam", label: "Voornaam", type: "text" },
            { name: "achternaam", label: "Achternaam", type: "text" },
            { name: "email", label: "E-mailadres", type: "email" },
            { name: "telefoon", label: "Telefoonnummer", type: "tel" },
        ],
        []
    );

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus({ state: "idle", message: "" });

        const missing = fields.filter((field) => !formData[field.name]?.trim());
        if (missing.length > 0) {
            setStatus({
                state: "error",
                message: "Vul alle velden in om je aanvraag te versturen.",
            });
            return;
        }

        // Same origin: in dev Vite proxy forwards to app.sendwise.nl; on Vercel /api/accountaanvraag is a serverless proxy.
        const endpoint = "/api/accountaanvraag";

        const websiteValue = formData.website.trim();
        const normalizedWebsite =
            websiteValue && !/^https?:\/\//i.test(websiteValue)
                ? `https://${websiteValue}`
                : websiteValue;

        const payload = { ...formData, website: normalizedWebsite };

        try {
            setStatus({ state: "loading", message: "Aanvraag wordt verstuurd..." });

            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok || data?.success === false) {
                throw new Error(
                    data?.error ||
                        data?.message ||
                        "Er ging iets mis bij het versturen."
                );
            }

            setStatus({
                state: "success",
                message: "Account aanvraag succesvol verzonden.",
            });
            setFormData({
                bedrijfsnaam: "",
                kvk: "",
                website: "",
                voornaam: "",
                achternaam: "",
                email: "",
                telefoon: "",
            });
        } catch (error) {
            setStatus({
                state: "error",
                message:
                    error?.message ||
                    "Er ging iets mis bij het versturen. Probeer het later opnieuw.",
            });
        }
    };

    useGSAP(() => {
        gsap.set("#start-hero-frame", {
            scale: 1,
            transformOrigin: "center center",
            borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "0%",
            marginLeft: "0px",
            marginRight: "0px",
        });

        gsap.to("#start-hero-frame", {
            scale: 0.83,
            borderBottomLeftRadius: "100px",
            borderBottomRightRadius: "100px",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#start-hero-frame",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.fromTo(
            "#start-hero-img",
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
                    trigger: "#start-hero-frame",
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
                    <Flex id="start-hero-frame" className="w-[100%] mask-clip-path">
                        <img
                            id="start-hero-img"
                            src="/sendwise-2.png"
                            alt="Start met Sendwise"
                            className="absolute h-screen sm:h-screen w-[100%] object-cover object-top"
                        />
                        <div id="start-hero-img" className="absolute z-10 bg-gradient-to-l from-transparent to-[#030302] w-[100%] h-screen sm:h-screen" />
                        <Flex className="z-30 sm:ml-[10%] ml-[4%] w-[100%] h-screen sm:h-screen flex-col justify-center items-start pt-16 sm:pt-20 pb-10 sm:pb-14">
                            <motion.div
                                className="flex flex-col items-start space-y-8 sm:space-y-10 translate-y-4 sm:translate-y-6"
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Flex className="group text-white/80 inter-semibold w-fit bg-[#514F4A]/30 border px-1 py-1 items-center space-x-4 rounded-3xl border-[#514F4A]/50 backdrop-blur-lg transition-all duration-500 ease-out hover:border-[#514F4A] hover:bg-[#514F4A]/40">
                                    <Flex className="border border-[#514F4A] bg-gradient-to-t to-[#514F4A] from-[#514F4A]/10 px-3 py-[0.4rem] rounded-3xl transition-all duration-500 ease-out group-hover:bg-[#514F4A] group-hover:scale-[1.02]">
                                        <p className="text-[0.85rem] tracking-[0.14em]">ACCOUNT</p>
                                    </Flex>
                                </Flex>
                                <div className="flex flex-col pl-1 inter-semibold md:leading-[4rem] leading-[3.1rem] text-white w-fit text-left">
                                    <h1 className="md:text-[4rem] sm:text-[2.5rem] text-[2.85rem]">Account aanvragen bij Sendwise</h1>
                                </div>
                                <p className="text-white font-light text-[1.25rem] sm:text-[1.1rem] md:text-[1.3rem] max-w-[48rem] leading-[1.4] text-left">
                                    Vraag een account aan. Binnen 24 uur nemen we contact op om je verzendprofiel te bespreken en een passend tariefvoorstel te doen.
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-6 sm:space-y-0">
                                    <Link
                                        to="/contact"
                                        className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 items-center space-x-3 cursor-pointer text-[0.95rem] px-7 py-3 rounded-3xl w-fit"
                                    >
                                        <span>Eerst kennismaken</span>
                                    </Link>
                                </div>
                            </motion.div>
                        </Flex>
                    </Flex>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full">
                        <div className="flex flex-col space-y-6">
                            <div className="space-y-3 text-center">
                                <h2 className="inter-medium lg:text-[2.7rem] md:text-[2.3rem] sm:text-[2rem] text-[1.8rem] text-gray-900">
                                    Zo werkt een accountaanvraag bij Sendwise
                                </h2>
                                <p className="text-gray-700 inter-medium lg:text-[1.05rem] text-[0.98rem] leading-relaxed max-w-[48rem] mx-auto">
                                    We starten met een korte kennismaking. Zo zorgen we dat Sendwise aansluit op je verzendvolume, bestemmingen en type zendingen.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={step}
                                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.4 }}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                                    >
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a5ee5]/10 text-[#1a5ee5] inter-semibold text-[0.95rem]">
                                            {index + 1}
                                        </div>
                                        <p className="mt-4 inter-medium text-[0.98rem] text-gray-700">{step}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Flex>
            </section>

            <section className="w-full">
                <Flex className="w-[95%] lg:w-[80%] mx-auto">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            <motion.div
                                className="lg:w-[65%] w-full"
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="space-y-3">
                                    <h2 className="inter-medium lg:text-[2.3rem] md:text-[2rem] sm:text-[1.8rem] text-[1.6rem] text-gray-900">
                                        Account aanvragen
                                    </h2>
                                    <p className="text-gray-700 inter-medium text-[0.98rem]">
                                        Laat je gegevens achter. We nemen contact op om de mogelijkheden te bespreken.
                                    </p>
                                </div>
                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
                                >
                                    {fields.map((field) => (
                                        <div key={field.name} className="flex flex-col space-y-2 md:col-span-1">
                                            <label
                                                htmlFor={field.name}
                                                className="text-gray-900 inter-medium text-[0.95rem]"
                                            >
                                                {field.label}
                                            </label>
                                            <input
                                                id={field.name}
                                                name={field.name}
                                                type={field.type}
                                                value={formData[field.name]}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-700 inter-medium transition-all duration-300 ease-out focus:border-[#1a5ee5] focus:outline-none focus:ring-2 focus:ring-[#1a5ee5]/20"
                                            />
                                        </div>
                                    ))}
                                    <div className="md:col-span-2 pt-2">
                                        <button
                                            type="submit"
                                            disabled={status.state === "loading"}
                                            className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[1rem] cursor-pointer text-white px-7 py-3 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl w-fit relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                            <span className="relative z-10">
                                                {status.state === "loading"
                                                    ? "Bezig met verzenden..."
                                                    : "Account aanvragen"}
                                            </span>
                                        </button>
                                        {status.message && (
                                            <p
                                                className={`mt-3 inter-medium text-[0.9rem] ${
                                                    status.state === "success"
                                                        ? "text-emerald-600"
                                                        : "text-red-500"
                                                }`}
                                            >
                                                {status.message}
                                            </p>
                                        )}
                                        <p className="mt-3 text-gray-500 inter-medium text-[0.85rem]">
                                            Na je aanvraag nemen we binnen 24 uur contact met je op.
                                        </p>
                                    </div>
                                </form>
                            </motion.div>
                            <div className="lg:w-[35%] w-full">
                                <motion.div
                                    className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6 sm:p-8 shadow-[0_16px_40px_rgba(15,23,42,0.08)] h-full"
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <h3 className="inter-semibold text-[1.3rem] text-gray-900">Wat je kunt verwachten</h3>
                                    <div className="mt-5 flex flex-col space-y-4">
                                        {expectations.map((item, index) => (
                                            <motion.div
                                                key={item}
                                                className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(15,23,42,0.12)]"
                                                initial={{ opacity: 0, y: 12 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, amount: 0.4 }}
                                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                                            >
                                                <span className="text-sm inter-medium text-[#475569]">{item}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </Flex>
            </section>
        </Flex>
    );
};

export default StartMetSendwise;
