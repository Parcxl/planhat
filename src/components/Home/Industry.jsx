import { Flex } from "antd";

const Industry = () => {
    return (
        <Flex className="inter-medium flex-col items-center space-y-6">
            <p className="pl-3 text-center">Industry leaders trust Planhat to grow their revenue</p>
            <Flex className="grid md:grid-cols-5 sm:grid-cols-4 justify-center lg:w-[77%] sm:w-[90%] w-[100%] mx-auto">
                <img src="/trend.svg" alt="" className=" sm:h-[5rem]" />
                <img src="/telia.svg" alt="" className=" sm:h-[5rem]" />
                <img src="/anthlogy.svg" alt="" className="sm:h-[5rem]" />
                <img src="/kick.svg" alt="" className=" sm:h-[5rem]" />
                <img src="/nautanix.svg" alt="" className=" sm:h-[5rem]" />
                <img src="/customer.svg" alt="" className=" sm:h-[5rem]" />
                <img src="/trust.svg" alt="" className=" sm:h-[5rem]" />
                <img src="/dialpad.svg" alt="" className=" sm:h-[5rem]" />
                <img src="/nasdaq.svg" alt="" className=" sm:h-[5rem]" />
                <img src="/med.svg" alt="" className=" sm:h-[5rem]" />
            </Flex>
        </Flex>
    );
};

export default Industry;