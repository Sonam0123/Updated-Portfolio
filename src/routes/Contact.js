import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Intro2 from "../components/Intro2";
import Form from "../components/Form";

const Contact = () => {
  return <div>
    <Navbar />
    <Intro2 heading="CONTACT" text="Let's have a chat"/>
    <Form />
    <Footer />
  </div>;
};

export default Contact;
