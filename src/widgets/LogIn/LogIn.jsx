import React from "react";
import styles from "./LogIn.module.scss";
import RegisterForm from "../../entities/RegisterForm/RegisterForm";
import RegisterButton from "../../shared/RegisterButton/RegisterButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { toast } from "react-toastify";
import { login } from "../../shared/service/Register";

const LogIn = () => {
  // states
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // functions
  const setField = (value, setState) => {
    setState(value);
  };


  const handleSubmit = async () =>{
    if (email === "" || password === "") {
      toast.warning("Вы не ввели свою почту или пароль.");
    } else if (email.length !== 0 && email.length < 8) {
      toast.warning("Ваша почта слишком короткая.");
    } else if (password.length !== 0 && password.length < 8) {
      toast.warning("Ваш пароль слишком короткий.");
    } else {
      const response = await login();
      toast.success("Поздравляю вы вошли в систему.");
      setPassword("");
      setEmail("");
      navigate("/");
    }
  }
  return (
    <div className={styles.login}>
      <div className={styles.login_flex}> 
      <h3 className={styles.login_title}>Log in to Mument</h3>
      <RegisterForm
          title={"Email"}
          labelId={"email"}
          placeholder={"Your email"}
          type={"text"}
          onChange={(e) => setField(e.target.value, setEmail)}
        />
       <RegisterForm
          title={"Password"}
          labelId={"password"}
          placeholder={"Your password"}
          type={"password"}
          onChange={(e) => setField(e.target.value, setPassword)}
        />
        <RegisterButton onClick={handleSubmit}>Log in</RegisterButton>
      </div>
      <div className={styles.home}>
        <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} onClick={() => navigate(-1)}/>
      </div>
    </div>
  );
};

export default LogIn;
