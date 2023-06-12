import styles from "@vx/app/authentification/styles.module.scss";
import { PresentationDynamicBanner } from "@vx/components/Banners/PresentationDynamicBanner/PresentationDynamicBanner";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Authentification() {
  return (
    <div className={styles.authPage}>
      <PresentationDynamicBanner />
    </div>
  );
}
