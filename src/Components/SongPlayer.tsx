import React, { useEffect, useRef, useState } from "react";
import { TbRepeat, TbRepeatOnce } from "react-icons/tb";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { BiShuffle } from "react-icons/bi";
import {
  MdOutlinePictureInPictureAlt,
  MdSkipNext,
  MdSkipPrevious,
  MdOutlineQueueMusic,
} from "react-icons/md";
import { FiVolume1, FiVolumeX, FiVolume2, FiVolume } from "react-icons/fi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { State, useStoreState } from "easy-peasy";
import { createRef } from "react";
import { StoreModel } from "../Store/Player";
import { Song } from "./Dashboard";

const SongPlayer: React.FunctionComponent<any> = (props) => {
  const [liked, setLiked] = useState(false);

  const song: Song = useStoreState<StoreModel>((state) => state.song);

  function handleLikeClick() {
    setLiked(!liked);
  }

  return (
    <section className="song-player-bar flex bg-mygrey-700 fixed bottom-0 w-screen h-24 text-white">
      <div className="flex w-[30%]">
        <div className="mx-2 h-16 w-16 self-center">
          <img src="images/song-mix.jpg" alt={song.name}></img>
        </div>
        <div className="py-4 mr-8 gap-1 w-[35%]">
          <span className="block text-sm font-semibold overflow-hidden text-ellipsis">
            {song.name}
          </span>
          <span className="text-xs overflow-hidden text-ellipsis w-full">
            {song.artist}
          </span>
        </div>
        <div className="text-lg flex gap-2">
          <button
            title="Like"
            className="song-player-button "
            onClick={handleLikeClick}
          >
            {liked ? <RiHeartFill className="text-mygreen" /> : <RiHeartLine />}
          </button>
          <button title="Picture in Picture" className="song-player-button">
            <MdOutlinePictureInPictureAlt />
          </button>
        </div>
      </div>

      <div className="w-[50%]">
        <PlayerControls />
      </div>
      <div className="flex w-[25%]">
        <OtherControls />
      </div>
    </section>
  );
};

const PlayerControls: React.FunctionComponent<any> = (props) => {
  const REPEATONE = "repeatone";
  const DISABLED = "disabled";
  const ENABLED = "enabled";

  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(DISABLED);
  const [shuffle, setShuffle] = useState(false);
  const [currentTime, setCurrentTime] = useState(-1);
  const songSource = useStoreState(
    (state: State<StoreModel>) => state.song.audio_src
  );

  function play() {
    const audioPlayer: HTMLAudioElement | null = document.getElementById(
      "audioplayer"
    ) as HTMLAudioElement;
    if (audioPlayer !== null) {
      console.log("play song");
      audioPlayer.play();
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

  function handler() {
    setCurrentTime(currentTime + 10);
  }
  return (
    <div className="w-full grid place-items-center">
      <div className="py-1 px-8 grid place-items-center">
        <section className="player-controls flex gap-4 justify-around text-4xl">
          <button
            title="Enable Shuffle"
            className="shuffle-toggle-button song-player-button py-4 text-xl"
            onClick={handleShuffleClick}
          >
            {shuffle ? <BiShuffle className="text-mygreen" /> : <BiShuffle />}
          </button>

          <button
            title="Previous"
            className="song-player-button py-2 text-3xl"
            onClick={restart}
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
            onClick={restart}
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
      <div className="w-[90%]">
        <AudioPlayer loop={repeat !== DISABLED} src={songSource} />
      </div>
    </div>
  );
};

export default SongPlayer;

const OtherControls: React.FunctionComponent<any> = (props) => {
  const MUTE = 0;
  const VOLMIN = 25;
  const VOLMID = 50;
  const VOLMAX = 100;

  const [volume, setVolume] = useState<number>(VOLMAX);

  let audioPlayer: HTMLAudioElement | null = document.getElementById(
    "audioplayer"
  ) as HTMLAudioElement;

  function adjustVolume(vol: number) {
    if (audioPlayer !== null) {
      console.log("vol", vol);
      audioPlayer.volume = vol / 100;
    }
  }

  function handleVolumeScroll(e: React.MouseEvent<HTMLButtonElement>) {
    switch (volume) {
      case VOLMAX:
        adjustVolume(MUTE);
        setVolume(MUTE);
        break;
      case VOLMID:
        adjustVolume(VOLMAX);
        setVolume(VOLMAX);
        break;
      case VOLMIN:
        adjustVolume(VOLMID);
        setVolume(VOLMID);
        break;
      case MUTE:
        adjustVolume(VOLMIN);
        setVolume(VOLMIN);
        break;
      default:
        break;
    }
  }

  function renderVolumeButton() {
    switch (volume) {
      case MUTE:
        return <FiVolumeX />;
      case VOLMAX:
        return <FiVolume2 />;
      case VOLMID:
        return <FiVolume1 />;
      case VOLMIN:
        return <FiVolume />;
      default:
        break;
    }
  }

  return (
    <div className="w-full other-controls m-8 flex justify-around">
      <div className="flex gap-2">
        <button
          title="Volume"
          className="song-player-button text-xl"
          onClick={(e) => handleVolumeScroll(e)}
        >
          {renderVolumeButton()}
        </button>
        <div className="volume-bar self-center sm:w-20">
          <ProgressBar progress={volume} total={100} />
        </div>
        <span className="song-player-button text-sm">{volume}</span>
      </div>
      <Link to="queue">
        <div className="song-player-button text-2xl self-center">
          <MdOutlineQueueMusic />
        </div>
      </Link>
      <Link to="queue">
        <div className="song-player-button text-2xl self-center">
          <MdOutlineQueueMusic />
        </div>
      </Link>
      <Link to="queue">
        <div className="song-player-button text-2xl self-center">
          <MdOutlineQueueMusic />
        </div>
      </Link>
    </div>
  );
};

const AudioPlayer: React.FunctionComponent<any> = (props) => {
  const audioRef = createRef<HTMLAudioElement>();
  const currentTime = useRef(audioRef.current?.currentTime);
  // useEffect(() => {
  //   let x = audioRef.current?.currentTime;
  // });

  function getSongDuration(): string {
    const audioPlayer: HTMLAudioElement | null = document.getElementById(
      "audioplayer"
    ) as HTMLAudioElement;
    if (audioPlayer === null) {
      return "0"; // should not be zero for avoiding 0/0 division
    }

    let x = new Date(audioPlayer.duration * 1000);
    console.log(x);

    let timeStr = x.toISOString();
    console.log(timeStr);

    if (timeStr.slice(11, 13) !== "00") {
      return timeStr.slice(11, 19);
    }

    return timeStr.slice(14, 19);
  }

  const src = useStoreState<StoreModel>((state) => state.song.audio_src);

  return (
    <div className="flex items-center">
      <span className="song-player-button text-xs mr-4">0:00</span>
      <ProgressBar
        // progress={audioRef.current?.currentTime || 0}
        progress={30}
        total={100}
      ></ProgressBar>
      <div>{currentTime.current}</div>
      <audio
        id="audioplayer"
        className="w-full border"
        src={src}
        loop={props.loop}
        preload="metadata"
        // controls
        hidden
        ref={audioRef}
        aria-hidden
        onClick={() => console.log(audioRef.current?.currentTime)}
      ></audio>
      <span className="song-player-button text-xs ml-4">
        {getSongDuration()}
      </span>
    </div>
  );
};
