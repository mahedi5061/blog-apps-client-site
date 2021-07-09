import React from "react";
import { Carousel } from "react-bootstrap";
import FirstImage from "../../../Images/bestfood.jpg";
import SecImage from "../../../Images/sports_banners.png";
import ThirdImage from "../../../Images/horizontal-music-banner-bright-purple-260nw-1247536372.jpg";

const CaroSection = () => {
  const [index, setIndex] = React.useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FirstImage}
            alt="First slide"
            style={{height:"50vh"}}
          />
          <Carousel.Caption>
            <h3>The best Japanese street food</h3>
            <p>Why you should make takoyaki at home. What does takoyaki taste like?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-10"
            src={SecImage}
            alt="Second slide"
            style={{height:"50vh"}}
          />

          <Carousel.Caption>
            <h3 class="text-black">The Sports</h3>
            <p class="text-black">This site offers a subscription for in-depth sports news and features. It also has a podcast for avid sports fans. Find articles about major sports, sports teams, and top cities..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-10"
            src={ThirdImage}
            alt="Third slide"
            style={{height:"50vh"}}
          />

          <Carousel.Caption>
            <h3>Blog grid classic 03</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CaroSection;
