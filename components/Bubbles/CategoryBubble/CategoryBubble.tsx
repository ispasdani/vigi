import styles from "@vx/components/Bubbles/CategoryBubble/styles.module.scss"

interface CategoryBubbleProps {
    category: string;
}

export const CategoryBubble = ({ category }: CategoryBubbleProps) => {
    return (
        <p className={styles.category}>{category}</p>
    )
}