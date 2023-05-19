import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/navbar";
import logo from './static/images/white high res version.png'

const App = () =>{
  return (
    
    <div className="h-screen w-full bg-[url('./static/images/portfolio-BG1.png')]">
      <NavBar logo={logo} />
      <h1 className="text-white prompt text-6xl uppercase font-bold">Hello, I'm Patrick</h1>
      <h2 className="text-white prompt text-3xl uppercase font-light">I build exceptional digital <br />experiences for ethical brands</h2>

    </div>
  );
}

export default App;
