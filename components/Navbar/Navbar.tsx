import Link from "next/link";
import styles from "@vx/components/Navbar/Navbar.module.scss";
import WriteBtn from "../Buttons/WriteButton/WriteBtn";
import SignInBtn from "../Buttons/SignInButton/SignInBtn";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <input
        type="checkbox"
        id="navbar-toggle"
        className={styles.navbarToggle}
      />
      <label htmlFor="navbar-toggle" className={styles.navbarToggleLabel}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <p className={styles.navTitleMobile}>Vigilante X</p>

      <div className={styles.navbarContent}>
        <div className={styles.navColLinks}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/story" className={styles.navLink}>
            Our story
          </Link>
        </div>
        <div className={styles.navCol}>
          <p className={styles.navTitle}>Vigilante X</p>
        </div>
        <div className={styles.navColBtns}>
          <WriteBtn />
          <SignInBtn />
        </div>
      </div>

      <div className={styles.navbarSide}>
        <div className={styles.navColSide}>
          <p className={styles.navTitleSide}>Vigilante X</p>
        </div>
        <div className={styles.navColLinksSide}>
          <Link href="/" className={styles.navLinkSide}>
            Home
          </Link>
          <Link href="/story" className={styles.navLinkSide}>
            Our story
          </Link>
        </div>

        <div className={styles.navColBtnsSide}>
          <WriteBtn />
          <SignInBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
