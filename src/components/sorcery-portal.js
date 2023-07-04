import { useState } from 'react'
import sorceryHome from '../static/images/sorcery-portal/screencapture-portal-sorcery-design-2023-06-30-19_49_32.png'
import sorceryDashboard from '../static/images/sorcery-portal/screencapture-portal-sorcery-design-questionnaire-2023-06-30-20_06_52.png'
import NavItem from "./common/navitem"
import scroll from "../static/lottie/H7nMnAjeEJ.json"
import { Link } from 'react-router-dom'




const SorceryPortal = () => {
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
        <div className="lg:grid lg:grid-cols-6 w-screen h-screen">
            <div className="col-span-4 lg:row-span-2 md:mx-4  " >
                    <div onMouseEnter={(e) => { handleHomeHoverEnter(e) }} onMouseOut={(e) => { handleHomeHoverLeave(e) }}>
                    {!homeHover && (<img className="pointer-events-none lg:h-full md:h-80 md:w-auto md:mx-auto" src={sorceryHome} />)}
                    {homeHover && (
                            <div className='relative pointer-events-none'>
                                <div className='border border-white absolute z-10 w-11/12 h=11/12 m-12 bg-black-transparent pointer-events-none'>
                            <p className=' text-white m-16 prompt font-light pointer-events-none'>Sorcery Design understands the challenges faced by ethical entrepreneurs and organizations striving to make a difference in the digital world. That's why we've created Sorcery Portal—a powerful tool that enables seamless collaboration between us and our clients.<br /><br />
                                Through Sorcery Portal, clients can easily navigate a series of thought-provoking questions and information gathering, helping us understand their vision and requirements. This allows us to craft a tailor-made identity system and website for their business.<br /><br />
                                With a user-friendly sign-in portal, clients experience a smooth onboarding process. Once they complete the questionnaire, their answers are securely stored in our database, powered by the reliable Rails framework. Users receive a confirmation email, ensuring prompt communication.<br /><br />
                                Sorcery Portal revolutionises our client collaboration, ensuring open communication and meticulous attention to detail. Experience the magic of collaboration with Sorcery Portal and let us bring your vision to life, making a lasting impact in the digital realm.</p>
                                    
                                </div>
                                <img className="filter blur-sm" src={sorceryHome} />
                        </div>
                        )}
                    </div>   
                    </div>
                    <div className="lg:col-span-2 lg:mr-4 md:pl-4 lg:block hidden h-32">
                        <img className="hidden lg:block" src={sorceryDashboard} />
                    </div>
                    <div className="col-span-2 lg:mr-4 lg:-my-16">
                    <h2 className='text-white prompt text-4xl uppercase font-bold md:mx-4  lg:pr-0 md:pr-4 text-center mt-8'>Sorcery Portal</h2>
                        <p className='text-white prompt font-light m-4 md:pr-4'>I wanted to build something that would likely be used in the real world. I decided to build a website design brief collecting application. This application has a series of questions to collect data from clients for my partner's branding business which she can then use to create their identity system and website mockup designs. It is a full stack application using Ruby on Rails for the back end and React for the front end.</p>
                        <div  className="flex justify-center items-center lg:-mt-8">
                            <NavItem url={'https://portal.sorcery.design'} label={'view'}/>
                            <NavItem url={'https://github.com/PatrickMall/sorcery-portal-frontend/blob/main/README.md'} label={'readme'}/>
                        </div>
                </div>
        </div>
       
        </>
    )
}
export default SorceryPortal