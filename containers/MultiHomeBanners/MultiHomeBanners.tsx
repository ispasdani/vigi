"use client";

import { useState, useEffect } from "react";
import styles from "@vx/containers/MultiHomeBanners/multiHomeBannersStyles.module.scss";
import { StaticRedBanner } from "../../components/Banners/StaticRedBanner/StaticRedBanner";
import { StaticBlueStoryBanner } from "../../components/Banners/StaticBlueStoryBanner/StaticBlueStoryBanner";
import StaticBlackMemberShipBanner from "../../components/Banners/StaticBlackMembershipBanner/StaticBlackMemberShipBanner";

export const MultiHomeBanners = () => {
  const [activeDivIndex, setActiveDivIndex] = useState(2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveDivIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.multiHomeBanners}>
      <StaticRedBanner display={`${activeDivIndex === 0 ? "flex" : "none"}`} />
      <StaticBlueStoryBanner
        display={`${activeDivIndex === 1 ? "flex" : "none"}`} 
      />
      <StaticBlackMemberShipBanner
       display={`${activeDivIndex === 2 ? "flex" : "none"}`} 
      />
    </div>
  );
};
