import {motion} from 'framer-motion'
const HomeText = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1} } exit={{opacity: 0}}>
            <h1 className="text-white prompt text-6xl uppercase font-bold mt-64 ml-32">Hello, I'm <span className="text-gradient-animation1">Patrick</span></h1>
            <h2 className="text-white prompt text-3xl uppercase font-light ml-32 mt-8">I build exceptional digital <br />experiences for ethical brands</h2>
        </motion.div>
    )
}
export default HomeText