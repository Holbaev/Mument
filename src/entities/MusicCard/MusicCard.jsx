import React from 'react';
import styles from "./MusicCard.module.scss"

const MusicCard = () => {
    
  return (
    <div className={styles.card}>
        <img className={styles.card_img} src="https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037" alt="" />
        <h3 className={styles.card_title}>Test</h3>
        <p className={styles.card_desk}>Test Desctiption</p>
    </div>
  )
}

export default MusicCard