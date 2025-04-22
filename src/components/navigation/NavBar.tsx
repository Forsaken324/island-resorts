import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger icon
import { AiOutlineClose } from "react-icons/ai"; // Close icon
import "./navbar.css";

import { MenuContext } from "../../contexts/MenuContextFile";

const NavBar = () => {

  const context = useContext(MenuContext);

  if (!context) {
      // handle the case — throw, return null, etc.
      throw new Error("MenuContext must be used within a MenuContextProvider");
  }


  const {menuOpen, setMenuOpen} = context;
  

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
            <li>
              <a className="nav-links-a" href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a
                className="nav-links-a"
                href="#our-services"
                onClick={toggleMenu}
              >
                Our Services
              </a>
            </li>
            <li>
              <a className="nav-links-a" href="#about-us" onClick={toggleMenu}>
                About Us
              </a>
            </li>
            <li>
              <a
                className="nav-links-a"
                href="#contact-us"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Login/Profile button */}
          <div className="login-or-profile">
            <button>Login</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
