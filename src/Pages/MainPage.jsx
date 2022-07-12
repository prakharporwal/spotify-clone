import React from "react";
import Sidebar from "../Components/Sidebar";
import SongPlayer from "../Components/SongPlayer";
import { Outlet } from "react-router-dom";

const MainPage = (props) => {
  return (
    <>
      <Sidebar />
      <SongPlayer />
      <Outlet />
    </>
  );
};

export default MainPage;
