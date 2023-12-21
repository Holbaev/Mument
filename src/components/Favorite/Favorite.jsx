import React from 'react';
import styles from "./Favorite.module.scss";
import icon_person from "../../assets/icons/icon_person.png";
import like from "../../assets/icons/like.png";


const Favorite = () => {
  return (
    <div className={styles.side_bar}>
    <h3 className={styles.side_bar_title}>My favorite tracks</h3>
    <div className={styles.side_bar_cards}>
      <div className={styles.side_bar_card}>
        <div style={{display:'flex' , alignItems:"center" , columnGap:"5px"}}>
        <img src={icon_person} alt="" className={styles.card_img}/>
        <div className={styles.card_content}>
          <h3 className={styles.card_title}>Blinding Lights</h3>
          <p className={styles.card_text}>The Weeknd</p>
        </div>
        </div>
        <button className={styles.card_btn}>
          <img src={like} alt="" />
        </button>
      </div>
      
    </div>
  </div>
  )
}

export default Favorite