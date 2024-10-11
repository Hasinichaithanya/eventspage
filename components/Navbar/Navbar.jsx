import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import { FaAngleRight } from "react-icons/fa";

import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <div className="nav-1">
        <div className="logo-container">
          <b className="logo-name">BookUsNow</b>
          <span className="address">
            <TiLocation />
            Mumbai,India <FaAngleRight />
          </span>
        </div>

        <div className="nav-1 search-categories-container">
          <button className="categories-btn">
            <GiHamburgerMenu />
            Categories
          </button>
          <div className="input-container">
            <input placeholder="DJI phantom" />
            <IoMdSearch className="fav-icon" />
          </div>
        </div>
        <div className="nav-1 search-categories-container fav-container-md">
          <MdOutlineFavorite className="fav-icon" />
          <span>Favourites</span>
          <button className="sign-in-btn">Sign In</button>
        </div>
        <div className="nav-1 search-categories-container fav-container-sm">
          {" "}
          <IoMdSearch className="fav-icon" />
          <MdOutlineFavorite className="fav-icon" />
          <IoPerson className="fav-icon" />
        </div>
      </div>
      <div className="nav-1 nav-2">
        <span className="address">
          <TiLocation />
          Mumbai,India <FaAngleRight />
        </span>
        <ul className="options">
          <li>Live shows</li>
          <li>Streams</li>
          <li>Movies</li>
          <li>Plays</li>
          <li>Events</li>
          <li>Sports</li>
          <li>Activities</li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
