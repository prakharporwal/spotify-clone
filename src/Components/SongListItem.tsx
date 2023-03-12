import { useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { MdPlayArrow } from "react-icons/md";
import { Song } from "./Dashboard";

interface SongProps {
  index: number;
  song: Song;
}

const SongListItem: React.FunctionComponent<SongProps> = ({ index, song }) => {
  const [showSongMenu, setShowSongMenu] = useState(false);
  // const queue: Song[] = useStoreState<StoreModel>((state) => state.queue);
  // const updateQueue = useStoreActions<StoreModel>((state) => state.updateQueue);

  const [playIcon, setPlayIcon] = useState<boolean>(false);
  return (
    <tr
      className="rounded hover:bg-mygrey-400"
      onMouseEnter={() => {
        setPlayIcon(true);
      }}
      onMouseLeave={() => {
        setPlayIcon(false);
      }}
    >
      <td>
        <div className="song-order-number">
          <span className={"pl-6 " + (playIcon ? "hidden" : "block")}>
            {index + 1}
          </span>
          <button className={"pl-6 " + (playIcon ? "inline" : "hidden")}>
            <MdPlayArrow />
          </button>
        </div>
      </td>
      <td className="flex">
        <span className="p-2">
          <img className="h-16 w-16" src={song.image_url} alt={song.name} />
        </span>
        <span className="p-2">
          <span className="block">{song.name}</span>
          <span className="block text-xs text-mygrey-200">{song.artist}</span>
        </span>
      </td>
      <td className="w-80 text-mygrey-200">
        <span>{"5:40"}</span>
      </td>
      <td>
        <button
          title="Like"
          className="song-player-button mygreen text-4xl rounded"
          onClick={() => setShowSongMenu(!showSongMenu)}
        >
          <AiOutlineEllipsis />
        </button>
        {showSongMenu && (
          <div className="flex flex-col absolute text-sm bg-mygrey-800 p-2 items-start rounded">
            <button
              className="py-2 px-4 hover:bg-mygrey-400 w-full rounded"
              onClick={() => {
                setShowSongMenu(!showSongMenu);
                // let q = queue;
                // q.push(song);
                // console.log(q);
                // updateQueue(q);
              }}
            >
              Remove
            </button>
            <button
              className="py-2 px-4 hover:bg-mygrey-400 w-full rounded"
              onClick={() => {
                setShowSongMenu(!showSongMenu);
              }}
            >
              Add to Queue
            </button>
            <button
              className="py-2 px-4 hover:bg-mygrey-400 w-full rounded"
              onClick={() => {
                setShowSongMenu(!showSongMenu);
              }}
            >
              Add to Queue
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export { SongListItem };
