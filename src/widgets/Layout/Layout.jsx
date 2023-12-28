import React, { Children } from 'react';
import styles from './Layout.module.scss';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Library from './components/Library/Library';
const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
        <div className={styles.section_1}>
        <Navigation/>
        <Library/>
        </div>
        <div className={styles.section_2}>
        <Header/>
        <div className={styles.section_2_content}>
            {children}
        </div>
        </div>
    </div>
    )
}

export default Layout