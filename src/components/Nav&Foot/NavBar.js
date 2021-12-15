import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [dropdown, setDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = (e) => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <nav className="navbar flex">
        {sidebar ? (
          <i
            class="fas fa-times fa-lg Hamburger"
            onClick={(e) => showSidebar(e)}
          ></i>
        ) : (
          <i class="fas fa-bars Hamburger" onClick={(e) => showSidebar(e)}></i>
        )}
        <h1>LOGO</h1>
        <div
          className="profile-dropdown flex"
          onClick={() => setDropdown(!dropdown)}
        >
          <div className="circle"></div>
          <div className="text-m profile px-1">profile</div>
          <i
            class={
              dropdown
                ? "fas fa-sort-down fa-md icon"
                : "fas fa-sort-down fa-md icon"
            }
          ></i>
          <div className={dropdown ? "inline-block dropdown" : "hide-dropdown"}>
            <div className="px-1 py-1">
              <i class="far fa-user-circle fa-md px-1"></i>
              <Link to="/profile" className="tracking-wide px-1">
                Profile
              </Link>
            </div>
            <div className="px-1 py-1.5">
              <i class="fas fa-cog fa-md px-1"></i>
              <Link className="tracking-wide px-1">Setting</Link>
            </div>
            <div className="px-1 py-1.5">
              <i class="far fa-question-circle fa-md px-1"></i>
              <Link className="tracking-wide px-1">Help</Link>
            </div>
            <div className="p-1">
              <Link>
                <button className="bg-white-500 login">SignUp</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className={sidebar ? "flex flex-col sidebar" : "sidebarHide"}>
        <NavLink
          onClick={(e) => showSidebar(e)}
          exact
          to="/"
          className="text-2xl"
        >
          Home
        </NavLink>
        <NavLink
          onClick={(e) => showSidebar(e)}
          exact
          to="/courses"
          className="text-2xl"
        >
          Courses
        </NavLink>
        <NavLink
          onClick={(e) => showSidebar(e)}
          exact
          to="/progress"
          className="text-2xl"
        >
          Progress
        </NavLink>
        <NavLink
          onClick={(e) => showSidebar(e)}
          exact
          to="/Qna"
          className="text-2xl"
        >
          Qna
        </NavLink>
      </div>
    </>
  );
}

export default NavBar;

{
  /* <div>
      <nav className="p-3 w-full h-15 shadow-md flex justify-between navbar">
        <div className="bg-blue-500">LOGO</div>
        <div className="pl-96">
          <NavLink exact to="/" className="text-2xl">
            Home
          </NavLink>

          <NavLink exact to="/courses" className="text-2xl">
            Courses
          </NavLink>

          <NavLink exact to="/progress" className="text-2xl">
            Progress
          </NavLink>

          <NavLink exact to="/Qna" className="text-2xl">
            Qna
          </NavLink>
        </div>
        <div
          className="profile-dropdown flex"
          onClick={() => setDropdown(!dropdown)}
        >
          <div className="circle"></div>
          <div className="text-m profile px-1">profile</div>
          <i
            class={
              dropdown
                ? "fas fa-sort-down fa-lg icon rotate-180"
                : "fas fa-sort-down fa-lg icon"
            }
          ></i>
        </div>
      </nav>
      <div className={dropdown ? "inline-block dropdown" : "hide-dropdown"}>
        <div className="px-1 py-1.5">
          <i class="far fa-user-circle fa-md px-1"></i>
          <Link className="tracking-wide px-1">Profile</Link>
        </div>
        <div className="px-1 py-1.5">
          <i class="fas fa-cog fa-md px-1"></i>
          <Link className="tracking-wide px-1">Setting</Link>
        </div>
        <div className="px-1 py-1.5">
          <i class="far fa-question-circle fa-md px-1"></i>
          <Link className="tracking-wide px-1">Help</Link>
        </div>
        <div className="p-1">
          <Link>
            <button className="bg-white-500 login">SignUp</button>
          </Link>
        </div>
      </div>
    </div> */
}
