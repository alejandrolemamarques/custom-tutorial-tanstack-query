import React from "react";

// Define the structure for a guide step
interface GuideStep {
    stepNumber: number;
    title: string;
    description: React.ReactNode;
    codeSnippet: string;
}

export const step3Data: GuideStep = {
    stepNumber: 3,
    title: "useQuery Parameters & Options",
    description: (
      <>
        <p>
          The <code>useQuery</code> hook accepts an options object. Let's look at the required and some common optional parameters:
        </p>
        <ul>
          <li><strong><code>queryKey</code> (Required):</strong> An array used to uniquely identify the query's data. Must be serializable. Changes to the key trigger refetches. Examples: <code>["user", userId]</code>, <code>["todos", "active"]</code>.</li>
          <li><strong><code>queryFn</code> (Required):</strong> The async function that fetches the data and returns a promise resolving with the data or throwing an error.</li>
          <li><strong><code>enabled</code> (Optional):</strong> Boolean. If <code>false</code>, query won't run automatically. Default: <code>true</code>.</li>
          <li><strong><code>staleTime</code> (Optional):</strong> Time in ms until data is stale. Default: <code>0</code>.</li>
          <li><strong><code>cacheTime</code> (Optional):</strong> Time in ms until inactive data is garbage collected. Default: <code>5 * 60 * 1000</code>.</li>
          <li><strong><code>refetchOnWindowFocus</code> (Optional):</strong> Refetch on window focus. Default: <code>true</code>.</li>
          <li><strong><code>retry</code> (Optional):</strong> Number of retry attempts on failure. Default: <code>3</code>.</li>
        </ul>
        <p>These options provide fine-grained control over query behavior.</p>
      </>
    ),
    codeSnippet: `
import { useQuery } from "@tanstack/react-query";

// Assume API function exists and returns expected shape or throws
// declare function fetchUserDetails(userId: string | number): Promise<{ id: string | number; name: string; email: string }>;

interface User {
  id: string | number;
  name: string;
  email: string;
}

interface UserProfileProps {
  userId: string | number | null;
}

function UserProfile({ userId }: UserProfileProps) {
  const userQuery = useQuery<User, Error>({ 
    queryKey: ["user", userId],         // Unique identifier for the query
    queryFn: () => fetchUserDetails(userId!),         // The async function that fetches the data and returns a promise resolving with the data or throwing an error.
    enabled: !!userId,        // Boolean. If false, query won't run automatically. Default: true
    staleTime: 10 * 60 * 1000,          // Time in ms until data is stale. Default: 0.
    cacheTime: 60 * 60 * 1000,          // Time in ms until inactive data is garbage collected. Default: 5 * 60 * 1000.
    refetchOnWindowFocus: false,         // Refetch on window focus. Default: true
    retry: 1,        // Number of retry attempts on failure. Default: 3.
  });
}
    `,
};
