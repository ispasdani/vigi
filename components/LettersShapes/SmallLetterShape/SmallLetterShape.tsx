import styles from "@vx/components/LettersShapes/SmallLetterShape/styles.module.scss"

export const SmallLetterShape = () => {
    return (
        <div className={styles.smallLetterShape}>
            <p><span>V</span> <span className={styles.flickerLetterDelaySeven}>G</span> <span>A</span> <span className={styles.flickerLetterDelayFive}>D</span> <span>X</span></p>
            <p><span>A</span> <span className={styles.flickerLetterDelaySix}>D</span> <span>K</span> <span>V</span> <span>G</span> <span className={styles.flickerLetterDelayEight}>B</span></p>
            <p><span>X</span> <span className={styles.flickerLetterDelayFive}>W</span> <span>Y</span> <span>L</span> <span className={styles.flickerLetterDelayThree}>U</span> <span>B</span> <span className={styles.flickerLetterDelay}>C</span></p>
            <p><span className={styles.flickerLetter}>R</span> <span>T</span> <span>U</span> <span className={styles.flickerLetterDelayTwo}>C</span> <span>B</span> <span className={styles.flickerLetterDelaySix}>C</span> <span>K</span> <span className={styles.flickerLetterDelayFour}>V</span> </p>
        </div>
    )
}