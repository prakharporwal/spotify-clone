import React from "react";
import Sidebar from "./Sidebar";
import SongPlayer from "./SongPlayer";

export default function MainPage(props) {
  return (
    <div className="h-full overflow-scroll">
      <Sidebar />
      <SongPlayer />
    </div>
  );
}
