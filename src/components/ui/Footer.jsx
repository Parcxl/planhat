import { Checkbox, ConfigProvider, Flex, Input } from "antd";
import { FaLinkedin, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <Flex className="flex-col ">
            <div className="h-[0.8px] w-[80%] mx-auto bg-gray-300" />
            <Flex className=" lg:flex-col flex-col-reverse mt-20 lg:w-[80%] w-[90%] mx-auto mb-10">
                <Flex className="lg:flex-row flex-col lg:space-x-6">
                    <Flex className="lg:w-[80%] lg:flex-col flex-col-reverse">
                        <Flex className=" grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 lg:pt-0 pt-7 grid-cols-2 gap-6">
                            <Flex className="flex-col space-y-8 inter-semibold">
                                <p className="text-[0.76rem] text-gray-500 inter-normal">PLANHAT</p>
                                <Flex className="space-y-4 flex-col text-[0.9rem] ">
                                    <p>About</p>
                                    <p>Careers</p>
                                    <p>Press</p>
                                    <p>Partnerships</p>
                                    <p>Open</p>
                                    <p>Contact</p>
                                    <p>Legal</p>
                                </Flex>
                            </Flex>
                            <Flex className="flex-col space-y-8 inter-semibold">
                                <p className="text-[0.76rem] text-gray-500 inter-normal">SOLUTIONS</p>
                                <Flex className="space-y-4 flex-col text-[0.9rem] ">
                                    <p>CRM</p>
                                    <p>CSP</p>
                                    <p>PSA</p>
                                    <p>Cisco CX</p>
                                    <p>Processes</p>
                                    <p>ADP</p>
                                    <p>Philanthropy</p>
                                </Flex>
                            </Flex>
                            <Flex className="flex-col space-y-8 inter-semibold">
                                <p className="text-[0.76rem] text-gray-500 inter-normal">PLATFORM</p>
                                <Flex className="space-y-4 flex-col text-[0.9rem] ">
                                    <p>Features</p>
                                    <p>Views</p>
                                    <p>Workflows</p>
                                    <p>Metrics</p>
                                    <p>Automations</p>
                                    <p>Integrations</p>
                                    <p>AI</p>
                                </Flex>
                            </Flex>
                            <Flex className="flex-col space-y-8 inter-semibold">
                                <p className="text-[0.76rem] text-gray-500 inter-normal">RESOURCES</p>
                                <Flex className="space-y-4 flex-col text-[0.9rem] ">
                                    <p>Pricing</p>
                                    <p>Editorial</p>
                                    <p>Events</p>
                                    <p>Help Center</p>
                                    <p>Developers</p>
                                    <p>RFP</p>
                                    <p>Changelog</p>
                                </Flex>
                            </Flex>
                            <Flex className="flex-col space-y-8 inter-semibold">
                                <p className="text-[0.76rem] text-gray-500 inter-normal">CUSTOMERS</p>
                                <Flex className="space-y-4 flex-col text-[0.9rem] ">
                                    <p>Impact Studies</p>
                                    <p>Software</p>
                                    <p>Business Services</p>
                                    <p>Connected Businesses</p>
                                    <p>Financial Services</p>
                                    <p>Healthcare & Life Sciences</p>
                                    <p>IT Services</p>
                                </Flex>
                            </Flex>
                        </Flex>
                        <div className="h-[0.8px] w-[80%] mx-auto bg-gray-300 flex lg:hidden mt-5" />
                        <Flex className="lg:flex-row  flex-col pt-9 lg:space-x-10 lg:space-y-0 space-y-12 lg:items-center sm:items-start items-center">
                            <Flex className="flex-col lg:w-[60%] w-[100%] space-y-6">
                                <Flex className="flex-col">
                                    <Flex>
                                        <ConfigProvider theme={{
                                            components: {
                                                Input: {
                                                    colorBorder: 'white',
                                                    colorPrimaryBorderHover: 'white'
                                                }
                                            }
                                        }}>
                                            <Input placeholder="Email Address*" />
                                        </ConfigProvider>
                                    </Flex>
                                    <div className="h-[0.8px] bg-black w-[97%] mx-auto" />
                                </Flex>
                                <Flex className="space-x-3 items-center">
                                    <ConfigProvider theme={{
                                        components: {
                                            Checkbox: {
                                                colorBgContainer: '#F6F6F8',
                                                colorBorder: '#F6F6F8'
                                            }
                                        }
                                    }}>
                                        <Checkbox />
                                    </ConfigProvider>
                                    <p className="text-[0.7rem] text-gray-400 inter-medium">I agree to Planhat processing my personal data in accordance with Planhat's Privacy Policy.</p>
                                </Flex>
                            </Flex>
                            <Flex className="px-4 py-2 bg-black text-white rounded-full">
                                <p className="inter-medium text-[0.9rem]">Subscribe to our newsletter</p>
                            </Flex>
                        </Flex>
                    </Flex>
                     <div className="h-[0.8px] w-[80%] mx-auto bg-gray-300 flex lg:hidden mt-5" />
                    <Flex className="lg:w-[30%] lg:pt-0 pt-6  flex-col pl-2 space-y-5">
                        <p className="text-[0.76rem] text-gray-500 inter-normal">RECOGNIZED AS A WORLD-LEADER BY</p>
                        <img src="/footer4.png" alt="footer" className="lg:w-[100%] w-[60%]" />
                        <div className="hidden sm:flex h-[0.8px] bg-gray-300 w-[97%] mx-auto" />
                        <p className="text-[0.78rem] inter-medium text-gray-500">Planhat is built to keep your data safe. We put privacy and security front and centre, so you don't have to.</p>
                        <Flex className="space-x-2 ">
                            <img src="/footer.svg" alt="footer" className="sm:h-[5rem] h-[4.5rem]" />
                            <img src="/footer1.svg" alt="footer" className="sm:h-[5rem] h-[4.5rem]" />
                            <img src="/footer2.svg" alt="footer" className="sm:h-[5rem] h-[4.5rem]" />
                            <img src="/footer3.svg" alt="footer" className="sm:h-[5rem] h-[4.5rem]" />
                        </Flex>
                    </Flex>
                    <div className="h-[0.8px] w-[80%] mx-auto bg-gray-300 flex lg:hidden mt-5" />
                    <Flex className="lg:hidden flex lg:flex-row flex-col lg:pt-0 pt-4 inter-semibold justify-between">
                        <Flex className="lg:flex-row flex-col sm:space-y-0 space-y-4 text-[0.9rem] lg:space-x-6">
                            <Flex className="space-x-1 items-center">
                                <FaRegCopyright />
                                <p>2025 Plan inc.</p>
                            </Flex>
                            <Flex className="grid lg:grid-cols-4 grid-cols-2 gap-1 lg:pt-0 pt-2">
                                <p className="">Status</p>
                                <p className=" whitespace-nowrap">Terms of Service</p>
                                <p className=" whitespace-nowrap">Privacy Policy</p>
                                <p className="whitespace-nowrap">Cookie Policy</p>
                            </Flex>
                        </Flex>
                        <Flex className="space-x-2 lg:pt-0 pt-4 items-center">
                            <p>Follow us </p>
                            <FaLinkedin />
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="sm:pt-16">
                    <p className="lg:text-[7rem] md:text-[3.9rem] text-[1.7rem] inter-bold">Know them. Grow them.</p>
                </Flex>
                <Flex className="hidden lg:flex inter-semibold justify-between">
                    <Flex className=" text-[0.9rem] space-x-6">
                        <Flex className="space-x-1 items-center">
                            <FaRegCopyright />
                            <p>2025 Plan inc.</p>
                        </Flex>
                        <p>Status</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </Flex>
                    <Flex className="space-x-2 items-center">
                        <p>Follow us </p>
                        <FaLinkedin />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Footer;