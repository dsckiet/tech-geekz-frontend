import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="p-3.5 w-full h-15 bg-gray-50 shadow-md flex justify-between">
      <div className="bg-blue-500">LOGO</div>
      <nav className="pl-96">
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
      </nav>
      <div className="text-2xl bg-blue-300 rounded-full">profile</div>
    </div>
  );
}

export default NavBar;
