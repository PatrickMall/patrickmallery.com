import { Link } from "react-router-dom"
const NavItem = ({ url, label, margin}) => {
    return (
        <>
                <div className="mx-16 mt-8 z-10">
                    <Link to={url}>
                        <span className="underline_animation1 z-10">
                            <span className="underline_animation2 z-10">
                                <span className="underline_animation3 z-10">
                                    <span className="text-white text-3xl prompt uppercase font-bold underline_animation1 underline_animation4 text-gradient-animation1 z-10">
                                        {label}
                                    </span>
                                </span>
                            </span>
                        </span>
                    </Link>
                </div> 
            </>
    
    )
}
export default NavItem