import '../css/FourthComp.css';
import { FaQrcode, FaShieldAlt, FaClock, FaCreditCard, FaGlobe, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaQrcode size={30} color="#3b82f6" />,
    title: "QR Code Tickets",
    description: "Get instant digital tickets with QR codes for hassle-free boarding"
  },
  {
    icon: <FaShieldAlt size={30} color="#3b82f6" />,
    title: "Secure Booking",
    description: "Bank-level security ensures your personal and payment data is protected"
  },
  {
    icon: <FaClock size={30} color="#f97316" />,
    title: "Real-Time Updates",
    description: "Live flight status, gate changes, and delay notifications"
  },
  {
    icon: <FaCreditCard size={30} color="#3b82f6" />,
    title: "Flexible Payment",
    description: "Multiple payment options with instant confirmation and refunds"
  },
  {
    icon: <FaGlobe size={30} color="#3b82f6" />,
    title: "Global Coverage",
    description: "Book flights to 500+ destinations worldwide with competitive pricing"
  },
  {
    icon: <FaHeadset size={30} color="#f97316" />,
    title: "24/7 Support",
    description: "Round-the-clock customer service in multiple languages"
  }
];

function FourthComp() {
  return (
    <div className="whychoose-container">
      <h2>Why Choose Universal Flights?</h2>
      <p className="whychoose-subtitle">
        Experience the future of flight booking with our cutting-edge features designed to
        make your travel seamless and secure.
      </p>

      <div className="whychoose-grid">
        {features.map((feature, index) => (
          <div className="whychoose-card" key={index}>
            <div className="whychoose-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FourthComp;