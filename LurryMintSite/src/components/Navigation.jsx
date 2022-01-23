import React, { useState, useEffect } from "react";
import "../styles/Navigation.css";
import { Link } from "react-scroll";

export default function Navigation() {
  const [click, setClick] = useState(false);
  const [menuType, setMenuType] = useState(1);

  const hamburgerClick = (click, setClick) => {
    if (click) {
      setClick(false);
      return;
    }
    setClick(true);
  };

  const x = window.matchMedia("(max-width: 700px)");

  const navInjection = (x) => {
    if (x.matches) {
      setMenuType(0);
    } else {
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
    if (window.scrollY > 4500) {
      nav.style.display = "flex";
      return;
    }
    nav.style.display = "none";
  });

  return (
    <>
      <div id="navbar" className="navbar">
        <img
          src="https://gateway.pinata.cloud/ipfs/QmcNE5sZHYg5ecEYXhz2TxqrDpzUJvAgy7X1ddPLYppGUj?preview=1"
          alt="Secret Lurry Society Logo"
          className="logo"
        />
        {menuType === 0 && (
          <ul className="nav-links">
            <button
              className="hamburger-icon"
              onClick={() => hamburgerClick(click, setClick)}
            >
              <i className="fas fa-bars fa-2x"></i>
            </button>
          </ul>
        )}
        {menuType === 1 && (
          <>
            <ul className="phones-excluded nav-links">
              <li>
                <Link to="Mint" spy={true} smooth={true}>
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
      {click && (
        <ul className="dropdown">
          <li>
            <Link to="Mint" spy={true} smooth={true}>
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
      )}
    </>
  );
}
