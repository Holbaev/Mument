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

const Player = ({ currentSong }) => {
  const song = currentSong[0];
  return (
    <div className={styles.player}>
      <div className={styles.section_1}>
        <img src={song?.artwork} className={styles.content_img} alt="" />
        <div className={styles.content}>
          <h3 className={styles.content_title}>{song?.title}</h3>
          <p className={styles.content_text}>{song?.artist}</p>
        </div>
      </div>
      <div className={styles.section_2}>
        <div className={styles.range}>
          <p className={styles.range_time}>00:00</p>
          <input
              type="range"
              min={0}
              max={100}
              className={styles.range_track}
            />
          <p className={styles.range_time}>03:09</p>
        </div>
        <div className={styles.controld}>
          <FontAwesomeIcon icon={faAngleLeft} className={styles.icon}/>
          <FontAwesomeIcon icon={faPlay} className={styles.icon} />
          <FontAwesomeIcon icon={faAngleRight} className={styles.icon}/>
        </div>
      </div>
      <div className={styles.section_3}>
        <FontAwesomeIcon size="2px" icon={faVolumeUp} className={styles.icon}/>
      </div>
    </div>
  );
};

export default Player;
