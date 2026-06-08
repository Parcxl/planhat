import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
    FiArrowLeft,
    FiArrowRight,
    FiCheck,
    FiCheckCircle,
    FiClock,
    FiCreditCard,
    FiGlobe,
    FiMail,
    FiPackage,
    FiUser,
} from "react-icons/fi";
import Homepage2Header from "../components/Homepage2/Header";
import Homepage2Footer from "../components/Homepage2/Footer";

const algemeneVoorwaardenPdf = "/sendwise-algemene-voorwaarden:15-03-2026.pdf";

const wizardSteps = [
    {
        title: "Bedrijf",
        description: "Vertel kort wie je bent.",
        fields: ["bedrijfsnaam", "website"],
    },
    {
        title: "Contactpersoon",
        description: "Wie mogen we spreken?",
        fields: ["voornaam", "achternaam"],
    },
    {
        title: "Bereikbaarheid",
        description: "We nemen snel contact op.",
        fields: ["email", "telefoon"],
    },
];

const expectations = [
    "Binnen 24 uur persoonlijk contact",
    "Geen contracten of abonnementskosten",
    "All-in verzendtarieven zonder verrassingen",
    "Hulp bij de juiste vervoerders en koppelingen",
];

const StartMetSendwise = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        bedrijfsnaam: "",
        website: "",
        voornaam: "",
        achternaam: "",
        email: "",
        telefoon: "",
    });
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [status, setStatus] = useState({ state: "idle", message: "" });
    const [touchedSubmit, setTouchedSubmit] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isFinalStep = currentStep === wizardSteps.length - 1;
    const activeStep = wizardSteps[currentStep];

    const normalizedWebsite = () => {
        const websiteValue = formData.website.trim();
        if (!websiteValue) return "";
        return /^https?:\/\//i.test(websiteValue) ? websiteValue : `https://${websiteValue}`;
    };

    const validateFields = (fieldNames) => fieldNames.every((field) => formData[field]?.trim());

    const isStepValid = validateFields(activeStep.fields) && (!isFinalStep || acceptedTerms);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setStatus({ state: "idle", message: "" });
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        setTouchedSubmit(true);
        setStatus({ state: "idle", message: "" });
        if (!validateFields(activeStep.fields)) {
            setStatus({ state: "error", message: "Vul de velden in om verder te gaan." });
            return;
        }
        setTouchedSubmit(false);
        setCurrentStep((prev) => Math.min(prev + 1, wizardSteps.length - 1));
    };

    const handleBack = () => {
        setStatus({ state: "idle", message: "" });
        setTouchedSubmit(false);
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setTouchedSubmit(true);
        setStatus({ state: "idle", message: "" });

        const allFieldsValid = wizardSteps.every((step) => validateFields(step.fields));
        if (!allFieldsValid) {
            setStatus({ state: "error", message: "Vul alle stappen in om je aanvraag te versturen." });
            return;
        }

        if (!acceptedTerms) {
            setStatus({
                state: "error",
                message: "Ga akkoord met de algemene voorwaarden om je aanvraag te versturen.",
            });
            return;
        }

        const payload = {
            ...formData,
            website: normalizedWebsite(),
            kvk: "1234567",
        };

        try {
            setStatus({ state: "loading", message: "Aanvraag wordt verstuurd..." });

            const response = await fetch("/api/accountaanvraag", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok || data?.success === false) {
                throw new Error(data?.error || data?.message || "Er ging iets mis bij het versturen.");
            }

            setStatus({
                state: "success",
                message: "Je aanvraag is verzonden. We nemen binnen 24 uur contact met je op.",
            });
            setCurrentStep(0);
            setFormData({
                bedrijfsnaam: "",
                website: "",
                voornaam: "",
                achternaam: "",
                email: "",
                telefoon: "",
            });
            setAcceptedTerms(false);
            setTouchedSubmit(false);
        } catch (error) {
            setStatus({
                state: "error",
                message: error?.message || "Er ging iets mis bij het versturen. Probeer het later opnieuw.",
            });
        }
    };

    const inputClass = "w-full rounded-2xl border border-[#d8e3f2] bg-white px-4 py-3.5 text-[#0d1321] outline-none transition-all duration-300 placeholder:text-[#8b96aa] focus:border-[#1a5ee5] focus:ring-4 focus:ring-[#1a5ee5]/10";
    const labelClass = "inter-semibold text-[0.95rem] text-[#0d1321]";

    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#0d1321]">
            <Homepage2Header />

            <section className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-44">
                <div className="absolute left-0 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#eaf2ff] blur-3xl sm:h-[520px] sm:w-[520px]" />
                <div className="mx-auto grid w-full max-w-7xl items-center gap-9 px-4 pb-12 sm:px-6 sm:pb-16 lg:min-h-[680px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:pb-24">
                    <div className="relative z-10 max-w-[680px] lg:pb-10">
                        <div className="mb-5 flex items-center gap-3 text-[#6f7694]">
                            <div className="flex -space-x-2">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-[#1a5ee5] text-white shadow-[0_10px_24px_rgba(26,94,229,0.25)]">
                                    <FiPackage />
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white text-[#1a5ee5] shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
                                    <FiCreditCard />
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-[#f2f7ff] text-[#1a5ee5] shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                                    <FiClock />
                                </span>
                            </div>
                            <p className="inter-medium text-[0.95rem]">Vraag in 3 korte stappen je account aan</p>
                        </div>
                        <h1 className="inter-semibold text-[2.7rem] leading-[1.02] tracking-[0px] text-[#0d1321] sm:text-[4.2rem] sm:leading-[0.98] lg:text-[5.2rem]">
                            <span className="block sm:whitespace-nowrap">Start met</span>
                            <span className="block sm:whitespace-nowrap text-[#1a5ee5]">Sendwise.</span>
                        </h1>
                        <p className="mt-5 max-w-[570px] text-base leading-7 text-[#4e5a73] sm:mt-7 sm:text-[1.2rem] sm:leading-[1.75]">
                            Maak je aanvraag laagdrempelig aan. We nemen contact op, bekijken je verzendprofiel en helpen je met de beste tarieven en koppelingen.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <a
                                href="#account-aanvragen"
                                onClick={(event) => {
                                    event.preventDefault();
                                    document.getElementById("account-aanvragen")?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }}
                                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1a5ee5] px-7 py-3.5 text-[0.98rem] font-semibold text-white shadow-[0_18px_42px_rgba(26,94,229,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#154fca] sm:w-fit"
                            >
                                Account aanvragen
                                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                            <Link
                                to="/contact"
                                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#d8e3f2] bg-white px-7 py-3.5 text-[0.98rem] font-semibold text-[#0d1321] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1a5ee5]/30 hover:text-[#1a5ee5] sm:w-fit"
                            >
                                Eerst kennismaken
                            </Link>
                        </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-center lg:min-h-[540px] lg:justify-end">
                        <div className="relative w-full max-w-[610px]">
                            <div className="relative overflow-hidden rounded-[24px] border border-[#dbe7f5] bg-white shadow-[0_24px_65px_rgba(15,23,42,0.12)] sm:rounded-[34px] lg:shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
                                <img
                                    src="/profile-founder-van.webp"
                                    alt="Olivier van Sendwise"
                                    fetchPriority="high"
                                    loading="eager"
                                    decoding="async"
                                    className="aspect-[1.06/1] w-full scale-[1.12] object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f7fbff] px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
                <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
                    {expectations.map((item) => (
                        <article key={item} className="rounded-[24px] border border-[#dfeaf7] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                            <FiCheckCircle className="text-[1.45rem] text-[#1a5ee5]" />
                            <p className="inter-semibold mt-5 text-[1.05rem] leading-[1.45] text-[#0d1321]">{item}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="account-aanvragen" className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:bg-[#f7fbff] lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 max-w-3xl">
                        <p className="inter-semibold text-[0.9rem] uppercase tracking-[0.08em] text-[#1a5ee5]">Account aanvragen</p>
                        <h2 className="inter-semibold mt-3 text-[2rem] leading-[1.15] text-[#0d1321] sm:text-[2.5rem]">
                            Vul je gegevens in
                        </h2>
                        <p className="mt-3 max-w-2xl text-[1rem] leading-[1.7] text-[#5a667c]">
                            In drie korte stappen hebben we genoeg informatie om je aanvraag goed op te volgen.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-[24px] border border-[#dfeaf7] bg-white shadow-[0_28px_80px_rgba(15,23,42,0.08)] sm:rounded-[30px]">
                        <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
                            <aside className="border-b border-[#e1eaf7] bg-[#fbfdff] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                                <div className="space-y-3">
                                    {wizardSteps.map((step, index) => {
                                        const active = index === currentStep;
                                        const done = index < currentStep;
                                        return (
                                            <button
                                                key={step.title}
                                                type="button"
                                                onClick={() => {
                                                    if (index <= currentStep) {
                                                        setCurrentStep(index);
                                                        setStatus({ state: "idle", message: "" });
                                                    }
                                                }}
                                                className={`group flex w-full items-center gap-4 rounded-[18px] px-4 py-4 text-left transition-all duration-300 ${
                                                    active
                                                        ? "bg-white shadow-[0_14px_34px_rgba(15,23,42,0.07)] ring-1 ring-[#c9dcfb]"
                                                        : "bg-transparent hover:bg-white/70"
                                                } ${index <= currentStep ? "cursor-pointer" : "cursor-default opacity-65"}`}
                                            >
                                                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[0.92rem] font-semibold transition-colors ${
                                                    done || active ? "bg-[#1a5ee5] text-white" : "bg-[#eaf2ff] text-[#1a5ee5]"
                                                }`}>
                                                    {done ? <FiCheck /> : index + 1}
                                                </span>
                                                <span className="min-w-0">
                                                    <span className="block font-semibold text-[#0d1321]">{step.title}</span>
                                                    <span className="mt-0.5 block text-[0.9rem] text-[#6f7694]">{step.description}</span>
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="mt-8 rounded-[22px] border border-[#e1eaf7] bg-white p-5">
                                    <p className="inter-semibold text-[1rem] text-[#0d1321]">Na je aanvraag</p>
                                    <div className="mt-4 space-y-3">
                                        {["Binnen 24 uur reactie", "Geen vaste kosten", "Hulp bij je eerste koppeling"].map((item) => (
                                            <div key={item} className="flex items-center gap-3 text-[0.92rem] font-medium text-[#5a667c]">
                                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eef5ff] text-[#1a5ee5]">
                                                    <FiCheck className="h-3.5 w-3.5" />
                                                </span>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </aside>

                            <div className="p-6 sm:p-8 lg:p-10">
                                <div className="mb-8">
                                    <div className="flex items-center justify-between gap-4">
                                        <p className="inter-semibold text-[0.95rem] text-[#1a5ee5]">Stap {currentStep + 1} van {wizardSteps.length}</p>
                                        <span className="rounded-full bg-[#eef5ff] px-3 py-1.5 text-[0.8rem] font-semibold text-[#1a5ee5]">
                                            {Math.round(((currentStep + 1) / wizardSteps.length) * 100)}%
                                        </span>
                                    </div>
                                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#e8eef8]">
                                        <div
                                            className="h-full rounded-full bg-[#1a5ee5] transition-all duration-500 ease-out"
                                            style={{ width: `${((currentStep + 1) / wizardSteps.length) * 100}%` }}
                                        />
                                    </div>
                                    <h3 className="inter-semibold mt-7 text-[2rem] leading-tight text-[#0d1321] sm:text-[2.35rem]">
                                        {activeStep.title}
                                    </h3>
                                    <p className="mt-2 text-[1rem] leading-[1.7] text-[#5a667c]">{activeStep.description}</p>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <Motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.22, ease: "easeOut" }}
                                        className="grid gap-5 sm:grid-cols-2"
                                    >
                                        {currentStep === 0 && (
                                            <>
                                                <div className="space-y-2">
                                                    <label htmlFor="bedrijfsnaam" className={labelClass}>Bedrijfsnaam</label>
                                                    <div className="relative">
                                                        <FiPackage className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b96aa]" />
                                                        <input
                                                            id="bedrijfsnaam"
                                                            name="bedrijfsnaam"
                                                            type="text"
                                                            value={formData.bedrijfsnaam}
                                                            onChange={handleChange}
                                                            placeholder="Bijv. Sendwise B.V."
                                                            className={`${inputClass} pl-11`}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="website" className={labelClass}>Website</label>
                                                    <div className="relative">
                                                        <FiGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b96aa]" />
                                                        <input
                                                            id="website"
                                                            name="website"
                                                            type="text"
                                                            value={formData.website}
                                                            onChange={handleChange}
                                                            placeholder="jouwwebshop.nl"
                                                            className={`${inputClass} pl-11`}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {currentStep === 1 && (
                                            <>
                                                <div className="space-y-2">
                                                    <label htmlFor="voornaam" className={labelClass}>Voornaam</label>
                                                    <div className="relative">
                                                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b96aa]" />
                                                        <input
                                                            id="voornaam"
                                                            name="voornaam"
                                                            type="text"
                                                            value={formData.voornaam}
                                                            onChange={handleChange}
                                                            placeholder="Voornaam"
                                                            className={`${inputClass} pl-11`}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="achternaam" className={labelClass}>Achternaam</label>
                                                    <div className="relative">
                                                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b96aa]" />
                                                        <input
                                                            id="achternaam"
                                                            name="achternaam"
                                                            type="text"
                                                            value={formData.achternaam}
                                                            onChange={handleChange}
                                                            placeholder="Achternaam"
                                                            className={`${inputClass} pl-11`}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {currentStep === 2 && (
                                            <>
                                                <div className="space-y-2">
                                                    <label htmlFor="email" className={labelClass}>E-mailadres</label>
                                                    <div className="relative">
                                                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b96aa]" />
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="naam@bedrijf.nl"
                                                            className={`${inputClass} pl-11`}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="telefoon" className={labelClass}>Telefoonnummer</label>
                                                    <div className="relative">
                                                        <FiClock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b96aa]" />
                                                        <input
                                                            id="telefoon"
                                                            name="telefoon"
                                                            type="tel"
                                                            value={formData.telefoon}
                                                            onChange={handleChange}
                                                            placeholder="+31 6 12345678"
                                                            className={`${inputClass} pl-11`}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <label className="flex items-start gap-3 rounded-[18px] border border-[#d8e3f2] bg-[#fbfdff] p-4 text-[0.95rem] leading-relaxed text-[#4e5a73] sm:col-span-2">
                                                    <input
                                                        type="checkbox"
                                                        checked={acceptedTerms}
                                                        onChange={(event) => {
                                                            setAcceptedTerms(event.target.checked);
                                                            setStatus({ state: "idle", message: "" });
                                                        }}
                                                        className="mt-1 h-4 w-4 rounded border-[#b8c8dd] text-[#1a5ee5] focus:ring-[#1a5ee5]/30"
                                                    />
                                                    <span>
                                                        Ik ga akkoord met de{" "}
                                                        <a
                                                            href={algemeneVoorwaardenPdf}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="font-semibold text-[#1a5ee5] hover:underline"
                                                        >
                                                            algemene voorwaarden
                                                        </a>
                                                        .
                                                    </span>
                                                </label>
                                            </>
                                        )}
                                    </Motion.div>

                                    {status.message && (
                                        <p className={`mt-5 rounded-[18px] px-4 py-3 text-[0.92rem] font-medium ${
                                            status.state === "success"
                                                ? "bg-emerald-50 text-emerald-700"
                                                : status.state === "loading"
                                                    ? "bg-[#eef5ff] text-[#1a5ee5]"
                                                    : "bg-red-50 text-red-600"
                                        }`}>
                                            {status.message}
                                        </p>
                                    )}

                                    {touchedSubmit && !isStepValid && !status.message && (
                                        <p className="mt-5 rounded-[18px] bg-red-50 px-4 py-3 text-[0.92rem] font-medium text-red-600">
                                            Vul deze stap volledig in om verder te gaan.
                                        </p>
                                    )}

                                    <div className="mt-8 flex flex-col gap-3 border-t border-[#eef3fb] pt-6 sm:flex-row sm:items-center sm:justify-between">
                                        <button
                                            type="button"
                                            onClick={handleBack}
                                            disabled={currentStep === 0 || status.state === "loading"}
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d8e3f2] bg-white px-6 py-3 text-[0.95rem] font-semibold text-[#0d1321] transition-all duration-300 hover:border-[#1a5ee5]/30 hover:text-[#1a5ee5] disabled:cursor-not-allowed disabled:opacity-40 sm:w-fit"
                                        >
                                            <FiArrowLeft />
                                            Terug
                                        </button>

                                        {!isFinalStep ? (
                                            <button
                                                type="button"
                                                onClick={handleNext}
                                                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1a5ee5] px-7 py-3.5 text-[0.98rem] font-semibold text-white shadow-[0_18px_42px_rgba(26,94,229,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#154fca] sm:w-fit"
                                            >
                                                Volgende stap
                                                <FiArrowRight />
                                            </button>
                                        ) : (
                                            <button
                                                type="submit"
                                                disabled={status.state === "loading"}
                                                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1a5ee5] px-7 py-3.5 text-[0.98rem] font-semibold text-white shadow-[0_18px_42px_rgba(26,94,229,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#154fca] disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
                                            >
                                                {status.state === "loading" ? "Aanvraag versturen..." : "Account aanvragen"}
                                                <FiArrowRight />
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f7fbff] px-4 py-14 sm:px-6 sm:py-16 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="relative overflow-hidden rounded-[24px] bg-[#1a5ee5] px-5 py-7 text-white shadow-[0_28px_70px_rgba(26,94,229,0.24)] sm:rounded-[30px] sm:px-10 sm:py-10 lg:px-14 lg:py-14">
                        <div className="absolute right-[-80px] top-[-120px] h-[300px] w-[300px] rounded-full bg-white/14 blur-2xl" />
                        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="inter-medium text-[0.95rem] text-white/75">Persoonlijk advies</p>
                                <h2 className="inter-semibold mt-3 max-w-2xl text-[2rem] leading-[1.12] sm:text-[3rem]">
                                    Bespreek je verzendproces met Sendwise.
                                </h2>
                                <p className="mt-4 max-w-2xl text-[1.05rem] leading-[1.7] text-white/80">
                                    Liever eerst sparren voordat je een account aanvraagt? Ons team denkt praktisch met je mee.
                                </p>
                            </div>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-[0.98rem] font-semibold text-[#1a5ee5] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f4f8ff]"
                            >
                                Neem contact op
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

export default StartMetSendwise;
