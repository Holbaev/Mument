import React from "react";
import styles from "./Profile.module.scss";
import profile from "../../assets/img/profile.png";
import ChangeProfile from "../../features/ChangeProfile/ChangeProfile";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile_head}>
      <h3 className={styles.profile_title}>Профиль</h3>
      <div className={styles.profile_content}>
        <img className={styles.profile_img} src={profile} alt="" />
        <div className={styles.profile_flex}>
        <p className={styles.profile_text}>Имя: Aiba</p>
        <p className={styles.profile_text}>Почта: holbinaiba@gmail.com</p>
        <p className={styles.profile_text}>Пол: мужской</p>
        <p className={styles.profile_text}>День рождения: 05.10.2005</p>
        </div>
      </div>
      </div>
      <div className={styles.profile_change}>
        <ChangeProfile/>
      </div>
    </div>
  ); 
};

export default Profile;
 