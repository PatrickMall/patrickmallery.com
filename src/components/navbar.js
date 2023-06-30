import { useState } from "react";
import NavItem from "./common/navitem";
const NavBar = ({ logo }) => {


    return (
        <div className="navbar bg-black">   
            <div className="flex justify-between item-center">
                <img src={logo} alt="logo" className="w-12 ml-8 mt-8 fixed" />
                <div className="flex fixed right-0">
                    <NavItem url={'/about'} label={'about'} />
                    <NavItem url={'/portfolio'} label={'portfolio'} />
                    <NavItem url={'/contact'} label={'contact'} />
                </div>
            </div>
            </div>
       
    )
}
        export default NavBar