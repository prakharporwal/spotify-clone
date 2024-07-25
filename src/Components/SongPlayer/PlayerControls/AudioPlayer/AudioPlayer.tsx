import { createRef, useEffect, useState } from "react";
import ProgressBar from "../../../base-components/ProgressBar";
import { numOfSecondsToMMSS } from "../../../../utils/Date";

const AudioPlayer: React.FunctionComponent<any> = (props) => {
  const audioRef = createRef<HTMLAudioElement>();
  const [currentTime, setCurrentTime] = useState("00:00");
  const [progress, setProgress] = useState(0);
  const [totalDuration, setTotalDuration] = useState("");
  const song = props.song;

  useEffect(() => {
    const audioPlayer: HTMLAudioElement | null = document.getElementById(
      "audioplayer"
    ) as HTMLAudioElement;
    if (audioPlayer === null) {
      return;
    }

    var totalDur = getSongDuration();
    setTotalDuration(numOfSecondsToMMSS(totalDur));

    if (props.playing) {
      let intervalId = setInterval(() => {
        let x: number = getCurrentTime();
        setCurrentTime(numOfSecondsToMMSS(x));
        let prgres = x * 100;
        prgres /= totalDur;
        console.log(prgres, x);
        setProgress(prgres);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [song, props.playing]);

  function getCurrentTime(): number {
    const audioPlayer: HTMLAudioElement | null = document.getElementById(
      "audioplayer"
    ) as HTMLAudioElement;
    if (audioPlayer === null) {
      console.log("audioplayer", audioPlayer);
      return 1;
    }
    console.log("audioplayer", audioPlayer);

    let x = audioPlayer.currentTime;
    console.log("currtime", x);
    return x;
  }

  function getSongDuration(): number {
    const audioPlayer: HTMLAudioElement | null = document.getElementById(
      "audioplayer"
    ) as HTMLAudioElement;
    if (audioPlayer === null) {
      return 1; // avoid 0 because progress calculation faces 0,0 for song progress bar
    }

    let x: number = audioPlayer.duration;
    console.log("totalTime", x);
    return x;
  }

  function updateSongCurrentTime(newTime: number) {
    const audioPlayer: HTMLAudioElement | null = document.getElementById(
      "audioplayer"
    ) as HTMLAudioElement;
    audioPlayer.currentTime = newTime;
  }

  return (
    <div className="flex items-center">
      <span className="song-player-button text-xs mr-4">{currentTime}</span>
      <ProgressBar
        // progress={audioRef.current?.currentTime || 0}
        progress={progress}
        total={100}
        updateProgress={updateSongCurrentTime}
        converting={getSongDuration()}
      ></ProgressBar>
      <audio
        id="audioplayer"
        className="w-full border"
        src={props.song.audio_src}
        loop={props.loop}
        preload="metadata"
        // controls
        hidden
        ref={audioRef}
        aria-hidden
      ></audio>
      <span className="song-player-button text-xs ml-4">{totalDuration}</span>
    </div>
  );
};
export default AudioPlayer;
