import React from 'react';
import styles from './SongList.module.scss';
import singer_play from "../../assets/icons/black-play.png"

const SongList = ({
    songs , 
    setSongs,
    isPlaying,
    audioRef,
    setCurrentSong
}) => {

    // functions
    const songSelectHandler = async (id) => {
        const song = songs?.filter((s) => s.id === id);
        await setCurrentSong(song[0]);
        const newSongs = songs?.map((song) => {
          if (song?.id === id) {
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
        if (isPlaying) audioRef.current.play();
      };

  return (
    <div className={styles.section_3}>
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
            <button
              className={styles.section_3_card_play}
              onClick={() => songSelectHandler(song?.id)}
            >
              <img src={singer_play} alt="" />
            </button>
          </div>
        ))}
    </div>
  </div>
    )
}

export default SongList