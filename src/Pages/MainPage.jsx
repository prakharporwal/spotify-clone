import React from "react";
import Sidebar from "../Components/Sidebar";
import SongPlayer from "../Components/SongPlayer";

const MainPage = (props) => {
  return (
    <div>
      <Sidebar />
      <SongPlayer />
      {props.children}
    </div>
  );
};

export default MainPage;
