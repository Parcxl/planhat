import { Flex } from "antd";
import Main from "../components/Home/Main";
import Industry from "../components/Home/Industry";
import Journey from "../components/Home/Journey";
import Works from "../components/Home/Works";
import Services from "../components/Home/Services";
import Tools from "../components/Home/Tools";
import Company from "../components/Home/Company";
import Banner from "../components/Home/Banner";

const Home = () => {
    return (
        <Flex className=" flex-col space-y-10 w-[100%] mb-10 overflow-hidden">
            <Main />
            <Industry />
            <Journey />
            <Works />
            <Services />
            <Tools />
            <Company />
            <Banner />
        </Flex>
    );
};

export default Home;