import "./C_Home.css";
import C_Navbar from "./C_Navbar/C_Navbar";
import Slider from "./C_Switch/Slider";
import React from "react";
import Paragraph from "./C_Paragraph/Paragraph";
import Footer from "./C_Footer/Footer";

export default function C_Home() {
  return (
    <>
      <C_Navbar />
      <Slider />
      <Paragraph />
      <Footer />
    </>
  );
}