import React from "react";

import img2 from "../../utils/images/img2.jpg";
import { Link } from "react-router-dom";
import "./progress.css";

const progress = () => {
  return (
    <>
      {/* <NavBar /> */}
      {/* <Link to="/progressWatch"> */}
      <div>
        <h1 className="Phead">Progress</h1>
        <Link to="./progressWatch">
          <div className="Pcard">
            <img className="Pimg" src={img2}></img>
            <h2 className="Ptitle">Python Bootcamp (from Scratch)</h2>
            <div>
              <label>
                Completion: <span>70%</span>
              </label>
              <div className="progress">
                <div className="progress__fill"></div>
                <span className="progress__text"></span>
              </div>
            </div>
          </div>
        </Link>
        <Link to="./progressWatch">
          <div className="Pcard">
            <img className="Pimg" src={img2}></img>
            <h2 className="Ptitle">Python Bootcamp (from Scratch)</h2>
            <div>
              <label>
                Completion: <span>70%</span>
              </label>
              <div className="progress">
                <div className="progress__fill"></div>
                <span className="progress__text"></span>
              </div>
            </div>
          </div>
        </Link>
        <Link to="./progressWatch">
          <div className="Pcard">
            <img className="Pimg" src={img2}></img>
            <h2 className="Ptitle">Python Bootcamp (from Scratch)</h2>
            <div>
              <label>
                Completion: <span>70%</span>
              </label>
              <div className="progress">
                <div className="progress__fill"></div>
                <span className="progress__text"></span>
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* </Link> */}
      {/* <Footer />s */}
    </>
  );
};

export default progress;
