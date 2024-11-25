import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import RoomCard from './components/rooms/RoomCard';
import Contactpage from './components/Contactus/ContactPage';
import Gallery from './components/Gallery/Gallery';
import RoomCardList from './components/rooms/roomlist';
import SignUpForm from './components/login and signup/signup';
import LoginForm from './components/login and signup/login';
import Home from './pages/HomePage';
import Layout from './pages/Layout';
import CheckoutPage from './components/order/paymentform';




const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="payment" element={<CheckoutPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="room" element={<RoomCard />} /> */}
          <Route path="contactus" element={<Contactpage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="rooms" element={<RoomCardList />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
