import React from "react";
import Sidebar from "../Components/Sidebar";
import SongPlayer from "../Components/SongPlayer";
import { Outlet } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import { playerStore } from "../Store/Player";

const MainPage = (props) => {
  return (
    <>
      <StoreProvider store={playerStore}>
        <Sidebar />
        <SongPlayer />
        <Outlet />
      </StoreProvider>
    </>
  );
};

export default MainPage;
