import { useState } from 'react'
import NavItem from "./common/navitem"
import daterbaseHome from "../static/images/daterbase/screencapture-daterbase-netlify-app-2023-07-01-19_51_00.png"
import daterbaseBrowser from "../static/images/daterbase/screencapture-daterbase-netlify-app-browse-2023-07-01-19_52_06.png"
import daterbaseSurvey from "../static/images/daterbase/screencapture-daterbase-netlify-app-survey-2023-07-01-19_52_49.png"


const Daterbase = () => {
    
    

    return (
        <>
        <div className="grid grid-cols-6 w-screen h-screen">
            <div className="col-span-2 row-span-3 mx-4 " >
                    <div>
                    <img className="pointer-events-none" src={daterbaseHome} />
                    </div>   
                    </div>
                    
                    <div className="col-span-2 mr-4">
                        <h2 className='text-white prompt text-4xl uppercase font-bold text-center'>DaterBase</h2>
                        <p className='text-white prompt font-light m-4'>For this project I worked with 3 other developers on a dating app for Tech professionals, This was a full stack MERN application that brought together everything we had learned from unit 3. For this project I worked on both the back and front end and did a large part of the styling for the application. I also learnt tailwind CSS through working on this project.</p>
                        <div  className="flex justify-center items-center -mt-8 mb-8">
                            <NavItem url={'https://daterbase.netlify.app/'} label={'view'}/>
                            <NavItem url={'https://github.com/PatrickMall/project-3-frontend-for-readme/blob/main/README.md'} label={'readme'}/>
                    </div>  
                    <img className="mx-auto" src={daterbaseSurvey} />
                </div>
                <div className="mr-4 col-span-2 flex">
                        <img className="h-5/6 mr-16" src={daterbaseBrowser} />
                    </div>  
        </div>
        </>
    )
}
export default Daterbase