import { BtnToSupport } from "@vx/components/Buttons/ButtonToSupport/BtnToSupport";
import styles from "@vx/components/Cards/DynamicCard/styles.module.scss"
import { TriangleLetterShape } from "@vx/components/LettersShapes/TriangleLetterShape/TriangleLetterShape";


interface DynamicCardProps {
    backgroundColor: string;
    titleColor: string;
    textColor: string;
    buttonBackgroundColor: string;
    buttonTextColor: string;
    title: string;
    text: string;
}

export const DynamicCard = ({ ...props }: DynamicCardProps) => {

    return (
        <div className={styles.dynamicCard} style={{ backgroundColor: `${props.backgroundColor}` }}>
            <p className={styles.dynamicCardTitle} style={{ color: `${props.titleColor}` }}>{props.title}</p>
            <p className={styles.dynamicCardText} style={{ color: `${props.textColor}` }}>{props.text}</p>
            <BtnToSupport path="/support" backgroundColor={props.buttonBackgroundColor} textColor={props.buttonTextColor} />
            <TriangleLetterShape />
        </div>
    )
}