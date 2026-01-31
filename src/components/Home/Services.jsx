import { Flex } from "antd";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const spans = gsap.utils.toArray(".highlight-span");
        spans.forEach((span, i) => {
            gsap.fromTo(
                span,
                { color: "#E7E7E7" },
                {
                    color: "#000",
                    scrollTrigger: {
                        trigger: "#wrappers",
                        start: `top+=${i * 60} center`,
                        end: `top center`,
                        scrub: true,
                        pin: "#wrappers",
                        pinSpacing: true,
                        onEnter: () => {
                            gsap.to(span, { color: "#000", duration: 0.3 });
                            if (i > 0) {
                                gsap.to(spans[i - 1], { color: "#E7E7E7", duration: 0.3 });
                            }
                        },
                        onEnterBack: () => {
                            gsap.to(span, { color: "#000", duration: 0.3 });
                            if (i < spans.length - 1) {
                                gsap.to(spans[i + 1], { color: "#E7E7E7", duration: 0.3 });
                            }
                        },
                    },
                }
            );
        });

        gsap.fromTo(
            ".highlight-fade",
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `top center`,
                    end: "top center",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <Flex className="flex-col spacey-5 w-[100%]">
            {/* Home to every customer section removed */}
            <Flex className="w-[100%] space-y-6 lg:pt-0 sm:pt-[12rem] pt-0 mx-auto flex-col  pt-10">
                <Flex className="lg:w-[80%] w-[95%] h-[20rem] sm:h-[31rem] mx-auto group relative">
                    <div className="absolute z-10 bg-gradient-to-b from-transparent to-[#030302]/80 w-[100%] h-full rounded-2xl" />
                    <img src="/sendwise-2.png" alt="Sendwise" className=" object-cover w-[100%] h-full rounded-2xl" />
                    <Flex className="absolute z-20 lg:top-20 top-6 lg:left-20 left-4">
                        <Flex className="text-white items-start flex-col space-y-6 ">
                            <p className="inter-semibold lg:text-[4rem] sm:text-[2.6rem] text-[1.8rem] lg:leading-[4.2rem] lg:w-[100%] w-[90%] text-left">
                                Start met besparen<br />op je verzending
                            </p>
                            <p className="text-left lg:w-[90%] px-0 inter-medium lg:text-[1.15rem] text-[1.05rem]">Lagere tarieven, minder complexiteit, volledige controle.</p>
                            <Flex className="group relative overflow-hidden border border-white text-white hover:bg-white/10 inter-medium text-[0.95rem] cursor-pointer px-5 py-2 rounded-3xl transition-all duration-300 ease-in-out items-center space-x-3">
                                <span className="relative z-10">Start met Sendwise</span>
                                <Flex className="relative z-10 rounded-full p-2 transition-all duration-300 ease-in-out group-hover:bg-[#D44A00] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1">
                                    <GoArrowUpRight />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                {/* Enterprise-grade flexibility + Consumer-ready usability sections removed */}
                {/* Data explorer section removed */}
            </Flex>
        </Flex >
    );
};

export default Services;
