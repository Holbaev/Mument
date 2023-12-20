import React, { useEffect, useState } from "react";
import styles from "../App.module.scss";
import main_menu from "../assets/icons/main-menu.png";
import search_btn from "../assets/icons/search.png";
import person from "../assets/img/listening-music 1.png";
import like from "../assets/icons/like.png";
import play from "../assets/icons/play.png";
import singer_play from "../assets/icons/black-play.png";
import singer from "../assets/img/singer.png";

export const Main = ({
  songs,
  setCurrentSong,
  setSongs,
  isPlaying,
  audioRef,
}) => {

  // functions
   const songSelectHandler = async (id) =>{
    const song = songs?.filter(s => s.id === id);
    await setCurrentSong(song[0]);
    const newSongs = songs?.map((song) =>{
      if(song?.id === id){
        return{
          ...song,
          active: true
        }
      }else{
        return{
          ...song,
          active: false
        }
      }
    });
    setSongs(newSongs);
    if(isPlaying) audioRef.current.play();
  }

  return (
    <main className={styles.main}>
      <section className={styles.section_1}>
        <div className={styles.section_1_logo}>
          <p>Mu</p>
          <p>si</p>
          <p>ca</p>
        </div>
        <div className={styles.section_1_search}>
          <input
            className={styles.search_input}
            type="text"
            placeholder="Search among 100.000+ music tracks"
          />
          <button className={styles.search_btn}>
            <img src={search_btn} alt="img" />
          </button>
        </div>
        <div className={styles.section_1_menu}>
          <button className={styles.main_menu}>
            <img src={main_menu} alt="img" />
          </button>
        </div>
      </section>
      <section className={styles.section_2}>
        <div className={styles.section_2_content}>
          <div className={styles.content_all_text}>
            <div className={styles.content_btns}>
              <button>#radio</button>
              <button>#house</button>
            </div>
            <h3 className={styles.content_title}>
              Best Progressive House (All - Time)
            </h3>
            <p className={styles.content_text}>Westcoast Radio (EDM)</p>
          </div>
          <div className={styles.content_play}>
            <button className={styles.play_btn}>
              <p>play</p>
              <img src={play} alt="" />
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
      <section className={styles.section_3}>
        <h3 className={styles.section_3_title}>Weekly Top Track</h3>
        <div className={styles.section_3_cards}>
          {songs?.length !== 0 &&
            songs?.map((song) => (
              <div className={styles.section_3_card}>
                <img
                  className={styles.section_3_card_img}
                  src={song.artwork}
                  alt=""
                />
                <p className={styles.section_3_card_text}>{song.artist}</p>
                <p className={styles.section_3_card_text}>{song.title}</p>
                <button className={styles.section_3_card_play} 
                onClick={() => songSelectHandler(song?.id)}
                >
                  <img src={singer_play} alt="" />
                </button>
              </div>
            ))}
        </div>
      </section>
      {/* <section className={styles.section_3}>
        <h3 className={styles.section_3_title}>Recent Artist</h3>
        <div className={styles.section_3_cards}>
          {songs?.length !== 0 &&
            songs?.map((song) => (
              <div className={styles.section_3_card}>
                <img
                  className={styles.section_3_card_img}
                  src={song.artwork}
                  alt=""
                />
                <p className={styles.section_3_card_text}>{song.artist}</p>
                <p className={styles.section_3_card_text}>{song.title}</p>
                <button className={styles.section_3_card_play} 
                  onClick={() => songSelectHandler(song?.id)}
                >
                  <img src={singer_play} alt="" />
                </button>
              </div>
            ))}
        </div>
      </section> */}
    </main>
  );
};
