import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useState } from "react";
import "./courses.css";

const Courses = () => {
  const [searchTerm, setSeacrhTerm] = useState("");
  const [filter, setFilter] = useState(false);

  const showFilter = (e) => {
    setFilter(!filter);
  };

  return (
    <>
      <NavBar />
      <button onClick={(e) => showFilter(e)}>Filters</button>
      <div className={filter ? "filter" : "hideFilter"}>
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
      <Footer />
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
