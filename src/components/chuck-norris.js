import { useState } from 'react'
import NavItem from "./common/navitem"
import JokeHome from "../static/images/chuck-norris/screencapture-patrickmall-github-io-2023-07-03-15_10_18.png"
import JokFavorites from "../static/images/chuck-norris/screencapture-patrickmall-github-io-Favourites-2023-07-03-15_11_21.png"


const ChuckNorris = () => {
    return (
        <>
        <div className="grid grid-cols-6 w-screen h-screen">
            <div className="col-span-6 mx-4 -mb-64 h-64" >
                    <div>
                        <h2 className='text-white prompt text-4xl uppercase font-bold text-center'>Chuck Norris Joke Generator</h2>
                        <p className='text-white prompt font-light m-4'>The Chuck Norris joke generator was my second project at General Assembly, for this I used a public API (api.chucknorris.io/) to get the joke inputs for my application. I also utilised the category filter in the API to select different categories. For this project I used React for the first time and also a lot of CSS styling. The background image was created using Adobe Photoshop. I am most pleased with the conditional styling in this project on the favourites page and the subtle but stylish hover transitions on the buttons.</p>
                        <div  className="flex justify-center items-center -mt-8">
                            <NavItem url={'https://patrickmall.github.io/Project-2---Chuck-Norris-Joke-Generator-in-React/'} label={'view'}/>
                            <NavItem url={'https://github.com/PatrickMall/Project-2---Chuck-Norris-Joke-Generator-in-React/blob/master/README.md'} label={'readme'}/>
                    </div>  
                        
                    </div> 
                </div>
                <div className="col-span-3 mx-auto w-11/12 -mt-8">
                    <img className="mx-auto" src={JokeHome} />
                </div>
                <div className="col-span-3 mx-auto w-11/12 -mt-8">
                    <img className="mx-auto" src={JokFavorites} />
                </div>

                    
                    
               
        </div>
        </>
    )
}
export default ChuckNorris