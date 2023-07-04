import Lottie from "lottie-react-web"
import scroll from "../static/lottie/H7nMnAjeEJ.json"
import {motion} from "framer-motion"
const About = () => {
    return ( 
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="md:mx-16 mx-0 md:mt-64 mt-96 lg:bg-transparent bg-black-transparent lg:mb-64">
            <div>
                <h1 className="lg:text-left text-white prompt text-6xl uppercase font-bold lg:pb-8 lg:ml-32 lg:fixed lg:top-0 lg:pt-32 lg:bg-black lg:w-5/12 lg:z-0 md:bg-none text-center md:pt-12 pt-4">About me</h1>
            </div>
            <p className="text-white prompt font-light lg:ml-32 lg:mt-64 lg:w-1/3 mt-4 mx-4 text-shadow">
                Following a diverse career as a professional musician, mushroom growing consultant, and business founder, I have discovered my true passion and talent lies in software engineering, design, and the art of making with Arduino and Raspberry Pi.            </p>
            <p className="text-white prompt font-light lg:ml-32 lg:mt-8 lg:w-1/3 mt-4 mx-4 text-shadow">
                With a solid foundation forged through General Assembly's Software Engineering Immersive, I've developed expertise in React.js, SCSS, JavaScript, and Ruby on Rails. I'm also skilled in using design software, including Adobe suite. This combination of technical proficiency and design skill enables me to craft exceptional digital experiences that seamlessly merge functionality and aesthetics.</p>
            <p className="text-white prompt font-light lg:ml-32 lg:mt-8 lg:w-1/3 mt-4 mx-4 text-shadow">
                As a maker, I thrive on leveraging the power of Arduino and Raspberry Pi to design and build custom controllers and interactive devices. I enjoy pushing the boundaries of hardware integration and creating innovative solutions that bring physical components to life with code.            </p>
            <p className="text-white prompt font-light lg:ml-32 lg:mt-8 lg:w-1/3 mt-4 mx-4 text-shadow">
                I'm currently seeking opportunities in creative front-end or full-stack roles where I can utilise my diverse skill set to creative applications. My goal is to deliver captivating user experiences by combining my software engineering prowess, design sensibility, and maker mindset.            </p>
            <div className="relative m-auto  w-24">
                <Lottie options={{ animationData: scroll }} />
            </div>
            <div className="">
                <h2 className="text-white prompt md:text-4xl text-2xl uppercase font-bold lg:mt-16 lg:ml-32 mt-4 text-center lg:text-left text-shadow">Technologies I work with</h2>
                <div className="grid md:grid-cols-3 lg:w-6/12 grid-cols-1  md:w-100 md:mx-auto">
                <div  className="lg:ml-32 mx-auto w-48 md:w-58 lg:w-full lg:pr-2">
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
                    <div className="lg:ml-16  mx-auto w-48 md:w-58 lg:w-44 lg:pr-2">
                    <h3 className="text-white prompt text-2xl uppercase font-bold mt-16">Design skills</h3>
                    <p className="text-white prompt font-light">        
                        - Adobe Photoshop<br />
                        - Adobe Premiere Pro<br />
                        - Adobe After Effects<br />
                        - Adobe XD<br />
                        - Excalidraw<br />
                    </p>
                    </div>
                    <div className="mx-auto w-48 md:w-58 lg:w-1/2 lg:-ml-2" >
                <h3 className="text-white prompt text-2xl uppercase font-bold mt-16 text-shadow">Back-End</h3>
                    <p className="text-white prompt font-light text-shadow">        
                        - SQL<br />
                        - Express<br />
                        - Mongoose<br />
                        - MongoDB<br />
                        - Postgres<br />

                        </p>
                    </div>
                    
                </div>
                
                <div className="grid md:grid-cols-3 lg:w-6/12 grid-cols-1 lg:mb-32">
                <div className="lg:ml-32 mx-auto w-48 md:w-58 lg:w-1/2">
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
                
                    <div className="lg:ml-16 lg:mr-8 mx-auto w-48 md:w-58 lg:w-44">
                    <h3 className="text-white prompt text-2xl uppercase font-bold mt-16 ">Currently learning</h3>
                    <p className="text-white prompt font-light">        
                        - ThreeJS<br />
                        - Blender<br />
                        - Arduino<br />
                        - Python<br />
                        - PHP<br />
                        - Adobe Illustrator<br />
                        - Adobe InDesign<br />
                        - Adobe Dimension<br />
                    </p>
                    </div>
                    <div className="lg:-ml-4 lg:mr-16 mx-auto w-48 mb-16 md:w-58 lg:w-1/2">
                    <h3 className="text-white prompt text-2xl uppercase font-bold mt-16 text-shadow">Management <br />Tools</h3>
                    <p className="text-white prompt font-light text-shadow">        
                        - GitHub<br />
                        - Trello<br />
                        - CRM tools<br />
                    </p>
                    </div>
                    </div>


                    <div className="">
                        <h2 className="text-white prompt md:text-4xl text-2xl uppercase font-bold lg:mt-16 lg:ml-32 md:mt-12 mt-4 text-center lg:text-left text-shadow">Voluntary/Side Projects</h2>
                        <h3 className="text-white prompt text-2xl uppercase font-bold mt-16 lg:ml-32 text-shadow lg:w-5/12 mx-10">Websites I have built on behalf of businesses & community projects</h3>
                        <p className="text-white prompt font-light text-shadow lg:ml-32 mt-4 mx-10"><a href="https://streetgoat.co.uk/">Streetgoat.co.uk (wordpress)</a></p>
                        <p className="text-white prompt font-light text-shadow lg:ml-32 mt-4 mx-10"><a href="https://upcycledmushrooms.co.uk/">Upcycledmushrooms.co.uk (wordpress)</a></p>
                        <p className="text-white prompt font-light text-shadow lg:ml-32 mt-4 mx-10"><a href="https://sorcery.design/">Sorcery.design (wordpress)</a></p>
                        <p className="text-white prompt font-light text-shadow lg:ml-32 mt-4 mx-10"><a href="https://easymushroomgrowing.com/">Easymushroomgrowing.com (wordpress)</a></p>
                        <h3 className="text-white prompt text-2xl uppercase font-bold mt-16 lg:ml-32 text-shadow mx-10">Event Organiser</h3>
                        <p className="text-white prompt font-light text-shadow lg:ml-32 mt-4 lg:w-4/12 mx-10">I run and plan and project manage several large scale workshop areas at two large festivals in the UK (Shambala 15,000 people & Boomtown 66,000 people). This includes organising programmes, food and on the ground management of over 60 people.</p>
                        <h3 className="text-white prompt text-2xl uppercase font-bold mt-16 lg:ml-32 text-shadow mx-10">Street Goat</h3>
                        <p className="text-white prompt font-light text-shadow lg:ml-32 mt-4 lg:w-4/12 mx-10">Founding member and organiser for this community run farming project. This project has become nationally recognised as a unique farming project and has been featured on BBC Countryfile, The One Show, The Hairy Bikers, BBC Radio 4 and ITV News.</p>  
                    </div>
                    <div>
                        <h3 className="text-white prompt text-2xl uppercase font-bold mt-16 lg:ml-32 text-shadow lg:w-5/12 mx-10">Interests</h3>
                        <p className="text-white prompt font-light text-shadow lg:ml-32 mt-4 lg:w-4/12 mx-10">I am a very keen gardener and used to grow most of my own food when I had 2 allotments in Bristol. I have a keen interest in the intersection between technology and sustainable farming and how tech can be used to make a difference to the way we grow our food.</p>
                        <p className="text-white prompt font-light text-shadow lg:ml-32 mt-4 lg:w-4/12 mx-10">I design and build campervans for a hobby/ side business. I really enjoy woodworking and designing electronics systems in campervans and adding features to vans using my tech skills to add controllers and computers into my designs.</p>
                        <p className="text-white prompt font-light text-shadow lg:ml-32 mt-4 lg:w-4/12 mx-10 md:mb-0 mb-64 lg:pb-0 pb-8">Having lived in France for a few years I have a reasonable ability to speak French to a A2 level.</p>
                    </div>
                </div>
                </div>
        </motion.div>

    )
}
export default About
