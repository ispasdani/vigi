import { MultiHomeBanners } from "@vx/containers/MultiHomeBanners/MultiHomeBanners";
import React from "react";
import styles from "@vx/app/home.module.scss";
import { Feed } from "@vx/containers/Feed/Feed";

const Home = () => {
  return (
    <section className={styles.homePage}>
      <MultiHomeBanners />
      <Feed />
    </section>
  );
};

export default Home;
