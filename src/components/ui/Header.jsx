import { Flex } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Cookie from "./Cookie";

const Header = () => {
    return (
        <Flex className="flex-col">
            <Cookie/>
            <Navbar />
            <Outlet />
            <Footer />
        </Flex>
    );
};

export default Header;