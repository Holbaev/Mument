import React from 'react';
import styles from './Library.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const Library = () => {
  return (
    <div className={styles.library}>
        <div className={styles.library_box}>
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
        </div>
        <div className={styles.library_foot}>
          <div className={styles.library_info}>
            <a href="#" className={styles.info_text}>Юридическая информация</a>
            <a href="#" className={styles.info_text}>Центр конфиденциальности</a>
            <a href="#" className={styles.info_text}>Политика конфиденциальности</a>
            <a href="#" className={styles.info_text}>Настройки файлов cookie</a>
            <a href="#" className={styles.info_text}>Специальные возможности</a>
            <a href="#" className={styles.info_text}>Файлы cookie</a>
          </div>
        <button className={styles.library_language}>
        <FontAwesomeIcon className={styles.icon} icon={faLanguage}/>
        <p>English</p>
        </button>
        </div>
    </div>
  )
}

export default Library