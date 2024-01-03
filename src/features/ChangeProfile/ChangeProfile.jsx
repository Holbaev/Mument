import React from "react";
import { useState } from "react";
import ModalWindow from "../../shared/ModalWindow/ModalWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import styles from "./ChangeProfile.module.scss";
import profile from "../../assets/img/profile.png";
import Input from "../../shared/Input/Input";
import Gender from "../../entities/Gender/Gender";

const ChangeProfile = () => {
  // states
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [choosedGender, setChoosedGender] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  // functions
  const setField = (value, setState) => {
    setState(value);
  };
  const handleGenderChange = (gender) => {
    setChoosedGender(gender);
  };
  return (
    <>
      <ModalWindow
        buttun={<FontAwesomeIcon className={styles.icon} icon={faPencil} />}
        positions={["top", "left"]}
        title={"Данные профиля"}
      >
        <div className={styles.profile_change}>
          <img className={styles.profile_img} src={profile} alt="" />
          <div className={styles.profile_flex}>
            <Input
              type="text"
              onChange={(e) => setField(e.target.value, setUserName)}
              value={userName}
              placeholder={"Your name"}
            />
            <Input
              type="text"
              placeholder={"Your email"}
              onChange={(e) => setField(e.target.value, setEmail)}
              value={email}
            />
            <Gender onChange={handleGenderChange} />
            <Input
              type="date"
              onChange={(e) => setField(e.target.value, setBirthday)}
              value={birthday}
            />
          </div>
        </div>
      </ModalWindow>
    </>
  );
};

export default ChangeProfile;
