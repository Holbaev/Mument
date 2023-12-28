import React from 'react';
import styles from "./Controls.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft , faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Controls = () => {
  return (
    <div className={styles.controls}>
        <button className={styles.control_btn}>
            <FontAwesomeIcon icon={faAngleLeft} className={styles.icon}/>
        </button>
        <button className={styles.control_btn}>
            <FontAwesomeIcon icon={faAngleRight} className={styles.icon}/>
        </button>
    </div>
  )
}

export default Controls