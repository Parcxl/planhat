"use client";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flex } from "antd";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
    const images = ["/sendwise-1.png", "/pro-1.png", "/connect.png"]; // sendwise, pro, connect
    const mobileItems = [
        {
            title: "Sendwise",
            full: "Haal orders op uit tientallen integraties, maak labels aan, track zendingen en beheer alles vanuit één verzenddashboard.",
            cta: "Bekijk platform",
            href: "/oplossingen/sendwise",
        },
        {
            title: "PRO",
            full: "Pick, pack en voorraadbeheer voor fulfilmentteams. Beheer je magazijn, workflows en orders op schaal.",
            cta: "Bekijk PRO",
            href: "/oplossingen/pro",
        },
        {
            title: "CONNECT",
            full: "Eén verzendmethode met tientallen carriers in Europa. Eén pickup, vaste scherpe tarieven, altijd de beste vervoerder.",
            cta: "Bekijk CONNECT",
            href: "/oplossingen/connect",
        },
    ];
    const [activeMobileIndex, setActiveMobileIndex] = useState(0);

    useEffect(() => {
        const refresh = () => ScrollTrigger.refresh(true);
        const rafId = requestAnimationFrame(refresh);
        const timeoutId = window.setTimeout(refresh, 300);
        const img = document.getElementById("journey-image");
        if (img) {
            img.addEventListener("load", refresh);
        }
        return () => {
            cancelAnimationFrame(rafId);
            window.clearTimeout(timeoutId);
            if (img) {
                img.removeEventListener("load", refresh);
            }
        };
    }, []);
    useGSAP(() => {
        // Initial states
        gsap.set("#journey-text", { opacity: 0, x: -50, position: "absolute" });

        const sections = gsap.utils.toArray(".text-section");
        const images = ["/sendwise-1.png", "/pro-1.png", "/connect.png"]; // sendwise, pro, connect
        const totalScroll = sections.length * 100;
        const clipImg = document.querySelector("#clip img");
        const journeyImage = document.querySelector("#journey-image img") || document.querySelector("#journey-image");
        const lastSection = sections[sections.length - 1];

        // Get the continuous fill
        const continuousFill = document.querySelector("#continuous-fill");
        
        // Initialize the continuous fill
        if (continuousFill) {
            gsap.set(continuousFill, { height: "0%", transformOrigin: "top" });
        }
        
        // Track current image index to prevent unnecessary swaps
        let currentImageIndex = 0;

        const tl = gsap.timeline({
                scrollTrigger: {
                trigger: "#journey-wrapper",
                start: "top top",
                endTrigger: lastSection,
                end: "bottom+=2200% bottom",
                scrub: 1,
                pin: "#journey-wrapper",
                pinSpacing: true,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    
                    // Update images based on scroll progress with smooth scroll-based transitions
                    const totalSections = sections.length;
                    // Use normal progress for image swapping (not slowed)
                    const currentSectionIndex = Math.min(Math.floor(progress * totalSections), totalSections - 1);
                    const sectionProgress = (progress * totalSections) - currentSectionIndex;
                    
                    if (imageElement && images.length > 0) {
                        // Handle CONNECT overlay (section 2)
                        if (currentSectionIndex === 2) {
                            // CONNECT: same fade pattern as Sendwise -> PRO, then overlay fade-in
                            let targetImageIndex = 1;
                            let imageOpacity = 1;

                            if (sectionProgress < 0.3) {
                                // Still showing PRO, fade it out
                                targetImageIndex = 1;
                                imageOpacity = 1 - (sectionProgress / 0.3);
                            } else {
                                // Switch to CONNECT and fade it in
                                targetImageIndex = 2;
                                const fadeInProgress = (sectionProgress - 0.3) / 0.3;
                                imageOpacity = Math.min(fadeInProgress, 1);
                            }

                            const currentSrc = imageElement.src || imageElement.getAttribute?.("src") || "";
                            const targetSrc = images[targetImageIndex];
                            const needsSwap = (targetImageIndex === 2 && !currentSrc.includes("connect.png")) ||
                                (targetImageIndex === 1 && !currentSrc.includes("pro-1.png"));

                            if (needsSwap) {
                                if (imageElement.src !== undefined) {
                                    imageElement.src = targetSrc;
                                } else if (imageElement.setAttribute) {
                                    imageElement.setAttribute("src", targetSrc);
                                }
                            }

                            gsap.set(imageElement, { opacity: imageOpacity });

                            const connectOpacity = targetImageIndex === 2 ? imageOpacity : 0;
                            if (connectOverlay) {
                                gsap.set(connectOverlay, { opacity: connectOpacity });
                            }
                            if (connectMarquee) {
                                gsap.set(connectMarquee, { opacity: connectOpacity });
                            }
                        } else {
                            // Sendwise or PRO: Handle image transitions
                            if (connectOverlay) {
                                gsap.set(connectOverlay, { opacity: 0 });
                            }
                            if (connectMarquee) {
                                gsap.set(connectMarquee, { opacity: 0 });
                            }
                            
                            let targetImageIndex = 0;
                            let imageOpacity = 1;
                            
                            if (currentSectionIndex === 0) {
                                // Sendwise: Always show sendwise image
                                targetImageIndex = 0;
                                imageOpacity = 1;
                            } else if (currentSectionIndex === 1) {
                                // PRO: Smooth transition based on progress
                                // Start fading in PRO at 30% of section, complete at 60%
                                if (sectionProgress < 0.3) {
                                    // Still showing Sendwise, fade it out
                                    targetImageIndex = 0;
                                    imageOpacity = 1 - (sectionProgress / 0.3);
                                } else {
                                    // Switch to PRO and fade it in
                                    targetImageIndex = 1;
                                    const fadeInProgress = (sectionProgress - 0.3) / 0.3; // Fade in over 30% of section
                                    imageOpacity = Math.min(fadeInProgress, 1);
                                }
                            }
                            
                            // Update image source when needed
                            const currentSrc = imageElement.src || imageElement.getAttribute?.('src') || '';
                            const targetSrc = images[targetImageIndex];
                            const needsSwap = (targetImageIndex === 1 && !currentSrc.includes("pro-1.png")) ||
                                           (targetImageIndex === 0 && !currentSrc.includes("sendwise-1.png"));
                            
                            if (needsSwap) {
                                if (imageElement.src !== undefined) {
                                    imageElement.src = targetSrc;
                                } else if (imageElement.setAttribute) {
                                    imageElement.setAttribute('src', targetSrc);
                                }
                            }
                            
                            // Smooth scroll-based opacity (no duration, direct set for scroll sync)
                            gsap.set(imageElement, { opacity: imageOpacity });
                        }
                    }
                    
                    // Continuously update line height based on scroll progress and actual section heights
                    if (continuousFill && sectionsContainer) {
                        const progress = self.progress;
                        // Slow down line growth by using a slower progress curve
                        const slowedProgress = progress * 0.42; // Reduce speed by 58%
                        const totalSections = sections.length;
                        const currentSectionIndex = Math.min(Math.floor(slowedProgress * totalSections), totalSections - 1);
                        const sectionProgress = (slowedProgress * totalSections) - currentSectionIndex;
                        
                        
                        // Get the wrapper that contains all sections
                        const sectionsWrapper = sectionsContainer.querySelector('.flex-col.relative');
                        if (!sectionsWrapper) return;
                        
                        // Calculate actual heights of completed sections (with expanded content)
                        let accumulatedHeight = 0;
                        const allSections = Array.from(sectionsWrapper.querySelectorAll('.text-section'));
                        
                        // Add height of all completed sections
                        for (let j = 0; j < currentSectionIndex; j++) {
                            const sec = allSections[j];
                            if (sec) {
                                const secWrapper = sec.closest('.flex-col');
                                if (secWrapper) {
                                    accumulatedHeight += secWrapper.offsetHeight;
                                }
                            }
                            // Add spacing between sections (space-y-7 = 1.75rem ≈ 28px)
                            if (j < currentSectionIndex - 1) {
                                accumulatedHeight += 28;
                            }
                        }
                        
                        // Add current section's progress
                        if (currentSectionIndex < allSections.length) {
                            const currentSec = allSections[currentSectionIndex];
                            if (currentSec) {
                                const currentSecWrapper = currentSec.closest('.flex-col');
                                if (currentSecWrapper) {
                                    const currentSecHeight = currentSecWrapper.offsetHeight;
                                    accumulatedHeight += currentSecHeight * sectionProgress;
                                }
                            }
                        }
                        
                        // Get total container height (including all expanded content)
                        const containerHeight = sectionsWrapper.offsetHeight;
                        const percentage = containerHeight > 0 ? Math.min((accumulatedHeight / containerHeight) * 100, 100) : 0;
                        
                        // Use smooth animation instead of instant set
                        gsap.to(continuousFill, { 
                            height: `${percentage}%`,
                            duration: 0.6,
                            ease: "power1.out"
                        });
                    }
                },
            },
        });
        
        // Set initial image to sendwise (index 0)
        const imageElement = journeyImage || clipImg;
        if (imageElement && images[0]) {
            if (imageElement.src !== undefined) {
                imageElement.src = images[0];
            } else if (imageElement.setAttribute) {
                imageElement.setAttribute('src', images[0]);
            }
            gsap.set(imageElement, { opacity: 1 });
        }
        
        // Initialize CONNECT overlay as hidden
        const connectOverlay = document.querySelector("#connect-overlay");
        if (connectOverlay) {
            gsap.set(connectOverlay, {
                opacity: 0,
            });
        }
        const connectMarquee = document.querySelector("#connect-marquee");
        if (connectMarquee) {
            gsap.set(connectMarquee, {
                opacity: 0,
            });
        }
        
        // Move image aside + fade in text
        tl.to("#clip", { x: 460, duration: 1, ease: "power2.out" });
        tl.to("#journey-text", { opacity: 1, x: 0, duration: 1 }, "<");
        
        // Get sections container to calculate total height
        const sectionsContainer = document.querySelector("#sections-container");
        
        // Reveal sections & swap images - synced with line
        sections.forEach((section, i) => {
            const textContent = section.querySelector(".text-content") || section;
            const hiddenText = section.querySelector(".text-hidden");
            const subtitleShort = section.querySelector(".subtitle-short");
            const subtitleFull = section.querySelector(".subtitle-full");

            if (hiddenText) gsap.set(hiddenText, { opacity: 0 });
            
            // Initialize subtitle states - hide short version by default
            if (subtitleShort) gsap.set(subtitleShort, { opacity: 0, display: "none" });
            if (subtitleFull) gsap.set(subtitleFull, { opacity: 0, maxHeight: "0px", display: "none" });
            

            // Animate text content synced with line
            tl.fromTo(
                textContent,
                { opacity: 0.5, x: 0, color: "#9E9D9B" },
                { opacity: 1, x: 0, duration: 1.2, color: "#000000", ease: "power1.out" },
                "<"
            );
            


            // Expand subtitle when text becomes darker
            if (subtitleShort && subtitleFull) {
                // Hide short subtitle first, then show full subtitle (no overlap)
                tl.to(subtitleShort, {
                    opacity: 0,
                    maxHeight: "0px",
                    duration: 0.4,
                    ease: "power1.in",
                    onComplete: () => {
                        // Hide short text completely before showing long text
                        if (subtitleShort) {
                            gsap.set(subtitleShort, { display: "none" });
                        }
                    }
                }, "<0.3");
                
                // Show full subtitle only after short is completely hidden
                tl.to(subtitleFull, {
                    opacity: 1,
                    maxHeight: "200px",
                    duration: 0.6,
                    ease: "power1.out",
                    onStart: () => {
                        // Ensure short is hidden and full is visible
                        if (subtitleShort) gsap.set(subtitleShort, { display: "none" });
                        if (subtitleFull) gsap.set(subtitleFull, { display: "block" });
                    }
                }, ">0.1"); // Start after short subtitle is hidden
            }

            // fade hidden text in synced
            if (hiddenText) {
                tl.to(hiddenText, {
                    opacity: 1,
                    duration: 0.8,
                    ease: "power1.out",
                }, "<0.4"); // sync with text content

                // Keep button visible - don't fade out
            }
        });
    });

    return (
        <Flex className="flex flex-col items-center space-y-2 pt-20 lg:pb-0 md:pb-32 sm:pb-40 pb-32 lg:mb-32 md:mb-20 sm:mb-24 mb-20 sm:mt-0 -mt-24">
            {/* Heading */}
            <Flex className="flex-col inter-semibold md:text-[5rem] sm:text-[4rem] text-[1.7rem] text-center gap-4">
                <p className="md:leading-[5.5rem] sm:leading-[4.5rem] leading-[2rem]">Van verzending tot warehouse,</p>
                <p className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] bg-clip-text text-transparent md:text-[6rem] sm:text-[5rem] text-[2rem] md:leading-[7rem] sm:leading-[6rem] leading-[2.5rem] pb-2">in één platform</p>
            </Flex>

            {/* Wrapper */}
            <Flex
                id="journey-wrapper"
                className="hidden sm:flex w-full flex flex-row justify-between items-start pt-24 lg:mb-0 md:mb-8 sm:mb-12 mb-8"
            >
                {/* Text */}
                <Flex
                    id="journey-text"
                    className="flex-col lg:w-[36rem] md:w-[33rem] w-[27rem] space-y-12 xl:pl-[10rem] lg:pl-[6rem] pl-[4rem] font-semibold text-gray-900"
                >
                    <p className="lg:w-[100%] w-[90%] inter-semibold md:text-[3rem] text-[2.4rem] leading-[3.4rem] pl-5">
                        Voor verzending op schaal
                    </p>
                    <Flex id="sections-container" className="flex-col items-start space-y-7">
                        <Flex className="flex-col items-start space-y-7 relative">
                            <div id="continuous-line" className="absolute left-0 w-[4px] rounded-md overflow-hidden" style={{ top: '7px', height: 'calc(100% - 14px)' }}>
                                <div id="continuous-fill" className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] transform origin-top" style={{ height: '0%' }} />
                            </div>
                            <Flex className="text-section items-center space-x-5 relative z-10">
                                <div className="w-[4px] h-[5.9rem]" />
                                <Flex className="text-content flex-col space-y-2">
                                    <p className="inter-semibold text-[1.2rem]">Sendwise</p>
                                    <div className="overflow-hidden">
                                        <p className="inter-medium subtitle-short">
                                            Haal orders op uit tientallen integraties...
                                        </p>
                                        <p className="inter-medium subtitle-full opacity-0 max-h-0">
                                            Haal orders op uit tientallen integraties, maak labels aan, track zendingen en beheer alles vanuit één verzenddashboard.
                                        </p>
                                    </div>
                                    <Link to="/oplossingen/sendwise" className="text-hidden items-center space-x-1 flex">
                                        <span className="inter-medium text-appear bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] bg-clip-text text-transparent">Bekijk platform</span>
                                        <GoArrowUpRight className="text-[#1a5ee5]" />
                                    </Link>
                                </Flex>
                            </Flex>
                            {/* bg-[#9E9D9B]/20 */}
                            <Flex className="text-section items-center space-x-5 relative z-10">
                                <div className="w-[4px] h-[5.9rem]" />
                                <Flex className="text-content flex-col space-y-2">
                                    <p className="inter-semibold text-[1.2rem]">PRO</p>
                                    <div className="overflow-hidden">
                                        <p className="inter-medium subtitle-short">
                                            Pick, pack en voorraadbeheer voor fulfil...
                                        </p>
                                        <p className="inter-medium subtitle-full opacity-0 max-h-0">
                                            Pick, pack en voorraadbeheer voor fulfilmentteams. Beheer je magazijn, workflows en orders op schaal.
                                        </p>
                                    </div>
                                    <Link to="/oplossingen/pro" className="text-hidden items-center space-x-1 flex">
                                        <span className="inter-medium text-appear bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] bg-clip-text text-transparent">Bekijk PRO</span>
                                        <GoArrowUpRight className="text-[#1a5ee5]" />
                                    </Link>
                                </Flex>
                            </Flex>

                            <Flex className="text-section items-center space-x-5 relative z-10">
                                <div className="w-[4px] h-[5.9rem]" />
                                <Flex className="text-content flex-col space-y-2">
                                    <p className="inter-semibold text-[1.2rem]">CONNECT</p>
                                    <div className="overflow-hidden">
                                        <p className="inter-medium subtitle-short">
                                            Eén verzendmethode met tientallen carri...
                                        </p>
                                        <p className="inter-medium subtitle-full opacity-0 max-h-0">
                                            Eén verzendmethode met tientallen carriers in Europa. Eén pickup, vaste scherpe tarieven, altijd de beste vervoerder.
                                        </p>
                                    </div>
                                    <Link to="/oplossingen/connect" className="text-hidden items-center space-x-1 flex">
                                        <span className="inter-medium text-appear bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] bg-clip-text text-transparent">Bekijk CONNECT</span>
                                        <GoArrowUpRight className="text-[#1a5ee5]" />
                                    </Link>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Link
                            to="/start-met-sendwise"
                            className="ml-6 bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] hover:from-[#0f3d9e] hover:to-[#1e4fd4] inter-medium text-[0.9rem] cursor-pointer text-white px-4 py-2 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl relative overflow-hidden group inline-flex items-center isolate"
                        >
                            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                            <span className="relative z-10 text-white group-hover:text-white">Direct starten</span>
                        </Link>
                    </Flex>
                </Flex>

                {/* Image */}
                <Flex
                    id="clip"
                    className="p-12 rounded-2xl md:w-[80%] w-[95%] mx-auto h-full min-h-[22rem] lg:min-h-[28rem] cursor-pointer relative overflow-hidden"
                >
                    <div id="blue-gradient-bg" className="absolute inset-0 bg-gradient-to-b from-[#9BB0D8] via-[#B8C8E8] to-[#A5A8C8] rounded-2xl" />
                    <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay' }} />
                    <img
                        id="journey-image"
                        src="/sendwise-1.png"
                        className="rounded-xl relative z-10 w-full h-full object-cover min-h-[16rem] lg:min-h-[22rem]"
                        alt="dashboard"
                        loading="lazy"
                    />
                    <div
                        id="connect-marquee"
                        className="absolute inset-0 p-12 opacity-0 pointer-events-none z-[15]"
                    >
                        <div className="h-full grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-[auto_auto] lg:justify-center gap-3 lg:gap-[2px]">
                            <div className="vertical-marquee w-full lg:w-[11rem] xl:w-[12rem]">
                                <div className="vertical-marquee-track vertical-marquee-track--slow vertical-marquee-track--down">
                                    <div className="integration-logo-item">
                                        <img alt="GLS integratie" className="integration-logo" src="/gls-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="DHL integratie" className="integration-logo" src="/sendwise-dhl.svg" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="DAO integratie" className="integration-logo" src="/dao-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="Colissimo integratie" className="integration-logo" src="/colissimo-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="PostNL integratie" className="integration-logo" src="/postnl-icoon.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="Sendwise integratie" className="integration-logo" src="/Sendwise zonder connect.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="Gofo integratie" className="integration-logo" src="/gofo-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="Carrier 10 integratie" className="integration-logo" src="/10.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="MRW integratie" className="integration-logo" src="/mrw-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="Correos integratie" className="integration-logo" src="/CORREOS-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="AT POST integratie" className="integration-logo" src="/AT POST-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="CTT integratie" className="integration-logo" src="/ctt-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/gls-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/sendwise-dhl.svg" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/dao-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/colissimo-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/postnl-icoon.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/Sendwise zonder connect.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/gofo-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/10.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/mrw-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/CORREOS-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/AT POST-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/ctt-logo-sendwise.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="vertical-marquee w-full lg:w-[11rem] xl:w-[12rem]">
                                <div className="vertical-marquee-track vertical-marquee-track--fast">
                                    <div className="integration-logo-item">
                                        <img alt="PostNL integratie" className="integration-logo" src="/postnl-icoon.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="Sendwise integratie" className="integration-logo" src="/Sendwise zonder connect.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="Gofo integratie" className="integration-logo" src="/gofo-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="Carrier 10 integratie" className="integration-logo" src="/10.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="MRW integratie" className="integration-logo" src="/mrw-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="Correos integratie" className="integration-logo" src="/CORREOS-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="AT POST integratie" className="integration-logo" src="/AT POST-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="CTT integratie" className="integration-logo" src="/ctt-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="GLS integratie" className="integration-logo" src="/gls-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="DHL integratie" className="integration-logo" src="/sendwise-dhl.svg" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="DAO integratie" className="integration-logo" src="/dao-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item">
                                        <img alt="Colissimo integratie" className="integration-logo" src="/colissimo-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/postnl-icoon.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/Sendwise zonder connect.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/gofo-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/10.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/mrw-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/CORREOS-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/AT POST-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/ctt-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/gls-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/sendwise-dhl.svg" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/dao-logo-sendwise.png" />
                                    </div>
                                    <div className="integration-logo-item" aria-hidden="true">
                                        <img alt="" className="integration-logo" src="/colissimo-logo-sendwise.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="connect-overlay" className="absolute inset-0 p-12 opacity-0 pointer-events-none z-20">
                        <img
                            src="/sendwise-1-2100.png"
                            alt="overlay"
                            className="rounded-xl w-full h-full object-cover min-h-[16rem] lg:min-h-[22rem]"
                            loading="lazy"
                        />
                    </div>
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
                    className="w-full relative rounded-2xl overflow-visible h-[16rem]"
                    onSlideChange={(swiper) => setActiveMobileIndex(swiper.realIndex ?? swiper.activeIndex)}
                >
                    {images?.map((item, index) => (
                        <SwiperSlide key={index} className="bg-gradient-to-b from-[#9BB0D8] via-[#B8C8E8] to-[#A5A8C8] w-[100%] shadow rounded-2xl relative overflow-hidden h-[16rem]">
                            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay' }} />
                            <div className="relative w-full h-full p-4">
                                <img
                                    src={item}
                                    alt="dashboard"
                                    className="rounded-xl w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Flex
                    className="flex-col w-[93%] mx-auto justify-center space-y-6 pt-6  font-semibold text-gray-900"
                >
                    <Flex className="flex-col items-start space-y-7 ">
                        <Flex className=" items-center space-x-5">
                            <div className=" h-[5.9rem] w-[4px] rounded-md  overflow-hidden relative">
                                <div className=" absolute inset-0 bg-gradient-to-b from-[#1a5ee5] to-[#3b82f6] transform origin-top" />
                            </div>
                            <motion.div
                                key={activeMobileIndex}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="text-content flex-col space-y-2"
                            >
                                <p className="inter-semibold text-[1.2rem]">{mobileItems[activeMobileIndex]?.title}</p>
                                <div className="overflow-hidden">
                                    <p className="inter-medium">
                                        {mobileItems[activeMobileIndex]?.full}
                                    </p>
                                </div>
                                <Link
                                    to={mobileItems[activeMobileIndex]?.href}
                                    className="text-hidden items-center space-x-1 flex w-fit"
                                >
                                    <span className="inter-medium text-appear bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] bg-clip-text text-transparent">
                                        {mobileItems[activeMobileIndex]?.cta}
                                    </span>
                                    <GoArrowUpRight className="text-[#1a5ee5]" />
                                </Link>
                            </motion.div>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}


