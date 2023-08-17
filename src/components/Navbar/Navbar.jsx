import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { GrLanguage } from "react-icons/gr";
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const hanldeClick = () => setClick(!click);
  return (
    <div className="navbar" id="home">
      <div className="nav-container">
        <img src={logo} alt="logo" className="logo" />
        <ul className={click ? "ul active" : "ul"}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#course">Course</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#feedback">Feedback</a>
          </li>
          <li>
            <a href="#">
              <GrLanguage />
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={hanldeClick}>
          {click ? <MdClose size={20} /> : <CiMenuFries size={20} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
