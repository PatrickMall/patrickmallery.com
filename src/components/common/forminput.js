import { useState } from "react"
const FormInput = ({ label, type }) => {
    

    return (
        <div className="my-4 mt-4">
            <label className="prompt text-white uppercase font-bold mr-4">{label}</label>
            <div>
                <input className="prompt text-white uppercase w-96 h-10" type={type} />
                
            </div>
            
            
        </div>
    )
}
export default FormInput