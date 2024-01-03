import React from 'react';
import styles from "./MusicList.module.scss";
import MusicCard from '../../entities/MusicCard/MusicCard';

function MusicList() {
  return (
    <div className={styles.list}>
        <h3 className={styles.list_title}>Music Playlists</h3>
        <div className={styles.list_flex}>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
        </div>
    </div>
  )
}

export default MusicList