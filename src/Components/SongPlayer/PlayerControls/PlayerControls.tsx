import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import { StoreModel } from "../../../Store/Player";
import { TbRepeat, TbRepeatOnce } from "react-icons/tb";
import { BiShuffle } from "react-icons/bi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import { Song } from "../../../models/Song";

const PlayerControls: React.FunctionComponent<any> = (props) => {
  const REPEATONE = "repeatone";
  const DISABLED = "disabled";
  const ENABLED = "enabled";

  const playing = useStoreState<StoreModel>((state) => state.currentPlayState);
  const setPlaying = useStoreActions<StoreModel>(
    (action) => action.updatePlayState
  );
  const [volume, setVolume] = useState(50);
  const [repeat, setRepeat] = useState(ENABLED);
  const [shuffle, setShuffle] = useState(false);
  const [currentTime, setCurrentTime] = useState(-1);

  const queue: Song[] = useStoreState<StoreModel>((state) => state.queue);
  const song: Song = useStoreState<StoreModel>((state) => state.song);

  // const dispatch = useStoreDispatch();
  // <AddTodoForm save={(todo) => dispatch({ type: 'ADD_TODO', payload: todo })} />;

  // const songSource = useStoreState(
  //   (state: State<StoreModel>) => state.song.audio_src
  // );

  function play() {
    const audioPlayer: HTMLAudioElement | null = document.getElementById(
      "audioplayer"
    ) as HTMLAudioElement;

    if (audioPlayer !== null) {
      console.log("play song");
      audioPlayer.play();

      audioPlayer.addEventListener("ended", () => {
        console.log("graceful stop!");
        setPlaying(false);
      });
    }
  }

  function pause() {
    const audioPlayer: HTMLAudioElement | null = document.getElementById(
      "audioplayer"
    ) as HTMLAudioElement;
    if (audioPlayer !== null) {
      console.log("pause song");
      audioPlayer.pause();
    }
  }

  function seek10Forward() {
    const audioPlayer: HTMLAudioElement | null = document.getElementById(
      "audioplayer"
    ) as HTMLAudioElement;
    audioPlayer.currentTime = audioPlayer.currentTime + 10;
  }

  function seek10Back() {
    const audioPlayer: HTMLAudioElement | null = document.getElementById(
      "audioplayer"
    ) as HTMLAudioElement;
    audioPlayer.currentTime = audioPlayer.currentTime - 10;
  }

  function restart() {
    const audioPlayer: HTMLAudioElement | null = document.getElementById(
      "audioplayer"
    ) as HTMLAudioElement;
    if (audioPlayer !== null) {
      audioPlayer.currentTime = 0;
      if (audioPlayer?.paused) {
        audioPlayer?.play();
        setPlaying(true);
      }
    }
  }

  function handlePlayingClick() {
    console.log("playing", playing);
    if (playing) {
      pause();
    } else {
      play();
    }
    setPlaying(!playing);
  }

  function handleRepeatButtonClick() {
    switch (repeat) {
      case DISABLED:
        console.log("loop enabled");
        setRepeat(ENABLED);
        break;
      case ENABLED:
        console.log("loop one");
        setRepeat(REPEATONE);
        break;
      case REPEATONE:
        console.log("loop disabled");
        setRepeat(DISABLED);
        break;
      default:
        break;
    }
  }

  function handleShuffleClick() {
    setShuffle(!shuffle);
  }

  return (
    <div className="w-full grid place-items-center">
      <div className="py-1 px-8 grid place-items-center">
        <section className="player-controls flex gap-4 justify-around text-4xl">
          <button
            title="Enable Shuffle"
            className="shuffle-toggle-button song-player-button py-4 text-xl invisible md:visible"
            onClick={handleShuffleClick}
          >
            {shuffle ? <BiShuffle className="text-mygreen" /> : <BiShuffle />}
          </button>

          <button
            title="Previous"
            className="song-player-button py-2 text-3xl invisible md:visible"
            onClick={seek10Back}
          >
            <MdSkipPrevious />
          </button>

          {playing ? (
            <button title="Pause" onClick={handlePlayingClick}>
              <AiFillPauseCircle />
            </button>
          ) : (
            <button title="Play" onClick={handlePlayingClick}>
              <AiFillPlayCircle />
            </button>
          )}
          <button
            title="Next"
            className="song-player-button text-3xl"
            onClick={seek10Forward}
          >
            <MdSkipNext />
          </button>

          {repeat === DISABLED ? (
            <button
              title="Enable Repeat"
              className="song-player-button text-xl"
              onClick={handleRepeatButtonClick}
            >
              <TbRepeat />
            </button>
          ) : repeat === ENABLED ? (
            <button
              title="Repeat Once"
              className="song-player-button text-xl"
              onClick={handleRepeatButtonClick}
            >
              <TbRepeat className="text-mygreen" />
            </button>
          ) : (
            <button
              title="Disable Repeat"
              className="song-player-button text-xl"
              onClick={handleRepeatButtonClick}
            >
              <TbRepeatOnce className="text-mygreen" />
            </button>
          )}
        </section>
      </div>
      <div className="w-full invisible md:visible">
        <AudioPlayer
          song={song}
          playing={playing}
          loop={repeat !== DISABLED}
          src={""}
        />
      </div>
    </div>
  );
};

export default PlayerControls;
