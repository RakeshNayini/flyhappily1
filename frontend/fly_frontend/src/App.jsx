import React from "react";
import {browserRouter as Router,Routes} from 'react-router-dom';
import Navbar from 
'./components/Navbar';
import Footer from 
'./components/Footer';
import Home from './pages/Home';
import Flights from'./pages/Flights';
import MyBookings from'./pages/MYBookings';
import Support from'./pages/Support';
import Admin from'./pages/Admin';
import SignIn from'./pages/SignIn';
import Register from'./pages/Register';
import BookingFlight from'./pages/BookFlight';
import'./App.css';

function App (){
  return (
    <Router>
      <div classname="App">
       <Navbar />

      <Routes>
         <Route path="/Home" element=
         {<Home />} / >
         <Route path="/Flights" element={<Flights />} / >
        <Route path="/My-Bookings" elemntt={<My-Booking />} />
         <Route path="/Support" elemntt={<Support />} />
         <Route path="/Admin" elemntt={<Admin />} />
         <Route path="/Sign In" elemntt={<Sign In />} />
         <Route path="/Register" elemntt={<Register />} />
              <Route 
              path="/booking/:flightId" element={<BookingFlight />} />
      </Routes>

      <Footer />
    </div>
</Router>
  );
}
export default App;
