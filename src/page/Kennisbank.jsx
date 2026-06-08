import { useEffect, useState } from "react";
import { FiArrowRight, FiBookOpen, FiSearch } from "react-icons/fi";
import Homepage2Header from "../components/Homepage2/Header";
import Homepage2Footer from "../components/Homepage2/Footer";

const suggestedTopics = ["Verzendtarieven", "Integraties", "Labels printen", "Retouren", "Tracking"];

const Kennisbank = () => {
    const [query, setQuery] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#0d1321]">
            <Homepage2Header />

            <section className="relative overflow-hidden bg-white px-6 pt-32 sm:pt-36 lg:pt-44">
                <div className="absolute left-0 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#eaf2ff] blur-3xl" />
                <div className="relative z-10 mx-auto flex min-h-[620px] max-w-5xl flex-col items-center justify-center pb-20 text-center lg:pb-24">
                    <div className="mb-5 flex items-center gap-3 text-[#6f7694]">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a5ee5] text-white shadow-[0_10px_24px_rgba(26,94,229,0.25)]">
                            <FiBookOpen />
                        </span>
                        <p className="inter-medium text-[0.95rem]">Kennisbank</p>
                    </div>

                    <h1 className="inter-semibold text-[3.2rem] leading-[0.98] tracking-[0px] text-[#0d1321] sm:text-[4.5rem] lg:text-[5.35rem]">
                        <span className="block">Soon.</span>
                    </h1>
                    <p className="mt-7 max-w-2xl text-[1.08rem] leading-[1.75] text-[#4e5a73] sm:text-[1.2rem]">
                        We bouwen aan een kennisbank met praktische artikelen over verzenden, integraties, tarieven en fulfilment workflows.
                    </p>

                    <div className="mt-10 w-full max-w-3xl rounded-[28px] border border-[#dfeaf7] bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="relative flex-1">
                                <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8b96aa]" />
                                <input
                                    type="search"
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                    placeholder="Zoek straks naar artikelen..."
                                    className="h-14 w-full rounded-2xl border border-transparent bg-[#f7fbff] px-5 pl-12 text-[1rem] font-medium text-[#0d1321] outline-none transition-all duration-300 placeholder:text-[#8b96aa] focus:border-[#1a5ee5]/30 focus:bg-white focus:ring-4 focus:ring-[#1a5ee5]/10"
                                />
                            </div>
                            <button
                                type="button"
                                className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#1a5ee5] px-6 text-[0.98rem] font-semibold text-white shadow-[0_16px_36px_rgba(26,94,229,0.20)] transition-all duration-300 hover:bg-[#154fca]"
                            >
                                Zoeken
                                <FiArrowRight />
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                        {suggestedTopics.map((topic) => (
                            <button
                                key={topic}
                                type="button"
                                onClick={() => setQuery(topic)}
                                className="rounded-full border border-[#d8e3f2] bg-white px-4 py-2 text-[0.9rem] font-semibold text-[#5a667c] transition-colors duration-300 hover:border-[#bfd4f8] hover:text-[#1a5ee5]"
                            >
                                {topic}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <Homepage2Footer />
        </main>
    );
};

export default Kennisbank;
