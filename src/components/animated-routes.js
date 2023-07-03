import ContactModal from "../components/contact-modal";
import HomeText from "../components/home-text";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import { Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={"/contact"} element={<ContactModal />} />
                <Route path={"/"} element={<HomeText />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/portfolio"} element={<Portfolio />} />
            </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoutes