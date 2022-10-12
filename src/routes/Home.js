import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Work from "../components/Work";

const Home = () => {
  return <div>
        <Navbar />  
        <Intro />
        <Work />
        <Footer />
    </div>;
};

export default Home;
