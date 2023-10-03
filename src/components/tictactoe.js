
import NavItem from "./common/navitem"
import TacHome from "../static/images/tic-tac-toe/screencapture-patrickmall-github-io-tic-tac-toe-2023-07-03-17_07_45.png"
import TacGame from "../static/images/tic-tac-toe/screencapture-patrickmall-github-io-tic-tac-toe-2023-07-03-17_09_29.png"


const TicTacToe = () => {
    return (
    
        <div className="lg:grid grid-cols-6  grid-rows-3 w-screen h-screen lg:mb-0 md:mb-20 mb-0">
            <div className="col-span-2 mx-4" >
                    <div>
                        <h2 className='text-white prompt text-4xl uppercase font-bold text-center'>Tic Tac Toe</h2>
                        <p className='text-white prompt font-light m-4'>This was my first student project at General Assembly. I enjoyed utilising my design skills and JavaScript to build this game. I explored hover effects and CSS animations as well as editing the background video with Adobe Premiere Pro.</p>
                        <div  className="flex justify-center items-center lg:-mt-8 mb-8">
                            <NavItem url={'https://patrickmall.github.io/tic-tac-toe/'} label={'view'} size={3}/>
                            <NavItem url={'https://github.com/PatrickMall/tic-tac-toe/blob/main/README.md'} label={'readme'} size={3}/>
                    </div>  
                        
                    </div> 
                </div>
                <div className="col-span-4 lg:mx-4 mx-0 pb-16 md:pb-0">
                    <img className="mx-auto" src={TacHome} />
                </div>
                <div className="col-span-2 mx-4 mt-6 lg:block hidden">
                    <img className="mx-auto" src={TacGame} />
                </div>

                    
                    
               
        </div>
        
    )
}
export default TicTacToe