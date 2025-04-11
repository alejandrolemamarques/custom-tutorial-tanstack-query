import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import styles from "./GuideStepCard.module.css";

// Define the background color from the theme
const codeBgColor =
    vscDarkPlus['pre[class*="language-"]']?.background || "#1e1e1e";

interface GuideStepCardProps {
    stepNumber: number;
    title: string;
    description: React.ReactNode; // Allow JSX for description
    codeSnippet: string;
    language?: string; // Optional language, default to tsx
    id: string; // Add id prop for linking
}

export const GuideStepCard: React.FC<GuideStepCardProps> = ({
    stepNumber,
    title,
    description,
    codeSnippet,
    language = "tsx",
    id, // Destructure id
}) => {
    return (
        <div className={styles.card} id={id}>
            <h3>{`Step ${stepNumber}: ${title}`}</h3>
            {description} {/* Render description content directly */}
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                showLineNumbers
                lineNumberStyle={{
                    background: codeBgColor,
                    paddingRight: "1em",
                }}
                customStyle={{
                    background: codeBgColor,
                    margin: 0,
                    padding: "1em",
                }}
                codeTagProps={{ style: { background: codeBgColor } }}
            >
                {codeSnippet.trim()}
            </SyntaxHighlighter>
        </div>
    );
};
