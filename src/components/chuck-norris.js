import { useState } from 'react'
import NavItem from "./common/navitem"
import JokeHome from "../static/images/chuck-norris/screencapture-patrickmall-github-io-2023-07-03-15_10_18.png"
import JokFavorites from "../static/images/chuck-norris/screencapture-patrickmall-github-io-Favourites-2023-07-03-15_11_21.png"


const ChuckNorris = () => {
    return (
        <>
        <div className="lg:grid grid-cols-6 grid-rows-3 w-screen h-screen lg:mb-0 mb-20">
            <div className="col-span-6 mx-4 lg:-mb-64 lg:h-64" >
                    <div className='cols-span-3 row-span-1'>
                        <h2 className='text-white prompt text-4xl uppercase font-bold text-center'>Chuck Norris Joke Generator</h2>
                        <p className='text-white prompt font-light mt-4 md:mx-4 mx-2'>I designed and developed the Chuck Norris joke generator as a student project at General Assembly. Using a public API (api.chucknorris.io/), I incorporated the joke inputs to develop an application which delivers randomised Chuck Norris jokes which could be filtered by category. During this project I used React and I developed a keen interest in growing my skill with this framework.</p>
                        <div  className="flex justify-center items-center lg:-mt-4 mt-4 lg:mb-0 mb-8">
                            <NavItem url={'https://patrickmall.github.io/Project-2---Chuck-Norris-Joke-Generator-in-React/'} label={'view'} z={0}  size={3}/>
                            <NavItem url={'https://github.com/PatrickMall/Project-2---Chuck-Norris-Joke-Generator-in-React/blob/master/README.md'} label={'readme'} z={0} size={3}/>
                    </div>  
                        
                    </div> 
                </div>
                <div className="col-span-3 row-span-2 mx-auto lg:w-11/12 lg:-mt-16">
                    <img className="mx-auto" src={JokeHome} />
                </div>
                <div className="col-span-3 row-span-2 mx-auto w-11/12 lg:block hidden lg:-mt-16">
                    <img className="mx-auto" src={JokFavorites} />
                </div>

                    
                    
               
        </div>
        </>
    )
}
export default ChuckNorris