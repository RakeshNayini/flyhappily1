import{ useState } from "react";
import '../css/FlightSearch.css';

function FlightSearch() {
  const [tripType, setTripType] = useState("Round Trip");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    alert(`
      Trip Type: ${tripType}
      From: ${from}
      To: ${to}
      Departure: ${departure}
      Return: ${returnDate}
      Passengers: ${passengers}
    `);
  };

  return (
    <div className="flight-search-container">
      <h1>Find Your Perfect Flight</h1>
      <p>Search and compare flights from over 500 airlines worldwide</p>

      <div className="trip-type">
        {["Round Trip", "One Way", "Multi-City"].map((type) => (
          <button
            key={type}
            className={tripType === type ? "active" : ""}
            onClick={() => setTripType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="form-row">
        <div>
          <label>From</label>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="">Departure city</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            <option value="Dubai">Dubai</option>
          </select>
        </div>

        <div>
          <label>To</label>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="">Destination city</option>
            <option value="Paris">Paris</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Sydney">Sydney</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div>
          <label>Departure</label>
          <input
            type="date"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>

        {tripType === "Round Trip" && (
          <div>
            <label>Return</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="form-row">
        <div>
          <label>Passengers</label>
          <select
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} Passenger{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="search-btn" onClick={handleSearch}>
        🔍 Search Flights ✈
      </button>
    </div>
  );
}
export default FlightSearch;