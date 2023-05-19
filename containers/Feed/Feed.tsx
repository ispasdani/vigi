import styles from "@vx/containers/Feed/styles.module.scss"
import { SearchBarFeed } from "./SearchBarFeed/SearchBarFeed"
import { DynamicCard } from "@vx/components/Cards/DynamicCard/DynamicCard"

export const Feed = () => {
    return (
        <section className={styles.feed}>
            <div className={styles.articlesFeed}>
                <SearchBarFeed />
            </div>
            <div className={styles.feedSide}>
                <DynamicCard backgroundColor="#34A245" titleColor="#ffffff" textColor="#FFF500" buttonBackgroundColor="#34A245" buttonTextColor="#ffffff" title="Get unlimited access to everything on Vigilante X" text="Plans starts from 1$/week" />
                <DynamicCard backgroundColor="#F24D2E" titleColor="#ffffff" textColor="#ffffff" buttonBackgroundColor="#F24D2E" buttonTextColor="#ffffff" title="Start writing your own article" text="Check our guide, about writing a article" />
                <DynamicCard backgroundColor="#34A245" titleColor="#ffffff" textColor="#FFF500" buttonBackgroundColor="#34A245" buttonTextColor="#ffffff" title="Get unlimited access to everything on Vigilante X" text="Plans starts from 1$/week" />
            </div>
        </section>
    )
}