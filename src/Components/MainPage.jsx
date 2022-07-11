import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import SongPlayer from "./SongPlayer";

export default function MainPage(props) {
  return (
    <div className="main-page">
      <Sidebar />
      <SongPlayer />
      <Dashboard />
    </div>
  );
}
