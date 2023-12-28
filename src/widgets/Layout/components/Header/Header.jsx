import React from 'react'
import styles from './Header.module.scss';
import Controls from '../../../../shared/Controls/Controls';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    // states
    const navigate = useNavigate();
    // functions
  return (
    <header className={styles.header}>
        <Controls/>
        <div className={styles.header_btns}>
            <button className={styles.login_btn} onClick={() => navigate("/register/")}>Sign up</button>
            <button  className={styles.register_btn} onClick={() => navigate("/login/")}>Log in</button>
        </div>
    </header>
    )
}

export default Header