import '../css/ThirdComp.css';

const destinations = [
  { code: "DEL", name: "Delhi" },
  { code: "BOM", name: "Mumbai" },
  { code: "BLR", name: "Bangalore" },
  { code: "NYC", name: "New York" },
  { code: "LON", name: "London" },
  { code: "DXB", name: "Dubai" },
];

function ThirdComp() {
  return (
    <div className="destinations-container">
      <h2>Popular Destinations</h2>
      <div className="destinations-grid">
        {destinations.map((dest) => (
          <div className="destination-card" key={dest.code}>
            <span className="destination-code">{dest.code}</span>
            <span className="destination-name">{dest.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ThirdComp;