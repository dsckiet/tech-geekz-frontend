import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
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
  );
}

export default NavBar;
