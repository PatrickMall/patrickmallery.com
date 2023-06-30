import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/navbar";
import logo from './static/images/logo v1.png'
import Footer from "./components/footer";
import ContactModal from "./components/contact-modal";
import HomeText from "./components/home-text";
import About from "./components/about";
import Portfolio from "./components/portfolio";
const App = () => {

  console.log(`
  ╔═╦╗────╔╗╔╗─────────╔╗────────────╔╗───╔╗───╔══╗
  ║╔╣╚╦═╦═╣╠╬╬═╦╦═╗╔═╦╦╣╚╗╔══╦╦╗╔═╦═╦╝╠═╗─║╚╦═╦╬╦╗║
  ║╚╣║║╩╣═╣═╣║║║║╬║║╬║║║╔╣║║║║║║║═╣╬║╬║╩╬╗║║║╩╣║╠╔╝
  ╚═╩╩╩═╩═╩╩╩╩╩═╬╗║╚═╩═╩═╝╚╩╩╬╗║╚═╩═╩═╩═╩╣╚╩╩═╬╗╠╣
  ──────────────╚═╝──────────╚═╝─────────╝────╚═╩╝`)
  return (
    <div>
      <div className="h-screen w-full bg-[url('./static/images/Portfolio_3.png')] overflow-y-auto bg-center ">
        <div>
        <NavBar logo={logo} />
        <Routes>
          <Route path={"/contact"} element={<ContactModal />} />
          <Route path={"/"} element={<HomeText />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/portfolio"} element={<Portfolio />} />
          </Routes>
          </div>
      <Footer />
      </div>
      </div>
  );
}

export default App;
