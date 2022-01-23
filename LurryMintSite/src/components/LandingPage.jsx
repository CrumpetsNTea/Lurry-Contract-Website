import React from "react";
import lurrySun from "../images/lurry-sun.png";
import leftCloud from "../images/left-cloud.png";
import rightCloud from "../images/right-cloud.png";
import lurrySea from "../images/lurry-sea.png";
import "../styles/LandingPage.css";
import { Link } from "react-scroll";

export default function LandingPage() {
  let body = document.body;

  window.addEventListener("scroll", () => {
    const sun = document.getElementById("sun");
    const leftCloud = document.getElementById("left-cloud");
    const rightCloud = document.getElementById("right-cloud");
    const lurrySea = document.getElementById("lurry-sea");
    const buyButton = document.getElementById("buy-button");
    const value = window.scrollY;

    if (value < 800) {
      body.style.top = value * 1 + "px";
      sun.style.top = value * -1 + "px";
      leftCloud.style.left = value * -1 + "px";
      rightCloud.style.right = value * -1 + "px";
      buyButton.style.display = "flex";
    } else if (value > 800) {
      lurrySea.style.top = (value - 1200) * -1 + "px";
    }
    if (value > 1100) {
      buyButton.style.display = "none";
      return;
    }
    buyButton.style.display = "flex";
  });

  return (
    <section className="landing-page">
      <div className="clouds-and-sun">
        <img id="left-cloud" className="clouds" src={leftCloud}></img>
        <img
          id="sun"
          className="lurry-sun"
          src={lurrySun}
          alt="Lurry sun"
        ></img>
        <img id="right-cloud" className="clouds" src={rightCloud}></img>
      </div>
      <button id="buy-button" className="buy-button">
        <Link to="Mint" spy={true} smooth={true}>
          Buy A Lurry
        </Link>
      </button>
      <img id="lurry-sea" className="lurry-sea" src={lurrySea}></img>
    </section>
  );
}
