import React, { useState } from "react";
import "../styles/Roadmap.css";

export default function Roadmap() {
  const [slide, setSlide] = useState(1);
  const [transition, setTransition] = useState("slide-left");

  // Animation when increasing lurry slide
  const increaseSlide = () => {
    if (slide < 2) {
      setTransition("slide-left-out");
      setTimeout(() => {
        setTransition("slide-left");
        setSlide(slide + 1);
      }, 50);
    }
  };

  // Animation when decreasing lurry slide
  const decreaseSlide = () => {
    if (slide > 0) {
      setTransition("slide-right-out");
      setTimeout(() => {
        setTransition("slide-right");
        setSlide(slide - 1);
      }, 50);
    }
  };

  return (
    <section className="roadmap">
      <ul className="lurry-container">
        <button onClick={decreaseSlide} className="carousel-arrow">
          <img
            className="mirrored arrow"
            src="../../images/Icon-arrow-right-white.png"
          ></img>
        </button>
        {slide === 0 && (
          <div className="contain-slide">
            <div className={transition}>
              <img
                className="lurry-png large-only"
                src="../../images/3DMovieLurry.png"
              ></img>
              <img
                className="lurry-png medium-large-only"
                src="../../images/BiohazardLurry.png"
              ></img>
              <img
                className="lurry-png small-excluded"
                src="../../images/CrayonLurry.png"
              ></img>
              <img
                className="lurry-png"
                src="../../images/ForgotTheSunscreenLurry.png"
              ></img>
            </div>
          </div>
        )}
        {slide === 1 && (
          <div className="contain-slide">
            <div className={transition}>
              <img
                className="lurry-png large-only"
                src="../../images/GentlemanLurry.png"
              ></img>
              <img
                className="lurry-png medium-large-only"
                src="../../images/Lurry.png"
              ></img>
              <img
                className="lurry-png small-excluded"
                src="../../images/LurryinDisguise.png"
              ></img>
              <img
                className="lurry-png"
                src="../../images/SailorLurry.png"
              ></img>
            </div>
          </div>
        )}
        {slide === 2 && (
          <div className="contain-slide">
            <div className={transition}>
              <img
                className="lurry-png large-only"
                src="../../images/StrawburryLurry.png"
              ></img>
              <img
                className="lurry-png medium-large-only"
                src="../../images/BiohazardLurry.png"
              ></img>
              <img
                className="lurry-png small-excluded"
                src="../../images/CrayonLurry.png"
              ></img>
              <img
                className="lurry-png"
                src="../../images/ForgotTheSunscreenLurry.png"
              ></img>
            </div>
          </div>
        )}
        <button onClick={increaseSlide} className="carousel-arrow">
          <img
            className="arrow"
            src="../../images/Icon-arrow-right-white.png"
          ></img>
        </button>
      </ul>

      <div className="roadmap-description">
        <div className="roadmap-description-info">
          <h1 className="roadmap-description-header">ROADMAP & UTILITY</h1>
          <div className="roadmap-description-steps">
            <h4 className="description-steps">
              <span className="bold">Step 1: </span>
              Launch Floatie Lurry Collection ✅
            </h4>
            <h4 className="description-steps">
              <span className="bold">Step 2: </span>
              Get listed on Secondary marketplaces ⏳
            </h4>
            <h4 className="description-steps">
              <span className="bold">Step 3: </span>
              Marketing - setup Discord, Telegram,
              <br className="phones-only" />
              Reddit and Twitter channels
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
