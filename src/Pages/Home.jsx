import React from "react";
import Navbar from "../Components/Navbar-components/Navbar";
import Carousel from "../Components/Home-components/Carousel";
import AboutSection from "../Components/Home-components/AboutSection";
import EventCarousel from "../Components/Home-components/EventCarousel";
import Footer from "../Components/Footer-components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <AboutSection />
      <EventCarousel />
      <Footer />
    </>
  );
};

export default Home;
