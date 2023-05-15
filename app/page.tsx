import { MultiHomeBanners } from "@vx/components/Banners/MultiHomeBanners";
import React from "react";
import styles from "@vx/app/home.module.scss";

const Home = () => {
  return (
    <section className={styles.homePage}>
      <MultiHomeBanners />
    </section>
  );
};

export default Home;
