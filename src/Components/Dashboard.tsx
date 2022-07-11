import React, { useState } from "react";

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
    songName: "BE HAPPY",
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
];

type Album = {
  songList: Song[];
  id: string;
  name: string;
};

interface AlbumProp {
  album: Album[];
}
const Dashboard: React.FunctionComponent<AlbumProp> = (props) => {
  return (
    <div>
      {albums.map((album) => {
        return <SongList album={album}></SongList>;
      })}
    </div>
  );
};

interface SongsProp {
  album: Album;
}

const SongList: React.FunctionComponent<SongsProp> = (props) => {
  return (
    <>
      <span className="text-lg font-semibold p-8 capitalize">
        {props.album.name}
      </span>
      <div className="m-4 flex gap-4">
        {props.album.songList.map((song) => {
          return <SongCard song={song}></SongCard>;
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
    <button onClick={handleCardClick}>
      <span className="border rounded p-2 flex flex-col text-left h-64 w-48">
        <div className="h-42 w-42  self-center">
          <img
            className="album-image rounded h-40 w-40 m-1"
            src={props.song.imgUrl}
            alt={props.song.songName.toLowerCase()}
          ></img>
        </div>
        <span className="pl-2 flex flex-col">
          <span className="capitalize">{props.song.songName}</span>
          <span className="text-sm text-gray-400">{props.song.artist}</span>
          <span className="text-xs font-semibold text-gray-400">
            {props.song.description}
          </span>
        </span>
      </span>
    </button>
  );
};

export default Dashboard;
