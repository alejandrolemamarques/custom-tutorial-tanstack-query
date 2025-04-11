import React from "react"; // Needed for JSX in descriptions

// Import step data from individual files
import { step1Data } from "./step1Data";
import { step2Data } from "./step2Data";
import { step3Data } from "./step3Data";
import { step4Data } from "./step4Data";
// Import future steps here...

// Define the structure for a guide step (can also be imported from one of the step files)
interface GuideStep {
    stepNumber: number;
    title: string;
    description: React.ReactNode;
    codeSnippet: string;
}

// Combine imported steps into the final array
export const guideSteps: GuideStep[] = [
    step1Data,
    step2Data,
    step3Data,
    step4Data,
    // Add future imported step data here...
];
