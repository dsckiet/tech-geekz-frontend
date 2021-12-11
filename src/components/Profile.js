import React from "react";
import sat from "./satyam_sharma.jpg";
import "./profile.css";
import img2 from "./img2.jpg";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Profile = () => {
  const percentage = 66;
  return (
    <>
      <div className="Pdash">
        <div className="Profile">
          <img className="Pimg" src={sat} />
        </div>
        <div className="twoL">
          <div className="threeL">
            <div className="nameBox">
              <label className="Lname">Name</label>
              <h1 className="name">satyam sharma</h1>
            </div>
            <div className="nameBox">
              <label className="Lname">Email</label>
              <h1 className="name">satyam@gmail.com</h1>
            </div>
            <div className="nameBox">
              <label className="Lname">Locality</label>
              <h1 className="name">Muradnagar, Uttar Pradeh</h1>
            </div>
          </div>
          <div className="threeL">
            <div className="nameBox">
              <label className="Lname">Username</label>
              <h1 className="name">Killer_smile</h1>
            </div>
            <div className="nameBox">
              <label className="Lname">Contact</label>
              <h1 className="name">+91 987654321</h1>
            </div>
            <div className="nameBox">
              <label className="Lname">Nationality</label>
              <h1 className="name">Indian</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="ProgCard">
        <h1 className="PProg">My Progress :</h1>
        <div className="Myprogress">
          <Link to="./progressWatch">
            <div className="PPcard">
              <img className="PPimg" src={img2}></img>
              <h2 className="PPtitle">Python Bootcamp (from Scratch)</h2>
              <div>
                <label>
                  Completion: <span>70%</span>
                </label>
                <div className="Pprogress">
                  <div className="Pprogress__fill"></div>
                  <span className="Pprogress__text"></span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="./progressWatch">
            <div className="PPcard">
              <img className="PPimg" src={img2}></img>
              <h2 className="PPtitle">Python Bootcamp (from Scratch)</h2>
              <div>
                <label>
                  Completion: <span>70%</span>
                </label>
                <div className="Pprogress">
                  <div className="Pprogress__fill"></div>
                  <span className="Pprogress__text"></span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="./progressWatch">
            <div className="PPcard">
              <img className="PPimg" src={img2}></img>
              <h2 className="PPtitle">Python Bootcamp (from Scratch)</h2>
              <div>
                <label>
                  Completion: <span>70%</span>
                </label>
                <div className="Pprogress">
                  <div className="Pprogress__fill"></div>
                  <span className="Pprogress__text"></span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="CircularProg">
        <div className="CPbar">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <div className="CPbar">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <div className="CPbar">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
      </div>
    </>
  );
};

export default Profile;
