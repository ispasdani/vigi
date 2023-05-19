import styles from "@vx/containers/Feed/SearchBarFeed/styles.module.scss"
import { SearchBubble } from "@vx/components/Bubbles/SearchBubble/SearchBubble"
import { CategoriesBar } from "@vx/components/CategoriesBar/CategoriesBar"

export const SearchBarFeed = () => {
    return (
        <div className={styles.searchBar}>
            <SearchBubble />
            <CategoriesBar />
        </div>
    )
}