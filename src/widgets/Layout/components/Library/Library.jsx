import React from 'react';
import styles from './Library.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const Library = () => {
  return (
    <div className={styles.library}>
        <div className={styles.library_head}>
            <div className={styles.library_flex}>
                <FontAwesomeIcon className={styles.icon} icon={faBook}/>
                <h3>Your Library</h3>
            </div>
            <FontAwesomeIcon className={styles.icon} icon={faPlus}/>
        </div>
        <div className={styles.library_create}>
            <h3>Create your first playlist</h3>
            <p>It's easy, we'll help you</p>
            <button>Create playlist</button>
        </div>
        <button className={styles.library_language}>
        <FontAwesomeIcon className={styles.icon} icon={faLanguage}/>
        <p>English</p>
        </button>
    </div>
  )
}

export default Library