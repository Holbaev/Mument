import React from 'react';
import styles from "./RegisterButton.module.scss"

const RegisterButton = ({children , ...props}) => {
  return (
    <button {...props} className={styles.registr_btn}>{children}</button>
    )
}

export default RegisterButton