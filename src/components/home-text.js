import {motion} from 'framer-motion'
const HomeText = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="bg-black-transparent lg:bg-transparent p-4 lg:mt-64 md:mt-96 md:mx-4 mt-96 lg:p-0">
                <h1 className="text-white prompt md:text-6xl uppercase font-bold  lg:ml-32 md:ml-0 lg:text-left text-center text-4xl">Hello, I'm <span className="text-gradient-animation1">Patrick</span></h1>
                <h2 className="text-white prompt md:text-3xl uppercase font-light lg:ml-32 md:mt-8 mt-4  md:ml-0 lg:text-left text-center text-xl">I build exceptional digital <br />experiences for ethical brands</h2>
            </div>
        </motion.div>
    )
}
export default HomeText