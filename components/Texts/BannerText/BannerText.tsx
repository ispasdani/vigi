import styles from "@vx/components/Texts/BannerText/styles.module.scss";

interface BannerTextProps {
  bannerText: string;
  color?: string;
}

export const BannerText = ({ bannerText, color }: BannerTextProps) => {
  return (
    <div className={styles.bannerText} style={{ color: color }}>
      {bannerText}
    </div>
  );
};
