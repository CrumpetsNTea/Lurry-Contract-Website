import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import movieLurry from "../images/lurrys/3DMovieLurry.png";
import biohazardLurry from "../images/lurrys/BiohazardLurry.png";
import crayonLurry from "../images/lurrys/CrayonLurry.png";
import sunburnLurry from "../images/lurrys/SunburnLurry.png";
import gentlemanLurry from "../images/lurrys/GentlemanLurry.png";
import frozenLurry from "../images/lurrys/FrozenLurry.png"
import watermelonLurry from "../images/lurrys/WatermelonLurry.png";
import disguiseLurry from "../images/lurrys/DisguiseLurry.png";
import sailorLurry from "../images/lurrys/SailorLurry.png";
import strawburryLurry from "../images/lurrys/StrawburryLurry.png";
import ogLurry from "../images/lurrys/OGLurry.png";
import underwaterLurry from "../images/lurrys/UnderwaterLurry.png"



const LurryCarousel = () => {
  return (
    <Carousel
      showStatus={false}
      useKeyboardArrows={true}
      stopOnHover={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      centerMode={true}
      centerSlidePercentage={40}
      showThumbs={false}
    >
      <div>
        <img
          className="lurry-png large-only"
          src={movieLurry}
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png medium-large-only"
          src={biohazardLurry}
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png small-excluded"
          src={crayonLurry}
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png"
          src={sunburnLurry}
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png large-only"
          src={gentlemanLurry}
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png medium-large-only"
          src={frozenLurry}
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png"
          src={watermelonLurry}
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png small-excluded"
          src={disguiseLurry}
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png"
          src={sailorLurry}
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png large-only"
          src={strawburryLurry}
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png medium-large-only"
          src={ogLurry}
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png small-excluded"
          src={underwaterLurry}
          alt=""
        ></img>
      </div>
    </Carousel>
  );
};

export default LurryCarousel;
