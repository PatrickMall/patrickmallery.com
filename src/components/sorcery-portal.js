import { useState } from 'react'
import sorceryHome from '../static/images/sorcery-portal/screencapture-portal-sorcery-design-2023-06-30-19_49_32.png'
import sorceryDashboard from '../static/images/sorcery-portal/screencapture-portal-sorcery-design-questionnaire-2023-06-30-20_06_52.png'
import NavItem from "./common/navitem"





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
                    <img className="pointer-events-none lg:h-full  md:w-auto md:mx-auto" src={sorceryHome} />
                    </div>   
                    </div>
                    <div className="lg:col-span-2 lg:mr-4 md:pl-4 lg:block hidden h-16">
                        <img className="hidden lg:block" src={sorceryDashboard} />
                    </div>
                    <div className="col-span-2 lg:mr-4 lg:-my-16">
                    <h2 className='text-white prompt text-4xl uppercase font-bold md:mx-4  lg:pr-0 md:pr-4 text-center mt-8'>Sorcery Portal</h2>
                        <p className='text-white prompt font-light m-4 md:pr-4'>I built an application designed to collect design briefs from Sorcery Design’s web design clients. This was to streamline the client onboarding process and ensure the team have all the core information they need to begin work on a project. It is a full stack application using Ruby on Rails for the Backend and React for the Frontend.</p>
                        <div  className="flex justify-center items-center lg:-mt-8">
                            <NavItem url={'https://portal.sorcery.design'} label={'view'} size={3}/>
                            <NavItem url={'https://github.com/PatrickMall/sorcery-portal-frontend/blob/main/README.md'} label={'readme'} size={3}/>
                        </div>
                </div>
        </div>
       
        </>
    )
}
export default SorceryPortal