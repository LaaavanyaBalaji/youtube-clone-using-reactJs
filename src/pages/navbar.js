import React from "react";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdLibraryMusic } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { CgProfile } from "react-icons/cg";




import "./navbar.css";

function Navbar({ visible }) {
  return (
    <div className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      {/* <img src={logo} alt="Logo" className="navlogo" /> */}
      <ul className="navlist">
        <li className="navitem">
          <FaHome className="navicon" />
          <span className="navtext">Home</span>
        </li>
        <li className="navitem">
          <SiYoutubeshorts className="navicon" />
          <span className="navtext">Shorts</span>
        </li>
        <li className="navitem">
          <MdLibraryMusic className="navicon" />
          <span className="navtext">Music</span>
        </li>
        <li className="navitem">
          <MdLibraryAdd className="navicon" />
          <span className="navtext">Watchlist</span>
        </li>
        <li className="navitem">
          <IoMdTrendingUp className="navicon" />
          <span className="navtext">Trending</span>
        </li>
        <li className="navitem">
          <CgProfile className="navicon" />
          <span className="navtext">Profile</span>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
