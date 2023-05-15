import React from "react";
import styles from "@vx/components/Banners/StaticRedBanner/staticRedBanner.module.scss";

interface StaticRedBannerProps {
  display: string;
}

export const StaticRedBanner = ({ display }: StaticRedBannerProps) => {
  return (
    <div
      className={styles.redBannerContainer}
      style={{ display: `${display}` }}
    >
      <div className={styles.redBannerTop}>
        <div className={styles.redBannerTopLeft}>hello</div>
        <div className={styles.redBannerTopRight}></div>
      </div>
      <div className={styles.redBannerBottom}></div>
    </div>
  );
};
