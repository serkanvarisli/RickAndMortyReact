import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnasayfaContainer from "../components/ContainerAnasayfa";

const Anasayfa = () => {
  return (
    <div>
      <Navbar />
      <AnasayfaContainer />
      <Footer />
    </div>
  );
};

export default Anasayfa;
