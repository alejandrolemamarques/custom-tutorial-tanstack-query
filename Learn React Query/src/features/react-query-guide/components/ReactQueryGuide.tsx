import React from "react"; // Import React for JSX
import styles from "./ReactQueryGuide.module.css";
import { GuideStepCard } from "./GuideStepCard"; // Import the new component
// Import the data from the separate file
import { guideSteps } from "../data/guideStepsData";

// --- Data is now in guideStepsData.tsx ---

// Helper to generate IDs
const generateStepId = (stepNumber: number) => `step-${stepNumber}`;

export const ReactQueryGuide = () => {
    // Click handler for menu items
    const handleMenuClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        stepNumber: number
    ) => {
        e.preventDefault(); // Prevent default anchor link behavior
        const targetId = generateStepId(stepNumber);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth", // Use smooth scrolling
                block: "start", // Align the top of the element to the top of the scroll container
            });
        }
    };

    return (
        <div className={styles.pageContainer}>
            {/* Side Menu Column */}
            <nav className={styles.sideMenu}>
                <ul className={styles.menuList}>
                    {guideSteps.map((step) => (
                        <li key={step.stepNumber} className={styles.menuItem}>
                            {/* Use onClick handler instead of href for scrolling */}
                            <a
                                href={`#${generateStepId(step.stepNumber)}`} // Keep href for semantics/context, but onClick handles behavior
                                onClick={(e) =>
                                    handleMenuClick(e, step.stepNumber)
                                }
                            >
                                {`Step ${step.stepNumber}: ${step.title}`}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Content Area Column */}
            <main className={styles.contentArea}>
                <h1 className={styles.heading}>
                    Tanstack Query Step-by-Step Guide
                </h1>

                {guideSteps.map((step) => (
                    <GuideStepCard
                        key={step.stepNumber}
                        id={generateStepId(step.stepNumber)}
                        stepNumber={step.stepNumber}
                        title={step.title}
                        description={step.description}
                        codeSnippet={step.codeSnippet}
                    />
                ))}
            </main>
        </div>
    );
};
