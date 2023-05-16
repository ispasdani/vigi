"use client";

import { useState, useEffect } from "react";
import styles from "@vx/components/Banners/multiHomeBannersStyles.module.scss";
import { StaticRedBanner } from "./StaticRedBanner/StaticRedBanner";
import { StaticBlueStoryBanner } from "./StaticBlueStoryBanner/StaticBlueStoryBanner";
import StaticBlackMemberShipBanner from "./StaticBlackMembershipBanner/StaticBlackMemberShipBanner";

export const MultiHomeBanners = () => {
  const [activeDivIndex, setActiveDivIndex] = useState(2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveDivIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  console.log(activeDivIndex);

  return (
    <div className={styles.multiHomeBanners}>
      <StaticRedBanner display="flex" />
      {/* <StaticBlueStoryBanner
        display={`${activeDivIndex === 1 ? "flex" : "none"}`}
      />
      <StaticBlackMemberShipBanner
        display={`${activeDivIndex === 2 ? "flex" : "none"}`}
      /> */}
    </div>
  );
};
