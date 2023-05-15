import React from "react";
import styles from "@vx/components/Banners/StaticBlueStoryBanner/styles.module.scss";

interface StaticBlueStoryBannerProps {
  display: string;
}

export const StaticBlueStoryBanner = ({
  display,
}: StaticBlueStoryBannerProps) => {
  return (
    <div className={styles.blueBanner} style={{ display: `${display}` }}>
      <div className={styles.blueBannerLeft}>
        <div className={styles.blueBannerLeftTop}></div>
        <div className={styles.blueBannerLeftBottom}></div>
      </div>
      <div className={styles.blueBannerRight}></div>
    </div>
  );
};
