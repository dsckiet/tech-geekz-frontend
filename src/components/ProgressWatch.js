import React from "react";
import { useState } from "react";
import img2 from "./img2.jpg";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const progressWatch = () => {
  return (
    <>
      <NavBar />
      <div>
        <i class="fas fa-share-alt"></i>
        <img src={img2}></img>
        <h1>Bootcamp on Python (from Scratch) for Beginners</h1>
        <h3>
          Category: <span>Programming(Udemy)</span>
        </h3>
        <h3> 5 :</h3>
        <i class="far fa-check-circle"></i>
        <span>enrolled</span>
        <i class="far fa-check-circle"></i>
        <span>show in profile</span>
      </div>
      <Footer />
    </>
  );
};

export default progressWatch;
