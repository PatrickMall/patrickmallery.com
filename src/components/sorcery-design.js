
import NavItem from "./common/navitem"
import SorceryHome from "../static/images/sorceryDesign/sorcery_design_home.png"
import SorceryBooking from "../static/images/sorceryDesign/sorcery_design_booking.png"


const SorceryDesign = () => {
    return (
        <>
        <div className="lg:grid grid-cols-6 grid-rows-3 w-screen h-screen lg:mb-0 mb-20">
            <div className="col-span-6 mx-4 lg:-mb-64 lg:h-64" >
                    <div className='cols-span-3 row-span-1'>
                        <h2 className='text-white prompt text-4xl uppercase font-bold text-center'>Sorcery Design</h2>
                        <p className='text-white prompt font-light mt-4 md:mx-4 mx-2 lg:text-center'>I designed and developed the website for Sorcery Design, a web design and branding agency. My favourite feature I created in this project is the burger menu and the brand video.</p>
                        <div  className="flex justify-center items-center lg:-mt-4 lg:mb-0 mb-8">
                            <NavItem url={'https://sorcery.design'} label={'view'} z={0}  size={3}/>
                            
                    </div>  
                        
                    </div> 
                </div>
                <div className="col-span-3 row-span-2 mx-auto lg:w-11/12 lg:-mt-16">
                    <img className="mx-auto" src={SorceryHome} />
                </div>
                <div className="col-span-3 row-span-2 mx-auto w-11/12 lg:block hidden lg:-mt-16">
                    <img className="mx-auto" src={SorceryBooking} />
                </div>

                    
                    
               
        </div>
        </>
    )
}
export default SorceryDesign