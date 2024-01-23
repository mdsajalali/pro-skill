import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  const getFullYear = new Date().getFullYear()
  return (
    <footer>
      <div className="footer">
        <div className="footer-container">
          <img src={Logo} alt="" />
          <div>
            <h1>Community</h1>
            <p>Create Account</p>
            <p>Go to Premium</p>
            <p>Prefer A Friend</p>
            <p>Get Coupon Code</p>
          </div>
          <div>
            <h1>Support</h1>
            <p>Terms Condition</p>
            <p>Privacy & Policy</p>
            <p>Copyright issue</p>
            <p>Get Help</p>
          </div>
          <div>
            <h1>Join Us</h1>
            <p>Become Teacher</p>
            <p>Become Student</p>
            <p>Become Both</p>
            <p>Parthnership</p>
          </div>
          <div>
            <h1>Download App</h1>
            <button className="footer-btn">Apple IOS</button> <br /> <br />
            <button className="footer-btn">Google Play</button>
          </div>
        </div>
      </div>
      <div className="footer-text">
        <p>Copyright @{getFullYear} Pro.skill</p>
      </div>
    </footer>
  );
};

export default Footer;
