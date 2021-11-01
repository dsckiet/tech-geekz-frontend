import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="p-3 w-full h-15 shadow-md flex justify-between navbar">
        <div className="bg-blue-500">LOGO</div>
        <div className="pl-96">
          <NavLink exact to="/" className="text-2xl px-7">
            Home
          </NavLink>

          <NavLink exact to="/courses" className="text-2xl px-7">
            Courses
          </NavLink>

          <NavLink exact to="/progress" className="text-2xl px-7">
            Progress
          </NavLink>

          <NavLink exact to="/Qna" className="text-2xl px-7">
            Qna
          </NavLink>
        </div>
        <div className=" profile-dropdown flex">
          <div className="circle"></div>
          <div className="text-m profile">profile</div>
          <i class="fas fa-sort-down fa-lg icon"></i>
        </div>
      </nav>
      <div className="bg-blue-500 inline-block">
        <div>
          <i class="fas fa-sort-down fa-lg icon"></i>
          <Link>Profile</Link>
        </div>
        <div>
          <i class="fas fa-sort-down fa-lg icon"></i>
          <Link>Profile</Link>
        </div>
        <div>
          <i class="fas fa-sort-down fa-lg icon"></i>
          <Link>Profile</Link>
        </div>
        <div>
          <Link>
            <button className="bg-white-500">SignUp</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
