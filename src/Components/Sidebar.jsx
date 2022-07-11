import React from "react";

const Sidebar = (props) => {
  return (
    <div className="fixed top-0 left-0 h-screen p-4 w-64 bg-black">
      <span className="text-2xl text-white font-weight">Spotify</span>
      <div className="text-sm font-semibold h-1/3">
        <ul className="list-none p-3">
          <li className="py-1">
            <button className="sidebar-button">Home</button>
          </li>
          <li className="py-1">
            <button className="sidebar-button">Search</button>
          </li>
          <li className="py-1">
            <button className="sidebar-button">Your Library</button>
          </li>
        </ul>
        <ul className="list-none p-4">
          <li className="py-1">
            <button className="sidebar-button">Create Playlist</button>
          </li>
          <li className="py-1">
            <button className="sidebar-button">Like Songs</button>
          </li>
          <li className="py-1">
            <button className="sidebar-button">Your Episodes</button>
          </li>
        </ul>
      </div>
      <div className="relative flex pt-3 items-center">
        <div className="flex-grow border-t border-gray-700"></div>
      </div>
      <div className="playlist text-sm h-[50%]">
        <ul className="p-4 h-[90%] overflow-y-auto">
          <li className="py-1">
            <button className="sidebar-button py-1">Arijit</button>
          </li>
          <li className="py-1">
            <button className="sidebar-button">Disco</button>
          </li>
          <li className="py-1">
            <button className="sidebar-button">Dancer</button>
          </li>
          <li className="py-1">
            <button className="sidebar-button">Disco</button>
          </li>
          <li className="py-1">
            <button className="sidebar-button">Dancer</button>
          </li>
          <li className="py-1">
            <button className="sidebar-button">Disco</button>
          </li>
          <li className="py-1">
            <button className="sidebar-button">Dancer</button>
          </li>
          <li className="py-1">
            <button className="sidebar-button">Disco</button>
          </li>
          <li className="py-1">
            <button className="sidebar-button">Dancer</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
// document.title = "Song Name";

export default Sidebar;
