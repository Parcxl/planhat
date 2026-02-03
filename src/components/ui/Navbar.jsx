import { Flex } from "antd";
import { useState, useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [navMenu, setNavMenu] = useState('');
    const [integrationMenu, setIntegrationMenu] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const NavList = ['Oplossingen']
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const root = document.getElementById("site-content");
        if (!root) return;
        if (mobile) {
            root.classList.add("menu-blur");
            document.body.classList.add("menu-open");
        } else {
            root.classList.remove("menu-blur");
            document.body.classList.remove("menu-open");
        }
        return () => {
            root.classList.remove("menu-blur");
            document.body.classList.remove("menu-open");
        };
    }, [mobile]);

    const handleClick = (item) => {
        if (navMenu === item) {
            setDropdown(!dropdown);
        } else {
            setDropdown(true);
            setNavMenu(item);
        }
    };

    const handleNavigate = (item) => {
        const routes = {
            Home: "/",
            Contact: "/contact",
            "Over Sendwise": "/over-ons",
            Prijzen: "/prijzen",
            Sendwise: "/oplossingen/sendwise",
            PRO: "/oplossingen/pro",
            CONNECT: "/oplossingen/connect",
        };
        navigate(routes[item] || "/");
        setMobile(false);
        setDropdown(false);
        setNavMenu('');
        setIntegrationMenu('');
    };

    const isActive = (item) => {
        if (item === "Home") return location.pathname === "/";
        if (item === "Contact") return location.pathname === "/contact";
        if (item === "Over Sendwise") return location.pathname === "/over-ons";
        if (item === "Prijzen") return location.pathname === "/prijzen";
        if (item === "Sendwise") return location.pathname === "/oplossingen/sendwise";
        if (item === "PRO") return location.pathname === "/oplossingen/pro";
        if (item === "CONNECT") return location.pathname === "/oplossingen/connect";
        if (item === "Oplossingen") return location.pathname.startsWith("/oplossingen");
        return false;
    };

    const getNavTextClass = (active) => {
        if (scrolled) {
            return `${active ? "text-black inter-semibold" : "text-black/60 inter-medium"}`;
        }
        return `${active ? "text-white inter-semibold" : "text-white/80 inter-medium"}`;
    };

    const getDropdownItemClass = (active) => {
        const base = dropdown && scrolled ? "text-black" : "text-white";
        return `${active ? "text-[#1a5ee5]" : base} transition-colors duration-200`;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
            className="fixed z-40 w-full"
        >
            <Flex className={`md:flex hidden w-full transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md ' : 'bg-transparent'} ${dropdown && scrolled && 'flex-col h-screen pt-4 backdrop-blur-lg bg-gradient-to-l from-transparent to-white/80'} ${dropdown ? 'flex-col h-screen pt-4 backdrop-blur-lg bg-gradient-to-l from-transparent to-[#030302]/80' : 'py-4'}`}>
                <Flex className=" justify-around w-[84%] mx-auto items-center">
                    <Flex className="">
                        <img 
                            src={scrolled ? "/sendwise-tekst-blauw.png" : "/sendwise-tekst.png"} 
                            alt="Sendwise" 
                            className="h-[1.5rem] object-contain -mt-1"
                        />
                    </Flex>
                    <Flex className=" cursor-pointer items-center" onClick={() => handleNavigate('Home')}>
                        <p className={getNavTextClass(isActive('Home'))}>Home</p>
                    </Flex>
                    {NavList?.map((item) =>
                        <Flex key={item} className=" cursor-pointer items-center" onClick={() => handleClick(item)}>
                            <p className={getNavTextClass(isActive(item))}>{item} </p>
                            {dropdown && navMenu === item ?
                                <HiOutlineMinusSmall className={`${dropdown && scrolled ? 'text-black' : 'text-white'}`} />
                                :
                                <GoPlus className={`${scrolled ? 'text-black/60' : 'text-white'}`} />
                            }
                        </Flex>
                    )}
                    <Flex className=" cursor-pointer items-center" onClick={() => handleNavigate('Prijzen')}>
                        <p className={getNavTextClass(isActive('Prijzen'))}>Prijzen</p>
                    </Flex>
                    <Flex className=" cursor-pointer items-center" onClick={() => handleNavigate('Over Sendwise')}>
                        <p className={getNavTextClass(isActive('Over Sendwise'))}>Over Sendwise</p>
                    </Flex>
                    <Flex className=" cursor-pointer items-center" onClick={() => handleNavigate('Contact')}>
                        <p className={getNavTextClass(isActive('Contact'))}>Contact</p>
                    </Flex>
                    <Flex className=" space-x-4">
                        <Flex className={`${scrolled ? 'text-black border-black/30 hover:border-transparent bg-blue-100/60' : 'text-white border-white/30 hover:border-transparent bg-white/20'} inter-bold cursor-pointer text-[0.9rem] px-4 py-2 rounded-3xl transition-all duration-500 ease-in-out`}>
                            <p>Inloggen</p>
                        </Flex>
                        <Flex className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[0.9rem] cursor-pointer text-white px-4 py-2 rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                            <p className="relative z-10">Account aanmaken</p>
                        </Flex>
                    </Flex>
                </Flex>
                {dropdown && navMenu === 'Oplossingen' &&
                    <Flex className=" w-[80%] mx-auto flex-col pt-5 space-y-7">
                        <div className="h-[1px] w-[100%] bg-white/10" />
                        <Flex className="">
                            <Flex className="w-[70%] justify-between">
                                <Flex className="flex-col space-y-8">
                                    <p className={` ${dropdown && scrolled ? 'text-black/60' : 'text-white/40 '} inter-medium text-[0.8rem]`}>PRODUCTEN</p>
                                    <Flex className="flex-col inter-semibold text-[1.2rem] space-y-3">
                                        <button
                                            type="button"
                                            onClick={() => handleNavigate("Sendwise")}
                                            className={`${getDropdownItemClass(isActive("Sendwise"))} text-left cursor-pointer hover:text-[#1a5ee5]`}
                                        >
                                            SENDWISE
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleNavigate("PRO")}
                                            className={`${getDropdownItemClass(isActive("PRO"))} text-left cursor-pointer hover:text-[#1a5ee5]`}
                                        >
                                            PRO
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleNavigate("CONNECT")}
                                            className={`${getDropdownItemClass(isActive("CONNECT"))} text-left cursor-pointer hover:text-[#1a5ee5]`}
                                        >
                                            CONNECT
                                        </button>
                                    </Flex>
                                </Flex>
                                <Flex className="flex-col space-y-8">
                                    <p className={`${dropdown && scrolled ? 'text-black/60' : 'text-white/40 '} inter-medium text-[0.8rem]`}>TOEPASSINGEN</p>
                                    <Flex className={`flex-col ${dropdown && scrolled ? 'text-black' : 'text-white '} inter-semibold text-[1rem] space-y-3 `}>
                                        <p>Voor webshops</p>
                                        <p>Voor fulfilmentcenters</p>
                                    </Flex>
                                </Flex>
                                <Flex className="flex-col space-y-8">
                                    <p className={`${dropdown && scrolled ? 'text-black/60' : 'text-white/40 '} inter-medium text-[0.8rem]`}>INTEGRATIES</p>
                                    <Flex className={`flex-col ${dropdown && scrolled ? 'text-black' : 'text-white '} inter-medium text-[0.95rem] space-y-3`}>
                                        <button
                                            type="button"
                                            onClick={() => setIntegrationMenu(integrationMenu === "webshop" ? "" : "webshop")}
                                            className="flex items-center justify-between text-left"
                                        >
                                            <span className="inter-semibold text-[0.9rem]">Webshop</span>
                                            <HiOutlineMinusSmall className={`${integrationMenu === "webshop" ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                                            <GoPlus className={`${integrationMenu === "webshop" ? 'opacity-0' : 'opacity-100'} transition-opacity`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ease-out ${integrationMenu === "webshop" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                            <div className="flex flex-col space-y-2 pl-2 pt-2">
                                                <p>WooCommerce</p>
                                                <p>Shopify</p>
                                                <p>CCV Shop</p>
                                                <p>Lightspeed</p>
                                                <p>Magento</p>
                                                <p>Mijnwebwinkel</p>
                                                <p>Ecwid</p>
                                                <p>Wix</p>
                                                <p>PrestaShop</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIntegrationMenu(integrationMenu === "marketplace" ? "" : "marketplace")}
                                            className="flex items-center justify-between text-left"
                                        >
                                            <span className="inter-semibold text-[0.9rem]">Marketplace</span>
                                            <HiOutlineMinusSmall className={`${integrationMenu === "marketplace" ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                                            <GoPlus className={`${integrationMenu === "marketplace" ? 'opacity-0' : 'opacity-100'} transition-opacity`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ease-out ${integrationMenu === "marketplace" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                                            <div className="flex flex-col space-y-2 pl-2 pt-2">
                                                <p>Bol.com</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIntegrationMenu(integrationMenu === "wms" ? "" : "wms")}
                                            className="flex items-center justify-between text-left"
                                        >
                                            <span className="inter-semibold text-[0.9rem]">WMS</span>
                                            <HiOutlineMinusSmall className={`${integrationMenu === "wms" ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                                            <GoPlus className={`${integrationMenu === "wms" ? 'opacity-0' : 'opacity-100'} transition-opacity`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ease-out ${integrationMenu === "wms" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                                            <div className="flex flex-col space-y-2 pl-2 pt-2">
                                                <p>Lyra</p>
                                                <p>GoedGepickt</p>
                                            </div>
                                        </div>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <div className="h-[100%] w-[1px] bg-white/10 mx-12" />
                            <Flex className="w-[14rem] flex-col space-y-8">
                                <p className={`${dropdown && scrolled ? 'text-black/60' : 'text-white/40 '} inter-medium text-[0.8rem]`}>SPOTLIGHT</p>
                                <Flex className={`flex-col ${dropdown && scrolled ? 'text-black' : 'text-white '} inter-medium text-[0.9rem] space-y-3`}>
                                    <p>Introducing Planhat's AI Deployment Program</p>
                                    <p className="text-[0.85rem] inter-normal">A dedicated services team with deep expertise in deploying the AI capabilities around CX that the Planhat Platform powers.</p>
                                    <img src="/img.avif" alt="" className="w-[17rem] rounded-xl h-[10rem] object-cover" />
                                </Flex>
                                <Flex className={`${dropdown && scrolled ? 'text-black' : 'text-white'} inter-medium text-[0.8rem]`}>
                                    <p className="pr-3">Bulletin</p>
                                    •
                                    <p className="pl-3">Kaveh Rostampor</p>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                }
            </Flex>
            <Flex className={`flex md:hidden justify-between w-[100%] items-center transition-all duration-300 px-4 py-3 ${mobile ? 'bg-transparent' : (scrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent')}`}>
                <img src={scrolled && !mobile ? "/sendwise-tekst-blauw.png" : "/sendwise-tekst.png"} alt="Sendwise" className="h-[1.4rem] my-1" />
                <HiOutlineMenuAlt3 onClick={() => setMobile(!mobile)} className={`cursor-pointer text-[1.6rem] my-1 ${scrolled && !mobile ? 'text-black' : 'text-white/80'}`} />
            </Flex>
            <AnimatePresence>
                {mobile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-50 w-[100%] h-[100%]"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 bg-black/60"
                        />
                        <div className="relative h-full">
                            <Flex className="flex justify-between w-[100%] items-center px-4 py-3 pt-4 bg-transparent">
                                <img src="/sendwise-tekst.png" alt="Sendwise" className="h-[1.4rem]" />
                                <AiOutlineMinus onClick={() => setMobile(!mobile)} className="cursor-pointer text-white text-[1.6rem]" />
                            </Flex>
                            <motion.div
                                initial={{ y: -28, opacity: 0, scale: 0.99 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: -20, opacity: 0, scale: 0.995 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="w-[100%] flex-col space-y-8 text-gray-200 text-[2.3rem] pt-12"
                            >
                                <Flex className=" justify-between w-[90%] mx-auto cursor-pointer" onClick={() => handleNavigate('Home')}>
                                    <p className={`${isActive('Home') ? 'text-white inter-semibold' : 'text-gray-200 inter-medium'}`}>Home</p>
                                </Flex>
                                <Flex className="justify-between w-[90%] mx-auto items-center">
                                    <p className={`${isActive('Oplossingen') ? 'text-white inter-semibold' : 'text-gray-200 inter-medium'}`}>Oplossingen</p>
                                    <FiPlus className="text-[2rem] translate-y-[4px]" />
                                </Flex>
                                <Flex className=" justify-between w-[90%] mx-auto cursor-pointer" onClick={() => handleNavigate('Prijzen')}>
                                    <p className={`${isActive('Prijzen') ? 'text-white inter-semibold' : 'text-gray-200 inter-medium'}`}>Prijzen</p>
                                </Flex>
                                <Flex className=" justify-between w-[90%] mx-auto cursor-pointer" onClick={() => handleNavigate('Over Sendwise')}>
                                    <p className={`${isActive('Over Sendwise') ? 'text-white inter-semibold' : 'text-gray-200 inter-medium'}`}>Over Sendwise</p>
                                </Flex>
                                <Flex className=" justify-between w-[90%] mx-auto cursor-pointer" onClick={() => handleNavigate('Contact')}>
                                    <p className={`${isActive('Contact') ? 'text-white inter-semibold' : 'text-gray-200 inter-medium'}`}>Contact</p>
                                </Flex>
                                <Flex className="bg-gradient-to-r from-[#1a5ee5] to-[#3b82f6] inter-medium text-[1.2rem] cursor-pointer text-white px-6 py-3 w-[90%] mx-auto rounded-3xl transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d9e] to-[#1e4fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                    <p className="text-center w-[100%] relative z-10">Account aanmaken</p>
                                </Flex>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Navbar;
