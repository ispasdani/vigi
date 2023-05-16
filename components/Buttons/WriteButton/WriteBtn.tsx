import styles from "@vx/components/Buttons/WriteButton/writeBtnStyle.module.scss";
import Link from "next/link";

const WriteBtn = () => {
  return (
    <Link href="/write" className={styles.writeBtnLink}>
      Start writing
    </Link>
  );
};

export default WriteBtn;
