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
            <Flex
                ref={containerRef}
                id="wrappers"
                className=" flex-col  w-[100%] "
            >
                <Flex className="flex-col lg:w-[48.3%] w-[90%] mx-auto space-y-4 ">
                    <p className="lg:leading-[4.1rem] leading-[3rem]">
                        <span className="highlight-span inter-semibold lg:text-[5rem] sm:text-[3.5rem] text-[2.5rem] text-[#E7E7E7]">
                            Home to every customer.
                        </span>
                        <span className="highlight-span inter-semibold lg:text-[5rem] sm:text-[3.5rem] text-[2.5rem] text-[#E7E7E7] pl-4">
                            And opportunity.
                        </span>
                        <span className="highlight-span inter-semibold lg:text-[5rem] sm:text-[3.5rem] text-[2.5rem] text-[#E7E7E7] pl-4">
                            And conversation.
                        </span>
                        <span className="highlight-span inter-semibold lg:text-[5rem] sm:text-[3.5rem] text-[2.5rem] text-[#E7E7E7] pl-4">
                            And ticket.
                        </span>
                        <span className="highlight-span inter-semibold lg:text-[5rem] sm:text-[3.5rem] text-[2.5rem] text-[#E7E7E7] pl-4">
                            And click.
                        </span>
                        <p />
                        <span className="highlight-span inter-semibold lg:text-[5rem] sm:text-[3.5rem] text-[2.5rem] text-[#E7E7E7] ">
                            And action.
                        </span>
                    </p>
                </Flex>
                <Flex className="lg:w-[48.3%] w-[95%] mx-auto ">
                    <p className=" highlight-fade mt-10  inter-medium text-[#7B7B79] text-[1.2rem] lg:w-[88%]">
                        In Planhat, data is architected for action. Unify and transform data
                        across your entire tech stack to act on customers as you analyze them.
                    </p>
                </Flex>
            </Flex>
            <Flex className="w-[100%] space-y-6 lg:pt-0 sm:pt-[12rem] pt-0 mx-auto flex-col  pt-10">
                <Flex className="lg:w-[80%] w-[95%] h-[31rem] mx-auto group relative">
                    <div className="absolute z-10 bg-gradient-to-b from-transparent to-[#030302]/80 w-[100%] h-[31rem] rounded-2xl" />
                    <img src="/work.avif" alt="work" className=" object-cover w-[100%] rounded-2xl" />
                    <Flex className="absolute z-20 lg:top-20 top-6 lg:left-20 left-4">
                        <Flex className="text-white lg:items-center items-start flex-col space-y-6 ">
                            <p className="inter-semibold lg:text-[5.5rem] text-[2rem] lg:leading-[5rem] lg:w-[100%] w-[80%] lg:text-center ">A unified ecosystem for customer action</p>
                            <p className="lg:text-center lg:w-[67%] mx-auto px-2 inter-medium lg:text-[1.4rem] text-[1.2rem]">Planhat is a customer platform that doubles as both your single source of truth and an everyday customer-centric control centre for your sales, service and success teams.</p>
                            <Flex className="group-hover:backdrop-blur-md group-hover:bg-white/10 group-hover:border-transparent text-white inter-medium border border-white/30 w-[11.7rem] items-center space-x-4 cursor-pointer text-[0.9rem] hover:bg-white pl-4 py-1 rounded-3xl">
                                <p>Request a demo</p>
                                <Flex className="group-hover:bg-[#D44A00] rounded-full p-2 text-[1.5rem]">
                                    <GoArrowUpRight />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="lg:flex-row flex-col h-fit lg:w-[80%] w-[95%] lg:space-x-6 space-x-0 lg:space-y-0 space-y-6 mx-auto">
                    <Flex className="lg:w-[50%] lg:h-[45rem]  h-[24rem] group relative">
                        <img src="/service.jpg" alt="work" className=" object-cover w-[100%] rounded-2xl" />
                        <Flex className="absolute z-20 top-5 left-10">
                            <Flex className="text-white justify-between items-between lg:h-[42rem] items-start flex-col space-y-12  ">
                                <Flex className="flex-col space-y-2">
                                    <p className="inter-semibold text-[2rem] ">Enterprise-grade flexibility</p>
                                    <p className=" w-[85%] inter-medium leading-[1.7rem] text-[1.2rem]">Data warehousing, ETL, automation and reporting put your customer at the new centre of gravity.</p>
                                </Flex>
                                <Flex className=" group-hover:backdrop-blur-md group-hover:bg-white/10 group-hover:border-transparent text-white inter-medium border border-white/30 w-[8.7rem] items-center space-x-4 cursor-pointer text-[0.9rem] hover:bg-white pl-4 py-1 rounded-3xl">
                                    <p>Discover</p>
                                    <Flex className="group-hover:bg-[#D44A00] rounded-full p-2 text-[1.5rem]">
                                        <GoArrowUpRight />
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex className="lg:w-[50%] lg:h-[45rem] h-[24rem] group relative">
                        <img src="/pc.avif" alt="work" className=" object-cover  rounded-2xl" />
                        <Flex className="absolute z-20 top-5 left-10">
                            <Flex className="text-white  justify-between items-between lg:h-[42rem] flex-col space-y-12  ">
                                <Flex className="flex-col space-y-2">
                                    <p className="inter-semibold text-[2rem] ">Consumer-ready usability</p>
                                    <p className=" w-[85%] inter-medium leading-[1.7rem] text-[1.2rem]">An action-first interface, shortcuts and complete-sentence formulas bring Scandi simplicity to CRM.</p>
                                </Flex>
                                <Flex className=" group-hover:backdrop-blur-md group-hover:bg-white/10 group-hover:border-transparent text-white inter-medium border border-white/30 w-[12rem] items-center space-x-4 cursor-pointer text-[0.9rem] hover:bg-white pl-4 py-1 rounded-3xl">
                                    <p>Request a demo</p>
                                    <Flex className="group-hover:bg-[#D44A00] rounded-full p-2 text-[1.5rem]">
                                        <GoArrowUpRight />
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="lg:w-[80%] w-[95%] lg:h-[40rem] h-[25rem] mx-auto group relative">
                    <img src="/tab.avif" alt="work" className=" object-cover w-[100%] rounded-2xl" />
                    <Flex className="absolute z-20 justify-between flex-col items-center  lg:h-[38rem] top-0 lg:left-20 left-6">
                        <Flex className="text-white lg:items-center flex-col space-y-1 ">
                            <p className="inter-semibold text-[2rem] leading-[5rem] lg:text-center ">Data explorer</p>
                            <p className="lg:text-center lg:w-[67%] mx-auto inter-medium lg:text-[1.4rem] text-[1.2rem]">Access your data like never before. Anyone can transform a no-code query into customer action in a matter of clicks.</p>
                        </Flex>
                        <Flex className=" group-hover:backdrop-blur-md lg:mt-0 mt-6 group-hover:bg-white/10 group-hover:border-transparent text-white inter-medium border border-white/30 w-[12rem] items-center space-x-4 cursor-pointer text-[0.9rem] hover:bg-white pl-4 py-1 rounded-3xl">
                            <p>Request a demo</p>
                            <Flex className="group-hover:bg-[#D44A00] rounded-full p-2 text-[1.5rem]">
                                <GoArrowUpRight />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    );
};

export default Services;
