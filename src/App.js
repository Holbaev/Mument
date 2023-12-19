import React, { useRef, useState } from "react";
import styles from "./App.module.scss";
import { Main } from "./components/Main";
import { SideBar } from "./components/SideBar";
import { useEffect } from "react";
import { getTracks } from "./servise/musicService";
import Player from "./components/Player/Player";

function App() {
  // states
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState([0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  // functuions
  const getData = async () => {
    try {
      const response = await getTracks(songs);
      setSongs(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // timeUpdateHandler

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const amimation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      currentTime: current,
      duration: duration,
      animationPercentage: amimation,
    });
  };

  // songEndHandler

  const songEndHandler = async (e) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };
  console.log(currentSong);
  return (
    <div className={styles.wrapper}>
      <div className={styles.music_panel}>
        <div className={styles.music_section_1}>
          <Main 
           setCurrentSong={setCurrentSong}
           songs={songs}
           setSongs={setSongs}
           isPlaying={isPlaying}
           audioRef={audioRef}
          />
        </div>
        <div className={styles.music_section_2}>
          <SideBar />
        </div>
      </div>
        <div className={styles.music_section_3}>
          <Player currentSong={currentSong}/>
        </div>
        <audio
          onLoadedMetadata={timeUpdateHandler}
          onTimeUpdate={timeUpdateHandler}
          src={currentSong?.url}
          ref={audioRef}
          onEnded={songEndHandler}
        ></audio>
    </div>
  );
}

export default App;
