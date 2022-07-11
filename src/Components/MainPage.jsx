import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import SongPlayer from "./SongPlayer";
import SongQueue from "./SongQueue";

export default function MainPage(props) {
  return (
    <BrowserRouter>
      <SongPlayer />
      <Sidebar />
      <div className="relative left-64 z-[-100] h-screen overflow-scroll text-white bg-mygrey-600 pt-4">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="queue" element={<SongQueue />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
