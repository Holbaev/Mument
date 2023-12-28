import React from 'react';
import styles from "./RegisterForm.module.scss";
import Input from '../../shared/Input/Input';

const RegisterForm = ({title , placeholder , onChange , labelId , type , value}) => {
  return (
    <div className={styles.form}> 
    <label for={labelId} className={styles.form_text}>{title}</label>
    <Input id={labelId} placeholder={placeholder} onChange={onChange} type={type} value={value}/>
    </div>
  )
}

export default RegisterForm