import styles from "@vx/components/LettersShapes/SquareSmallLetterShape/styles.module.scss"


interface SmallLetterShapeProps {
    fontSize?: string;
}

export const SquareSmallLetterShape = ({fontSize}: SmallLetterShapeProps) => {
    return (
        <div className={styles.squareSmallLetterShape} style={{fontSize: `${fontSize}`}}>
            <p><span>V</span> <span className={styles.flickerLetterDelaySeven}>G</span> <span>A</span> <span className={styles.flickerLetterDelayFive}>D</span> <span>X</span></p>
            <p> <span className={styles.flickerLetterDelaySix}>D</span> <span>K</span> <span>V</span> <span>G</span> <span className={styles.flickerLetterDelayEight}>B</span></p>
            <p><span>X</span> <span className={styles.flickerLetterDelayFive}>W</span> <span>Y</span> <span>L</span> <span className={styles.flickerLetterDelayThree}>U</span> </p>
            <p><span className={styles.flickerLetter}>R</span> <span>T</span> <span>U</span> <span className={styles.flickerLetterDelayTwo}>C</span> <span>B</span>  </p>
            <p><span>B</span> <span className={styles.flickerLetterDelay}>C</span><span>K</span> <span className={styles.flickerLetterDelayFour}>V</span> <span>X</span></p>
        </div>
    )
}