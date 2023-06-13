import styles from "@vx/components/Banners/PresentationDynamicBanner/styles.module.scss";
import { BigLetterShape } from "@vx/components/LettersShapes/BigLetterShape/BigLetterShape";
import { CircleLetterShape } from "@vx/components/LettersShapes/CircleLetterShape/CircleLetterShape";
import { BannerText } from "@vx/components/Texts/BannerText/BannerText";
import { BannerTitle } from "@vx/components/Texts/BannerTitle/BannerTitle";

export const PresentationDynamicBanner = () => {
  return (
    <div className={styles.presDynBannner}>
      <div className={styles.presDynBannerLeft}>
        <div className={styles.presDynBannerLeftTop}>
          <BannerTitle bannerTitleText="Unleash your voice, Share your ideas and Embrace true freedom of expression" />
        </div>
        <div className={styles.presDynBannerLeftBottom}>
          <BannerText bannerText="Join our platform, a sanctuary of truth and genuine expression in an era plagued by fake news and cancel culture. We understand the importance of reclaiming the power of honest discourse and providing a space where individuals can share their perspectives without fear of retribution or distortion. Our platform stands as a beacon of reliability and authenticity" />
        </div>
      </div>
      <div className={styles.presDynBannerRight}>
        <CircleLetterShape />
        <div className={styles.lineh1}></div>
        <div className={styles.lineh2}></div>
        <div className={styles.lineh3}></div>
        <div className={styles.lineh4}></div>
        <div className={styles.lineh5}></div>
        <div className={styles.lineh6}></div>
        <div className={styles.lineh7}></div>
        <div className={styles.lineh8}></div>
        <div className={styles.lineh9}></div>
        <div className={styles.lineh10}></div>
        <div className={styles.lineh11}></div>
        <div className={styles.lineh12}></div>
      </div>
    </div>
  );
};
