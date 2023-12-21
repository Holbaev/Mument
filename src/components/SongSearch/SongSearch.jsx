import React, { useEffect, useState } from "react";
import styles from "./SongSearch.module.scss";
import search_btn from "../../assets/icons/search.png";
import main_menu from "../../assets/icons/main-menu.png";
import { getTracks, searchTracks } from "../../servise/musicService";

const SongSearch = ({ setCurrentSong }) => {
  // states
  let data;
  const [searcValue, setSeearchValue] = useState("");
  const [searchReults, setSeearchResults] = useState([]);

  // fuctions
  const getData = async (value) => {
    const response = await searchTracks(value , data);
    setSeearchResults(response.data);
  };

  useEffect(() =>{
  getData(searcValue)
  } , [searcValue])

  const handleSearch = (e) => {
    setSeearchValue(e.target.value);
  };

  const handleSelectSong = (song) => {
    setCurrentSong(song);
    setSeearchValue("");
    setSeearchResults([]);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.section_1}>
      <div className={styles.section_1_logo}>
        <p>Mu</p>
        <p>si</p>
        <p>ca</p>
      </div>
      <div className={styles.search_wrapper}>
      <div className={styles.section_1_search}>
          <input
            value={searcValue}
            onChange={handleSearch}
            className={styles.search_input}
            type="text"
            placeholder="Search among 100.000+ music tracks"
          />
          <button className={styles.search_btn}>
            <img src={search_btn} alt="img" />
          </button>
        </div>
      <div className={styles.search_list}>
          {searchReults?.length !== 0 && searchReults?.map((song) => (
            <div className={styles.search_item} onClick={() => handleSelectSong(song)}>
              <img src={song.artwork} alt="" className={styles.item_img} />
              <div className={styles.content}>
                <h3 className={styles.content_title}>{song.title}</h3>
                <p className={styles.content_text}>{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.section_1_menu}>
        <button className={styles.main_menu}>
          <img src={main_menu} alt="img" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default SongSearch;
