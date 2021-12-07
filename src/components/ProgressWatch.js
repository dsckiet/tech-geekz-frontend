import React from "react";
import { useState } from "react";
import img2 from "./img2.jpg";
import { Link } from "react-router-dom";
import Cprogress from "./Cprogress";
import "./progressWatch.css";

const progressWatch = () => {
  return (
    <>
      <div className="Tcard">
        <img className="Timg" src={img2}></img>
        <h1 className="Ttitle">
          Bootcamp on Python (from Scratch) for Beginners
        </h1>
        <h3 className="Tcateg">
          Category: <span>Programming(Udemy)</span>
        </h3>
        <h3 className="Trating"> 5 :</h3>
        <i class="far fa-check-circle circle"></i>
        <span>enrolled</span>
        <i class="far fa-check-circle circle"></i>
        <span>show in profile</span>
        <i class="fas fa-share-alt Tshare"></i>
      </div>
      <div className="Ttrack">
        <Cprogress />
      </div>
      <div></div>
    </>
  );
};

export default progressWatch;
