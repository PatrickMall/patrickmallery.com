import ReactModal from "react-modal";
import FormInput from "./common/forminput";
import {motion, transform} from "framer-motion"

import emailjs from 'emailjs-com'
import { useRef, useState } from "react";
const ContactModal = () => {

    const [message, setMessage] = useState('');
    const form = useRef();



    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_6e25n2k', 'template_qvwg6lq', form.current, 'pSIcQH3Nh4m9M-gcy')
        .then((result) => {
          setMessage('Your message has been sent successfully')
          console.log(result.text);
        }, (error) => {
            setMessage('An error has occurred, please drop me a message through LinkedIn')
          console.log(error.text);
      });
        e.target.reset()
    }

    return (
        <motion.div initial={{ opacity: 0}} animate={{opacity: 1} } exit={{opacity: 0}}>
            <div className="flex mx-32 my-32">
                <div>
                <h1 className="prompt text-white uppercase font-bold mr-4 mb-16 text-6xl">Contact me</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <FormInput label={'Name'} type={'text'} id={'name'} name={'from_name'} />
                    <FormInput label={'Email'} type={'email'} id={'email'} name={'from_email'}/>
                    <label className="prompt text-white uppercase font-bold mr-4">Message</label>
                    <div>
                        <textarea className="w-96 h-64" name="message"></textarea>
                    </div>
                    <button type="submit" className="button mt-4">
                        <span className="underline_animation1">
                                <span className="underline_animation2">
                                    <span className="underline_animation3">
                                        <span className="text-white text-3xl prompt uppercase font-bold underline_animation1 underline_animation4 text-gradient-animation1">
                                            Send
                                        </span>
                                    </span>
                                </span>
                            </span>
                    </button>
                    </form>
                    <p className="prompt text-white uppercase mt-2">{message}</p>
                </div>
                </div>
        </motion.div>
)
}
export default ContactModal