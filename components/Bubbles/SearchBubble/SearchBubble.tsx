import styles from "@vx/components/Bubbles/SearchBubble/styles.module.scss"


export const SearchBubble = () => {
    return (
        <label className={styles.searchBubble}>
            <img src="/assets/icons/search.png" alt="search icon" className={styles.searchIcon} />
            <input type="text" placeholder="Search" name="search" className={styles.searchBubbleInput} />
        </label>
    )
}