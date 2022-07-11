import React, { useState } from "react";
import { TbRepeat, TbRepeatOnce } from "react-icons/tb";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { BiShuffle } from "react-icons/bi";
import {
  MdOutlinePictureInPictureAlt,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";
import { FiVolume1, FiVolumeX, FiVolume2, FiVolume } from "react-icons/fi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

const SongPlayer = (props) => {
  const [liked, setLiked] = useState(false);

  function handleLikeClick() {
    setLiked(!liked);
  }

  return (
    <section className="grid grid-cols-player bg-[#121212] fixed bottom-0 w-screen h-24 text-white border border-[#282828] text-xs">
      <div className="flex gap-2">
        <div className="py-4 px-2 h-2">
          <img
            className="h-12 w-16 border"
            src="logo192.png"
            alt="songimg"
          ></img>
        </div>
        <div className="flex flex-col py-4 px-0 gap-1 sm:w-32 w-80 overflow-x-hidden whitespace-nowrap">
          <span className="mt-2">Song Name</span>
          <span>Artist, Prakhar Porwal, Nice Person, Amitabh</span>
        </div>

        <button
          title="Like"
          className="song-player-button py-4 text-lg"
          onClick={handleLikeClick}
        >
          {liked ? <RiHeartFill className="text-mygreen" /> : <RiHeartLine />}
        </button>
        <button
          title="Picture in Picture"
          className="song-player-button py-4 text-lg"
        >
          <MdOutlinePictureInPictureAlt />
        </button>
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

const PlayerControls = (props) => {
  const REPEATONE = "repeatone";
  const DISABLED = "disabled";
  const ENABLED = "enabled";

  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(DISABLED);
  const [shuffle, setShuffle] = useState(false);

  function handlePlayingClick() {
    setPlaying(!playing);
  }

  function handleRepeatButtonClick() {
    switch (repeat) {
      case DISABLED:
        setRepeat(ENABLED);
        break;
      case ENABLED:
        setRepeat(REPEATONE);
        break;
      case REPEATONE:
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
    <section className="player-controls px-12 m-2 grid grid-flow-col grid-cols-5">
      <button
        title="Enable Shuffle"
        className="song-player-button py-4 text-xl"
        onClick={handleShuffleClick}
      >
        {shuffle ? <BiShuffle /> : <BiShuffle className="text-mygreen" />}
      </button>

      <button title="Previous" className="song-player-button py-4 text-3xl">
        <MdSkipPrevious />
      </button>

      {playing ? (
        <button
          title="Pause"
          className="py-4 text-4xl"
          onClick={handlePlayingClick}
        >
          <AiFillPauseCircle />
        </button>
      ) : (
        <button
          title="Play"
          className="py-4 text-4xl"
          onClick={handlePlayingClick}
        >
          <AiFillPlayCircle />
        </button>
      )}

      <button title="Next" className="song-player-button py-4 text-3xl">
        <MdSkipNext />
      </button>

      {repeat === DISABLED ? (
        <button
          title="Enable Repeat"
          className="song-player-button py-4 text-xl"
          onClick={handleRepeatButtonClick}
        >
          <TbRepeat />
        </button>
      ) : repeat === ENABLED ? (
        <button
          title="Repeat Once"
          className="song-player-button py-4 text-xl"
          onClick={handleRepeatButtonClick}
        >
          <TbRepeat className="text-mygreen" />
        </button>
      ) : (
        <button
          title="Disable Repeat"
          className="song-player-button py-4 text-xl"
          onClick={handleRepeatButtonClick}
        >
          <TbRepeatOnce className="text-mygreen" />
        </button>
      )}
    </section>
  );
};

export default SongPlayer;

const OtherControls = (props) => {
  const MUTE = 0;
  const VOLMIN = 25;
  const VOLMID = 50;
  const VOLMAX = 100;

  const [volume, setVolume] = useState(VOLMAX);

  function handleVolumeScroll(e) {
    console.log(e);
    switch (volume) {
      case VOLMAX:
        setVolume(MUTE);
        break;
      case VOLMID:
        setVolume(VOLMAX);
        break;
      case VOLMIN:
        setVolume(VOLMID);
        break;
      case MUTE:
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
        break;
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
    <div className="other-controls px-8 mt-8 grid grid-flow-col">
      <div className="flex gap-2">
        <button
          title="Volume"
          className="song-player-button text-lg"
          onClick={(e) => handleVolumeScroll(e)}
        >
          {renderVolumeButton()}
        </button>
        <span className="song-player-button text-sm">{volume}</span>
      </div>
    </div>
  );
};
