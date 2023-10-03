import { useState } from 'react'
import streetGoatHome from '../static/images/streetgoat/streetgoat_homepage.png'
import streetGoatShop from '../static/images/streetgoat/streegoat_shoppage.png'
import NavItem from "./common/navitem"





const StreetGoat = () => {
    const [homeHover, setHomeHover] = useState(false)

    const handleHomeHoverEnter = (e) => {
        e.stopPropagation()
        setHomeHover(true)
    }

    const handleHomeHoverLeave = (e) => {
        e.stopPropagation()
        setHomeHover(false)
    }
    

    return (
        <>
        <div className="lg:grid lg:grid-cols-6 w-screen h-screen lg:mb-0 mb-20">
            <div className="col-span-4 lg:row-span-2 md:mx-4  " >
                    <div onMouseEnter={(e) => { handleHomeHoverEnter(e) }} onMouseOut={(e) => { handleHomeHoverLeave(e) }}>
                    <img className="pointer-events-none lg:h-full md:w-auto md:mx-auto" src={streetGoatHome} />
                    </div>   
                    </div>
                    <div className="lg:col-span-2 lg:mr-8 md:pl-4 lg:block hidden h-16">
                        <img className="hidden lg:block" src={streetGoatShop} />
                    </div>
                    <div className="col-span-2 lg:mr-4 lg:-my-16 h-96">
                    <h2 className='text-white prompt text-4xl uppercase font-bold md:mx-4  lg:pr-0 md:pr-4 text-center mt-16'>Street Goat</h2>
                        <p className='text-white prompt font-light m-4 md:pr-4'>I supported the brand re-design of the project as well as designing and developing a brand new e-commerce website for the project. My favourite part of working on this project was taking the adorable goat photos.</p>
                        <div  className="flex justify-center items-center lg:-my-8">
                            <NavItem url={'https://streetgoat.co.uk'} label={'view'} size={3}/>
                        </div>
                </div>
        </div>
       
        </>
    )
}
export default StreetGoat