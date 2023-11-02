import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KarakterlerContainer from "../components/ContainerKarakterler.jsx";

const Karakterler = () => {
  return (
    <div>
      <Navbar />
      <KarakterlerContainer />
      <Footer />
    </div>
  );
};

export default Karakterler;
