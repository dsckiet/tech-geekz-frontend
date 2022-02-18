import React from "react";
import sat from "../../utils/images/satyam_sharma.jpg";

import img2 from "../../utils/images/img2.jpg";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Profile = () => {
  const percentage = 66;
  return (
    <>
      <div
        className="flex flex-col rounded-xl m-4"
        style={{ backgroundColor: "#3b457b", boxShadow: "0 8px 8px grey" }}
      >
        <div className="flex justify-center">
          <img
            className="rounded-full w-2/4 m-4"
            style={{ boxShadow: "0 2px 4px black" }}
            src={sat}
          />
        </div>
        <div className="flex justify-center">
          <div className="my-4 mx-1.5">
            <div className="m-4">
              <label className="text-white">Name</label>
              <h1 className="text-white font-bold text-xs">satyam sharma</h1>
            </div>
            <div className="m-4">
              <label className="text-white">Email</label>
              <h1 className="text-white font-bold text-xs">satyam@gmail.com</h1>
            </div>
            <div className="m-4">
              <label className="text-white">Locality</label>
              <h1 className="text-white font-bold text-xs">
                Muradnagar, Uttar Pradeh
              </h1>
            </div>
          </div>
          <div className="threeL">
            <div className="m-4">
              <label className="text-white">Username</label>
              <h1 className="text-white font-bold text-xs">Killer_smile</h1>
            </div>
            <div className="m-4">
              <label className="text-white">Contact</label>
              <h1 className="text-white font-bold text-xs">+91 987654321</h1>
            </div>
            <div className="m-4">
              <label className="text-white">Nationality</label>
              <h1 className="text-white font-bold text-xs">Indian</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 my-8" style={{ backgroundColor: "#f0f1f9" }}>
        <h1 className="m-4 text-2xl">My Progress :</h1>
        <div className="flex overflow-x-scroll">
          <Link to="./progressWatch">
            <div
              className="py-4 px-8 m-4 rounded"
              style={{ backgroundColor: "white", boxShadow: "0 2px 4px grey" }}
            >
              <img
                className="rounded"
                style={{ boxSHadow: "0 1px 4px grey" }}
                src={img2}
              ></img>
              <h2 className="my-4 font-bold text-center">
                Python Bootcamp (from Scratch)
              </h2>
              <div>
                <label>
                  Completion: <span>70%</span>
                </label>
                <div
                  className="relative w-52 h-2.5 rounded-lg overflow-hidden"
                  style={{ background: "#d2d6ed" }}
                >
                  <div
                    className="w-3/4 rounded-lg h-full"
                    style={{ background: "#3b457b", transition: "all 0.2s" }}
                  ></div>
                  <span className=""></span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="./progressWatch">
            <div
              className="py-4 px-8 m-4 rounded"
              style={{ backgroundColor: "white", boxShadow: "0 2px 4px grey" }}
            >
              <img
                className="rounded"
                style={{ boxSHadow: "0 1px 4px grey" }}
                src={img2}
              ></img>
              <h2 className="my-4 font-bold text-center">
                Python Bootcamp (from Scratch)
              </h2>
              <div>
                <label>
                  Completion: <span>70%</span>
                </label>
                <div
                  className="relative w-52 h-2.5 rounded-lg overflow-hidden"
                  style={{ background: "#d2d6ed" }}
                >
                  <div
                    className="w-3/4 rounded-lg h-full"
                    style={{ background: "#3b457b", transition: "all 0.2s" }}
                  ></div>
                  <span className=""></span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="./progressWatch">
            <div
              className="py-4 px-8 m-4 rounded"
              style={{ backgroundColor: "white", boxShadow: "0 2px 4px grey" }}
            >
              <img
                className="rounded"
                style={{ boxSHadow: "0 1px 4px grey" }}
                src={img2}
              ></img>
              <h2 className="my-4 font-bold text-center">
                Python Bootcamp (from Scratch)
              </h2>
              <div>
                <label>
                  Completion: <span>70%</span>
                </label>
                <div
                  className="relative w-52 h-2.5 rounded-lg overflow-hidden"
                  style={{ background: "#d2d6ed" }}
                >
                  <div
                    className="w-3/4 rounded-lg h-full"
                    style={{ background: "#3b457b", transition: "all 0.2s" }}
                  ></div>
                  <span className=""></span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="CircularProg">
        <div className="m-4 py-4 px-12 w-3/4">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <div className="m-4 py-4 px-12 w-3/4">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <div className="m-4 py-4 px-12 w-3/4">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
      </div>
    </>
  );
};

export default Profile;
