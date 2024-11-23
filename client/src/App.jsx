import React from 'react'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import RoomCard from './components/rooms/RoomCard';
import Contactpage from './components/contactus/contactpage';
import Gallery from './components/gallery/gallery';
import Home from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<RoomCard />} />
        <Route path="/contactus" element={<Contactpage />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
    </Router>
  )
}

export default App
