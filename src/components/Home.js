import React from "react";
import homeImg from "./Kotlin Background.svg";
import img2 from "./img2.jpg";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <div>
        {/* <img src={homeImg}></img> */}
        <div className="Hbox">
          <h1 className="Htext">What Will You Learn Today</h1>
          <div className="flex my-3">
            <input className="Hinput" placeholder="Search Learning" />
            <i className="fas fa-search fa-md searchicon"></i>
          </div>
          <div className="my-3">
            <span className="Hnumber">0</span>
            <span className="Hntext">Total Learning Hours</span>
          </div>
          <div className="my-3">
            <span className="Hnumber">0</span>
            <span className="Hntext">Total Learning Hours</span>
          </div>
        </div>
      </div>
      <div className="MRCbox">
        <h1 className="MRC">Most Recommended Courses</h1>
        <div className="Hcourses">
          <div className="HmainCard">
            <div className="Hcard">
              <img className="HCimg" src={img2}></img>
              <h1 className="Htitle">
                Bootcamp on Python(from Scratch) for Beginners.
              </h1>
              <h3 className="HcategoryText">Category : Programming (Udemy)</h3>
              <button className="HenrollButt">
                <Link to="/enroll">Add Course</Link>
              </button>
              <span> 5 :</span>
            </div>
          </div>
          <div className="HmainCard">
            <div className="Hcard">
              <img className="HCimg" src={img2}></img>
              <h1 className="Htitle">
                Bootcamp on Python(from Scratch) for Beginners.
              </h1>
              <h3 className="HcategoryText">Category : Programming (Udemy)</h3>
              <button className="HenrollButt">
                <Link to="/enroll">Add Course</Link>
              </button>
              <span> 5 :</span>
            </div>
          </div>
          <div className="HmainCard">
            <div className="Hcard">
              <img className="HCimg" src={img2}></img>
              <h1 className="Htitle">
                Bootcamp on Python(from Scratch) for Beginners.
              </h1>
              <h3 className="HcategoryText">Category : Programming (Udemy)</h3>
              <button className="HenrollButt">
                <Link to="/enroll">Add Course</Link>
              </button>
              <span> 5 :</span>
            </div>
          </div>
        </div>
      </div>
      <div className="MRCbox">
        <h1 className="MRC">Most Recent Courses</h1>
        <div className="Hcourses">
          <div className="HmainCard">
            <div className="Hcard">
              <img className="HCimg" src={img2}></img>
              <h1 className="Htitle">
                Bootcamp on Python(from Scratch) for Beginners.
              </h1>
              <h3 className="HcategoryText">Category : Programming (Udemy)</h3>
              <button className="HenrollButt">
                <Link to="/enroll">Add Course</Link>
              </button>
              <span> 5 :</span>
            </div>
          </div>
          <div className="HmainCard">
            <div className="Hcard">
              <img className="HCimg" src={img2}></img>
              <h1 className="Htitle">
                Bootcamp on Python(from Scratch) for Beginners.
              </h1>
              <h3 className="HcategoryText">Category : Programming (Udemy)</h3>
              <button className="HenrollButt">
                <Link to="/enroll">Add Course</Link>
              </button>
              <span> 5 :</span>
            </div>
          </div>
          <div className="HmainCard">
            <div className="Hcard">
              <img className="HCimg" src={img2}></img>
              <h1 className="Htitle">
                Bootcamp on Python(from Scratch) for Beginners.
              </h1>
              <h3 className="HcategoryText">Category : Programming (Udemy)</h3>
              <button className="HenrollButt">
                <Link to="/enroll">Add Course</Link>
              </button>
              <span> 5 :</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
