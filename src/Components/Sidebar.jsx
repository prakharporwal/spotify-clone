import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { BiLibrary } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as SpotifyIcon } from "../assets/svg/spotify-icon.svg";

import "./Sidebar.css";

const Sidebar = (props) => {
  const location = useLocation();

  function getRoute() {
    if (location.pathname === "/") {
      return [true, false, false];
    } else if (location.pathname === "/library") {
      return [false, true, false];
    } else if (location.pathname === "/search") {
      return [false, false, true];
    } else {
      return [false, false, false];
    }
  }

  const [isHome, isLibrary, isSearch] = getRoute();

  return (
    <div className="fixed top-0 left-0 h-screen p-4 w-64 bg-black">
      <Link to="/" className="block">
        <div className="text-white scale-75 m-0 p-3 relative left-0">
          <SpotifyIcon />
        </div>
      </Link>
      <div className="text-[12px] font-semibold">
        <ul className="list-none p-3">
          <li className="py-1">
            <Link to="/">
              <button
                className={`${
                  isHome ? "sidebar-button-active" : "sidebar-button"
                } flex gap-4 items-center`}
              >
                <MdHomeFilled className="text-2xl inline" />
                Home
              </button>
            </Link>
          </li>
          <li className="py-1">
            <Link to="/search">
              <button
                className={`${
                  isSearch ? "sidebar-button-active" : "sidebar-button"
                } flex gap-4 items-center`}
              >
                <GoSearch className="text-2xl inline" />
                Search
              </button>
            </Link>
          </li>
          <li className="py-1">
            <Link to="/library">
              <button
                className={`${
                  isLibrary ? "sidebar-button-active" : "sidebar-button"
                } flex gap-4 items-center`}
              >
                <BiLibrary className="text-2xl inline" />
                Your Library
              </button>
            </Link>
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
        <div className="flex-grow border-t border-gray-700"></div>
      </div>
      <div className="text-sm h-[50%] ">
        <ul className="playlist p-4 h-[60%] overflow-y-auto">
          <li>
            <button className="sidebar-playlist-button">Arijit</button>
          </li>
          <li>
            <button className="sidebar-playlist-button">
              Disco my boi are too good to travels
            </button>
          </li>
          <li>
            <button className="sidebar-playlist-button">Dancer</button>
          </li>
          <li>
            <button className="sidebar-playlist-button">Disco</button>
          </li>
          <li>
            <button className="sidebar-playlist-button">Dancer</button>
          </li>
          <li>
            <button className="sidebar-playlist-button">Disco</button>
          </li>
          <li>
            <button className="sidebar-playlist-button">Dancer</button>
          </li>
          <li>
            <button className="sidebar-playlist-button">Disco</button>
          </li>
          <li>
            <button className="sidebar-playlist-button">Dancer</button>
          </li>
          <li>
            <button className="sidebar-playlist-button">Disco</button>
          </li>
          <li>
            <button className="sidebar-playlist-button">Dancer</button>
          </li>
          <li>
            <button className="sidebar-playlist-button">Disco</button>
          </li>
          <li>
            <button className="sidebar-playlist-button">Dancer</button>
          </li>
          <li>
            <button className="sidebar-playlist-button">Disco</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
// document.title = "Song Name";

export default Sidebar;
