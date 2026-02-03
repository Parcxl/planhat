import { Flex } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Cookie from "./Cookie";

const Header = () => {
    return (
        <Flex className="flex-col">
            <Navbar />
            <div id="site-content">
                <Cookie />
                <Outlet />
                <Footer />
            </div>
        </Flex>
    );
};

export default Header;
