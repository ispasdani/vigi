import styles from "@vx/components/Texts/BannerTitle/styles.module.scss";

interface BannerTitleProps {
  bannerTitleText: string;
}

export const BannerTitle = ({ bannerTitleText }: BannerTitleProps) => {
  return <h2 className={styles.bannerTitleText}>{bannerTitleText}</h2>;
};
