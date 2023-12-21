import React from "react";
import styles from "./MainPage.module.scss";
import Player from "../../components/Player/Player";
import { getTracks } from "../../servise/musicService";
import { useState, useEffect } from "react";
import { useRef } from "react";
import main_menu from "../../assets/icons/main-menu.png";
import search_btn from "../../assets/icons/search.png";
import person from "../../assets/img/listening-music 1.png";
import like from "../../assets/icons/like.png";
import play from "../../assets/icons/play.png";
import SongList from "../../components/SongList/SongList";
import Favorite from "../../components/Favorite/Favorite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay , faPause } from "@fortawesome/free-solid-svg-icons";
import SongSearch from "../../components/SongSearch/SongSearch";

const MainPage = () => {
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

    audioRef.current.addEventListener(
      "canplaythrough",
      async () => {
        if (isPlaying) audioRef.current.play();
      },
      { once: true }
    );
  };

  // handlePlaying
  const handleTogglePlay = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.music_panel}>
        <div className={styles.music_section_1}>
          <div className={styles.main}>
            <SongSearch setCurrentSong={setCurrentSong} songs={songs}/>
            <section className={styles.section_2} style={{background:`${currentSong.artwork ? `url(${currentSong.artwork})` : "rgba(235, 213, 100, 0.94)"}`}}>
              <div className={styles.section_2_content}>
                <div className={styles.content_all_text}>
                  <div className={styles.content_btns}>
                    <button>#radio</button>
                    <button>#house</button>
                  </div>
                  <h3 className={styles.content_title}>{currentSong.title}</h3>
                  <p className={styles.content_text}>{currentSong.artist}</p>
                </div>
                <div className={styles.content_play}>
                  <button
                    className={styles.play_btn}
                    onClick={handleTogglePlay}
                  >
                    <p>play</p>
                    <FontAwesomeIcon
                      icon={!isPlaying ? faPlay : faPause}
                      className={styles.icon}
                    />
                  </button>
                  <button className={styles.like_btn}>
                    <img src={like} alt="" />
                  </button>
                </div>
              </div>
              <div className={styles.section_2_grade}>
                <p className={styles.grade_text}>
                  <span>01</span>
                  <span>/03</span>
                </p>
                <img src={person} className={styles.grade_img} alt="" />
              </div>
            </section>
            <SongList
              songs={songs}
              setSongs={setSongs}
              isPlaying={isPlaying}
              audioRef={audioRef}
              setCurrentSong={setCurrentSong}
            />
          </div>
        </div>
        <div className={styles.music_section_2}>
          <Favorite />
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
};

export default MainPage;
