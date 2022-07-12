import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Sidebar from "../Components/Sidebar";
import SongPlayer from "../Components/SongPlayer";
import SongQueue from "../Components/SongQueue";

export default function MainPage(props) {
  return (
    <BrowserRouter>
      <Sidebar />
      <SongPlayer />
      <div className="relative left-64 z-[-100] h-[calc(100vh-6rem)] w-[calc(100vw-16rem)] text-white bg-mygrey-600 pt-4">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="queue" element={<SongQueue />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
