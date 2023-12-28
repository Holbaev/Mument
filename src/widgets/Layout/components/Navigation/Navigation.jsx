import React from 'react';
import styles from './Navigation.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    // states
    const navigate = useNavigate();
    // functions
  return (
    <div className={styles.nav}>
        <ul className={styles.nav_list}>
            <li className={styles.nav_item}>
                <p>Mument</p>
            </li>
            <li className={styles.nav_item}>
                <FontAwesomeIcon icon={faHome} className={styles.icon} onClick={() =>  navigate("/")}/>
                <p>Home</p>
            </li>
            <li className={styles.nav_item}>
                <FontAwesomeIcon icon={faSearch}  className={styles.icon}/>
                <p>Search</p>
            </li>
        </ul>
    </div>
  )
}

export default Navigation