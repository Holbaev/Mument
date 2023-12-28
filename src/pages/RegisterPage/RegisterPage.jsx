import React from 'react';
import Register from '../../widgets/Register/Register';
import styles from './RegisterPage.module.scss'

const RegisterPage = () => {
  return (
    <div className={styles.wrapper}>
        <Register/>
    </div>
  )
}

export default RegisterPage