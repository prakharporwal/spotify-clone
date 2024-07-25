import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import SongQueue from "./Components/SongQueue";
const Playlist = lazy(() => import("./Components/Playlist"));
const Dashboard = lazy(() => import("./Components/Dashboard"));

function App() {
  return (
    <div className="App bg-red-500">
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
              {/* <Route path="/:id" children={}></Route> */}
            </Route>
            <Route path="library" element={<Dashboard />}></Route>
            <Route path="queue" element={<SongQueue songsList={[]} />}></Route>
          </Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
