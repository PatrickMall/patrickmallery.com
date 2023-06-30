import { useState } from "react"
const FormInput = ({ label, type }) => {
    

    return (
        <div className="my-4 mt-8">
            <div className="relative">
                <input className="prompt text-white uppercase w-96 h-10" type={type} />
                <label className="prompt text-black uppercase font-bold mr-4 absolute top-2 left-2 ">{label}</label>
            </div>
            
            
        </div>
    )
}
export default FormInput