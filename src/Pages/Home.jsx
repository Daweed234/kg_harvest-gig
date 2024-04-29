import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home/Home";
import About from "../Components/Home/About";
import Services from "../Components/Home/Services";
import Footer from "../Components/Home/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Footer />
    </>
  );
}
