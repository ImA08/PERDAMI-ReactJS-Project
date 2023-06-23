import { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function EventCarousel() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  };

  const eventCards = [
    {
      imageSrc:
        process.env.PUBLIC_URL + "/assets/images/events/(2) H1.c. Workshop.jpg",
      title: "Som 15th",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      imageSrc:
        process.env.PUBLIC_URL +
        "/assets/images/events/(129) H1.e. Pelantikan Pengurus Perdami.jpg",
      title: "Rakernas",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      imageSrc:
        process.env.PUBLIC_URL + "/assets/images/events/(1) H3.a. Fun Bike.jpg",
      title: "HBDI 115th",
      description: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <>
      <div className="content">
        <div className="controls">
          <button>
            <FaChevronLeft />
          </button>
          <button>
            <FaChevronRight />
          </button>
        </div>
        <Slider ref={setSliderRef} {...sliderSettings}>
          {eventCards.map((card, index) => (
            <div key={index}>
              <h2>{card.title}</h2>
              <img
                alt={card.title}
                src={card.imageSrc}
                width="100"
                height="100"
              />
              <p>{card.description}</p>
              <button className="btn">Selengkapnya</button>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
