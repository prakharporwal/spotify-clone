import { useState } from "react";
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { Song, songList1 } from "./Dashboard";

interface SongList {
  songsList: Song[];
}

const SongQueue: React.FunctionComponent<SongList> = (props) => {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative z-[-100] w-full">
      <div className="absolute top-0 md:left-64 left-0 h-[100vh-6rem] md:w-[calc(100vw-16rem)] w-full bg-gradient-to-b from-pink-700 to-black overflow-y-auto text-white">
        <div className="flex m-8">
          <span>
            <img className="h-52 w-52" src={"images/sing-play.jpg"} alt={""} />
          </span>
          <div className="flex flex-col px-8 gap-5 justify-end">
            <span className="font-semibold text-xs uppercase">Artist </span>
            <span className="text-6xl font-bold">Daily Mix</span>
            <span className="text-sm">
              Ritviz, When Chai Met Toast, Dream Note and more
            </span>
          </div>
        </div>
        <div className="bg-mygrey-600/[0.5]">
          <div className="p-4">
            <button
              className="bg-mygrey-600 rounded-[50%]"
              onClick={() => {
                console.log("hello");
                setPlay(!play);
              }}
            >
              {play ? (
                <MdPauseCircleFilled className="text-mygreen text-6xl" />
              ) : (
                <MdPlayCircleFilled className="text-mygreen text-6xl" />
              )}
            </button>
          </div>

          <ol className="flex flex-col gap-3 px-8">
            {songList1.map((song, ind) => {
              return <SongListItem key={ind} song={song} />;
            })}
            {songList1.map((song) => {
              return <SongListItem song={song} />;
            })}
            {songList1.map((song) => {
              return <SongListItem song={song} />;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

interface SongProps {
  song: Song;
}

const SongListItem: React.FunctionComponent<SongProps> = ({ song }) => {
  return (
    <li className="flex gap-4 items-center rounded hover:bg-mygrey-400 p-2">
      <span>
        <span>{1}</span>
      </span>
      <span>
        <img className="h-12 w-12" src={song.image_url} alt={song.name} />
      </span>
      <span>
        <span className="block">{song.name}</span>
        <span className="block text-xs text-mygrey-200">{song.artist}</span>
      </span>
      <span></span>
    </li>
  );
};

export default SongQueue;
