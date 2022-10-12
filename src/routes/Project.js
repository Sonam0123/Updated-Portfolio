import React from "react";
import Footer from "../components/Footer";
import Intro2 from "../components/Intro2";
import Navbar from "../components/Navbar";
import Work from "../components/Work";

const Project = () => {
  return( 
  <div>
    <Navbar />
    <Intro2 text="Some of my recent works" />
    <Work />
    <Footer />
  </div>
)};

export default Project;
