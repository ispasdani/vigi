import styles from "@vx/components/Banners/StaticBlackMembershipBanner/styles.module.scss";
import { SquareSmallLetterShape } from "@vx/components/LettersShapes/SquareSmallLetterShape/SquareSmallLetterShape";
import Image from "next/image";

interface StaticBlackMembershipBannerProps {
  display: string;
}

const StaticBlackMemberShipBanner = ({
  display,
}: StaticBlackMembershipBannerProps) => {
  return (
    <div className={styles.staticBlackBanner} style={{ display: `${display}` }}>
      <div className={styles.blackBannerLeftSide}>
        <div className={styles.blackBannerLeftSideTop}><SquareSmallLetterShape fontSize="12px"/></div>
        <div className={styles.blackBannerLeftSideBottom}></div>
      </div>
      <div className={styles.blackBannerCenter}>
        <h2 className={styles.blackBannerTitle}>Support Our Work</h2>
        <p className={styles.blackBannerText}>Are you passionate about the power of free expression? Do you believe in the importance of diverse voices and open dialogue? Here&apos;s your chance to make a difference and support a platform that stands as a beacon of fearless self-expression and knowledge sharing.</p>
        <p className={styles.blackBannerText}>Join us in our mission to ignite the flames of free expression by becoming a patron of <span>Vigilante X</span> on Patreon.</p>
        <a href="https://www.google.ro" className={styles.blackBannerIcon}>
          <Image 
          src="/assets/icons/patreonIcon.png" 
          alt="patreon logo"
          width={30}
          height={30}
          />
        </a>
      </div>
      <div className={styles.blackBannerRightSide}>
        <div className={styles.blackBannerRightSideTop}></div>
        <div className={styles.blackBannerRightSideBottom}>
          <SquareSmallLetterShape fontSize="12px"/>
        </div>
      </div>
    </div>
  );
};

export default StaticBlackMemberShipBanner;
