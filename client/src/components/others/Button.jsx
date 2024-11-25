import React from 'react'
import './Button.css'
import { FaLocationArrow } from "react-icons/fa";

const Button = ({title}) => {
    return (
        <button className="flex items-center w-auto cta">
            <span>{title}</span>
            <FaLocationArrow className='svg'/>
        </button>
    )
}

export default Button
