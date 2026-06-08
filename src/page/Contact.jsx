import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiClock, FiMessageCircle } from "react-icons/fi";
import Homepage2Header from "../components/Homepage2/Header";
import Homepage2Footer from "../components/Homepage2/Footer";
import ContactCards from "../components/Homepage2/ContactCards";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#0d1321]">
            <Homepage2Header />

            <section className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-44">
                <div className="absolute left-0 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#eaf2ff] blur-3xl sm:h-[520px] sm:w-[520px]" />
                <div className="mx-auto grid w-full max-w-7xl items-center gap-9 px-4 pb-12 sm:px-6 sm:pb-16 lg:min-h-[650px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:pb-24">
                    <div className="relative z-10 max-w-[680px] lg:pb-10">
                        <div className="mb-5 flex items-center gap-3 text-[#6f7694]">
                            <div className="flex -space-x-2">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-[#1a5ee5] text-white shadow-[0_10px_24px_rgba(26,94,229,0.25)]">
                                    <FiMessageCircle />
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white text-[#1a5ee5] shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
                                    <FiClock />
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-[#f2f7ff] text-[#1a5ee5] shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                                    <FiCheckCircle />
                                </span>
                            </div>
                            <p className="inter-medium text-[0.95rem]">Binnen een werkdag reactie van ons team</p>
                        </div>
                        <h1 className="inter-semibold text-[2.7rem] leading-[1.02] tracking-[0px] text-[#0d1321] sm:text-[4.5rem] sm:leading-[0.98] lg:text-[5.35rem]">
                            <span className="block sm:whitespace-nowrap">Neem contact op.</span>
                            <span className="block sm:whitespace-nowrap text-[#1a5ee5]">We denken mee.</span>
                        </h1>
                        <p className="mt-5 max-w-[560px] text-base leading-7 text-[#4e5a73] sm:mt-7 sm:text-[1.2rem] sm:leading-[1.75]">
                            Stel je vraag over verzendtarieven, integraties of je fulfilmentproces. We kijken praktisch mee en helpen je snel de juiste volgende stap te kiezen.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <a
                                href="mailto:info@sendwise.nl"
                                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1a5ee5] px-7 py-3.5 text-[0.98rem] font-semibold text-white shadow-[0_18px_42px_rgba(26,94,229,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#154fca] sm:w-fit"
                            >
                                Mail Sendwise
                                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                            <a
                                href="tel:+31619156123"
                                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#d8e3f2] bg-white px-7 py-3.5 text-[0.98rem] font-semibold text-[#0d1321] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1a5ee5]/30 hover:text-[#1a5ee5] sm:w-fit"
                            >
                                Bel direct
                            </a>
                        </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-center lg:min-h-[520px] lg:justify-end">
                        <div className="absolute right-2 top-10 hidden h-24 w-24 rounded-[28px] bg-[#1a5ee5]/10 lg:block" />
                        <div className="relative w-full max-w-[560px] overflow-hidden rounded-[24px] border border-[#dbe7f5] bg-[#f4f8ff] shadow-[0_24px_65px_rgba(15,23,42,0.12)] sm:rounded-[34px] lg:shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
                            <img
                                src="/contact-hero-olivier.avif"
                                alt="Sendwise teamlid helpt met contactvraag"
                                fetchPriority="high"
                                loading="eager"
                                decoding="async"
                                className="aspect-[1.02/1] w-full scale-[1.08] object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f7fbff] px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
                <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
                    <div className="rounded-[24px] border border-[#dfeaf7] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                        <p className="inter-semibold text-[1.1rem] text-[#0d1321]">Advies over tarieven</p>
                        <p className="mt-3 text-[0.98rem] leading-[1.7] text-[#5a667c]">
                            We kijken mee naar je volume, landenmix en huidige verzendkosten.
                        </p>
                    </div>
                    <div className="rounded-[24px] border border-[#dfeaf7] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                        <p className="inter-semibold text-[1.1rem] text-[#0d1321]">Hulp bij integraties</p>
                        <p className="mt-3 text-[0.98rem] leading-[1.7] text-[#5a667c]">
                            Koppel je webshop, WMS of fulfilmentproces zonder onnodige complexiteit.
                        </p>
                    </div>
                    <div className="rounded-[24px] border border-[#dfeaf7] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                        <p className="inter-semibold text-[1.1rem] text-[#0d1321]">Snelle support</p>
                        <p className="mt-3 text-[0.98rem] leading-[1.7] text-[#5a667c]">
                            Direct schakelen met mensen die je verzendproces begrijpen.
                        </p>
                    </div>
                </div>
            </section>

            <ContactCards className="pt-16 lg:pt-20" />

            <section className="bg-[#f7fbff] px-4 py-14 sm:px-6 sm:py-16 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="relative overflow-hidden rounded-[24px] bg-[#1a5ee5] px-5 py-7 text-white shadow-[0_28px_70px_rgba(26,94,229,0.24)] sm:rounded-[30px] sm:px-10 sm:py-10 lg:px-14 lg:py-14">
                        <div className="absolute right-[-80px] top-[-120px] h-[300px] w-[300px] rounded-full bg-white/14 blur-2xl" />
                        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="inter-medium text-[0.95rem] text-white/75">Direct starten</p>
                                <h2 className="inter-semibold mt-3 max-w-2xl text-[2rem] leading-[1.12] sm:text-[3rem]">
                                    Liever meteen een account aanmaken?
                                </h2>
                                <p className="mt-4 max-w-2xl text-[1.05rem] leading-[1.7] text-white/80">
                                    Start gratis en ontdek hoe Sendwise past bij je volumes, verzendmix en dagelijkse workflow.
                                </p>
                            </div>
                            <Link
                                to="/start-met-sendwise"
                                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-[0.98rem] font-semibold text-[#1a5ee5] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f4f8ff]"
                            >
                                Start met Sendwise
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

export default Contact;
