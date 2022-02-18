import React from "react";

import { useState, useEffect } from "react";
import img2 from "../../utils/images/img2.jpg";

import { Link } from "react-router-dom";
import axios, { Axios } from "axios";

const Courses = () => {
  const [searchTerm, setSeacrhTerm] = useState("");
  const [filter, setFilter] = useState(false);
  const [courses, setcourses] = useState([]);
  const [p, setP] = useState([]);

  const showFilter = (e) => {
    setFilter(!filter);
  };

  useEffect(() => {
    async function getCourse() {
      try {
        let baseUrl = process.env.REACT_APP_BASE_URL;
        let response = await axios.get(`${baseUrl}/courses`);

        setcourses(response.data.data.results);
        console.log(courses);
        setP(response.data.data.next);
      } catch (err) {
        console.log("error");
      }
    }
    getCourse();
  }, []);

  return (
    <>
      {/* <NavBar /> */}
      {filter ? (
        <div
          className={filter ? "py-0 px-2.5" : "hidden"}
          style={{ backgroundColor: "#ebf2ff" }}
        >
          <div>
            <i class="fas fa-times fa-lg" onClick={(e) => showFilter(e)}></i>
            <h1
              className="text-4xl"
              style={{ borderBottom: "5px solid #3b457b" }}
            >
              Filters
            </h1>
            <h2 className="text-xl my-5">Categories</h2>
            <div
              className="categorySearch"
              style={{ borderBottom: "2px solid #4c589e" }}
            >
              <input
                className="py-2 px-10 border-none"
                style={{ backgroundColor: "#ebf2ff" }}
                type="text"
                placeholder="Search Category"
                onChange={(e) => {
                  setSeacrhTerm(e.target.value);
                }}
              />
              <i className="fas fa-search fa-lg relative right-64"></i>
              <i class="fas fa-chevron-up relative"></i>
            </div>
            <div className="my-1">
              <input type="checkbox" className="scale-200" />
              <label className="text-xl px-4">Javascript</label>
            </div>
            <div className="my-4">
              <input type="checkbox" className="scale-200" />
              <label className="text-xl px-4">Javascript</label>
            </div>
            <div className="my-4">
              <input type="checkbox" className="scale-200" />
              <label className="text-xl px-4">Javascript</label>
            </div>
            <div className="py-4 text-center">
              <h1 className="mx-8 more">more ...</h1>
            </div>
          </div>
          <div>
            <h2 className="text-xl my-5">Categories</h2>
            <div
              className="categorySearch"
              style={{ borderBottom: "2px solid #4c589e" }}
            >
              <input
                className="py-2 px-10 border-none"
                style={{ backgroundColor: "#ebf2ff" }}
                type="text"
                placeholder="Search Category"
                onChange={(e) => {
                  setSeacrhTerm(e.target.value);
                }}
              />
              <i className="fas fa-search fa-lg relative right-64"></i>
              <i class="fas fa-chevron-up relative"></i>
            </div>
            <div className="my-1">
              <input type="checkbox" className="scale-200" />
              <label className="text-xl px-4">Javascript</label>
            </div>
            <div className="my-4">
              <input type="checkbox" className="scale-200" />
              <label className="text-xl px-4">Javascript</label>
            </div>
            <div className="my-4">
              <input type="checkbox" className="scale-200" />
              <label className="text-xl px-4">Javascript</label>
            </div>
            <div className="py-4 text-center">
              <h1 className="mx-8 more">more ...</h1>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center font-bold text-2xl mt-4">
            Popular Courses here:
          </h1>
          {/* <button onClick={(e) => getCourse(e)}>cby</button> */}
          <div className="flex justify-around">
            <div
              className="my-8 py-1.5 px-2.5"
              style={{ boxShadow: "0px 2px 4px #00000025" }}
            >
              <input
                type="text"
                placeholder="Search Learning"
                onChange={(e) => {
                  setSeacrhTerm(e.target.value);
                }}
              />
              <i className="fas fa-search fa-md searchicon"></i>
            </div>
            <button
              className={filter ? "hideFilter" : ""}
              onClick={(e) => showFilter(e)}
            >
              Filters
            </button>
          </div>

          <div>
            <button
              onClick={(e) => {
                console.log(p);
              }}
            >
              next
            </button>
            {courses.map((q) => (
              <div className="courses">
                <div
                  className="p-4 my-6 mx-4 rounded"
                  style={{
                    backgroundColor: "#f0f1f9",
                    boxShadow: " 0 2px 4px grey",
                  }}
                >
                  <div className="px-2">
                    <img
                      className="rounded"
                      style={{ boxShadow: "0px 1px 4px grey" }}
                      src={img2}
                    ></img>
                    <h1 className="font-bold my-2.5">{q.title}</h1>
                    <h3 className="text-3 my-1.5">
                      Category : {q.primary_subcategory.title} (Udemy)
                    </h3>
                    <button
                      onClick={(e) => {
                        localStorage.setItem("Current", JSON.stringify(q));
                      }}
                      className="text-white py-1.5 px-1.5 text-xs rounded-md"
                      style={{ backgroundColor: "#4c589e" }}
                    >
                      <Link to="/enroll">Add Course</Link>
                    </button>
                    <span> {Math.round(q.rating * 10) / 10} :</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* <Footer /> */}
    </>
  );
};
{
  /* <div>
        <div className="p-2 filter">
          <div className="search">
            <input
              className="py-2 px-5 input"
              type="text"
              placeholder="Search Learning"
              onChange={(e) => {
                setSeacrhTerm(e.target.value);
              }}
            />
            <i className="fas fa-search fa-lg searchicon"></i>
          </div>
          <div>
            <div>
              <h1 className="filt">Filters</h1>
              <h2 className="categ">Categories</h2>
              <div className="categorySearch">
                <input
                  className="py-2 px-10 inputCateg"
                  type="text"
                  placeholder="Search Category"
                  onChange={(e) => {
                    setSeacrhTerm(e.target.value);
                  }}
                />
                <i className="fas fa-search fa-lg searchiconCat"></i>
                <i class="fas fa-chevron-up upArr"></i>
              </div>
              <div className="category">
                <input type="checkbox" className="checkboxIn" />
                <label className="CatName">Javascript</label>
              </div>
              <div className="category">
                <input type="checkbox" className="checkboxIn" />
                <label className="CatName">Javascript</label>
              </div>
              <div className="category">
                <input type="checkbox" className="checkboxIn" />
                <label className="CatName">Javascript</label>
              </div>
              <div className="showMore">
                <h1 className="mx-8 more">more ...</h1>
              </div>
            </div>
            <div>
              <h2 className="categ">Categories</h2>
              <div className="categorySearch">
                <input
                  className="py-2 px-10 inputCateg"
                  type="text"
                  placeholder="Search Category"
                  onChange={(e) => {
                    setSeacrhTerm(e.target.value);
                  }}
                />
                <i className="fas fa-search fa-lg searchiconCat"></i>
                <i class="fas fa-chevron-up upArr"></i>
              </div>
              <div className="category">
                <input type="checkbox" className="checkboxIn" />
                <label className="CatName">Javascript</label>
              </div>
              <div className="category">
                <input type="checkbox" className="checkboxIn" />
                <label className="CatName">Javascript</label>
              </div>
              <div className="category">
                <input type="checkbox" className="checkboxIn" />
                <label className="CatName">Javascript</label>
              </div>
              <div className="showMore">
                <h1 className="mx-8 more">more ...</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>cvhyf</h1>
        </div>
      </div>

      style:

      .input {
  width: 20rem;

  color: #fcfcfc;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgb(153, 144, 144);
  border: none;
}

.searchicon {
  position: relative;
  right: 0.5rem;
  color: #3b457b;
}
.showMore {
  padding: 1rem 0;
  text-align: center;
}

      */
}

export default Courses;
