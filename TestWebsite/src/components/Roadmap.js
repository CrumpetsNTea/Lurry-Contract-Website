import React from "react";
import "../styles/Roadmap.css";

export default function Roadmap() {
  return (
    <section className="roadmap">
      <ul className="lurry-container">
        <img className="lurry-png" src="../../images/3DMovieLurry.png"></img>
        <img className="lurry-png" src="../../images/BiohazardLurry.png"></img>
        <img className="lurry-png" src="../../images/CrayonLurry.png"></img>
        <img
          className="lurry-png"
          src="../../images/ForgotTheSunscreenLurry.png"
        ></img>
      </ul>
      <div className="roadmap-description">
        <div className="roadmap-description-info">
          <h1 className="roadmap-description-header">ROADMAP & UTILITY</h1>
          <div className="roadmap-description-steps">
            <h4 className="description-steps">
              <span className="bold">Step 1: </span>
              Launch Floatie Lurry Collection
            </h4>
            <h4 className="description-steps">
              <span className="bold">Step 2: </span>
              Get listed on Secondary marketplaces
            </h4>
            <h4 className="description-steps">
              <span className="bold">Step 3: </span>
              Marketing - setup Discord, Telegram, Reddit and Twitter channels
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
