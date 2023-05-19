import { Link } from "react-router-dom"
const NavItem = ({url, label}) => {
    return (
        <div className="mx-16">
            <Link to={url}>
                <span className="underline_animation1">
                    <span className="underline_animation2">
                        <span className="underline_animation3">
                            <span className="text-white text-3xl prompt uppercase font-bold underline_animation1 underline_animation4 text-gradient-animation1">
                                {label}
                            </span>
                    </span>
                </span>
            </span> 
        </Link>
    </div> 
    )
}
export default NavItem