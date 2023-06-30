import ReactModal from "react-modal";
import FormInput from "./common/forminput";

const ContactModal = () => {

    return (
        <div>
            <div className="flex mx-32 my-32">
                <div>
                <h1 className="prompt text-white uppercase font-bold mr-4 text-6xl">Contact me</h1>
                <form>
                    <FormInput label={'Name'} type={'text'} id={'name'} />
                    <FormInput label={'Email'} type={'email'} id={'email'} />
                    <label className="prompt text-white uppercase font-bold mr-4">Message</label>
                    <div>
                        <textarea className="w-96 h-64"></textarea>
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
                </div>
                </div>
        </div>
)
}
export default ContactModal