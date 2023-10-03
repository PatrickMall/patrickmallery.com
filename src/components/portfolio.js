import {motion} from 'framer-motion'
import HorizontalScroller from './horizontal-scroller'
import SorceryPortal from './sorcery-portal'
import Daterbase from './Daterbase'
import ChuckNorris from './chuck-norris'
import TicTacToe from './tictactoe'
import StreetGoat from './streetgoat'
import SorceryDesign from './sorcery-design'


const Portfolio = () => {


    return (    
        <motion.div initial={{opacity: 0}} animate={{opacity: 1} } exit={{opacity: 0}}>
            <div className='w-screen h-full bg-black pt-32'>
                <SorceryPortal />
                <Daterbase /> 
                <ChuckNorris />
                <TicTacToe />
                <StreetGoat />
                <SorceryDesign />
            </div>
        </motion.div>
    )
}
export default Portfolio