import React from "react";
import Sidebar from "../Components/Sidebar";
import SongPlayer from "../Components/SongPlayer";
import { Outlet } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import { playerStore } from "../Store/Player";

const MainPage = (props) => {
  return (
    <>
      <div className="text-center bg-red-500">
        Routing not working Properly! Expect Bugs!
      </div>
      <StoreProvider store={playerStore}>
        <Sidebar />
        <SongPlayer />
        <Outlet />
      </StoreProvider>
    </>
  );
};

export default MainPage;
