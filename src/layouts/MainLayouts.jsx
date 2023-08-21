import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const MainLayouts = () => {
    return (
        <section className="container">
            <Navbar />
            <Outlet />
        </section>
    );
};

export default MainLayouts;