"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flex, Image } from "antd";
import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
    const images = ["/dash1.jpg", "/success.jpg", "/services.jpg", "/sales.jpg"];
    useGSAP(() => {
        // Initial states
        gsap.set("#journey-text", { opacity: 0, x: -50, position: "absolute" });

        const sections = gsap.utils.toArray(".text-section");
        const images = ["/dash1.jpg", "/success.jpg", "/services.jpg", "/sales.jpg"];
        const totalScroll = sections.length * 100;
        const clipImg = document.querySelector("#clip img");
        const lastSection = sections[sections.length - 1];

        // select the inner fill elements and init them hidden (scaleY = 0)
        const fills = sections.map((s) => s.querySelector(".vertical-fill"));
        fills.forEach((f) => {
            if (f) gsap.set(f, { scaleY: 0, transformOrigin: "top", opacity: 0 });
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#journey-wrapper",
                start: "top top",
                endTrigger: lastSection,
                end: "bottom+=900% bottom",
                scrub: 1,
                pin: "#journey-wrapper",
                pinSpacing: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const index = Math.floor(progress * sections.length);
                    if (clipImg && images[index]) {
                        clipImg.src = images[index];
                    }
                },
            },
        });

        // Move image aside + fade in text
        tl.to("#clip", { x: 460, duration: 1, ease: "power2.out" });
        tl.to("#journey-text", { opacity: 1, x: 0, duration: 1 }, "<");

        // Reveal sections & swap images
        sections.forEach((section, i) => {
            const fill = fills[i];
            const textContent = section.querySelector(".text-content") || section;
            const hiddenText = section.querySelector(".text-hidden");

            if (hiddenText) gsap.set(hiddenText, { opacity: 0 });

            tl.fromTo(
                textContent,
                { opacity: 0.5, x: 0, color: "#9E9D9B" },
                { opacity: 1, x: 0, duration: 1, color: "#000000", ease: "power2.out" },
                `+=0.5`
            );

            if (fill) {
                tl.to(fill, {
                    scaleY: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "none"
                });

                // fade hidden text in while fill is animating
                if (hiddenText) {
                    tl.to(hiddenText, {
                        opacity: 1,
                        duration: 0.7,
                        ease: "power2.out"
                    }, "<"); // sync with fill start

                    // fade hidden text out right after
                    tl.to(hiddenText, {
                        opacity: 0,
                        duration: 0.7,
                        ease: "power1.in"
                    }, ">"); // when fill ends
                }

                // hide the fill itself
                tl.to(fill, { opacity: 0, duration: 0.18, ease: "power1.out" });
            }
        });
    });

    return (
        <Flex className="flex flex-col items-center space-y-2 pt-20">
            {/* Heading */}
            <Flex className="flex-col inter-semibold md:text-[5rem] sm:text-[4rem] text-[1.7rem] text-center sm:leading-[5.5rem]">
                <p className="">One customer platform.</p>
                <p className="text-[#9E9D9B]">Everyone's business.</p>
            </Flex>

            {/* Wrapper */}
            <Flex
                id="journey-wrapper"
                className="hidden sm:flex w-full flex flex-row justify-between items-start pt-24"
            >
                {/* Text */}
                <Flex
                    id="journey-text"
                    className="flex-col lg:w-[36rem] md:w-[33rem] w-[27rem] space-y-12 xl:pl-[10rem] lg:pl-[6rem] pl-[4rem] font-semibold text-gray-900"
                >
                    <p className="lg:w-[100%] w-[90%] inter-bold md:text-[3rem] text-[2.4rem] leading-[3.4rem] pl-5">
                        Unify your customer journey.
                    </p>
                    <Flex className="flex-col items-start space-y-7 ">
                        <Flex className="text-section items-center space-x-5">
                            <div className="vertical-line-wrapper h-[5.9rem] w-[4px] rounded-md  overflow-hidden relative">
                                <div className="vertical-fill absolute inset-0 bg-[#ED7E00] transform origin-top" />
                            </div>
                            <Flex className="text-content flex-col space-y-2">
                                <p className="inter-semibold text-[1.2rem]">Success</p>
                                <p className="inter-medium ">
                                    Drive successful outcomes. Grow revenue.
                                </p>
                                <Flex className="text-hidden text-[#D44A00] items-center space-x-1">
                                    <p className="inter-medium text-appear">Customer Success Software</p>
                                    <GoArrowUpRight />
                                </Flex>
                            </Flex>
                        </Flex>
                        {/* bg-[#9E9D9B]/20 */}
                        <Flex className="text-section items-center space-x-5">
                            <div className="vertical-line-wrapper h-[5.9rem] w-[4px] rounded-md  overflow-hidden relative">
                                <div className="vertical-fill absolute inset-0 bg-[#ED7E00] transform origin-top" />
                            </div>
                            <Flex className="text-content flex-col space-y-2">
                                <p className="inter-semibold text-[1.2rem]">Service</p>
                                <p className="inter-medium ">
                                    World-class service. Convert clients into promoters.
                                </p>
                                <Flex className="text-hidden text-[#D44A00] items-center space-x-1">
                                    <p className="inter-medium text-appear">Service Delivery Software</p>
                                    <GoArrowUpRight />
                                </Flex>
                            </Flex>
                        </Flex>

                        <Flex className="text-section items-center space-x-5">
                            <div className="vertical-line-wrapper h-[5.9rem] w-[4px] rounded-md overflow-hidden relative">
                                <div className="vertical-fill absolute inset-0 bg-[#ED7E00] transform origin-top" />
                            </div>
                            <Flex className="text-content flex-col space-y-2">
                                <p className="inter-semibold text-[1.2rem]">Sales</p>
                                <p className="inter-medium ">
                                    Streamline your sales process. Sell lasting deals.
                                </p>
                                <Flex className="text-hidden text-[#D44A00] items-center space-x-1">
                                    <p className="inter-medium text-appear">Sales CRM Software</p>
                                    <GoArrowUpRight />
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex className="ml-6 bg-[#D44A00] hover:bg-[#EB5200] inter-medium text-[0.9rem] cursor-pointer text-white px-4 py-2 rounded-3xl">
                            <p>Book a demo</p>
                        </Flex>
                    </Flex>
                </Flex>

                {/* Image */}
                <Flex
                    id="clip"
                    className="p-12 rounded-2xl md:w-[80%] w-[95%] mx-auto h-[100%] cursor-pointer bg-gradient-to-b from-[#B0B5B4] via-[#D0CAB8] to-[#B19F92]"
                >
                    <Image
                        preview={{ toolbarRender: () => null, mask: null }}
                        src="/dash1.jpg"
                        className="rounded-xl "
                        alt="dashboard"
                    />
                </Flex>
            </Flex>
            <Flex className="sm:hidden flex w-[100%] pt-6 flex-col items-center">
                <Swiper
                    breakpoints={{
                        0: { slidesPerView: 1.2 },
                        380: { slidesPerView: 1.3 },
                        460: { slidesPerView: 1.3 },
                        640: { slidesPerView: 1 },
                    }}
                    spaceBetween={10}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    cardsEffect={{
                        slideShadows: false,
                        perSlideRotate: 0
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}
                    className="w-full relative rounded-2xl  overflow-visible"
                >
                    {images?.map((item, index) => (
                        <SwiperSlide key={index} className="bg-gradient-to-b from-[#B0B5B4] via-[#D0CAB8] to-[#B19F92] w-[100%] shadow rounded-2xl">
                            <Flex className=" items-start w-[100%]  flex-col space-y-6 p-4">
                                <Image
                                    preview={{ toolbarRender: () => null, mask: null }}
                                    src={item}
                                    className="rounded-xl w-[10rem]"
                                    alt="dashboard"
                                />
                            </Flex>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Flex
                    className="flex-col w-[93%] mx-auto justify-center space-y-6 pt-6  font-semibold text-gray-900"
                >
                    <p className="w-[100%]  inter-bold  text-center text-[1.5rem] ">
                        Unify your customer journey.
                    </p>
                    <Flex className=" bg-[#D44A00] hover:bg-[#EB5200] mx-auto inter-medium text-[0.9rem] cursor-pointer text-white px-4 py-2 rounded-3xl">
                        <p>Book a demo</p>
                    </Flex>
                    <Flex className="flex-col items-start space-y-7 ">
                        <Flex className=" items-center space-x-5">
                            <div className=" h-[5.9rem] w-[4px] rounded-md  overflow-hidden relative">
                                <div className=" absolute inset-0 bg-[#ED7E00] transform origin-top" />
                            </div>
                            <Flex className="text-content flex-col space-y-2">
                                <p className="inter-semibold text-[1.2rem]">Success</p>
                                <p className="inter-medium ">
                                    Drive successful outcomes. Grow revenue.
                                </p>
                                <Flex className="text-hidden text-[#D44A00] items-center space-x-1">
                                    <p className="inter-medium text-appear">Customer Success Software</p>
                                    <GoArrowUpRight />
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex className=" items-center space-x-5">
                            <div className=" h-[5.9rem] w-[4px] rounded-md  overflow-hidden relative">
                                <div className=" absolute inset-0 bg-[#ED7E00] transform origin-top" />
                            </div>
                            <Flex className=" flex-col space-y-2">
                                <p className="inter-semibold text-[1.2rem]">Service</p>
                                <p className="inter-medium ">
                                    World-class service. Convert clients into promoters.
                                </p>
                                <Flex className="text-hidden text-[#D44A00] items-center space-x-1">
                                    <p className="inter-medium text-appear">Service Delivery Software</p>
                                    <GoArrowUpRight />
                                </Flex>
                            </Flex>
                        </Flex>

                        <Flex className=" items-center space-x-5">
                            <div className=" h-[5.9rem] w-[4px] rounded-md overflow-hidden relative">
                                <div className=" absolute inset-0 bg-[#ED7E00] transform origin-top" />
                            </div>
                            <Flex className="text-content flex-col space-y-2">
                                <p className="inter-semibold text-[1.2rem]">Sales</p>
                                <p className="inter-medium ">
                                    Streamline your sales process. Sell lasting deals.
                                </p>
                                <Flex className="text-hidden text-[#D44A00] items-center space-x-1">
                                    <p className="inter-medium text-appear">Sales CRM Software</p>
                                    <GoArrowUpRight />
                                </Flex>
                            </Flex>
                        </Flex>

                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
