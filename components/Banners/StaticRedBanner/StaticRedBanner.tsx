import React from "react";
import styles from "@vx/components/Banners/StaticRedBanner/staticRedBanner.module.scss";
import { RedBannerWriteButton } from "@vx/components/Buttons/RedBannerWriteButton/RedBannerWriteButton";
import { SmallLetterShape } from "@vx/components/LettersShapes/SmallLetterShape/SmallLetterShape";

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
        <div className={styles.redBannerTopLeft}>
          <p className={styles.redBannerTitles}>Start Writing</p>
          <p className={styles.redBannerInformativeText}>Are you bursting with stories to tell? Overflowing with wisdom and insights? Well, we&apos;ve got some exciting news for you.</p>
          <p className={styles.redBannerInformativeText}>Introducing our revolutionary platform that puts your words in the spotlight - an open invitation to all passionate individuals to share their unique perspectives, knowledge, and experiences with the world.</p>
        </div>
        <div className={styles.redBannerTopRight}>
        <p className={styles.redBannerTitles}>No Cancel Culture</p>
        <p className={styles.redBannerInformativeText}>We believe in the power of diverse opinions and the beauty of open dialogue. Our platform is built on the principle that everyone deserves a voice, regardless of societal norms or popular trends.</p>
        <p className={styles.redBannerInformativeText}>Say goodbye to the era of cancellation, and welcome a new era of uninhibited self-expression.</p>
        </div>
      </div>
      <div className={styles.redBannerBottom}>
        <RedBannerWriteButton />
        <SmallLetterShape />
      </div>
    </div>
  );
};
