import React from "react";
import styles from "./Player.module.scss";
import { faPlay, faV } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faPause,
  faVolumeUp,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
  id,
  setSongs,
}) => {
  // states
  // functinos
  const handleTogglePlay = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };
  //Event Handlers
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const getTime = (time) =>
    Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        // playAudio(isPlaying, audioRef);
        activeLibraryHandler(songs[songs.length - 1]);

        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };
  //adding the styles

  const handleToggleSound = () => {
    const audio = audioRef.current;

    if (audio.muted) {
      audio.muted = false;
    } else {
      audio.muted = true;
    }
  };

  return (
    <div className={styles.player}>
      <div className={styles.section_1}>
        <img src={currentSong.artwork} className={styles.content_img} alt="" />
        <div className={styles.content}>
          <h3 className={styles.content_title}>{currentSong.title}</h3>
          <p className={styles.content_text}>{currentSong.artist}</p>
        </div>
      </div>
      <div className={styles.section_2}>
        <div className={styles.range}>
          <p className={styles.range_time}>{getTime(songInfo.currentTime)}</p>
          <input
            type="range"
            onChange={dragHandler}
            value={songInfo.currentTime}
            min={0}
            max={songInfo.duration || 0}
            className={styles.range_track}
          />
          <p className={styles.range_time}>
            {songInfo.duration ? getTime(songInfo.duration) : "00:00"}
          </p>
        </div>
        <div className={styles.controld}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className={styles.icon}
            onClick={() => skipTrackHandler("skip-back")}
          />
          <FontAwesomeIcon
            icon={!isPlaying ? faPlay : faPause}
            className={styles.icon}
            onClick={handleTogglePlay}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className={styles.icon}
            onClick={() => skipTrackHandler("skip-forward")}
          />
        </div>
      </div>
      <div className={styles.section_3}>
        <FontAwesomeIcon
          size="2px"
          icon={!audioRef.current?.muted ? faVolumeUp : faVolumeMute}
          className={styles.icon}
          onClick={handleToggleSound}
        />
      </div>
    </div>
  );
};

export default Player;
