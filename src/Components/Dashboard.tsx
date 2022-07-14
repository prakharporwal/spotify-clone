import React, { useEffect, useState } from "react";
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { Link } from "react-router-dom";
import Constants from "./Constants";

import "./Dashboard.css";
import { resolve } from "path";

type Song = {
  name: string;
  image_url: string;
  artist: string;
  description?: string;
};

const songList1 = [
  {
    name: "NCS",
    image_url: "images/song-best.jpg",
    artist: "Arijit Singh",
    description: "The Hits Of Arijit",
  },
  {
    name: "KillerCode",
    image_url: "images/song-art.jpg",
    artist: "Michael Jackson",
  },
  {
    name: "Be Happy",
    image_url: "images/song-mix.jpg",
    artist: "Michael Jackson",
  },
  {
    name: "Tum Bhi",
    image_url: "images/sing-play.jpg",
    artist: "Hordan Damn",
  },
  {
    name: "Python Scrap",
    image_url: "images/song-arijit.jpg",
    artist: "Justin Bieber",
  },
  {
    name: "Just Play Now",
    image_url: "images/song-damn.jpg",
    artist: "Mr Bean",
  },
  {
    name: "Just Play Now",
    image_url: "images/song-damn.jpg",
    artist: "Mr Bean",
  },
];

const songList2 = [...songList1];

interface Album {
  songs: Song[];
  id: string;
  name: string;
  link?: string;
}
const albums: Album[] = [
  {
    id: "anjsax",
    name: "Recently Played",
    songs: songList1,
  },
  {
    id: "radome",
    name: "Your mixes",
    songs: songList2.reverse(),
  },
  {
    id: "assdas",
    name: "Popular Albums",
    songs: songList1,
  },
];

// interface AlbumProp {
//   // album: Album[];
// }

const Dashboard: React.FunctionComponent<any> = (props) => {
  const [albums2, setAlbums2] = useState<Album[]>(albums);

  useEffect(() => {
    async function getAlbums() {
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      await fetch(Constants.API + "/album", options)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw res;
          }
        })
        .then((data) => {
          console.log(data);
          // let x: Album[] =
          setAlbums2(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAlbums();
    // let alb = JSON.parse(data) as Album[];
  }, [albums2]);

  return (
    <div className="dashboard-box absolute left-64 z-[-100] h-[calc(100vh-6rem)] w-[calc(100vw-16rem)] text-white bg-mygrey-600 overflow-y-auto">
      <div className="flex flex-col p-2 m-2">
        {albums2.map((album) => {
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
        {props.album.songs.map((song) => {
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
              src={props.song.image_url}
              alt={props.song.name.toLowerCase()}
            />
          </div>
          <div className="px-4 py-2 flex flex-col">
            <span className="capitalize font-semibold text-sm overflow-hidden text-ellipsis">
              {props.song.name}
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
