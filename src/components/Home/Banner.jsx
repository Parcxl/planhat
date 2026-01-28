import { Flex } from "antd";
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
    return (
        <Flex className="flex-col">
            <Flex className="lg:flex-row flex-col w-[100%] lg:h-[26rem]">
                <Flex className="lg:h-full h-[18rem] lg:w-[50%] items-center justify-center bg-[#F2F2F2] group relative border-2 border-[#F2F2F2] border-r-white">
                    <video src="/video.mp4" autoPlay muted loop playsInline className="group-hover:opacity-100 opacity-0 object-cover z-10 absolute w-full h-full" />
                    <Flex className="flex-col z-20 lg:pl-0 pl-5 group-hover:text-white ">
                        <p className="inter-semibold lg:leading-[2.4rem] lg:text-[2rem] text-[1.4rem] lg:w-[70%]">Powering 2.6 million customers.</p>
                        <p className="pt-3 inter-medium lg:text-[1.2rem] lg:w-[60%]">See the impact we're making in the world.</p>
                        <Flex className="mt-9 group-hover:backdrop-blur-md group-hover:bg-white/10 group-hover:border-transparent group-hover:text-white text-black inter-medium border border-black w-[9.5rem] items-center space-x-4 cursor-pointer text-[0.9rem] hover:bg-white pl-4 py-1 rounded-3xl">
                            <p>Our impact</p>
                            <Flex className="group-hover:bg-[#D44A00] rounded-full p-2 text-[1.5rem]">
                                <GoArrowUpRight />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="lg:h-full h-[18rem] lg:w-[50%] items-center group justify-center bg-[#F2F2F2] border-2 border-[#F2F2F2] relative border-r-white">
                    <video src="/video1.mp4" autoPlay muted loop playsInline className="z-10 group-hover:opacity-100 opacity-0 object-cover z-10 absolute w-full h-full" />
                    <Flex className="flex-col lg:pl-0 pl-5 z-20 group-hover:text-white">
                        <p className="inter-semibold lg:leading-[2.4rem] lg:text-[2rem] text-[1.4rem] ">No passengers.</p>
                        <p className="inter-semibold lg:leading-[2.4rem] lg:text-[2rem] text-[1.4rem] ">We're all crew.</p>
                        <p className="pt-3 inter-medium lg:text-[1.2rem] lg:w-[60%]">We're always got missions for the curious and daring.</p>
                        <Flex className="mt-9 group-hover:backdrop-blur-md group-hover:bg-white/10 group-hover:border-transparent text-black group-hover:text-white inter-medium border border-black w-[9.5rem] items-center space-x-4 cursor-pointer text-[0.9rem] hover:bg-white pl-4 py-1 rounded-3xl">
                            <p>Apply now</p>
                            <Flex className="group-hover:bg-[#D44A00] rounded-full p-2 text-[1.5rem]">
                                <GoArrowUpRight />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex className="lg:flex-row flex-col group w-[100%] h-[26rem] ">
                <Flex className=" lg:w-[50%] items-center justify-center ">
                    <Flex className="flex-col z-20 lg:pt-0 pt-10 lg:pl-0 pl-5">
                        <p className="inter-semibold leading-[2.4rem] lg:text-[2rem] text-[1.4rem] lg:w-[70%]">Powering 2.6 million customers.</p>
                        <p className="pt-3 inter-medium text-[1.2rem] lg:w-[60%]">See the impact we're making in the world.</p>
                        <Flex className="mt-9 group-hover:backdrop-blur-md group-hover:bg-white/10  text-black inter-medium border border-black w-[12rem] items-center space-x-4 cursor-pointer text-[0.9rem] hover:bg-white pl-4 py-1 rounded-3xl">
                            <p>Request a demo</p>
                            <Flex className="group-hover:bg-black group-hover:text-white rounded-full p-2 text-[1.5rem]">
                                <GoArrowUpRight />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="lg:w-[50%]">
                    <img src="/banner.png" alt="" className="" />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Banner;