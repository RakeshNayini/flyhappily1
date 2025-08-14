import React, { useState } from "react";
import "../css/Secondcomp.css";

export default function Secondcomp() {
  const [tripType, setTripType] = useState("round");

  return (
    <div className="flight-search">
      <h1 className="title">Find Your Perfect Flight</h1>
      <p className="subtitle">
        Search and compare flights from over 500 airlines worldwide
      </p>

      <div className="form-card">
        <div className="trip-tabs">
          <button
            className={tripType === "round" ? "tab active" : "tab"}
            onClick={() => setTripType("round")}
          >
            Round Trip
          </button>
          <button
            className={tripType === "oneway" ? "tab active" : "tab"}
            onClick={() => setTripType("oneway")}
          >
            One Way
          </button>
          <button
            className={tripType === "multi" ? "tab active" : "tab"}
            onClick={() => setTripType("multi")}
          >
            Multi-City
          </button>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>From</label>
            <input type="text" placeholder="Departure city" />
          </div>
          <div className="form-group">
            <label>To</label>
            <input type="text" placeholder="Destination city" />
          </div>
          <div className="form-group">
            <label>Departure</label>
            <input type="date" />
          </div>
          {tripType === "round" && (
            <div className="form-group">
              <label>Return</label>
              <input type="date" />
            </div>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Passengers</label>
            <input type="number" min={1} placeholder="Enter number of passengers"/>
          </div>
        </div>

        <button className="search-btn">Search Flights ✈</button>
      </div>
    </div>
  );
}
