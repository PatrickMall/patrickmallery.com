import {motion} from 'framer-motion'
import HorizontalScroller from './horizontal-scroller'
import SorceryPortal from './sorcery-portal'
import Daterbase from './Daterbase'
import ChuckNorris from './chuck-norris'
import TicTacToe from './tictactoe'

const Portfolio = () => {
    
    return (    
        <motion.div initial={{opacity: 0}} animate={{opacity: 1} } exit={{opacity: 0}}>
            <div className='w-screen h-screen bg-black pt-32 hidden lg:block'>
            <HorizontalScroller />
            </div>
            <div className='w-screen h-full bg-black pt-32 lg:hidden'>
                <SorceryPortal />
                <hr className='text-white md:pb-32 pb-32'></hr>
                <Daterbase /> 
                <hr className='text-white md:pb-32 pb-32'></hr>
                <ChuckNorris />
                <hr className='text-white md:pb-32 pb-32'></hr>
                <TicTacToe />  
            </div>
        </motion.div>
    )
}
export default Portfolio