import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { BiLibrary } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as SpotifyIcon } from "../../assets/svg/spotify-icon.svg";

import "./Sidebar.css";
import PlaylistSection from "./Sections/Playlist";

const Sidebar: React.FunctionComponent<any> = (props) => {
  return (
    <div className="fixed top-0 left-0 h-screen p-4 md:w-64 w-48 md:block hidden bg-black">
      <div className="text-white ">
        <Link to="">
          <SpotifyIcon className="scale-[60%]" />
        </Link>
      </div>
      <div className="text-[12px] font-semibold">
        <ul className="list-none p-3 sm:p-1">
          <li className="py-1">
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? "sidebar-button-active" : "sidebar-button"
              }
            >
              <button className="flex gap-4 items-center">
                <MdHomeFilled className="text-2xl inline" />
                Home
              </button>
            </NavLink>
          </li>
          {/* <li className="py-1">
            <NavLink
              to="search"
              className={({ isActive }) =>
                isActive ? "sidebar-button-active" : "sidebar-button"
              }
            >
              <button className="flex gap-4 items-center">
                <GoSearch className="text-2xl inline" />
                Search
              </button>
            </NavLink>
          </li> */}
          <li className="py-1">
            <NavLink
              to="library"
              className={({ isActive }) =>
                isActive ? "sidebar-button-active" : "sidebar-button"
              }
            >
              <button className="flex gap-4 items-center">
                <BiLibrary className="text-2xl inline" />
                Your Library
              </button>
            </NavLink>
          </li>
        </ul>
        <ul className="list-none p-4">
          <li className="py-1">
            <button className="sidebar-button">Create Playlist</button>
          </li>
          <li className="py-1">
            <button className="sidebar-button">Liked Songs</button>
          </li>
          <li className="py-1">
            <button className="sidebar-button">Your Episodes</button>
          </li>
        </ul>
      </div>
      <div className="relative flex pt-3 items-center">
        <div className="flex-grow border-t border-gray-600"></div>
      </div>
      <PlaylistSection />
    </div>
  );
};
// document.title = "Song Name";

export default Sidebar;
