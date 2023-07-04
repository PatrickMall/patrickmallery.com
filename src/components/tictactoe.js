import { useState } from 'react'
import NavItem from "./common/navitem"
import TacHome from "../static/images/tic-tac-toe/screencapture-patrickmall-github-io-tic-tac-toe-2023-07-03-17_07_45.png"
import TacGame from "../static/images/tic-tac-toe/screencapture-patrickmall-github-io-tic-tac-toe-2023-07-03-17_09_29.png"


const TicTacToe = () => {
    return (
        <>
        <div className="grid grid-cols-6  grid-rows-3 w-screen h-screen">
            <div className="col-span-2 mx-4 -mb-64" >
                    <div>
                        <h2 className='text-white prompt text-4xl uppercase font-bold text-center'>Tic Tac Toe</h2>
                        <p className='text-white prompt font-light m-4'>For this project I used JavaScript to build a lot of the logic involved in making this game. I also put a lot of working into the styling and general feel of this application using a lot of hover effects and CSS animations. I am really pleased with the colour selector feature where you can pick a preset or select your own from the form colour input. The background video was edited using Adobe Premiere Pro and added to give the 80’s styling to my application.</p>
                        <div  className="flex justify-center items-center -mt-8">
                            <NavItem url={'https://patrickmall.github.io/tic-tac-toe/'} label={'view'}/>
                            <NavItem url={'https://github.com/PatrickMall/tic-tac-toe/blob/main/README.md'} label={'readme'}/>
                    </div>  
                        
                    </div> 
                </div>
                <div className="col-span-4 mx-4">
                    <img className="mx-auto" src={TacHome} />
                </div>
                <div className="col-span-2 mx-4">
                    <img className="mx-auto" src={TacGame} />
                </div>

                    
                    
               
        </div>
        </>
    )
}
export default TicTacToe