import HorizontalScroll from "react-scroll-horizontal"

import SorceryPortal from "./sorcery-portal"
import { useState } from "react"
import Daterbase from "./Daterbase"
import ChuckNorris from "./chuck-norris"
import TicTacToe from "./tictactoe"
import StreetGoat from "./streetgoat"

const HorizontalScroller = () => {
    const [emoji, setEmoji] = useState(false)




    return (
        
        <>
        <HorizontalScroll reverseScroll = { true } config = {{ stiffness: 1, damping: 2 }}>
            <div className="">
                <SorceryPortal />         
                </div>
                <div className="">
                <Daterbase />         
                </div>
                <div className="">
                <ChuckNorris />         
                </div>
                <div className="">
                <TicTacToe />         
                </div>
                <div className="">
                <StreetGoat />         
                </div>
            
        </HorizontalScroll>
        </>
        
        
    )
}
export default HorizontalScroller