import React from 'react';
import styles from "./MainPage.module.scss";
import Layout from '../../widgets/Layout/Layout';
import MusicList from '../../widgets/MusicList/MusicList';

const MainPage = () => {
  return (
    <Layout>
      <MusicList/>
    </Layout>
  )
}

export default MainPage