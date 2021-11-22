import react from "react";
import img2 from "./img2.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const Enroll = () => {
  const [isEnroll, setEnroll] = useState(false);

  const handleEnroll = (e) => {
    setEnroll(!isEnroll);
  };
  return (
    <>
      <NavBar />
      <div>
        <img src={img2}></img>
        <h1>Bootcamp on Python (from Scratch) for Beginners.</h1>
        <h3>Category : Programming (Udemy)</h3>
        <span>5:</span>
        <i class="fas fa-share-alt"></i>
        {isEnroll ? (
          <div>
            <i class="far fa-check-circle"></i>
            <span>enrolled</span>
            <Link to="https://udemy.com">
              <button>Go to course</button>
            </Link>
          </div>
        ) : (
          <button onClick={(e) => handleEnroll(e)}>Enroll</button>
        )}
      </div>
      <div>
        <h1>Description</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Enroll;
