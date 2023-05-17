import React from "react";
import styles from "@vx/components/Banners/StaticBlueStoryBanner/styles.module.scss";
import { BigLetterShape } from "@vx/components/LettersShapes/BigLetterShape/BigLetterShape";
import { BlueBannerStoryButton } from "@vx/components/Buttons/BlueBannerStoryButton/BlueBannerStoryButton";

interface StaticBlueStoryBannerProps {
  display: string;
}

export const StaticBlueStoryBanner = ({
  display,
}: StaticBlueStoryBannerProps) => {
  return (
    <div className={styles.blueBanner} style={{ display: `${display}` }}>
      <div className={styles.blueBannerLeft}>
        <div className={styles.blueBannerLeftTop}>
          <h2 className={styles.blueBannerTitle}>Our Story</h2>
          <article className={styles.blueBannerText}>In a world where conformity often stifles creativity and fear of cancellation hangs in the air, a group of passionate individuals came together to create something extraordinary. This is the story of <span>Vigilante X</span>, a platform born out of a burning desire to champion free expression, celebrate diverse perspectives, and empower voices that have long been silenced.</article>
        </div>
        <div className={styles.blueBannerLeftBottom}>
          <BlueBannerStoryButton />
        </div>
      </div>
      <div className={styles.blueBannerRight}>
        <BigLetterShape />
     
        
      </div>
    </div>
  );
};
