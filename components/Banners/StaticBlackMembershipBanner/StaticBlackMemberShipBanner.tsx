import styles from "@vx/components/Banners/StaticBlackMembershipBanner/styles.module.scss";

interface StaticBlackMembershipBannerProps {
  display: string;
}

const StaticBlackMemberShipBanner = ({
  display,
}: StaticBlackMembershipBannerProps) => {
  return (
    <div className={styles.staticBlackBanner} style={{ display: `${display}` }}>
      StaticBlackMemberShipBanner
    </div>
  );
};

export default StaticBlackMemberShipBanner;
