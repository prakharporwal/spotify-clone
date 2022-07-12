import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

type Song = {
  songName: string;
  imgUrl: string;
  artist: string;
  description?: string;
};

const songList1 = [
  {
    songName: "NCS",
    imgUrl: "images/song-best.jpg",
    artist: "Arijit Singh",
    description: "The Hits Of Arijit",
  },
  {
    songName: "KillerCode",
    imgUrl: "images/song-art.jpg",
    artist: "Michael Jackson",
  },
  {
    songName: "Be Happy",
    imgUrl: "images/song-mix.jpg",
    artist: "Michael Jackson",
  },
  {
    songName: "Tum Bhi",
    imgUrl: "images/sing-play.jpg",
    artist: "Hordan Damn",
  },
  {
    songName: "Python Scrap",
    imgUrl: "images/song-arijit.jpg",
    artist: "Justin Bieber",
  },
  {
    songName: "Just Play Now",
    imgUrl: "images/song-damn.jpg",
    artist: "Mr Bean",
  },
  {
    songName: "Just Play Now",
    imgUrl: "images/song-damn.jpg",
    artist: "Mr Bean",
  },
];

const songList2 = [...songList1];

const albums = [
  {
    id: "anjsax",
    name: "Recently Played",
    songList: songList1,
  },
  {
    id: "radome",
    name: "Your mixes",
    songList: songList2.reverse(),
  },
  {
    id: "assdas",
    name: "Your mixes",
    songList: songList1,
  },
];

type Album = {
  songList: Song[];
  id: string;
  name: string;
  link?: string;
};

interface AlbumProp {
  album: Album[];
}
const Dashboard: React.FunctionComponent<AlbumProp> = (props) => {
  return (
    <div className="dashboard-box absolute left-64 z-[-100] h-[calc(100vh-6rem)] w-[calc(100vw-16rem)] text-white bg-mygrey-600 overflow-y-auto">
      <div className="flex flex-col p-2 m-2">
        {albums.map((album) => {
          return <SongList album={album}></SongList>;
        })}
      </div>
    </div>
  );
};

interface SongsProp {
  album: Album;
}

const SongList: React.FunctionComponent<SongsProp> = (props) => {
  return (
    <>
      <span className="px-4 pt-4 text-lg hover:underline font-semibold capitalize">
        {props.album.name}
      </span>
      {/* <Link to={props.album?.link}> */}
      <button className="flex justify-end px-4 text-2xs hover:underline text-mygrey-200 font-semibold uppercase">
        <Link to={"genre"}>see all</Link>
      </button>
      <div className="song-list flex p-4 gap-8 items-center whitespace-nowrap w-full overflow-x-auto h-68">
        {props.album.songList.map((song) => {
          return <SongCard song={song} />;
        })}
      </div>
    </>
  );
};

interface IProp {
  song: Song;
}

const SongCard: React.FunctionComponent<IProp> = (props) => {
  const [play, setPlay] = useState(false);

  function handleCardClick() {
    setPlay(!play);
  }
  return (
    <div className="song-card bg-mygrey-500 hover:bg-mygrey-700 inline-block shadow-slate-600 rounded">
      <Link to="/playlist">
        <div className="rounded p-4 flex flex-col text-left w-52">
          <div className="h-46 w-46 self-center">
            <img
              className="album-image rounded h-44 w-44"
              src={props.song.imgUrl}
              alt={props.song.songName.toLowerCase()}
            ></img>
          </div>
          <div className="px-4 py-2 flex flex-col">
            <span className="capitalize font-semibold text-sm overflow-hidden text-ellipsis">
              {props.song.songName}
            </span>
            <span className="artist-name text-xs text-gray-400 overflow-hidden text-ellipsis">
              {props.song.artist}
            </span>
            {/* <span className="text-2xs font-semibold text-gray-400">
              {props.song.description || "Hello"}
            </span> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Dashboard;
