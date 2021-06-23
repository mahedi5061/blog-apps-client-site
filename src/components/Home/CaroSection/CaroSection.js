import React from 'react';
import { Carousel } from 'react-bootstrap';
import FirstImage from '../../../Images/josh-boot-2x19-mRQgX8-unsplash.jpg';
import SecImage from '../../../Images/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg';
import ThirdImage from '../../../Images/photo-1481487196290-c152efe083f5.jpg'
 

const CaroSection = () => {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <>
         <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FirstImage}
          alt="First slide"
          style={{height:'500px'}}
        />
        <Carousel.Caption>
          <h3>Blog grid classic 01</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SecImage}
          alt="Second slide"
          style={{height:'500px'}}
        />

        <Carousel.Caption>
          <h3>Blog grid classic 02</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ThirdImage}
          alt="Third slide"
          style={{height:'500px'}}
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