import React from "react";
import LurryCarousel from "./Carousel";
import "../styles/Roadmap.css";

export default function Roadmap() {

  return (
    <>
    <section className="roadmap">
    <LurryCarousel></LurryCarousel>
      <div className="roadmap-description" id="Roadmap">
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
              Marketing - implement Discord Token transfers for services and merch ⏳
              <br className="phones-only" />
            </h4>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
