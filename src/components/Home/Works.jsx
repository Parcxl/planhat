import { Flex } from "antd";
import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useRef } from "react";

const Works = () => {
    const data = [
        { detail: '“High touch CSMs have been able to more efficiently manage their day, unlocking substantial cost savings.”', name: 'Pam Dickson Fishman', title: 'VP Customer Success, Basis Technologies', route: '' },
        { detail: '“Over the past 11 months, Planhat has enabled us to improve the average health of our customer base by +43%.”', name: 'Mychael Mulhern', title: 'Director of Customer Success, May Mobility', route: '' },
        { detail: '“Proactive customer management in Planhat has transformed our teams operating performance.”', name: 'Alexey Smolyanyy', title: 'Director of Customer Success Strategy and Operations, Redis', route: '' },
        { detail: '“Just during our first month of using the platform we saved more than 100 hours.”', name: 'Lasse Thomsen', title: 'Head of Commercial Operations, Trustpilot', route: '' },
        { detail: '“Planhat removed the need for an additional full-time CSM monitoring operations.”', name: 'Emil Chroona', title: 'Chief Growth Officer, Bannerflow', route: '' },
    ]
    const progressRefs = useRef([]);
    progressRefs.current = [];
    const onAutoplayTimeLeft = (swiper, time, progress) => {
        const activeIndex = swiper.realIndex;

        progressRefs.current.forEach((bar, index) => {
            if (!bar) return;

            if (index < activeIndex) {
                // Already completed
                bar.style.width = "100%";
            } else if (index === activeIndex) {
                // Animate current slide fill
                const totalTime = swiper.params.autoplay.delay;
                bar.style.transition = `width ${totalTime / 1000}s linear`;
                bar.style.width = "100%";
            } else {
                // Not yet reached
                bar.style.transition = "none";
                bar.style.width = "0%";
            }
        });
    };

    return (
        <Flex className=" w-[100%] space-y-6 mb-32 mx-auto flex-col lg:pt-10 md:pt-32 sm:pt-40 pt-32">
            {/* Duplicated carts side by side */}
            <Flex className="lg:flex-row flex-col lg:space-x-6 lg:space-y-0 space-y-6 lg:w-[80%] w-[95%] mx-auto">
                <Flex className="lg:w-[50%] w-[100%] lg:h-[24rem] sm:h-[16rem] h-[14rem] group relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl" />
                    <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay' }} />
                    <Flex className="relative z-20 w-full h-full p-8 lg:pl-12 sm:pl-8 pl-6">
                        <Flex className="text-white w-[100%] items-start flex-col space-y-6 justify-center h-full">
                            <p className="inter-semibold lg:text-[2rem] sm:text-[1.8rem] text-[1.5rem] text-left">Voor webshops</p>
                            <p className="text-left md:w-[90%] w-[100%] inter-medium lg:text-[1.2rem] text-[1rem]">Schaal je verzending met vaste tarieven, multi-carrier shipping en branded tracking — zonder contracten of complexiteit.</p>
                            <Flex className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 w-[15rem] items-center space-x-4 cursor-pointer text-[0.9rem] hover:bg-white pl-4 py-1 rounded-3xl">
                                <p className="whitespace-nowrap">Start met Sendwise</p>
                                <Flex className="group-hover:bg-[#D44A00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-full p-2 text-[1.5rem]">
                                    <GoArrowUpRight />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="lg:w-[50%] w-[100%] lg:h-[24rem] sm:h-[16rem] h-[14rem] group relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] rounded-2xl" />
                    <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay' }} />
                    <Flex className="relative z-20 w-full h-full p-8 lg:pl-12 sm:pl-8 pl-6">
                        <Flex className="text-white w-[100%] items-start flex-col space-y-6 justify-center h-full">
                            <p className="inter-semibold lg:text-[2rem] sm:text-[1.8rem] text-[1.5rem] text-left">Voor fulfilmentcenters</p>
                            <p className="text-left md:w-[90%] w-[100%] inter-medium lg:text-[1.2rem] text-[1rem]">Verzend goedkoper op schaal met tientallen carriers via één pickup — zonder contracten, zonder complexiteit.</p>
                            <Flex className="group transition-all duration-300 ease-in-out hover:backdrop-blur-md hover:bg-white/10 hover:border-transparent text-white inter-medium border border-white/30 w-[15rem] items-center space-x-4 cursor-pointer text-[0.9rem] hover:bg-white pl-4 py-1 rounded-3xl">
                                <p className="whitespace-nowrap">Start met Sendwise</p>
                                <Flex className="group-hover:bg-[#D44A00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-full p-2 text-[1.5rem]">
                                    <GoArrowUpRight />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            
            {/* Wat Sendwise oplost section */}
            <Flex className="lg:flex-row flex-col lg:space-x-12 lg:space-y-0 space-y-8 lg:w-[80%] w-[95%] mx-auto lg:pt-16 md:pt-12 sm:pt-10 pt-8">
                {/* Left column - Text */}
                <Flex className="lg:w-[55%] w-[100%] flex-col space-y-6">
                    <h2 className="inter-semibold lg:text-[3.5rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] lg:leading-[4rem] md:leading-[3.5rem] sm:leading-[3rem] leading-[2.5rem] text-gray-900">
                        Wat Sendwise <span className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] bg-clip-text text-transparent">oplost</span>
                    </h2>
                    
                    <div className="flex flex-col space-y-6 inter-medium lg:text-[1.2rem] md:text-[1.1rem] text-[1rem] leading-[1.8rem] text-gray-700">
                        <p>
                            Verzenden is voor veel webshops en fulfilmentcenters onnodig duur en complex. Je zit vast aan <em>contracten</em>, <em>abonnementen</em>, hoge indexeringen en beperkte flexibiliteit, terwijl grip op kosten en het verzendproces ontbreekt.
                        </p>
                        
                        <p>
                            <strong>Sendwise doorbreekt dat model met één verzendplatform en één vaste verzendmethode: CONNECT.</strong> We brengen tientallen vervoerders samen onder één pickup en één platform, terwijl op de achtergrond altijd de beste optie wordt gebruikt.
                        </p>
                        
                        <p>
                            Daardoor kunnen we structureel lage verzendtarieven aanbieden, zonder <em>abonnementskosten</em>, <em>contracten</em> of <em>labelbijdrages</em>, en met eerlijke indexeringen. Tegelijk zorgt Sendwise voor minder fouten, <em>realtime</em> inzicht in zendingen en volledige controle over branding en verzendcommunicatie.
                        </p>
                    </div>
                </Flex>
                
                {/* Right column - Image */}
                <Flex className="lg:w-[45%] w-[100%] items-center justify-center">
                    <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 relative">
                        <img 
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop" 
                            alt="Logistics and shipping" 
                            className="w-full h-full object-cover rounded-2xl"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div className="hidden absolute inset-0 bg-gradient-to-br from-[#1a5ee5]/20 to-[#3b82f6]/20 rounded-2xl items-center justify-center">
                            <div className="text-center p-8">
                                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#1a5ee5] to-[#3b82f6] rounded-2xl opacity-20"></div>
                                <p className="inter-medium text-gray-600">Logistics & Shipping</p>
                            </div>
                        </div>
                    </div>
                </Flex>
            </Flex>
            
            {/* Original cart */}
            <Flex className="lg:w-[80%] w-[95%] lg:h-[31rem] sm:h-[20rem] h-[17rem] mx-auto group relative">
                <div className="lg:hidden absolute z-10 lg:bg-gradient-to-b sm:bg-gradient-to-l bg-gradient-to-b from-transparent to-[#030302]/80 w-[100%] sm:h-[20rem] h-[17rem] rounded-2xl" />
                <img src="/banner3.png" alt="work" className=" object-  rounded-2xl" />
                <Flex className="absolute z-20 top-0 w-[90%] lg:left-20">
                    <Flex className="text-white w-[100%] justify-center pt-9 lg:pl-0 sm:pl-7 pl-0 lg:items-center sm:items-start items-center flex-col  ">
                        <p className="inter-semibold lg:text-[2rem] sm:text-[1.8rem] text-[1.5rem]  lg:text-center sm:text-start text-center">The Commercial AI Era</p>
                        <p className="lg:text-center sm:text-start text-center md:w-[67%] lg:mx-auto md:mx-0 mx-auto inter-medium lg:pt-0  pt-5 lg:pl-0 pl-2  lg:text-[1.2rem]">Discover Planhat's flexible, intergrated and commercially rooted AI platform.</p>
                        <Flex className="group-hover:backdrop-blur-md group-hover:bg-white/10 group-hover:border-transparent text-white inter-medium border border-white/30 w-[10.6rem] items-center space-x-4 cursor-pointer text-[0.9rem] hover:bg-white mt-10 pl-4 py-1 rounded-3xl">
                            <p>Discover AIP</p>
                            <Flex className="group-hover:bg-[#D44A00] rounded-full p-2 text-[1.5rem]">
                                <GoArrowUpRight />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex className="lg:flex-row flex-col lg:space-y-0 space-y-4 h-fit lg:w-[80%] w-[95%] mx-auto">
                <Flex className="lg:w-[50%] w-[100%] lg:h-[45rem] sm:h-[20rem] h-[17rem]  group relative">
                    <img src="/work2.avif" alt="work" className=" object-cover  rounded-2xl" />
                    <Flex className="absolute z-20 top-5 sm:left-10">
                        <Flex className="text-white sm:items-start items-center flex-col space-y-12  ">
                            <Flex className="flex-col sm:items-start items-center space-y-2">
                                <p className="inter-semibold text-[2rem] ">Intuitive yet deep</p>
                                <p className=" w-[60%] inter-medium leading-[1.7rem] text-[1.2rem]">A scalable platfrom your team can adopt in days.</p>
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
                <Flex className="lg:w-[50%] w-[90%] mx-auto flex-col items-center">
                    <Swiper
                        breakpoints={{
                            0: { slidesPerView: 1.1 },
                            380: { slidesPerView: 1.1 },
                            460: { slidesPerView: 1.08 },
                            640: { slidesPerView: 1.08 },
                            860: { slidesPerView: 1.08 },
                            1040: { slidesPerView: 1.08 },
                        }}
                        spaceBetween={10}
                        grabCursor={true}
                        centeredSlides={true}
                        direction="vertical"
                        effect={'cards'}
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
                        modules={[EffectCards, Autoplay]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="w-full relative lg:h-[44rem] sm:h-[30rem] h-[19rem] rounded-2xl  overflow-visible"
                    >
                        {data?.map((item, index) => (
                            <SwiperSlide key={index} className="bg-[#F5F5F5] w-[100%]  shadow rounded-2xl">
                                <Flex className=" items-start w-[100%]  flex-col space-y-6 p-7">
                                    <Flex className="flex-col lg:h-[33rem] h-[20rem] sm:space-y-0 space-y-4 justify-between">
                                        <p className="inter-bold lg:text-[2.8rem] sm:text-[2rem] lg:leading-[3.5rem] sm:w-[60%] ">{item?.detail}</p>
                                        <Flex className="flex-col">
                                            <p className="inter-medium text-[0.9rem]">{item?.name}</p>
                                            <p className="inter-medium text-[0.9rem] text-gray-600">{item?.title}</p>
                                        </Flex>
                                    </Flex>
                                    <Flex className=" text-[#ED7E00] inter-medium  w-[11.7rem] items-center cursor-pointer text-[0.9rem] hover:bg-white pl-4 py-1 rounded-3xl">
                                        <p>Read impact study</p>
                                        <Flex className="text-[#D44A00] rounded-full text-[1.1rem]">
                                            <GoArrowUpRight />
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Flex className="space-x-3">
                        {data?.map((_, index) => (
                            <div
                                key={index}
                                className="h-[6px] w-[2.4rem] bg-[#EBEAEA] rounded-xl overflow-hidden"
                            >
                                <div
                                    ref={(el) => (progressRefs.current[index] = el)}
                                    className="h-full w-0 bg-[#ED7E00] rounded-xl"
                                />
                            </div>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
            <Flex className="sm:flex-row flex-col sm:w-[80%] sm:bg-transparent bg-[#B3AB9C] sm:rounded-none rounded-xl w-[96%] sm:p-0 p-2 sm:h-[35rem] h-fit mx-auto group relative ">
                <div className="sm:flex hidden absolute z-10 bg-gradient-to-b from-transparent to-[#030302]/80 w-[100%] sm:h-[35rem] h-[18rem]  rounded-2xl" />
                <video src="/video.mp4" autoPlay muted loop playsInline className="object-cover rounded-2xl w-full sm:h-[35rem] h-[18rem] " />
                <Flex className="sm:flex hidden absolute rounded-2xl p-2 backdrop-blur bg-white/20 w-[24rem] h-[26.6rem] z-20 bottom-[2rem]  right-[2rem]">
                    <Flex className="text-white justify-between flex-col space-y-6 ">
                        <p className="inter-semibold sm:text-[2rem] leading-[rem] pl-4 pr-8 ">"I'm already getting calls from people all around the world in diffrent functions who have heard about Planhat and want to get onboard."</p>
                        <Flex className="text-white inter-medium  items-center space-x-4 cursor-pointer text-[0.9rem] pl-4 py-1 rounded-3xl">
                            <Flex className="flex-col">
                                <p className="inter-medium text-[0.9rem]">Tracy Shouldice</p>
                                <p className="inter-medium text-[0.9rem] text-gray-300">Director of Customer Success, Trend Micro</p>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="sm:hidden flex flex-col items-start rounded-2xl p-2   z-20 ">
                    <img src="/trend.svg" alt="" className="invert" />
                    <Flex className="text-white justify-between flex-col space-y-6 ">
                        <p className="inter-semibold sm:text-[2rem] leading-[rem] pl-4 pr-8 ">"I'm already getting calls from people all around the world in diffrent functions who have heard about Planhat and want to get onboard."</p>
                        <Flex className="text-white inter-medium  items-center space-x-4 cursor-pointer text-[0.9rem] pl-4 py-1 rounded-3xl">
                            <Flex className="flex-col">
                                <p className="inter-medium text-[0.9rem]">Tracy Shouldice</p>
                                <p className="inter-medium text-[0.9rem] text-gray-200">Director of Customer Success, Trend Micro</p>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Works;

//  <Swiper
//                         slidesPerView={1}
//                         spaceBetween={21}
//                         centeredSlides={true}
//                         grabCursor={true}
//                         pagination={{ clickable: true }}
//                         modules={[Pagination]}
//                         className="testimonial-swiper w-full h-[42rem] rounded-2xl overflow-visible"
//                     >
//                         {data?.map((item, index) => (
//                             <SwiperSlide
//                                 key={index}
//                                 className="bg-[#F5F5F5] border border-black rounded-2xl shadow-lg"
//                             >
//                                 <Flex className="items-start flex-col space-y-6 p-7">
//                                     <Flex className="flex-col h-[38rem] justify-between">
//                                         <Flex className="flex-col">
//                                             <p className="inter-medium text-[0.9rem]">{item?.name}</p>
//                                             <p className="inter-medium text-[0.9rem] text-gray-600">{item?.title}</p>
//                                         </Flex>
//                                     </Flex>
//                                     <Flex className="text-[#ED7E00] inter-medium w-[11.7rem] items-center cursor-pointer text-[0.9rem] hover:bg-white pl-4 py-1 rounded-3xl">
//                                         <p>Read impact study</p>
//                                         <Flex className="text-[#D44A00] rounded-full text-[1.1rem]">
//                                             <GoArrowUpRight />
//                                         </Flex>
//                                     </Flex>
//                                 </Flex>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>