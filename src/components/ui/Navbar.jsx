import { Flex } from "antd";
import { useState, useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [navMenu, setNavMenu] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const NavList = ['Solutions', 'Platform', 'Explore']
    const navigate = useNavigate();

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

    const handleClick = (item) => {
        if (navMenu === item) {
            setDropdown(!dropdown);
        } else {
            setDropdown(true);
            setNavMenu(item);
        }
    };

    const handleNavigate = (item) => {
        navigate('/')
    }
    console.log(navMenu)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0 }}
            className="fixed z-40 w-full"
        >
            <Flex className={`md:flex hidden w-full transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md ' : 'bg-transparent'} ${dropdown && scrolled && 'flex-col h-screen pt-4 backdrop-blur-lg bg-gradient-to-l from-transparent to-white/80'} ${dropdown ? 'flex-col h-screen pt-4 backdrop-blur-lg bg-gradient-to-l from-transparent to-[#030302]/80' : 'py-4'}`}>
                <Flex className=" justify-around w-[84%] mx-auto items-center">
                    <Flex className="">
                        <p className={`${scrolled ? 'text-black' : 'text-white'}  text-[1.3rem] inter-extrabold`}>planhat</p>
                    </Flex>
                    {NavList?.map((item) =>
                        <Flex className=" cursor-pointer items-center" onClick={() => handleClick(item)}>
                            <p className={`${scrolled ? 'text-black/60' : 'text-white/80'} inter-semibold`}>{item} </p>
                            {dropdown && navMenu === item ?
                                <HiOutlineMinusSmall className={`${dropdown && scrolled ? 'text-black' : 'text-white'}`} />
                                :
                                <GoPlus className={`${scrolled ? 'text-black/60' : 'text-white'}`} />
                            }
                        </Flex>
                    )}
                    <Flex className=" cursor-pointer items-center" onClick={() => handleNavigate('Editorial')}>
                        <p className={`${scrolled ? 'text-black/60' : 'text-white/80'} inter-semibold`}>Editorial</p>
                    </Flex>
                    <Flex className=" cursor-pointer items-center" onClick={() => handleNavigate('Customers')}>
                        <p className={`${scrolled ? 'text-black/60' : 'text-white/80'} inter-semibold`}>Customers</p>
                    </Flex>
                    <Flex className=" cursor-pointer items-center" onClick={() => handleNavigate('Pricing')}>
                        <p className={`${scrolled ? 'text-black/60' : 'text-white/80'} inter-semibold`}>Pricing</p>
                    </Flex>
                    <Flex className=" space-x-4">
                        <Flex className={`${scrolled ? 'text-black border-black/30 hover:border-transparent' : 'text-white border-white/30 hover:border-transparent'} inter-bold cursor-pointer text-[0.9rem] px-4 py-2 rounded-3xl`}>
                            <p>Log in</p>
                        </Flex>
                        <Flex className="bg-[#D44A00] hover:bg-[#EB5200] inter-medium text-[0.9rem] cursor-pointer text-white px-4 py-2 rounded-3xl">
                            <p>Request a demo</p>
                        </Flex>
                    </Flex>
                </Flex>
                {dropdown && navMenu === 'Solutions' &&
                    <Flex className=" w-[80%] mx-auto flex-col pt-5 space-y-7">
                        <div className="h-[1px] w-[100%] bg-white/10" />
                        <Flex className="">
                            <Flex className="w-[70%] justify-between">
                                <Flex className="flex-col space-y-8">
                                    <p className={` ${dropdown && scrolled ? 'text-black/60' : 'text-white/40 '} inter-medium text-[0.8rem]`}>PRODUCTS</p>
                                    <Flex className={` ${dropdown && scrolled ? 'text-black' : 'text-white '} flex-col inter-semibold text-[1.2rem] space-y-3`}>
                                        <p>CSP</p>
                                        <p>CRM</p>
                                    </Flex>
                                </Flex>
                                <Flex className="flex-col space-y-8">
                                    <p className={`${dropdown && scrolled ? 'text-black/60' : 'text-white/40 '} inter-medium text-[0.8rem]`}>PROCESSES</p>
                                    <Flex className={`flex-col ${dropdown && scrolled ? 'text-black' : 'text-white '} inter-semibold text-[1rem] space-y-3 `}>
                                        <p>Discover All</p>
                                        <p>Onboarding</p>
                                        <p>Expansion</p>
                                        <p>Scaled CS</p>
                                        <p>Data Consolidation</p>
                                        <p>Deal Room</p>
                                        <p>Resource Management</p>
                                    </Flex>
                                </Flex>
                                <Flex className="flex-col space-y-8">
                                    <p className={`${dropdown && scrolled ? 'text-black/60' : 'text-white/40 '} inter-medium text-[0.8rem]`}>SPOTLIGHT</p>
                                    <Flex className={`flex-col w-[14rem] ${dropdown && scrolled ? 'text-black' : 'text-white '} inter-medium text-[0.9rem] space-y-3`}>
                                        <p>Introducing Planhat's AI Deployment Program</p>
                                        <p className="text-[0.85rem] inter-normal">A dedicated services team with deep expertise in deploying the AI capabilities around CX that the Planhat Platform powers.</p>
                                        <img src="/img.avif" alt="" className="w-[17rem] rounded-xl h-[10rem] object-cover" />
                                    </Flex>
                                    <Flex className="text-white inter-medium text-[0.8rem] ">
                                        <p className="pr-3">Bulletin</p>
                                        •
                                        <p className="pl-3">Kaveh Rostampor</p>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <div className="h-[100%] w-[1px] bg-white/10 mx-12" />
                            <Flex className="w-[14rem]">
                                <p className={`${dropdown && scrolled ? 'text-black/60' : 'text-white/60 '} text-[0.85rem] inter-medium`}>
                                    Unify and automate every commercial process. Planhat is a force
                                    multiplier that empowers your entire go-to-market team to move together,
                                    and move faster – with greater intention.
                                </p>
                            </Flex>
                        </Flex>
                    </Flex>
                }
            </Flex>
            <Flex className="flex md:hidden justify-between bg-[#D6D7D5] h-[3rem] p-2 w-[100%] items-center">
                <img src="/logo.svg" alt="logo" className="h-[1.8rem]" />
                <IoMenuOutline onClick={() => setMobile(!mobile)} className="cursor-pointer text-[1.6rem]" />
            </Flex>
            {mobile &&
                <Flex className="flex-col absolute w-[100%] h-[43rem] top-0 bg-black">
                    <Flex className="justify-between w-[90%] mx-auto  pt-6">
                        <img src="/logo.svg" alt="logo" className="h-[1.2rem] invert" />
                        <AiOutlineMinus onClick={() => setMobile(!mobile)}  className="cursor-pointer text-white text-[1.5rem]" />
                    </Flex>
                    <Flex className="w-[100%] flex-col space-y-6 mt-12 text-gray-400">
                        <Flex className=" justify-between w-[90%] mx-auto">
                            <p>Solutions</p>
                            <FiPlus />
                        </Flex>
                        <Flex className=" justify-between w-[90%] mx-auto">
                            <p>Platform</p>
                            <FiPlus />
                        </Flex>
                        <Flex className=" justify-between w-[90%] mx-auto">
                            <p>Explore</p>
                            <FiPlus />
                        </Flex>
                        <Flex className=" justify-between w-[90%] mx-auto">
                            <p>Editorial</p>
                        </Flex>
                        <Flex className=" justify-between w-[90%] mx-auto">
                            <p>Customers</p>
                        </Flex>
                        <Flex className=" justify-between w-[90%] mx-auto">
                            <p>Pricing</p>
                        </Flex>
                        <Flex className="bg-[#D44A00] hover:bg-[#EB5200] inter-medium text-[0.9rem] cursor-pointer text-white px-4 py-2 w-[90%] mx-auto rounded-3xl">
                            <p className="text-center w-[100%]">Request a demo</p>
                        </Flex>
                    </Flex>
                </Flex>
            }
        </motion.div>
    );
};

export default Navbar;