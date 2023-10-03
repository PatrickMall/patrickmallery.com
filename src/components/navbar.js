import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavItem from "./common/navitem";
import { Spin as Hamburger } from 'hamburger-react'
const NavBar = ({ logo}) => {

    const [isOpen, setOpen] = useState(false)
    
    const closeMenu = () => {
        setOpen(false)
    }

    
    return (
        <div className="navbar">   
            <div className="flex justify-between item-center z-20">
                <Link to="/"><img src={logo} alt="logo for patrickmallery.com" className="w-12 ml-8 mt-8 fixed z-20" onClick={closeMenu}/></Link>
                <div className="lg:flex absolute right-0 z-10 hidden">
                    <NavItem url={'/about'} label={'about'} z={10} size={3}/>
                    <NavItem url={'/portfolio'} label={'portfolio'} z={10} size={3} />
                    <NavItem url={'/contact'} label={'contact'} z={10} size={3}/>
                </div>
                <div className=" lg:hidden fixed right-8 top-8 z-20">
                    <Hamburger color="#f4f4f4" size={64} rounded toggled={isOpen} toggle={setOpen}/>
                </div>
            </div>
            {isOpen && (<div className="z-10 absolute bg-black w-full pb-8 fade-in">
                <div onClick={closeMenu} className="w-1/4 pt-20 slide-in">
                    <NavItem url={'/about'} label={'about'} z={10} />
                </div>
                <div  onClick={closeMenu} className="w-1/4 slide-in-1">
                    <NavItem url={'/portfolio'} label={'portfolio'} z={10} />
                </div>
                <div  onClick={closeMenu} className="w-1/4 slide-in-2">
                    <NavItem url={'/contact'} label={'contact'}z={10} />
                </div>
            </div>)}
            
            </div>
       
    )
}
        export default NavBar