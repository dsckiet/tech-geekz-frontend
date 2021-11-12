import React from "react";
import insta from "./insta.svg";
import twitter from "./twitter.svg";
import linkedIn from "./linkedIn.svg";
import github from "./github.svg";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="bg-blue-400 footer pt-5">
      <div className="flex inline-block justify-center">
        <a className="p-5" href="https://www.instagram.com/">
          <img alt="insta" src={insta} />
        </a>
        <a className="p-5" href="https://www.twitter.com/">
          <img alt="insta" src={twitter} />
        </a>
        <a className="p-5" href="https://www.linkedIn.com/">
          <img alt="insta" src={linkedIn} />
        </a>
        <a className="p-5" href="https://www.github.com/">
          <img alt="insta" src={github} />
        </a>
      </div>
      <div className="flex inline-block justify-center">
        <Link className="py-4 px-10 text-white">About</Link>
        <Link className="py-4 px-10 text-white">Need Help?</Link>
        <Link className="py-4 px-10 text-white">Privacy</Link>
        <Link className="py-4 px-10 text-white">Terms Of Use</Link>
        <Link className="py-4 px-10 text-white">Contact Us</Link>
      </div>
      <div className="flex flex-col text-center">
        <h3 className="pt-5 text-white">2021 All Rights Reserved</h3>
        <h3 className="pb-5 text-white">Created by Tech_geekz.</h3>
      </div>
    </div>
  );
}

export default Footer;