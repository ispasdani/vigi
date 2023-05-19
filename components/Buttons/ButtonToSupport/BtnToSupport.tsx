"use client";

import styles from "@vx/components/Buttons/ButtonToSupport/styles.module.scss"
import Link from "next/link"
import { useState } from "react";

interface DynamicBtnProps {
    path: string;
    backgroundColor: string;
    textColor: string;
}

export const BtnToSupport = ({ path, backgroundColor, textColor }: DynamicBtnProps) => {
    const [isHover, setIsHover] = useState<Boolean>(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <Link href={path} className={styles.btnToSupport}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundColor: `${isHover ? backgroundColor : textColor}`, borderColor: `${isHover ? textColor : backgroundColor}`, color: `${isHover ? textColor : backgroundColor}` }}>Get unlimited access</Link>
    )
} 