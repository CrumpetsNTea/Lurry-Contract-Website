import React, { useState } from "react";
import "../styles/Roadmap.css";

export default function Roadmap() {
  const [slide, setSlide] = useState(0);
  const [transition, setTransition] = useState("slide-left");

  const increaseSlide = () => {
    if (slide < 2) {
      setTransition("slide-right-out");
      setTimeout(() => {
        setTransition("slide-right");
        setSlide(slide + 1);
      }, 50);
    }
  };

  const decreaseSlide = () => {
    if (slide > 0) {
      setTransition("slide-left-out");
      setTimeout(() => {
        setTransition("slide-left");
        setSlide(slide - 1);
      }, 50);
    }
  };

  return (
    <section className="roadmap">
      {slide === 0 && (
        <ul className="lurry-container">
          <button onClick={decreaseSlide} className="carousel-arrow">
            Click me
          </button>
          <div className={transition}>
            <img
              className="lurry-png"
              src="../../images/3DMovieLurry.png"
            ></img>
            <img
              className="lurry-png"
              src="../../images/BiohazardLurry.png"
            ></img>
            <img className="lurry-png" src="../../images/CrayonLurry.png"></img>
            <img
              className="lurry-png"
              src="../../images/ForgotTheSunscreenLurry.png"
            ></img>
          </div>
          <button onClick={increaseSlide} className="carousel-arrow">
            Click me
          </button>
        </ul>
      )}
      {slide === 1 && (
        <ul className="lurry-container">
          <button onClick={decreaseSlide} className="carousel-arrow">
            Click me
          </button>
          <div className={transition}>
            <img
              className="lurry-png"
              src="../../images/GentlemanLurry.png"
            ></img>
            <img className="lurry-png" src="../../images/Lurry.png"></img>
            <img
              className="lurry-png"
              src="../../images/LurryinDisguise.png"
            ></img>
            <img className="lurry-png" src="../../images/SailorLurry.png"></img>
          </div>
          <button onClick={increaseSlide} className="carousel-arrow">
            Click me
          </button>
        </ul>
      )}
      {slide === 2 && (
        <ul className="lurry-container">
          <button onClick={decreaseSlide} className="carousel-arrow">
            Click me
          </button>
          <div className={transition}>
            <img
              className="lurry-png"
              src="../../images/StrawburryLurry.png"
            ></img>
            <img
              className="lurry-png"
              src="../../images/BiohazardLurry.png"
            ></img>
            <img className="lurry-png" src="../../images/CrayonLurry.png"></img>
            <img
              className="lurry-png"
              src="../../images/ForgotTheSunscreenLurry.png"
            ></img>
          </div>
          <button onClick={increaseSlide} className="carousel-arrow">
            Click me
          </button>
        </ul>
      )}
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
