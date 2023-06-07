import React from "react";
import Navbar from "../../Components/Navbar-components/Navbar";
import Footer from "../../Components/Footer-components/Footer";
import FamilyGatheringComponents from "../../Components/Events-components/FamilyGatheringCmponent";

const FamilyGathering = () => {
  return (
    <>
      <Navbar />
      <FamilyGatheringComponents />
      <Footer />
    </>
  );
};

export default FamilyGathering;
