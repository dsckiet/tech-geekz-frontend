import React, { useEffect } from "react";
import img2 from "../../utils/images/img2.jpg";

import { useState } from "react";
import { Link } from "react-router-dom";

const Enroll = () => {
  const [isEnroll, setEnroll] = useState(false);
  const [show, setShow] = useState([]);

  const handleEnroll = (e) => {
    setEnroll(!isEnroll);
  };

  useEffect(() => {
    setShow(JSON.parse(localStorage.getItem("Current")));
    console.log(show);
  }, []);

  return (
    <>
      <div>
        <div
          className="p-4 m-2.5 rounded"
          style={{ backgroundColor: "#f0f1f9", boxShadow: "0 2px 4px grey" }}
        >
          <img
            className="rounded"
            style={{ boxShadow: "0 1px 4px grey" }}
            src={img2}
          ></img>
          {/* <h1 className="font-bold m-1.5 text-lg">{q.title}</h1>
            <h3 className="m-1.5">
              Category : {q.primary_subcayegory.title} (Udemy)
            </h3>
            <h3 className="m-1.5">{Math.round((q.rating * 10) / 10)}:</h3> */}

          {isEnroll ? (
            <div className="">
              <i class="far fa-check-circle bg-green"></i>
              <span className="m-0.5">enrolled</span>

              <button
                className="text-white m-2.5 py-1.5 px-1.5 rounded-md text-xs"
                style={{ backgroundColor: "#4c589e" }}
              >
                Go to course
              </button>
              <i class="fas fa-share-alt share"></i>
            </div>
          ) : (
            <div>
              <button
                className="text-white my-1.5 py-1.5 px-1.5 rounded-md"
                style={{ backgroundColor: "#4c589e" }}
                onClick={(e) => handleEnroll(e)}
              >
                Enroll
              </button>
              <i class="fas fa-share-alt m-4"></i>
            </div>
          )}
        </div>
        <div className="p-2 m-2.5">
          <h1
            className="font-bold text-6 py-4"
            style={{ borderBottom: "1px solid rgb(63, 63, 226)" }}
          >
            Description
          </h1>
          <p className="py-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Enroll;
