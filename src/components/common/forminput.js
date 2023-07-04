import { useState } from "react"
const FormInput = ({ label, type, name }) => {
    

    return (
        <div className="my-4 md:mt-4 mt-0">
            <label className="prompt text-white uppercase font-bold mr-4 lg:m-0 m-2">{label}</label>
            <div>
                <input className="prompt text-black uppercase w-96 h-10 pr-4 lg:m-0 m-2" type={type} name={name} />
                
            </div>
            
            
        </div>
    )
}
export default FormInput