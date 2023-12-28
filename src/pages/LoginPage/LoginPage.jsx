import React from 'react'
import LogIn from '../../widgets/LogIn/LogIn';
import styles from "./LoginPage.module.scss"

const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
        <LogIn/>
    </div>
  )
}

export default LoginPage