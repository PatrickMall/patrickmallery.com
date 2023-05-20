import NavItem from "./common/navitem";
const NavBar = ({ logo }) => {
    return (
        <div className="navbar">

                
                
                
            <div className="flex justify-between item-center">
                <img src={logo} alt="logo" className="w-20 ml-4 pt-4" />
                <div className="flex mt-12">
                    <NavItem url={'/about'} label={'about'} />
                    <NavItem url={'/portfolio'} label={'portfolio'} />
                    <NavItem url={'/contact'} label={'contact'} />
                </div>
            </div>
            </div>
       
    )
}
        export default NavBar;