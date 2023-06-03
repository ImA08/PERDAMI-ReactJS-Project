import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Home-components/Carousel";
import AboutSection from "../Components/Home-components/AboutSection";
import Footer from "../Components/Footer-components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <AboutSection />
      <Footer />
    </>
  );
};

export default Home;
