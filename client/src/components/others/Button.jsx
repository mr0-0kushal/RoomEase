import React from 'react'
import './Button.css'
import { FaLocationArrow } from "react-icons/fa";

const Button = ({title}) => {
    return (
        <button className="cta flex items-center w-auto">
            <span>{title}</span>
            <FaLocationArrow className='svg'/>
        </button>
    )
}

export default Button
