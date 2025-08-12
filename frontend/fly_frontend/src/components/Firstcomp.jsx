import React from "react";
import "../css/Firstcomp.css";
import planeIcon from "../assets/trans_flight.png"; // put your PNG in src/assets/

function Firstcomp() {
  return (
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
          <button className="book-btn">Booking Your Flight&nbsp;→</button>
          <button className="explore-btn">Explore Destination</button>
        </div>

        <div className="stats">
          <div>
            <strong>500+</strong>
            <br />
            Destinations
          </div>
          <div>
            <strong>50M</strong>
            <br />
            Happy Travelers
          </div>
          <div>
            <strong>24/7</strong>
            <br />
            Support
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstcomp;
