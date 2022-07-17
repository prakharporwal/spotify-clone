import { useState } from "react";
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { AiOutlineEllipsis } from "react-icons/ai";
import { Song, songList1 } from "./Dashboard";
import { BiTime } from "react-icons/bi";

interface SongList {
  songsList: Song[];
}

const SongQueue: React.FunctionComponent<SongList> = (props) => {
  const [play, setPlay] = useState(false);
  const [liked, setLiked] = useState(false);

  function handleLikeClick() {
    setLiked(!liked);
  }

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
          <div className="p-4 flex items-center gap-4">
            <button
              className="bg-mygrey-600 rounded-[50%] text-6xl"
              onClick={() => {
                console.log("hello");
                setPlay(!play);
              }}
            >
              {play ? (
                <MdPauseCircleFilled className="text-mygreen" />
              ) : (
                <MdPlayCircleFilled className="text-mygreen" />
              )}
            </button>
            <button
              title="Like"
              className="song-player-button mygreen text-4xl"
              onClick={handleLikeClick}
            >
              {liked ? <RiHeartFill className="text-" /> : <RiHeartLine />}
            </button>
            <button
              title="Like"
              className="song-player-button mygreen text-4xl"
            >
              <AiOutlineEllipsis />
            </button>
          </div>

          <table className="flex flex-col gap-3 px-8 table-auto">
            <tr className="flex gap-4 text-left rounded p-2 text-mygrey-200 uppercase font-normal text-sm">
              <th className="font-normal w-12">{"#"}</th>
              <th className="font-normal w-96">{"Title"}</th>
              <th className="font-normal w-80">{"Album"}</th>
              <th className="font-normal">
                <BiTime />
              </th>
            </tr>

            {songList1.map((song, ind) => {
              return <SongListItem index={ind} song={song} />;
            })}
            {songList1.map((song, ind) => {
              return <SongListItem index={ind} song={song} />;
            })}
            {songList1.map((song, ind) => {
              return <SongListItem index={ind} song={song} />;
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

interface SongProps {
  index: number;
  song: Song;
}

const SongListItem: React.FunctionComponent<SongProps> = ({ index, song }) => {
  return (
    <tr>
      <tbody className="flex gap-4 items-center rounded hover:bg-mygrey-400 p-2">
        <td className="w-8 p-2">
          <span>{index + 1}</span>
        </td>
        <td className="flex gap-4 w-96">
          <span>
            <img className="h-12 w-12" src={song.image_url} alt={song.name} />
          </span>
          <span>
            <span className="block">{song.name}</span>
            <span className="block text-xs text-mygrey-200">{song.artist}</span>
          </span>
        </td>
        <td className="w-80">
          <span>{song.audio_src}</span>
        </td>
      </tbody>
    </tr>
  );
};

export default SongQueue;
export { SongListItem };
