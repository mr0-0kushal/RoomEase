import React from 'react'
import Lobby from '../../assets/images/Lobby.png'
import Slogan from '../../assets/images/slogan.svg'

const IntroSec = () => {
    return (
        <div className="w-full h-[110vh] imgC flex justify-center items-center">
            <img src={Lobby} alt="Lobby" className='bgk h-full w-full' />
            <div className='tint'></div>
            <div className='text-white flex justify-center items-center'>
                <img src={Slogan} alt="slogan" className='md:w-[60%] md:h-[50%]' />
            </div>
        </div>
    )
}

export default IntroSec
