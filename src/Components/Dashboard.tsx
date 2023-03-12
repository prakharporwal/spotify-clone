import React, { useEffect, useState } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { Link } from "react-router-dom";
import { queueStore } from "../Store/QueueStore";
// import { StoreModel } from "../Store/Player";
import Constants from "./Constants";

import "./Dashboard.css";

export type Song = {
  id: string;
  name: string;
  image_url: string;
  artist: string;
  description?: string;
  audio_src: string;
};

export const songList1: Song[] = [
  {
    id: "anyid123e",
    name: "NCS",
    image_url: "images/song-best.jpg",
    artist: "Arijit Singh",
    description: "The Hits Of Arijit",
    audio_src: "songs/madhanya.mp3",
  },
  {
    id: "23rdf23e",
    name: "KillerCode",
    image_url: "images/song-art.jpg",
    artist: "Michael Jackson",
    audio_src: "songs/Cartoon.mp3",
  },
  {
    id: "anyid12qwr32r134te",
    name: "Be Happy",
    image_url: "images/song-mix.jpg",
    artist: "Michael Jackson",
    audio_src: "songs/kho-gaye-hum-kahan.mp3",
  },
  {
    id: "108934198",
    name: "Tum Bhi",
    image_url: "images/sing-play.jpg",
    artist: "Hordan Damn",
    audio_src: "songs/Elektronomia - Sky High [NCS Release].mp3",
  },
  {
    id: "anyi09cjdnuyhd123e",
    name: "Python Scrap",
    image_url: "images/song-arijit.jpg",
    artist: "Justin Bieber",
    audio_src: "songs/roz.mp3",
  },
  {
    id: "anyhwlefgotwrhuid123e",
    name: "Just Play Now",
    image_url: "images/song-damn.jpg",
    artist: "Mr Bean",
    audio_src: "songs/aziyat.mp3",
  },
];

const songList2 = [...songList1];

type Album = {
  id: string;
  songs: Song[];
  name: string;
  image_url?: string;
};
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
      await fetch(Constants.API + "/album", {
        ...options,
      })
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
          // setAlbums2(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // getAlbums();
    // let alb = JSON.parse(data) as Album[];
  }, []);

  return (
    <div className="relative z-[-100]">
      <div className="absolute top-0 md:left-64 left-0 md:w-[calc(100vw-16rem)] w-full overflow-y-auto bg-mygrey-600 text-white">
        <div className="flex flex-col p-2 m-2 mb-52 md:mb-24">
          {albums2.map((album) => {
            return <SongList album={album}></SongList>;
          })}
        </div>
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
      <div className="song-list flex p-4 gap-6 items-center whitespace-nowrap w-full overflow-x-auto h-68">
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
  // const updateSong = useStoreActions<StoreModel, any>(
  //   (store: StoreModel) => store.changeSong
  // );
  const [showSongMenu, setShowSongMenu] = useState<boolean>(false);

  function handlePlayButtonCardClick(e: any) {
    // updateSong(props.song);
    // useStoreActions((store: StoreModel) => store.song.changeSong({}))
    // updateSong(songList1[0]);

    queueStore.dispatch({
      type: "CHANGED",
      payload: props.song,
    });
    setPlay(!play);
    console.log("changing song payload!");
    console.log(props.song.audio_src);
    e.stopPropagation();
  }

  return (
    <div className="relative song-card bg-mygrey-500 hover:bg-mygrey-700 inline-block shadow-slate-600 rounded">
      <button
        className="play-song-card bg-mygrey-600 rounded-[50%] right-6 bottom-[4.5rem] absolute"
        onClick={(e) => handlePlayButtonCardClick(e)}
      >
        {play ? (
          <MdPauseCircleFilled className="text-mygreen text-5xl" />
        ) : (
          <MdPlayCircleFilled className="text-mygreen text-5xl" />
        )}
      </button>
      <Link to={"/playlist"}>
        <div className="rounded p-4 flex flex-col text-left w-52 ">
          {/* <BsFillPlayFill className="text-red text-3xl" /> */}
          <div className="h-46 w-46 self-center">
            <img
              className="album-image rounded h-44 w-44"
              src={props.song.image_url}
              alt={props.song.name.toLowerCase()}
            />
          </div>
          <div className="card-info flex flex-row justify-between">
            <span className="px-2 py-2 flex flex-col">
              <span className="capitalize font-semibold text-sm overflow-hidden text-ellipsis">
                {props.song.name}
              </span>
              <span className="artist-name text-xs text-gray-400 overflow-hidden text-ellipsis">
                {props.song.artist}
              </span>
              {/* <span className="text-2xs font-semibold text-gray-400">
              {props.song.description || "Hello"}
            </span> */}
            </span>
            <span>
              <button
                title="options"
                className="song-options pt-2"
                onClick={(e) => {
                  e.preventDefault();
                  setShowSongMenu(!showSongMenu);
                  e.stopPropagation();
                }}
              >
                <IoEllipsisVerticalSharp size={"1.5rem"} />
              </button>
              {showSongMenu && (
                <SongMenuOptions
                  song={props.song}
                  showSongMenu={showSongMenu}
                  setShowSongMenu={setShowSongMenu}
                ></SongMenuOptions>
              )}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

interface ISongMenu {
  song: Song;
  showSongMenu: boolean;
  setShowSongMenu: any;
}

const SongMenuOptions: React.FunctionComponent<ISongMenu> = (props: any) => {
  return (
    <div className=" z-50 flex flex-col absolute text-sm bg-mygrey-800 p-2 items-start rounded">
      <button
        className="py-2 px-4 hover:bg-mygrey-400 w-full rounded"
        onClick={(e) => {
          e.preventDefault();
          props.setShowSongMenu(false);

          queueStore.dispatch({
            type: "ADD_TO_QUEUE",
            payload: props.song,
          });
          e.stopPropagation();
        }}
      >
        Add to Queue
      </button>
    </div>
  );
};

export default Dashboard;
