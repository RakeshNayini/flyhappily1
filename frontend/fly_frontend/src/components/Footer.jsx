import React from "react";
import "../css/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaPhone, FaEnvelope, FaLocationDot, FaPlane } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter */}
        <div className="newsletter">
          <h2>Stay Updated with<br />Latest Deals</h2>
          <p>
            Subscribe to our newsletter and get exclusive flight deals,
            travel tips, and destination guides.
          </p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>

        {/* About & Contact */}
        <div className="about">
          <h3><FaPlane /> FlyHappily</h3>
          <p>
            Your trusted partner for seamless flight booking experiences.
            Connecting you to the world, one flight at a time.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>

          <div className="contact">
            <p><FaPhone /> +91 99126xxxxx</p>
            <p><FaEnvelope /> support@FlyHappily.com</p>
            <p><FaLocationDot /> kphb phase-1<br />Hyderabad, Telangana</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Flight Search</a></li>
            <li><a href="#">My Bookings</a></li>
            <li><a href="#">Check-in Online</a></li>
            <li><a href="#">Flight Status</a></li>
            <li><a href="#">Travel Insurance</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="links">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Cancellation Policy</a></li>
            <li><a href="#">Baggage Info</a></li>
            <li><a href="#">Travel Guidelines</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 FlyHappily. All rights reserved.</p>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
