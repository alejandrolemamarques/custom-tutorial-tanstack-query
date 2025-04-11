import React from "react";
import styles from "./DescriptionBox.module.css";

interface DescriptionBoxProps {
    title: string;
    children: React.ReactNode;
}

export const DescriptionBox: React.FC<DescriptionBoxProps> = ({
    title,
    children,
}) => {
    return (
        <div className={styles.descriptionBox}>
            <h3>{title}</h3>
            {children}
        </div>
    );
};
