import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useState } from "react";
import img2 from "./img2.jpg";
import "./courses.css";
import { Link } from "react-router-dom";

const Courses = () => {
  const [searchTerm, setSeacrhTerm] = useState("");
  const [filter, setFilter] = useState(false);

  const showFilter = (e) => {
    setFilter(!filter);
  };

  return (
    <>
      {/* <NavBar /> */}
      {filter ? (
        <div className={filter ? "filter" : "hideFilter"}>
          <div>
            <i class="fas fa-times fa-lg" onClick={(e) => showFilter(e)}></i>
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
      ) : (
        <div>
          <h1 className="popular">Popular Courses here:</h1>
          <div className="inputs">
            <div className="searchbox">
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

          <div className="courses">
            <div className="mainCard">
              <div className="card">
                <img className="Cimg" src={img2}></img>
                <h1 className="title">
                  Bootcamp on Python(from Scratch) for Beginners.
                </h1>
                <h3 className="categoryText">Category : Programming (Udemy)</h3>
                <button className="enrollButt">
                  <Link to="/enroll">Add Course</Link>
                </button>
                <span> 5 :</span>
              </div>
            </div>
            <div className="mainCard">
              <div className="card">
                <img className="Cimg" src={img2}></img>
                <h1 className="title">
                  Bootcamp on Python(from Scratch) for Beginners.
                </h1>
                <h3 className="categoryText">Category : Programming (Udemy)</h3>
                <button className="enrollButt">
                  <Link to="/enroll">Add Course</Link>
                </button>
                <span> 5 :</span>
              </div>
            </div>
            <div className="mainCard">
              <div className="card">
                <img className="Cimg" src={img2}></img>
                <h1 className="title">
                  Bootcamp on Python(from Scratch) for Beginners.
                </h1>
                <h3 className="categoryText">Category : Programming (Udemy)</h3>
                <button className="enrollButt">
                  <Link to="/enroll">Add Course</Link>
                </button>
                <span> 5 :</span>
              </div>
            </div>
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
      </div> */
}

export default Courses;
