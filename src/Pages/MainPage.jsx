import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import SongPlayer from "../Components/SongPlayer/SongPlayer";
import { Outlet } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import { playerStore } from "../Store/Player";
import MobilePlayer from "../Components/MobilePlayer";
import WebHeader from "../Components/WebHeader/WebHeader";

const MainPage = (props) => {
  return (
    <div>
      <div className="block md:hidden text-center bg-red-500">
        Not Supporting mobile! Open On a Bigger Screen!
      </div>
      <StoreProvider store={playerStore}>
        <WebHeader />
        <Sidebar />
        <div className="hidden md:block">
          <SongPlayer />
        </div>
        <div className="block md:hidden">
          <MobilePlayer />
        </div>
        <Outlet />
      </StoreProvider>
    </div>
  );
};

export default MainPage;
