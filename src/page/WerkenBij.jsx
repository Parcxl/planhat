import { createElement, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    FiArrowRight,
    FiBriefcase,
    FiCheck,
    FiCode,
    FiCoffee,
    FiMessageCircle,
    FiTrendingUp,
    FiUsers,
} from "react-icons/fi";
import Homepage2Header from "../components/Homepage2/Header";
import Homepage2Footer from "../components/Homepage2/Footer";

const stageUrl = "https://stagemarkt.nl/stages/software-developer_157ca98f-a77c-4be9-8a36-df448aac4297-25998?type=1&range=10";

const roles = [
    {
        title: "Sales medewerker",
        type: "Fulltime of parttime",
        icon: FiTrendingUp,
        description:
            "Help webshops en fulfilmentbedrijven slimmer verzenden. Je denkt mee met prospects, legt Sendwise helder uit en bouwt aan langdurige klantrelaties.",
        points: ["Contact met webshops en fulfilmentcenters", "Meedenken over verzendtarieven en processen", "Veel ruimte om sales mee op te bouwen"],
        cta: "Mail over deze rol",
        href: "mailto:info@sendwise.nl?subject=Sollicitatie%20sales%20medewerker",
        external: false,
    },
    {
        title: "Stagiair software developer",
        type: "Stage",
        icon: FiCode,
        description:
            "Werk mee aan software die dagelijks wordt gebruikt voor orders, labels, tracking en fulfilment. Je krijgt begeleiding en bouwt aan echte productfeatures.",
        points: ["Meewerken aan het Sendwise platform", "Leren van praktische e-commerce workflows", "Stageplek via Stagemarkt"],
        cta: "Bekijk op Stagemarkt",
        href: stageUrl,
        external: true,
    },
];

const perks = [
    { title: "Klein team", text: "Korte lijnen, veel verantwoordelijkheid en direct zichtbaar resultaat.", icon: FiUsers },
    { title: "Praktisch product", text: "Je werkt aan software die webshops en fulfilmentteams echt dagelijks gebruiken.", icon: FiBriefcase },
    { title: "Ruimte om te leren", text: "We bouwen snel, testen veel en geven je ruimte om mee te denken.", icon: FiCoffee },
];

const WerkenBij = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#0d1321]">
            <Homepage2Header />

            <section className="relative overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-44">
                <div className="absolute left-0 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#eaf2ff] blur-3xl" />
                <div className="mx-auto grid min-h-[680px] w-full max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-[0.88fr_1.12fr] lg:pb-24">
                    <div className="relative z-10 max-w-[680px] lg:pb-10">
                        <div className="mb-5 flex items-center gap-3 text-[#6f7694]">
                            <div className="flex -space-x-2">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-[#1a5ee5] text-white shadow-[0_10px_24px_rgba(26,94,229,0.25)]">
                                    <FiUsers />
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white text-[#1a5ee5] shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
                                    <FiCode />
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-[#f2f7ff] text-[#1a5ee5] shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                                    <FiTrendingUp />
                                </span>
                            </div>
                            <p className="inter-medium text-[0.95rem]">Bouw mee aan slimmer verzenden</p>
                        </div>
                        <h1 className="inter-semibold text-[3rem] leading-[0.98] tracking-[0px] text-[#0d1321] sm:text-[4.2rem] lg:text-[5.2rem]">
                            <span className="block sm:whitespace-nowrap">Werken bij</span>
                            <span className="block sm:whitespace-nowrap text-[#1a5ee5]">Sendwise.</span>
                        </h1>
                        <p className="mt-7 max-w-[570px] text-[1.08rem] leading-[1.75] text-[#4e5a73] sm:text-[1.2rem]">
                            We groeien hard en zoeken mensen die graag bouwen aan een praktisch product voor webshops, fulfilmentcenters en logistieke teams.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <a
                                href="#vacatures"
                                onClick={(event) => {
                                    event.preventDefault();
                                    document.getElementById("vacatures")?.scrollIntoView({ behavior: "smooth", block: "start" });
                                }}
                                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#1a5ee5] px-7 py-3.5 text-[0.98rem] font-semibold text-white shadow-[0_18px_42px_rgba(26,94,229,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#154fca]"
                            >
                                Bekijk vacatures
                                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                            <Link
                                to="/contact"
                                className="inline-flex w-fit items-center gap-3 rounded-full border border-[#d8e3f2] bg-white px-7 py-3.5 text-[0.98rem] font-semibold text-[#0d1321] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1a5ee5]/30 hover:text-[#1a5ee5]"
                            >
                                Stel een vraag
                            </Link>
                        </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-center lg:min-h-[540px] lg:justify-end">
                        <div className="relative w-full max-w-[690px] overflow-hidden rounded-[34px] border border-[#dbe7f5] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
                            <img
                                src="/werken-bij-sendwise-team.png"
                                alt="Teamleden van Sendwise bij de bus"
                                className="aspect-[1.82/1] w-full scale-[1.1] object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f7fbff] px-6 py-16 lg:py-20">
                <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
                    {perks.map(({ title, text, icon: Icon }) => (
                        <article key={title} className="rounded-[24px] border border-[#dfeaf7] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef5ff] text-[#1a5ee5]">
                                {createElement(Icon, { className: "text-[1.25rem]" })}
                            </div>
                            <h2 className="inter-semibold mt-6 text-[1.2rem] text-[#0d1321]">{title}</h2>
                            <p className="mt-3 text-[0.98rem] leading-[1.7] text-[#5a667c]">{text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="vacatures" className="bg-white px-6 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 max-w-3xl">
                        <p className="inter-semibold text-[0.9rem] uppercase tracking-[0.08em] text-[#1a5ee5]">Open rollen</p>
                        <h2 className="inter-semibold mt-3 text-[2.35rem] leading-[1.08] text-[#0d1321] sm:text-[3.15rem]">
                            Kies de rol die bij je past.
                        </h2>
                        <p className="mt-4 text-[1.05rem] leading-[1.7] text-[#5a667c]">
                            We zoeken mensen die houden van aanpakken, duidelijk communiceren en graag dichtbij het product werken.
                        </p>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-2">
                        {roles.map(({ title, type, description, points, cta, href, external, icon: Icon }) => (
                            <article key={title} className="rounded-[28px] border border-[#e1eaf7] bg-[#fbfdff] p-7 shadow-[0_18px_55px_rgba(7,17,31,0.055)] transition duration-300 hover:-translate-y-1 hover:border-[#bfd4f8] hover:bg-white hover:shadow-[0_26px_75px_rgba(7,17,31,0.10)] sm:p-8">
                                <div className="flex items-start justify-between gap-5">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#1a5ee5] shadow-[0_12px_30px_rgba(26,94,229,0.10)] ring-1 ring-[#dce9ff]">
                                        {createElement(Icon, { className: "h-7 w-7" })}
                                    </div>
                                    <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#536175] ring-1 ring-[#e1eaf7]">
                                        {type}
                                    </span>
                                </div>
                                <h3 className="inter-semibold mt-7 text-[1.65rem] leading-tight text-[#07115a]">{title}</h3>
                                <p className="mt-4 text-[1rem] leading-[1.75] text-[#5a667c]">{description}</p>
                                <div className="mt-6 space-y-3">
                                    {points.map((point) => (
                                        <div key={point} className="flex gap-3 text-[0.96rem] font-medium text-[#4e5a73]">
                                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eef5ff] text-[#1a5ee5]">
                                                <FiCheck className="h-3.5 w-3.5" />
                                            </span>
                                            {point}
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href={href}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noreferrer" : undefined}
                                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1a5ee5] px-6 py-3 text-[0.95rem] font-semibold text-white shadow-[0_16px_36px_rgba(26,94,229,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#154fca]"
                                >
                                    {cta}
                                    <FiArrowRight />
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f7fbff] px-6 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="relative overflow-hidden rounded-[30px] bg-[#1a5ee5] px-7 py-10 text-white shadow-[0_28px_70px_rgba(26,94,229,0.24)] sm:px-10 lg:px-14 lg:py-14">
                        <div className="absolute right-[-80px] top-[-120px] h-[300px] w-[300px] rounded-full bg-white/14 blur-2xl" />
                        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="inter-medium text-[0.95rem] text-white/75">Even kennismaken</p>
                                <h2 className="inter-semibold mt-3 max-w-2xl text-[2rem] leading-[1.12] sm:text-[3rem]">
                                    Benieuwd of Sendwise bij je past?
                                </h2>
                                <p className="mt-4 max-w-2xl text-[1.05rem] leading-[1.7] text-white/80">
                                    Stuur ons een kort bericht. Dan kijken we samen welke rol of stage het beste aansluit.
                                </p>
                            </div>
                            <a
                                href="mailto:info@sendwise.nl?subject=Werken%20bij%20Sendwise"
                                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-[0.98rem] font-semibold text-[#1a5ee5] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f4f8ff]"
                            >
                                Neem contact op
                                <FiMessageCircle />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Homepage2Footer />
        </main>
    );
};

export default WerkenBij;
