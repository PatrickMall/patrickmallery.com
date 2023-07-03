import Lottie from "lottie-react-web"
import scroll from "../static/lottie/H7nMnAjeEJ.json"
import {motion} from "framer-motion"
const About = () => {
    return ( 
        <motion.div initial={{opacity: 0}} animate={{opacity: 1} } exit={{opacity: 0}}>
            <div>
                <h1 className="text-white prompt text-6xl uppercase font-bold pb-8 ml-32 fixed top-0 pt-32 bg-black w-2/6 z-0">About me</h1>
            </div>
            <p className="text-white prompt font-light ml-32 mt-64 w-1/3">
                Following a diverse career as a professional musician, mushroom growing consultant, and business founder, I have discovered my true passion and talent lies in software engineering, design, and the art of making with Arduino and Raspberry Pi.            </p>
            <p className="text-white prompt font-light ml-32 mt-8 w-1/3">
                With a solid foundation forged through General Assembly's Software Engineering Immersive, I've developed expertise in React.js, SCSS, JavaScript, and Ruby on Rails. I'm also skilled in using design software, including Adobe suite. This combination of technical proficiency and design skill enables me to craft exceptional digital experiences that seamlessly merge functionality and aesthetics.</p>
            <p className="text-white prompt font-light ml-32 mt-8 w-1/3">
                As a maker, I thrive on leveraging the power of Arduino and Raspberry Pi to design and build custom controllers and interactive devices. I enjoy pushing the boundaries of hardware integration and creating innovative solutions that bring physical components to life with code.            </p>
            <p className="text-white prompt font-light ml-32 mt-8 w-1/3">
                I'm currently seeking opportunities in creative front-end or full-stack roles where I can utilise my diverse skill set to creative applications. My goal is to deliver captivating user experiences by combining my software engineering prowess, design sensibility, and maker mindset.            </p>
            <div className="relative m-auto  w-24 mt-8">
                <Lottie options={{ animationData: scroll }} />
            </div>
            <div className="">
                <h2 className="text-white prompt text-4xl uppercase font-bold mt-16 ml-32">Technologies I work with</h2>
                <div className="grid grid-cols-3 w-6/12">
                <div  className="ml-32">
                <h3 className="text-white prompt text-2xl uppercase font-bold mt-16">Front-End</h3>
                    <p className="text-white prompt font-light">        
                        - HTML<br />
                        - CSS<br />
                        - JavaScript<br />
                        - React.js<br />
                        - Ruby-on-Rails<br />
                        - Wordpress CMS<br />
                        - Wordpress Divi Theme<br />
                        - Woocommerce<br />
                        - Tailwind CSS<br />
                        - SASS/SCSS<br />
                        </p>
                    </div>
                    <div className="ml-8 mr-8">
                    <h3 className="text-white prompt text-2xl uppercase font-bold mt-16">Design skills</h3>
                    <p className="text-white prompt font-light">        
                        - Adobe Photoshop<br />
                        - Adobe Premiere Pro<br />
                        - Adobe After Effects<br />
                        - Adobe XD<br />
                        - Excalidraw<br />
                    </p>
                    </div>
                    <div className="-ml-8 mr-16" >
                <h3 className="text-white prompt text-2xl uppercase font-bold mt-16">Back-End</h3>
                    <p className="text-white prompt font-light">        
                        - SQL<br />
                        - Express<br />
                        - Mongoose<br />
                        - MongoDB<br />
                        - Postgres<br />

                        </p>
                    </div>
                    
                </div>
                
                <div className="mb-48 grid grid-cols-3 w-6/12">
                <div className="ml-32">
                    <h3 className="text-white prompt text-2xl uppercase font-bold mt-16">Business Skills</h3>
                    <p className="text-white prompt font-light">        
                       -  Financial management<br />
                        - Marketing, sales and customer service<br />
                        - Communication and negotiation<br />
                        - Leadership<br />
                        - Project management and planning<br />
                        - Delegation and time management<br />
                        - Problem solving<br />
                        - Networking<br />
                        - Product development<br />
                        Product design<br />
                    </p>
                    </div>
                
                    <div className="ml-8">
                    <h3 className="text-white prompt text-2xl uppercase font-bold mt-16">Currently learning</h3>
                    <p className="text-white prompt font-light">        
                        ThreeJS<br />
                        Blender<br />
                        Arduino<br />
                        Python<br />
                        PHP<br />
                        Adobe Illustrator<br />
                        Adobe InDesign<br />
                        Adobe Dimension<br />
                    </p>
                    </div>
                    <div className="-ml-8 mr-16">
                    <h3 className="text-white prompt text-2xl uppercase font-bold mt-16">Management <br />Tools</h3>
                    <p className="text-white prompt font-light">        
                        GitHub<br />
                        Trello<br />
                        CRM tools<br />
                    </p>
                    </div>
                    

                    </div>
                </div>
        </motion.div>

    )
}
export default About
