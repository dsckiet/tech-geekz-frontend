import React from "react";
import img2 from "./img2.jpg";
import "./enroll.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Enroll = () => {
  const [isEnroll, setEnroll] = useState(false);

  const handleEnroll = (e) => {
    setEnroll(!isEnroll);
  };
  return (
    <>
      <div className="cardEnroll">
        <img className="Eimg" src={img2}></img>
        <h1 className="titleEnroll">
          Bootcamp on Python (from Scratch) for Beginners.
        </h1>
        <h3 className="categTitle">Category : Programming (Udemy)</h3>
        <h3 className="rating">5:</h3>

        {isEnroll ? (
          <div className="">
            <i class="far fa-check-circle circle"></i>
            <span className="entext">enrolled</span>

            <button className="gotoC">Go to course</button>
            <i class="fas fa-share-alt share"></i>
          </div>
        ) : (
          <div>
            <button className="enrollButt" onClick={(e) => handleEnroll(e)}>
              Enroll
            </button>
            <i class="fas fa-share-alt share"></i>
          </div>
        )}
      </div>
      <div className="descriptionEnroll">
        <h1 className="DTitle">Description</h1>
        <p className="Dpara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
};

export default Enroll;
