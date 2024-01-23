import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="navbar" id="home">
      <div className="nav-container">
        <img src={logo} alt="logo" className="logo" />
        <ul className={click ? "ul active" : "ul"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Course</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
          <li>
            <a href="#">
              <GrLanguage />
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? <MdClose size={25} /> : <CiMenuFries size={20} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
