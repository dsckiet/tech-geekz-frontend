import React from "react";
import homeImg from "../../utils/images/Kotlin Background.svg";
import img2 from "../../utils/images/img2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        {/* <img src={homeImg}></img> */}
        <div
          className="m-8 p-4"
        >
          <h1 className="text-xl my-2.5">What Will You Learn Today ?</h1>
          <div className="flex my-3">
            <input
              className="w-1/2 py-1.5 px-3.5 rounded-md border"
              placeholder="Search Learning"
            />
            <i className="fas fa-search fa-md text-black relative right-8 top-2.5"></i>
          </div>
          <div className="my-5  ">
            <span
              className="text-2xl rounded-full px-2.5"
              style={{
                backgroundColor: "#5fabfa",
                boxShadow: "0 1px 2px black",
              }}
            >
              0
            </span>
            <span className="text-xl p-4">Total Learning Hours</span>
          </div>
          <div className="my-3">
            <span
              className="text-2xl rounded-full px-2.5"
              style={{
                backgroundColor: "#53abfa",
                boxShadow: "0 1px 2px black",
              }}
            >
              0
            </span>
            <span className="text-xl p-4">Total Learning Hours</span>
          </div>
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-3xl my-8 font-semibold text-center">
          Most Recommended Courses
        </h1>
        <div className="flex overflow-x-scroll">
          <div
            className="shadow-xl p-4 my-6 mx-4 rounded"
            style={{
            //  backgroundColor: "#f0f1f9",
              // boxShadow: "0 2px 4px grey",
              minWidth: "18rem",
            }}
          >
            <div className="p-2">
              <img
                className="rounded"
                // style={{ boxShadow: "0px 1px 4px grey" }}
                src={img2}
              ></img>
              <h1 className="font-bold my-2.5">
                Bootcamp on Python(from Scratch) for Beginners.
              </h1>
              <h3 className="text-xs my-1.5">Category : Programming (Udemy)</h3>
              <button
                className="text-white px-2 py-1 rounded-sm text-sm bg-blue-400"
              >
                <Link to="/enroll">Add Course</Link>
              </button>
              <span> 5 :</span>
            </div>
          </div>
          <div
            className="shadow-xl p-4 my-6 mx-4 rounded"
            style={{
              // backgroundColor: "#f0f1f9",
              // boxShadow: "0 2px 4px grey",
              minWidth: "18rem",
            }}
          >
            <div className="p-2">
              <img
                className="rounded"
                // style={{ boxShadow: "0px 1px 4px grey" }}
                src={img2}
              ></img>
              <h1 className="font-bold my-2.5">
                Bootcamp on Python(from Scratch) for Beginners.
              </h1>
              <h3 className="text-xs my-1.5">Category : Programming (Udemy)</h3>
              <button
                className="text-white px-2 py-1 rounded-sm text-sm bg-blue-400"
              >
                <Link to="/enroll">Add Course</Link>
              </button>
              <span> 5 :</span>
            </div>
          </div>
          <div
            className="shadow-xl p-4 my-6 mx-4 rounded"
            style={{
              // backgroundColor: "#f0f1f9",
              // boxShadow: "0 2px 4px grey",
              minWidth: "18rem",
            }}
          >
            <div className="p-2">
              <img
                className="rounded"
                // style={{ boxShadow: "0px 1px 4px grey" }}
                src={img2}
              ></img>
              <h1 className="font-bold my-2.5">
                Bootcamp on Python(from Scratch) for Beginners.
              </h1>
              <h3 className="text-xs my-1.5">Category : Programming (Udemy)</h3>
              <button
                className="text-white px-2 py-1 rounded-sm text-sm bg-blue-400"
              >
                <Link to="/enroll">Add Course</Link>
              </button>
              <span> 5 :</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-2xl font-bold text-center">Most Recent Courses</h1>
        <div className="flex overflow-x-scroll">
          <div
            className="shadow-xl p-4 my-8 mx-4 rounded"
            style={{
              // backgroundColor: "#f0f1f9",
              // boxShadow: "0 2px 4px grey",
              minWidth: "18rem",
            }}
          >
            <div className="p-2">
              <img
                className="rounded"
                // style={{ boxShadow: "0px 1px 4px grey" }}
                src={img2}
              ></img>
              <h1 className="font-bold my-2.5">
                Bootcamp on Python(from Scratch) for Beginners.
              </h1>
              <h3 className="text-xs my-1.5">Category : Programming (Udemy)</h3>
              <button
                className="text-white px-2 py-1 rounded-sm text-sm bg-blue-400"
              >
                <Link to="/enroll">Add Course</Link>
              </button>
              <span> 5 :</span>
            </div>
          </div>
          <div
            className="shadow-xl p-4 my-8 mx-4 rounded"
            style={{
              // backgroundColor: "#f0f1f9",
              // boxShadow: "0 2px 4px grey",
              minWidth: "18rem",
            }}
          >
            <div className="p-2">
              <img
                className="rounded"
                // style={{ boxShadow: "0px 1px 4px grey" }}
                src={img2}
              ></img>
              <h1 className="font-bold my-2.5">
                Bootcamp on Python(from Scratch) for Beginners.
              </h1>
              <h3 className="text-xs my-1.5">Category : Programming (Udemy)</h3>
              <button
                className="text-white px-2 py-1 rounded-sm text-sm bg-blue-400"
              >
                <Link to="/enroll">Add Course</Link>
              </button>
              <span> 5 :</span>
            </div>
          </div>
          <div
            className="shadow-xl p-4 my-8 mx-4 rounded"
            style={{
              // backgroundColor: "#f0f1f9",
              // boxShadow: "0 2px 4px grey",
              minWidth: "18rem",
            }}
          >
            <div className="p-2">
              <img
                className="rounded"
                // style={{ boxShadow: "0px 1px 4px grey" }}
                src={img2}
              ></img>
              <h1 className="font-bold my-2.5">
                Bootcamp on Python(from Scratch) for Beginners.
              </h1>
              <h3 className="text-xs my-1.5">Category : Programming (Udemy)</h3>
              <button
                className="text-white px-2 py-1 rounded-sm text-sm bg-blue-400"
              >
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
