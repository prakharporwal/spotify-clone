import React from "react";
import MainPage from "./Pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SongQueue from "./Components/SongQueue";
import Dashboard from "./Components/Dashboard";
import Playlist from "./Components/Playlist";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route element={<MainPage />}>
            <Route index element={<div>Hello</div>}></Route>
            <Route path="/" element={<Dashboard album={[]} />}></Route>
            <Route path="/queue" element={<SongQueue />} />
          </Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter basename="/spotify-clone">
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="playlist" element={<Playlist />}>
              {/* <Route path="/:id" children={ }></Route> */}
            </Route>
            <Route path="library" element={<Dashboard />}></Route>
            <Route path="search" element={<Dashboard />}></Route>
            <Route path="queue" element={<SongQueue songsList={[]} />}></Route>
          </Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
