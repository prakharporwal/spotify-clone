import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { Song } from "../../models/Song";
import { useStoreActions, useStoreState } from "easy-peasy";
import { StoreModel } from "../../Store/Player";

interface IProp {
    song: Song;
  }
  
const SongCard: React.FunctionComponent<IProp> = (props) => {
  const play = useStoreState<StoreModel>((state) => state.currentPlayState);
  const setPlay = useStoreActions<StoreModel>(
    (action) => action.updatePlayState
  );
  const currentSong = useStoreState<StoreModel>((state) => state.song);
  const updateSong = useStoreActions<StoreModel, any>(
    (store: StoreModel) => store.changeSong
  );

  function handlePlayButtonCardClick(e: any) {
    updateSong(props.song);
    // useStoreActions((store: StoreModel) => store.song.changeSong({}))
    // updateSong(songList1[0]);
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
        {play && currentSong.name === props.song.name ? (
          <MdPauseCircleFilled className="text-mygreen text-5xl" />
        ) : (
          <MdPlayCircleFilled className="text-mygreen text-5xl" />
        )}
      </button>
      {/* <Link to={"/playlist"}> */}
      <div className="rounded p-4 flex flex-col text-left w-52 ">
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
      {/* </Link> */}
    </div>
  );
};

export default SongCard;
