import React from 'react';
import styles from "./MusicCard.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const MusicCard = () => {
    
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img className={styles.card_img} src="https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037" alt="" />
        <button className={styles.card_btn}>
          <FontAwesomeIcon className={styles.icon} icon={faPlay}/>
        </button>
      </div>
        <h3 className={styles.card_title}>Test</h3>
        <p className={styles.card_desk}>Test Desctiption</p> 
    </div>
  )
}

export default MusicCard