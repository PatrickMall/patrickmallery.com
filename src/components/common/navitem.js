import { Link } from "react-router-dom"
const NavItem = ({ url, label, z, size}) => {
    return (
        <>
            <div className={`mx-16 mt-8 z-${z}`}>
                    <Link to={url}>
                    <span className={`underline_animation1 z-${z}`}>
                            <span className={`underline_animation2 z-${z}`}>
                                <span className={`underline_animation3 z-${z}`}>
                                <span className={`text-white text-${size}xl prompt uppercase font-bold underline_animation1 underline_animation4 text-gradient-animation1 z-${z}`}>
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