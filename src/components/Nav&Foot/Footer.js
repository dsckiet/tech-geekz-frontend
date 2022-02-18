import React from "react";
import insta from "../../utils/images/insta.svg";
import twitter from "../../utils/images/twitter.svg";
import linkedIn from "../../utils/images/linkedIn.svg";
import github from "../../utils/images/github.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-blue-400 pt-5" style={{ backgroundColor: "#53063" }}>
      <div className="flex inline-block justify-center">
        <a className="scale-75" href="https://www.instagram.com/">
          <img alt="insta" src={insta} />
        </a>
        <a className="scale-75" href="https://www.twitter.com/">
          <img alt="insta" src={twitter} />
        </a>
        <a className="scale-75" href="https://www.linkedIn.com/">
          <img alt="insta" src={linkedIn} />
        </a>
        <a className="scale-75" href="https://www.github.com/">
          <img alt="insta" src={github} />
        </a>
      </div>
      <div className="flex inline-block justify-center">
        <Link className="text-white text-xs px-2 py-4">About</Link>
        <Link className="text-white text-xs px-2 py-4">Need Help?</Link>
        <Link className="text-white text-xs px-2 py-4">Privacy</Link>
        <Link className="text-white text-xs px-2 py-4">Terms Of Use</Link>
        <Link className="text-white text-xs px-2 py-4">Contact Us</Link>
      </div>
      <div className="flex flex-col text-center">
        <h3 className="pt-5 text-white">2021 All Rights Reserved</h3>
        <h3 className="pb-5 text-white text-xs">Created by Tech_geekz.</h3>
      </div>
    </div>
  );
}

export default Footer;
