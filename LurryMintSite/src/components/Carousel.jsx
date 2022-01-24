import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
          src="https://gateway.pinata.cloud/ipfs/QmbA4maNzx3Bzy52Es6PZS6q7kTah2fVT5B6sJ64MizPXn/3DMovieLurry.png"
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png medium-large-only"
          src="https://gateway.pinata.cloud/ipfs/QmbA4maNzx3Bzy52Es6PZS6q7kTah2fVT5B6sJ64MizPXn/BiohazardLurry.png"
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png small-excluded"
          src="https://gateway.pinata.cloud/ipfs/QmbA4maNzx3Bzy52Es6PZS6q7kTah2fVT5B6sJ64MizPXn/CrayonLurry.png"
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png"
          src="https://gateway.pinata.cloud/ipfs/QmbA4maNzx3Bzy52Es6PZS6q7kTah2fVT5B6sJ64MizPXn/SunburnLurry.png"
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png large-only"
          src="https://gateway.pinata.cloud/ipfs/QmbA4maNzx3Bzy52Es6PZS6q7kTah2fVT5B6sJ64MizPXn/GentlemanLurry.png"
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png medium-large-only"
          src="https://gateway.pinata.cloud/ipfs/QmbA4maNzx3Bzy52Es6PZS6q7kTah2fVT5B6sJ64MizPXn/FrozenLurry.png"
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png"
          src="https://gateway.pinata.cloud/ipfs/QmTi58eQ7jjz6tAyaXuuF3rwuESFwEwdFVMJf7o24MYJ9M?preview=1"
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png small-excluded"
          src="https://gateway.pinata.cloud/ipfs/QmbA4maNzx3Bzy52Es6PZS6q7kTah2fVT5B6sJ64MizPXn/DisguiseLurry.png"
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png"
          src="https://gateway.pinata.cloud/ipfs/QmbA4maNzx3Bzy52Es6PZS6q7kTah2fVT5B6sJ64MizPXn/SailorLurry.png"
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png large-only"
          src="https://gateway.pinata.cloud/ipfs/QmbA4maNzx3Bzy52Es6PZS6q7kTah2fVT5B6sJ64MizPXn/StrawburryLurry.png"
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png medium-large-only"
          src="https://gateway.pinata.cloud/ipfs/QmbA4maNzx3Bzy52Es6PZS6q7kTah2fVT5B6sJ64MizPXn/OGLurry.png"
          alt=""
        ></img>
      </div>
      <div>
        <img
          className="lurry-png small-excluded"
          src="https://gateway.pinata.cloud/ipfs/QmbA4maNzx3Bzy52Es6PZS6q7kTah2fVT5B6sJ64MizPXn/UnderwaterLurry.png"
          alt=""
        ></img>
      </div>
    </Carousel>
  );
};

export default LurryCarousel;
