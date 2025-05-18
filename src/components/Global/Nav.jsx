import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [hamValue, setHamValue] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setHamValue(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  if (!hamValue) {
    return (
      <>
        <nav className="header-nav">
          <menu className="nav-menu">
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Menu" className="nav-item">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/BookingForm" className="nav-item">
                Reservation
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" className="nav-item">
                About
              </Link>
            </li>
            <li>
              <Link to="/Profile" className="nav-item">
                Login
              </Link>
            </li>
          </menu>
        </nav>
        <BiMenu className="navHamburg" onClick={() => setHamValue(!hamValue)} />
      </>
    );
  } else {
    if (hamValue) {
      return (
        <>
          <nav className="hamburger-nav">
            <AiOutlineClose
              className="nav-hamburg-close nav-hamburg-icon"
              onClick={() => setHamValue(!hamValue)}
            />
            <menu className="nav-menu">
              <li onClick={() => setHamValue(!hamValue)}>
                <Link to="/" className="nav-item">
                  Home
                </Link>
              </li>
              <li onClick={() => setHamValue(!hamValue)}>
                <Link to="/Menu" className="nav-item">
                  Menu
                </Link>
              </li>
              <li onClick={() => setHamValue(!hamValue)}>
                <Link to="/BookingForm" className="nav-item">
                  Reservation
                </Link>
              </li>
              <li onClick={() => setHamValue(!hamValue)}>
                <Link to="/AboutUs" className="nav-item">
                  About
                </Link>
              </li>
              <li onClick={() => setHamValue(!hamValue)}>
                <Link to="/Profile" className="nav-item">
                  Login
                </Link>
              </li>
            </menu>
          </nav>
        </>
      );
    }
  }
};

export default Nav;
