import { Flex } from "antd";

const logos = [
    "/boxxl.png",
    "/solza-logo.png",
    "/ferrachi.png",
    "/strong-desire.png",
    "/devision.png",
];

const Industry = () => {
    return (
        <Flex className="inter-medium flex-col items-center space-y-6 sm:mt-0 -mt-32">
            <p className="pl-3 text-center">Het verzendplatform voor schaalbare teams</p>

            {/* Desktop grid */}
            <Flex className="hidden sm:grid md:grid-cols-5 sm:grid-cols-4 justify-items-center items-center justify-center lg:w-[77%] sm:w-[90%] w-[100%] mx-auto gap-4">
                <img src="/boxxl.png" alt="" className=" sm:h-[5rem]" />
                <img src="/solza-logo.png" alt="" className=" sm:h-[5rem]" />
                <img src="/ferrachi.png" alt="" className="sm:h-[7rem]" />
                <img src="/strong-desire.png" alt="" className=" sm:h-[7rem]" />
                <img src="/devision.png" alt="" className=" sm:h-[7rem]" />
            </Flex>

            {/* Mobile marquee */}
            <div className="sm:hidden w-full overflow-hidden">
                <div className="industry-marquee">
                    {[...logos, ...logos].map((src, index) => (
                        <img key={`${src}-${index}`} src={src} alt="" className="industry-logo" />
                    ))}
                </div>
            </div>
        </Flex>
    );
};

export default Industry;
