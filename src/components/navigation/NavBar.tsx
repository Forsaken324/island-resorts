import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger icon
import { AiOutlineClose } from "react-icons/ai"; // Close icon
import "./navbar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="header">
          <h2>Island Resorts</h2>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <GiHamburgerMenu size={30} />
        </div>

        {/* Nav Links - Drawer style for mobile */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {/* Close Icon */}
          <div className="close-icon" onClick={toggleMenu}>
            <AiOutlineClose size={30} />
          </div>

          <ul>
            <li><a className="nav-links-a" href="#home">Home</a></li>
            <li><a className="nav-links-a" href="#our-services">Our Services</a></li>
            <li><a className="nav-links-a" href="#about-us">About Us</a></li>
            <li><a className="nav-links-a" href="#contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Login/Profile button */}
        <div className="login-or-profile">
          <button>Login</button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
