import React, { useState, useEffect } from "react";
import "../styles/Navigation.css";
import { Link } from "react-scroll";
import secretLogo from "../images/Logo_grey.png";

export default function Navigation() {
  const [menuType, setMenuType] = useState(1);


  const x = window.matchMedia("(min-width: 650px)");

  const navInjection = (x) => {
    if (x.matches) {
      setMenuType(1);
    } 
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      navInjection(x);
    });
  });

  useEffect(() => {
    const nav = document.getElementById("navbar");
    nav.style.display = "none";
  }, []);

  // document.getElementById("navbar").style.display = "none";

  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 2200) {
      nav.style.display = "flex";
      nav.style.background = "#7cdbe9"
      return;
    }
    nav.style.display = "none";
  });

  return (
    <>
    <div className="navbar-container">
      <div id="navbar" className="navbar">
        <img
          src={secretLogo}
          alt="Secret Lurry Society Logo"
          className="logo"
        />
        {/* {menuType === 0 && (
          <ul className="nav-links">
            <button
              className="hamburger-icon"
              onClick={() => hamburgerClick(click, setClick)}
            >
              <i className="fas fa-bars fa-2x"></i>
            </button>
          </ul>
        )} */}
        {menuType === 1 && (
          <>
            <ul className="phones-excluded nav-links">
              <li>
                <Link to="mint-page" spy={true} smooth={true}>
                  Mint
                </Link>
              </li>
              <li>
                <Link to="Roadmap" spy={true} smooth={true}>
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="FAQ" spy={true} smooth={true}>
                  FAQ
                </Link>
              </li>
            </ul>
            <a></a>
          </>
        )}
      </div>
      </div>
    </>
  );
}
