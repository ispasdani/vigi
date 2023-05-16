import styles from "@vx/components/Buttons/RedBannerWriteButton/styles.module.scss"
import Link from "next/link"

export const RedBannerWriteButton = () => {
    return(
        <Link href="/write" className={styles.redBannerWriteBtn}>
            Start Writing
        </Link>
    )
}