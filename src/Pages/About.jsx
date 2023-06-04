import React from "react";
import Navbar from "../Components/Navbar-components/Navbar";
import AboutProfile from "../Components/About-components/About-profile";
import VisiMisi from "../Components/About-components/Visi-Misi";
import Footer from "../Components/Footer-components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutProfile />
      <VisiMisi />

      <Footer />
    </>
  );
};

export default About;
