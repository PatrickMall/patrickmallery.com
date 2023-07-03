import HorizontalScroll from "react-scroll-horizontal"

import SorceryPortal from "./sorcery-portal"
import { useState } from "react"
import Daterbase from "./Daterbase"
import ChuckNorris from "./chuck-norris"

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
            
        </HorizontalScroll>
        </>
        
    )
}
export default HorizontalScroller