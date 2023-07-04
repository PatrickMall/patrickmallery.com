import { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./common/navitem";
import { Spin as Hamburger } from 'hamburger-react'
const NavBar = ({ logo }) => {

    const [isOpen, setOpen] = useState(false)
    
    const closeMenu = () => {
        setOpen(false)
    }
    return (
        <div className="navbar">   
            <div className="flex justify-between item-center">
                <Link to="/"><img src={logo} alt="logo" className="w-12 ml-8 mt-8 fixed z-10" /></Link>
                <div className="lg:flex fixed right-0 z-10 hidden">
                    <NavItem url={'/about'} label={'about'} />
                    <NavItem url={'/portfolio'} label={'portfolio'} />
                    <NavItem url={'/contact'} label={'contact'} />
                </div>
                <div className=" lg:hidden fixed right-8 top-8 z-10">
                    <Hamburger color="#f4f4f4" size={64} rounded toggled={isOpen} toggle={setOpen}/>
                </div>
            </div>
            {isOpen && (<div className="z-10 absolute bg-black w-full pt-32 pb-8 z-0">
                <div onClick={closeMenu}>
                    <NavItem url={'/about'} label={'about'} />
                </div>
                <div  onClick={closeMenu}>
                    <NavItem url={'/portfolio'} label={'portfolio'} />
                </div>
                <div  onClick={closeMenu}>
                    <NavItem url={'/contact'} label={'contact'} />
                </div>
            </div>)}
            
            </div>
       
    )
}
        export default NavBar