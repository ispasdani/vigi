import styles from "@vx/components/Texts/BannerText/styles.module.scss";

interface BannerTextProps {
  bannerText: string;
}

export const BannerText = ({ bannerText }: BannerTextProps) => {
  return <div className={styles.bannerText}>{bannerText}</div>;
};
