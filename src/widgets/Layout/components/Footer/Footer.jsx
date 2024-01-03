import React from 'react';
import styles from './Footer.module.scss';
import twitter from '../../../../assets/icons/twitter.png';
import insta from '../../../../assets/icons/instagram.png';
import facebook from '../../../../assets/icons/facebook.png'

const Footer = () => {

  return (
    <footer className={styles.footer}>
        <div className={styles.footer_head}>
        <div className={styles.footer_flex}>
            <div className={styles.card}>
                <h3 className={styles.card_title}>Компания</h3>
                <a href='#' className={styles.card_link}>Impressum / Transparenzinformation</a>
                <a href='#' className={styles.card_link}>О нас</a>
                <a href='#' className={styles.card_link}>Вакансии</a>
                <a href='#' className={styles.card_link}>For the Record</a>
            </div>
            <div className={styles.card}>
                <h3 className={styles.card_title}>Сообщества</h3>
                <a href='#' className={styles.card_link}>Для исполнителей</a>
                <a href='#' className={styles.card_link}>Для разработчиков</a>
                <a href='#' className={styles.card_link}>Реклама</a>
                <a href='#' className={styles.card_link}>Для инвесторов</a>
                <a href='#' className={styles.card_link}>Для вендоров</a>
            </div>
            <div className={styles.card}>
                <h3 className={styles.card_title}>Полезные ссылки</h3>
                <a href='#' className={styles.card_link}>Справка</a>
                <a href='#' className={styles.card_link}>Бесплатное мобильное приложение</a>
                <a href='#' className={styles.card_link}>Verträge hier kündigen</a>
            </div>
        </div>
        <div className={styles.footer_icons}>
        <button className={styles.icon_btn}><img src={insta} alt="" /></button>
        <button className={styles.icon_btn}><img src={twitter} alt="" /></button>
        <button className={styles.icon_btn}><img src={facebook} alt="" /></button>
        </div>
        </div>
        <hr color='#292929'/>
        <div className={styles.footer_body}>
            <p>© 2023 Mument</p>
        </div>
    </footer>
    )
}

export default Footer