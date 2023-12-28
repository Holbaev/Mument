import React from "react";
import styles from "./LogIn.module.scss";
import RegisterForm from "../../entities/RegisterForm/RegisterForm";
import RegisterButton from "../../shared/RegisterButton/RegisterButton";

const LogIn = () => {
  // states

  // functions
  
  return (
    <div className={styles.login}>
      <div className={styles.login_flex}> 
      <h3 className={styles.login_title}>Log in to Mument</h3>
      <RegisterForm
          title={"Email"}
          labelId={"email"}
          placeholder={"Your email"}
          type={"text"}
        />
       <RegisterForm
          title={"Password"}
          labelId={"password"}
          placeholder={"Your password"}
          type={"password"}
        />
        <RegisterButton>Log in</RegisterButton>
      </div>
    </div>
  );
};

export default LogIn;
