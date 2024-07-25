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
import ProgressBar from "../base-components/ProgressBar/ProgressBar";
import { useStoreActions, useStoreState } from "easy-peasy";
import { createRef } from "react";
import { StoreModel } from "../../Store/Player";
import { Song } from "../../models/Song";
import { numOfSecondsToMMSS } from "../../utils/Date";
import { connect } from "react-redux";
import updateSong from "../../Store/reducers/songReducer";
import { ActionTypes } from "../../Store/models/ActionTypes";
import "./SongPlayer.css";
import PlayerControls from "./PlayerControls/PlayerControls";

const SongPlayer: React.FunctionComponent<any> = (props) => {
  const [liked, setLiked] = useState(false);
  const song: Song = useStoreState<StoreModel>((state) => state.song);
  const updateSong = useStoreActions<StoreModel>((state) => state.changeSong);

  function handleLikeClick() {
    setLiked(!liked);
  }

  return (
    <section className="song-player-bar z-[100] flex flex-col justify-evenly items-center md:flex-row bg-mygrey-700 fixed bottom-0 w-full h-52 md:h-24 text-white overflow-hidden">
      <div className="flex w-full md:w-[30%]">
        <div className="mx-2 h-16 w-16 self-center">
          <img src={song.image_url} alt={song.name}></img>
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

      <div className="w-[90%] md:w-[50%]">
        <PlayerControls />
      </div>
      <div className="flex w-[25%] invisible md:visible">
        <OtherControls />
      </div>
    </section>
  );
};

const OtherControls: React.FunctionComponent<any> = (props) => {
  const MUTE = 0;
  const VOLMIN = 25;
  const VOLMID = 50;
  const VOLMAX = 100;

  const [volume, setVolume] = useState<number>(VOLMAX);

  function adjustVolume(vol: number) {
    let audioPlayer: HTMLAudioElement | null = document.getElementById(
      "audioplayer"
    ) as HTMLAudioElement;

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
    if (volume === MUTE) return <FiVolumeX />;
    if (volume === VOLMAX) return <FiVolume2 />;
    if (volume >= VOLMID) return <FiVolume1 />;
    return <FiVolume />;
  }

  function updateVolume(newVol: number) {
    adjustVolume(newVol);
    setVolume(newVol);
  }

  return (
    <div className="w-full other-controls m-8 flex gap-4 justify-around">
      <div className="flex gap-2">
        <button
          title="Volume"
          className="song-player-button text-xl"
          onClick={(e) => handleVolumeScroll(e)}
        >
          {renderVolumeButton()}
        </button>
        <div className="volume-bar flex items-center gap-2 w-32">
          <ProgressBar
            progress={volume}
            total={100}
            updateProgress={updateVolume}
          ></ProgressBar>
          {/* <input
            className="h-1 bg-transparent cursor-pointer rounded w-full"
            type={"range"}
            min={0}
            max={100}
            value={volume}
            onChange={(e) => {
              adjustVolume(e.target.valueAsNumber);
              setVolume(e.target.valueAsNumber);
            }}
          ></input> */}
          <span className="song-player-button text-sm">{volume}</span>
        </div>
      </div>
      <Link to="queue">
        <div className="song-player-button text-2xl self-center">
          <MdOutlineQueueMusic />
        </div>
      </Link>
      {/* <Link to="queue">
        <div className="song-player-button text-2xl self-center">
          <MdOutlineQueueMusic />
        </div>
      </Link>
      <Link to="queue">
      <div className="song-player-button text-2xl self-center">
      <MdOutlineQueueMusic />
      </div>
    </Link> */}
    </div>
  );
};



const mapStateToProps = (state: any) => ({
  song: state.song,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateSong: (song: any) =>
    dispatch(
      updateSong(song, { type: ActionTypes.CHANGE_SONG, payload: song })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongPlayer);
