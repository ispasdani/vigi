"use client";

import styles from "@vx/components/CategoriesBar/styles.module.scss"
import { categories } from "@vx/utils/AllCategoriesInOne";
import Image from "next/image"
import { useRef, useState } from 'react';
import { CategoryBubble } from "../Bubbles/CategoryBubble/CategoryBubble";

export const CategoriesBar = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setDragStartX(event.clientX - sliderRef.current!.offsetLeft);
        setScrollLeft(sliderRef.current!.scrollLeft);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const offsetX = event.clientX - sliderRef.current!.offsetLeft;
        const distance = offsetX - dragStartX;
        sliderRef.current!.scrollLeft = scrollLeft - distance;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleSliderScroll = (scrollAmount: number) => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += scrollAmount;
        }
    };
    return (
        <div className={styles.categoriesBar}>
            <button onClick={() => handleSliderScroll(-100)} className={styles.sliderBtns}>
                <Image src="/assets/icons/past.png" width={16} height={25} alt="Go to start in categories navigation" />
            </button>

            <div className={styles.sliderContainer} ref={sliderRef} onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}>
                {categories.map(category => {
                    return <CategoryBubble category={category} key={category} />
                })}
            </div>

            <button onClick={() => handleSliderScroll(100)} className={styles.sliderBtns}>
                <Image src="/assets/icons/after.png" width={16} height={25} alt="Go to start in categories navigation" />
            </button>
        </div>
    )
}