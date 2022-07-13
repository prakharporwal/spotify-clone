import React, { useState } from "react";
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

const SongPlayer: React.FunctionComponent<any> = (props) => {
  const [liked, setLiked] = useState(false);

  function handleLikeClick() {
    setLiked(!liked);
  }

  return (
    <section className="song-player-bar grid grid-cols-player bg-mygrey-700 fixed bottom-0 w-screen h-24 text-white border-mygrey-800">
      <div className="flex mx-4">
        <div className="mx-4 h-16 w-16 self-center">
          <img src="images/song-mix.jpg" alt={"Song Name"}></img>
        </div>
        <div className="flex flex-col py-4 px-0 gap-1 w-64 md:w-44 sm:w-32">
          <span className="block text-sm mt-2 overflow-hidden text-ellipsis">
            Song Name
          </span>
          <span className="text-xs">
            Artist, Prakhar Porwal, Nice Person, Amitabh
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

      <div>
        <PlayerControls />
      </div>
      <div>
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

  function getCurrentTime() {
    const audioPlayer: HTMLAudioElement | null = document.getElementById(
      "audioplayer"
    ) as HTMLAudioElement;
    if (audioPlayer === null) {
      return 0;
    }
    return audioPlayer.currentTime;
  }

  function getSongDuration() {
    const audioPlayer: HTMLAudioElement | null = document.getElementById(
      "audioplayer"
    ) as HTMLAudioElement;
    if (audioPlayer === null) {
      return 1; // should not be zero for avoiding 0/0 division
    }
    return audioPlayer.duration;
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
    <>
      <section className="player-controls px-8 flex gap-4 justify-around text-4xl py-1">
        <AudioPlayer
          loop={repeat !== DISABLED}
          src={"songs/kho-gaye-hum-kahan.mp3"}
        />
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
      <div>
        <ProgressBar progress={getCurrentTime()} total={getSongDuration()} />
      </div>
      {/* <span>{getCurrentTime()}</span>
        <span>{getSongDuration()}</span> */}
    </>
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
    <div className="other-controls px-8 mt-8 flex justify-evenly">
      <div className="flex gap-2">
        <button
          title="Volume"
          className="song-player-button text-xl border"
          onClick={(e) => handleVolumeScroll(e)}
        >
          {renderVolumeButton()}
        </button>
        <div className="volume-bar self-center sm:w-16 w-24">
          <ProgressBar progress={volume} total={100} />
        </div>
        <span className="song-player-button text-sm">{volume}</span>
      </div>
      <Link to="queue">
        <div className="song-player-button text-2xl self-center">
          <MdOutlineQueueMusic />
        </div>
      </Link>
    </div>
  );
};

const AudioPlayer: React.FunctionComponent<any> = (props) => {
  return (
    <audio
      id="audioplayer"
      className="w-full"
      src={props.src}
      loop={props.loop}
      preload="metadata"
      // controls
      hidden
      aria-hidden
    ></audio>
  );
};
