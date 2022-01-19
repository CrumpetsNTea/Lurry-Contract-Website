import { zeroPad } from "@ethersproject/bytes";
import React, { useState, useEffect } from "react";
import "../styles/Navigation.css";
import MintPage from "./Mint";

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

  return (
    <>
      <div className="navbar">
        <img
          src="/images/SLSlogo.png"
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
          <ul className="phones-excluded nav-links">
            <li>
              <a href="About">About</a>
            </li>
            <li>
              <a href="Roadmap">Roadmap</a>
            </li>
            <li>
              <a href="Faq">FAQ</a>
            </li>
          </ul>
        )}
        <a className="mint" href="#">
          <button className="button">Connect Wallet</button>
        </a>
      </div>
      {click && (
        <ul className="dropdown">
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="Roadmap">Roadmap</a>
          </li>
          <li>
            <a href="Faq">FAQ</a>
          </li>
        </ul>
      )}
    </>
  );
}
