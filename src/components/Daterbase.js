import { useState } from 'react'
import NavItem from "./common/navitem"
import daterbaseHome from "../static/images/daterbase/screencapture-daterbase-netlify-app-2023-07-01-19_51_00.png"
import daterbaseBrowser from "../static/images/daterbase/screencapture-daterbase-netlify-app-browse-2023-07-01-19_52_06.png"
import daterbaseSurvey from "../static/images/daterbase/screencapture-daterbase-netlify-app-survey-2023-07-01-19_52_49.png"


const Daterbase = () => {
    
    

    return (
        <>
        <div className="md:grid grid-cols-6 w-screen h-screen mb-8 md:mb-20 lg:mb-0">
            <div className="lg:col-span-2 md:col-span-6 row-span-3 mx-4 " >
                    <div className='lg:w-full md:w-96 mx-auto lg:h-full w-64'>
                    <img className="pointer-events-none" src={daterbaseHome} />
                    </div>   
                    </div>
                    
                    <div className="lg:col-span-2 md:col-span-6 lg:mr-4 md:mt-0 mt-8">
                        <h2 className='text-white prompt text-4xl uppercase font-bold text-center md:-mt-20 mb-4'>DaterBase</h2>
                        <p className='text-white prompt font-light md:m-4 m-2'>Together with three other developers I designed and developed a dating app for Tech professionals from concept through to delivery. This was a Fullstack MERN application and I worked on both the Backend and Frontend as well as leading on the UX, styling and layout. I also developed my skills and understanding of Tailwind CSS through working on this project.</p>
                        <div  className="flex justify-center items-center lg:-mt-8 mb-8">
                            <NavItem url={'https://daterbase.netlify.app/'} label={'view'} size={3}/>
                            <NavItem url={'https://github.com/PatrickMall/project-3-frontend-for-readme/blob/main/README.md'} label={'readme'} size={3}/>
                    </div>  
                    <img className="mx-auto lg:block hidden" src={daterbaseSurvey} />
                </div>
                <div className="mr-4 col-span-2 flex">
                        <img className="h-5/6 mr-16 lg:block hidden" src={daterbaseBrowser} />
                    </div>  
        </div>
        </>
    )
}
export default Daterbase