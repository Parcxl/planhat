import { Flex } from "antd";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <Flex className="flex-col ">
            <div className="h-[0.8px] w-[80%] mx-auto bg-gray-300" />
            <Flex className=" lg:flex-col flex-col-reverse mt-20 lg:w-[80%] w-[90%] mx-auto mb-10">
                <Flex className="lg:flex-row flex-col lg:space-x-6">
                    <Flex className="lg:w-[85%] lg:flex-col flex-col-reverse lg:pl-12">
                        <Flex className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 lg:pt-0 pt-7 grid-cols-2 gap-8 lg:gap-24 lg:pl-16 lg:w-full">
                            <Flex className="flex-col space-y-8 inter-semibold">
                                <p className="text-[0.76rem] text-gray-500 inter-normal">PRODUCTEN</p>
                                <Flex className="space-y-4 flex-col text-[0.9rem] ">
                                    <Link to="/oplossingen/sendwise">Sendwise</Link>
                                    <Link to="/oplossingen/pro">PRO</Link>
                                    <Link to="/oplossingen/connect">CONNECT</Link>
                                </Flex>
                            </Flex>
                            <Flex className="flex-col space-y-8 inter-semibold">
                                <p className="text-[0.76rem] text-gray-500 inter-normal">TOEPASSINGEN</p>
                                <Flex className="space-y-4 flex-col text-[0.9rem] ">
                                    <Link to="/voor-webshops">Voor webshops</Link>
                                    <Link to="/voor-fulfilmentcenters">Voor fulfilmentcenters</Link>
                                </Flex>
                            </Flex>
                            <Flex className="flex-col space-y-8 inter-semibold">
                                <p className="text-[0.76rem] text-gray-500 inter-normal">INTEGRATIES</p>
                                <Flex className="text-[0.9rem]">
                                    <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                                        <Link to="/integraties/woocommerce">WooCommerce</Link>
                                        <p>Shopify</p>
                                        <Link to="/integraties/ccv-shop">CCV Shop</Link>
                                        <p>Lightspeed</p>
                                        <p>Magento</p>
                                        <p>Mijnwebwinkel</p>
                                        <p>Ecwid</p>
                                        <p>Wix</p>
                                        <p>PrestaShop</p>
                                        <p>Bol.com</p>
                                        <p>Lyra</p>
                                        <p>GoedGepickt</p>
                                    </div>
                                </Flex>
                            </Flex>
                        </Flex>
                        <div className="h-[0.8px] w-[80%] mx-auto bg-gray-300 flex lg:hidden mt-5" />
                        
                    </Flex>
                     <div className="h-[0.8px] w-[80%] mx-auto bg-gray-300 flex lg:hidden mt-5" />
                    <Flex className="lg:w-[30%] lg:pt-0 pt-6 flex-col pl-2 lg:pl-40 space-y-5" />
                    <div className="h-[0.8px] w-[80%] mx-auto bg-gray-300 flex lg:hidden mt-5" />
                    <Flex className="lg:hidden flex lg:flex-row flex-col lg:pt-0 pt-4 inter-semibold justify-between">
                        <Flex className="lg:flex-row flex-col sm:space-y-0 space-y-4 text-[0.9rem] lg:space-x-6">
                            <Flex className="space-x-1 items-center">
                                <FaRegCopyright />
                                <p>2026 Sendwise</p>
                            </Flex>
                            <Flex className="grid lg:grid-cols-2 grid-cols-2 gap-1 lg:pt-0 pt-2">
                                <Link className="whitespace-nowrap" to="/algemene-voorwaarden">Algemene voorwaarden</Link>
                                <Link className="whitespace-nowrap" to="/privacy">Privacy voorwaarden</Link>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                
                <Flex className="hidden lg:flex inter-semibold justify-between">
                    <Flex className=" text-[0.9rem] space-x-6">
                        <Flex className="space-x-1 items-center">
                            <FaRegCopyright />
                            <p>2026 Sendwise</p>
                        </Flex>
                        <Link to="/algemene-voorwaarden">Algemene voorwaarden</Link>
                        <Link to="/privacy">Privacy voorwaarden</Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Footer;
