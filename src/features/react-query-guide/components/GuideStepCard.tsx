import React from "react";
// Import the light version of Prism
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// Import only the languages you need
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
// Import the style
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./GuideStepCard.module.css";

// Register the languages
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("js", javascript); // Register alias
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("json", json);

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
    language = "tsx", // Default language is tsx
    id, // Destructure id
}) => {
    return (
        <div className={styles.card} id={id}>
            <h3>{`Step ${stepNumber}: ${title}`}</h3>
            {description} {/* Render description content directly */}
            {/* Use the static SyntaxHighlighter directly */}
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
