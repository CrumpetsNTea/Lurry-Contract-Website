import React from "react";
import lurrySun from "../images/lurry-sun.png";
import leftCloud from "../images/left-cloud.png";
import rightCloud from "../images/right-cloud.png";
import lurrySea from "../images/lurry-sea.png";
import "../styles/LandingPage.css";
import { Link } from "react-scroll";
import secretLogo from "../images/SecretLogo.png";

export default function LandingPage() {
  let body = document.body;

  window.addEventListener("scroll", () => {
    const sun = document.getElementById("sun");
    const leftCloud = document.getElementById("left-cloud");
    const rightCloud = document.getElementById("right-cloud");
    const lurrySea = document.getElementById("lurry-sea");
    const buyButton = document.getElementById("buy-button");
    const lurrycoin = document.getElementById("lurrycoin");
    const logoContainer = document.getElementById("logo-container");
    const value = window.scrollY;

    if (value < 800) {
      body.style.top = value * 1 + "px";
      sun.style.top = value * -1 + "px";
      leftCloud.style.left = value * -1 + "px";
      rightCloud.style.right = value * -1 + "px";
      buyButton.style.display = "flex";
      lurrycoin.style.display = "flex";
    } else if (value > 800) {
      lurrySea.style.top = (value - 700) * -1 + "px";
      logoContainer.style.top = (value - 1100) * -0.2 + "px";
    }
    if (value > 1100) {
      buyButton.style.display = "none";
      lurrycoin.style.display = "none";
      return;
    }
    buyButton.style.display = "flex";
    lurrycoin.style.display = "flex";
  });

  return (
    <section className="filler">
      <div className="landing-page">
        <div className="clouds-and-sun">
          <img id="left-cloud" className="clouds" src={leftCloud} alt=""></img>
          <img
            id="sun"
            className="lurry-sun"
            src={lurrySun}
            alt="Lurry sun"
          ></img>
          <img id="right-cloud" className="clouds" src={rightCloud} alt=""></img>
        </div>
        <div id="logo-container" className="logo-container">
          <img
            id="logo"
            className="logo-landing"
            src={secretLogo}
            alt=""
          ></img>
          <button id="buy-button" className="buy-button">
            <Link to="mint-page" spy={true} smooth={true} offset={800} duration={3500}>
              Go to Lurry Mint
            </Link>
          </button>
          <div className="lurrycoin-button-container">
        <a href="http://localhost:8000/"><button id="lurrycoin" className="lurrycoin"><p>Buy $LurryCoin</p></button></a>
        </div>
        </div>
      </div>
      <div id="lurry-sea">
        <img className="lurry-sea" src={lurrySea} alt=""></img>
      </div>
    </section>
  );
}
