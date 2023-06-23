import React from "react";
import Navbar from "../Components/Navbar-components/Navbar";
import Carousel from "../Components/Home-components/Carousel";
import AboutSection from "../Components/Home-components/AboutSection";
// import CarouselSample from "../Components/Home-components/EventCarouselSample";
import EventCarousel from "../Components/Home-components/EventsCarousel";

import Footer from "../Components/Footer-components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <AboutSection />
      <EventCarousel />
      {/* <CarouselSample /> */}
      <Footer />
    </>
  );
};

export default Home;
