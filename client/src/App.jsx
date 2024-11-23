import React from 'react'
import Logo from './assets/LogoWName.svg'

const App = () => {
  return (
    <div>
      <img src={Logo} alt="" width={100}/>
      <h1 className='text-xl font-thin'>Effortless Room Booking for All</h1>
    </div>
  )
}

export default App
