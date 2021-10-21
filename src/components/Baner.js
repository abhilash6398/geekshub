import React from "react";
import { Carousel } from "react-bootstrap";

const Baner = (props) => {
  const { image, url } = props;
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image} alt={url} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image} alt={url} />
          <img className="d-block w-100" src={image} alt={url} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Baner;
