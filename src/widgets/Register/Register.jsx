import React, { useState } from "react";
import styles from "./Register.module.scss";
import RegisterForm from "../../entities/RegisterForm/RegisterForm";
import RegisterButton from "../../shared/RegisterButton/RegisterButton";
import Gender from "../../entities/Gender/Gender";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../shared/service/Register";

const Register = () => {
  // states
  const [showMore, setShowMore] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [choosedGender, setChoosedGender] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const navigate = useNavigate();

  // functions
  // notification

  const setField = (value, setState) => {
    setState(value);
  };

  const handleShowMore = () => setShowMore(!showMore);
  const handleGenderChange = (gender) => {
    setChoosedGender(gender);
  };
  const handleMoveOn = () => {
    if (email === "" || password === "") {
      toast.warning("Вы не ввели свою почту или пароль.");
    } else if (email.length !== 0 && email.length < 8) {
      toast.warning("Ваша почта слишком короткая.");
    } else if (password.length !== 0 && password.length < 8) {
      toast.warning("Ваш пароль слишком короткий.");
    } else {
      handleShowMore();
    }
  };
  const handleSubmit = async () => {
    const isChecked =
      userName !== "" && birthday.length !== "" && choosedGender !== "";
    if (!isChecked) {
      toast.warning("Заполните все поля.");
    } else {
      const userData = {
        email: email,
        username: userName,
        gender: choosedGender,
        birthday: birthday,
        password: password,
        mailing: true,
      };
      const response = await register(userData);
      localStorage.setItem('token' , response.data.token);
      toast.success("Поздравляю вы зарегистрированы.");
      setBirthday("");
      setUserName("");
      setEmail("");
      setPassword("");
      setChoosedGender("");
      navigate("/");
    }
  };
  return (
    <div className={styles.register}>
      <div className={styles.register_flex}>
        <h3 className={styles.register_title}>Sign up to Mument</h3>
        {!showMore ? (
          <>
            <RegisterForm
              title={"Email"}
              labelId={"email"}
              placeholder={"Your email"}
              type={"text"}
              value={email}
              onChange={(e) => setField(e.target.value, setEmail)}
            />
            <RegisterForm
              title={"Make up your password"}
              labelId={"password"}
              placeholder={"Your password"}
              type={"password"}
              value={password}
              onChange={(e) => setField(e.target.value, setPassword)}
            />
          </>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={styles.icon}
              onClick={handleShowMore}
            />
            <RegisterForm
              title={"Name"}
              labelId={"name"}
              placeholder={"Your name"}
              type={"text"}
              value={userName}
              onChange={(e) => setField(e.target.value, setUserName)}
            />
            <RegisterForm
              title={"Date of Birth"}
              labelId={"date"}
              placeholder={"Your Date of Birth"}
              type={"date"}
              value={birthday}
              onChange={(e) => setField(e.target.value, setBirthday)}
            />
            <Gender onChange={handleGenderChange} />
          </>
        )}
        {!showMore ? (
          <RegisterButton onClick={handleMoveOn}>Move on</RegisterButton>
        ) : (
          <RegisterButton onClick={handleSubmit}>Sign up</RegisterButton>
        )}
      </div>
      <div className={styles.home}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={styles.icon}
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default Register;
