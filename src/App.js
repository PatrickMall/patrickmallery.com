import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/navbar";
import logo from './static/images/white high res version.png'
import Footer from "./components/footer";
import ContactModal from "./components/contact-modal";
const App = () => {
  const [contactToggle, setContactToggle] = useState(false)

  const handleContactClick = () => {
    console.log('clicked')
  }
  return (
    <div className="h-screen w-full bg-[url('./static/images/Portfolio_3.png')]">
      <NavBar logo={logo} contactClick={handleContactClick} />
      <h1 className="text-white prompt text-6xl uppercase font-bold mt-64 ml-32">Hello, I'm <span className="text-gradient-animation1">Patrick</span></h1>
      <h2 className="text-white prompt text-3xl uppercase font-light ml-32 mt-8">I build exceptional digital <br />experiences for ethical brands</h2>
      <ContactModal />
      <Footer />
    </div>
  );
}

export default App;
