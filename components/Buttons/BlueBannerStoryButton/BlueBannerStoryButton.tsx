import styles from "@vx/components/Buttons/BlueBannerStoryButton/styles.module.scss"
import Link from "next/link"

export const BlueBannerStoryButton = () => {
    return(
        <Link href="/story" className={styles.blueBannerStoryBtn}>
            See our story
        </Link>
    )
}