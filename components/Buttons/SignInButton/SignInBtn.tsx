import styles from "@vx/components/Buttons/SignInButton/signInBtn.module.scss";
import Link from "next/link";

const SignInBtn = () => {
  return (
    <div className={styles.signInBtn}>
      <Link href="/authentification">Sign in</Link>
    </div>
  );
};

export default SignInBtn;
