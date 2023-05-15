import styles from "@vx/components/HamburgerMenu/hamburgerStyles.module.scss";

export const Hamburger = () => {
  return (
    <div className={styles.hamburgerBar}>
      <div className={styles.hamburgerLines}>
        <span className={styles.line}></span>
        <span className={styles.line2}></span>
        <span className={styles.line}></span>
      </div>
      <p className={styles.navTitle}>Vigilante X</p>
    </div>
  );
};

export default Hamburger;
