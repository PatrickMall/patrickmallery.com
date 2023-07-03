import {motion} from 'framer-motion'
import HorizontalScroller from './horizontal-scroller'

const Portfolio = () => {
    
    return (    
        <motion.div initial={{opacity: 0}} animate={{opacity: 1} } exit={{opacity: 0}}>
            <div className='w-screen h-screen bg-black pt-32'>
            <HorizontalScroller />
            </div>
        </motion.div>
    )
}
export default Portfolio