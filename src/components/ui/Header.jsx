import { Flex } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <Flex className="flex-col">
            <Navbar />
            <div id="site-content">
                <Outlet />
                <Footer />
            </div>
        </Flex>
    );
};

export default Header;
