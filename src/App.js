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
  const [currentSong, setCurrentSong] = useState({});
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
      setCurrentSong(response.data[0]);
    } catch (err) {
      console.log(err.response);
    }
  };
  console.log(songInfo);
  useEffect(() => {
    getData();
  }, []);

  // timeUpdateHandler
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculating percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    console.log();
    setSongInfo({
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };
  // songEndHandler
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);

    // await setCurrentSong(songs[(currentIndex + 1) % songs.length]);

    // if (isPlaying) audioRef.current.play();
    audioRef.current.addEventListener('canplaythrough', async () => {
  
      if (isPlaying) audioRef.current.play();
    }, { once: true });
  };
  

  console.log(audioRef.current);

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
        <Player
          id={songs.id} 
          songs={songs} 
          songInfo={songInfo} 
          setSongInfo={setSongInfo} 
          audioRef={audioRef} 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying} 
          currentSong={currentSong} 
          setCurrentSong={setCurrentSong} 
          setSongs={setSongs} 
        />
      </div>
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        src={currentSong.url}
        ref={audioRef}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
