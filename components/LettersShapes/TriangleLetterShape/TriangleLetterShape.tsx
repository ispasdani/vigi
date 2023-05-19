import styles from "@vx/components/LettersShapes/TriangleLetterShape/styles.module.scss"

export const TriangleLetterShape = () => {
    return (
        <div className={styles.triangleLetterShape}>
            <div>
                <p className={styles.flickerLetterDelaySix}>V</p>
                <p>X</p>
                <p className={styles.flickerLetter}>G</p>
                <p>N</p>
            </div>
            <div>
                <p>Y</p>
                <p></p>
                <p></p>
                <p className={styles.flickerLetterDelayThree}>P</p>
            </div>
            <div>
                <p className={styles.flickerLetterDelayFive}>D</p>
                <p>S</p>
            </div>
            <div>
                <p className={styles.flickerLetterDelayFour}>A</p>
            </div>
        </div >
    )
}