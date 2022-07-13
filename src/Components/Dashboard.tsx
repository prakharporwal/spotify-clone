import React, { useState } from "react";
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
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
    name: "Popular Albums",
    songList: songList1,
  },
];

type Album = {
  songList: Song[];
  id: string;
  name: string;
  link?: string;
};

// interface AlbumProp {
//   // album: Album[];
// }
const Dashboard: React.FunctionComponent<any> = (props) => {
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
      <div className="relative mt-4 h-5">
        <span className="px-4 text-lg hover:underline font-semibold capitalize absolute top-0">
          {props.album.name}
        </span>
        {/* <Link to={props.album?.link}> */}
        <button className="flex justify-end px-4 text-2xs hover:underline text-mygrey-200 font-semibold uppercase absolute right-0 bottom-0">
          <Link to={"genre"}>see all</Link>
        </button>
      </div>
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
        <div className="rounded p-4 flex flex-col text-left w-52 relative">
          <button className="play-song-card bg-mygrey-600 rounded-[50%] absolute right-6 bottom-[4.5rem]">
            {play ? (
              <MdPauseCircleFilled className="text-mygreen text-5xl" />
            ) : (
              <MdPlayCircleFilled className="text-mygreen text-5xl" />
            )}
          </button>
          {/* <BsFillPlayFill className="text-red text-3xl" /> */}
          <div className="h-46 w-46 self-center">
            <img
              className="album-image rounded h-44 w-44"
              src={props.song.imgUrl}
              alt={props.song.songName.toLowerCase()}
            />
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
