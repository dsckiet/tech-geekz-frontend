import React from "react";

function NavBar() {
  return (
    <div className="p-3.5 w-full h-15 bg-gray-50 shadow-md flex justify-between">
      <div className="bg-blue-500">LOGO</div>
      <div className="pl-96">
        <a className="text-2xl px-7">Home</a>
        <a className="text-2xl px-7">Courses</a>
        <a className="text-2xl px-7">Progress</a>
        <a className="text-2xl px-7">QnA</a>
      </div>
      <div className="text-2xl bg-blue-300 rounded-full">profile</div>
    </div>
  );
}

export default NavBar;
