import React from "react";

// Define the structure for a guide step
interface GuideStep {
    stepNumber: number;
    title: string;
    description: React.ReactNode;
    codeSnippet: string;
}

// Ensure the exported constant name matches the import
export const step1Data: GuideStep = {
    stepNumber: 1,
    title: "Provide the QueryClient",
    description: (
        <>
            <p>
                Before using any Tanstack Query hooks, you need to create a{" "}
                <code>QueryClient</code> instance and provide it to your
                application using the <code>QueryClientProvider</code>.
            </p>
            <p>
                This is typically done in your main application entry point
                (like <code>main.tsx</code> or <code>index.tsx</code>). The
                provider wraps your entire application, making the client
                available to all components.
            </p>
            <p>
                Optionally, you can also add the <code>ReactQueryDevtools</code>{" "}
                component inside the provider (usually only in development mode)
                to get helpful debugging tools.
            </p>
        </>
    ),
    codeSnippet: `
// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./app/App";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  </StrictMode>
);
    `,
};
