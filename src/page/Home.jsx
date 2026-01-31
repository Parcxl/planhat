import { Flex } from "antd";
import Main from "../components/Home/Main";
import Industry from "../components/Home/Industry";
import Journey from "../components/Home/Journey";
import Works from "../components/Home/Works";
import Services from "../components/Home/Services";

const Home = () => {
    return (
        <Flex className="flex-col lg:space-y-10 md:space-y-32 sm:space-y-40 space-y-6 w-[100%] mb-10 overflow-hidden">
            <Main />
            <Industry />
            <Journey />
            <Works />
            <Services />
        </Flex>
    );
};

export default Home;
