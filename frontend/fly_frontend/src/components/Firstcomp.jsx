import React from "react";
import "../css/Firstcomp.css";
import planeIcon from "../assets/trans_flight.png"; // put your PNG in src/assets/
export default function Firstcomp() {
  const handleBookFlight =() => {
    window.scrollTo({top:600,behavior:"smooth"});
  };
   const handleExplore =() => {
    window.scrollTo({top:800,behavior:"smooth"});
  };
return (
    <section className="Firstcomp">
    <div className="Main">
      <div className="content">
        {/* Flying plane animation */}
        <div className="flight-container">
          <img src={planeIcon} alt="Flight" className="flight" />
        </div>
        <h1>
          Fly Anywhere,<br />
          <span>Anytime</span>
          <br />
        </h1>
        <p>
          Book domestic and international flights with real-time pricing,
          instant <br />
          confirmation, and QR code tickets. Your journey starts here.
        </p>

        <div className="buttons">
          <button className="book-btn" onClick={handleBookFlight}>Booking Your Flight&nbsp;→</button>
          <button className="explore-btn" onClick={handleExplore}>Explore Destination</button>
        </div>

        <div className="stats">
          <div>
            <strong>500+</strong>
            Destinations
          </div>
          <div>
            <strong>50M</strong>
            Happy Travelers
          </div>
          <div>
            <strong>24/7</strong>
            Support
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}