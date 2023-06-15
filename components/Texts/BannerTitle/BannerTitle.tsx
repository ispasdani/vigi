import styles from "@vx/components/Texts/BannerTitle/styles.module.scss";

interface BannerTitleProps {
  bannerTitleText: string;
  color?: string;
}

export const BannerTitle = ({ bannerTitleText, color }: BannerTitleProps) => {
  return (
    <h2 className={styles.bannerTitleText} style={{ color: color }}>
      {bannerTitleText}
    </h2>
  );
};
