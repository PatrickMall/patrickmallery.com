import { useState } from "react"
const SocialIcon = ({ brand }) => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = (e) => {
        e.stopPropagation()
        setIsHover(true)
    }
    const handleMouseLeave = (e) => {
        e.stopPropagation()
       setIsHover(false)
        
    }
    return (
        <>
        {!isHover && (<div className="icon inline md:mr-20 mr-12" onMouseLeave={(e) => { handleMouseLeave(e) }}>
                    <i className={brand === 'fa-facebook-f' ? `fa-brands fa-2xl px-1 media-icon ${brand}` : `fa-brands py-2 fa-2xl media-icon ${brand}`} onMouseEnter={(e) => { handleMouseEnter(e) }} ></i>  
            </div >)}
        {isHover && (<div className="icon1 inline mr-20" onMouseLeave={(e) => { handleMouseLeave(e) }}>
                    <i className={brand === 'fa-facebook-f' ? `fa-brands fa-2xl px-1 media-icon1 ${brand}` : `fa-brands py-2 fa-2xl media-icon1 ${brand}`} onMouseEnter={(e) => { handleMouseEnter(e) }} ></i>  
            </div >)}
        </>
    )
}
export default SocialIcon