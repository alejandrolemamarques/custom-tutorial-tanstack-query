import React from "react";

// Define the structure for a guide step (assuming it's defined elsewhere or reuse if possible)
interface GuideStep {
    stepNumber: number;
    title: string;
    description: React.ReactNode;
    codeSnippet: string;
}

// Assume API function and User type are defined as in step 3
// declare function fetchUserDetails(userId: string | number): Promise<User>;
// interface User { id: string | number; name: string; email: string; }

export const step4Data: GuideStep = {
    stepNumber: 4,
    title: "Handling Query States: isLoading, isError, data",
    description: (
        <>
            <p>
                The <code>useQuery</code> hook returns an object containing
                several state properties to help manage the fetching lifecycle.
                The most common ones are:
            </p>
            <ul>
                <li>
                    <strong>
                        <code>isLoading</code>:
                    </strong>{" "}
                    Boolean indicating if the query is currently fetching for
                    the first time (no data yet).
                </li>
                <li>
                    <strong>
                        <code>isFetching</code>:
                    </strong>{" "}
                    Boolean indicating if the query is fetching in the
                    background (e.g., refetching). Often used for background
                    indicators.
                </li>
                <li>
                    <strong>
                        <code>isError</code>:
                    </strong>{" "}
                    Boolean indicating if the query encountered an error.
                </li>
                <li>
                    <strong>
                        <code>error</code>:
                    </strong>{" "}
                    The error object if <code>isError</code> is true, otherwise{" "}
                    <code>null</code>.
                </li>
                <li>
                    <strong>
                        <code>data</code>:
                    </strong>{" "}
                    The successfully fetched data for the query, otherwise{" "}
                    <code>undefined</code>.
                </li>
            </ul>
            <p>
                A typical pattern in components using <code>useQuery</code> is
                to handle the loading and error states first before attempting
                to render the UI based on the <code>data</code>.
            </p>
        </>
    ),
    codeSnippet: `
import { useQuery, UseQueryResult } from "@tanstack/react-query";

// Assume fetchUserDetails and User type are defined elsewhere
// declare function fetchUserDetails(userId: string | number): Promise<User>;
// interface User { id: string | number; name: string; email: string; }

interface UserProfileProps {
  userId: string | number | null;
}

function UserProfile({ userId }: UserProfileProps) {
  // Type the result with UseQueryResult for better type safety
  const { 
    data: user, // Destructure and rename data to user for clarity
    isLoading, 
    isError, 
    error 
  }: UseQueryResult<User, Error> = useQuery({ // Add Error type for the error object
    queryKey: ["user", userId],
    queryFn: () => fetchUserDetails(userId!),
    enabled: !!userId, 
  });

  // 1. Handle Loading State
  if (isLoading) {
    return <span>Loading user profile...</span>;
  }

  // 2. Handle Error State
  if (isError) {
    // Access the error message
    return <span>Error loading user: {error.message}</span>;
  }

  // 3. Handle Success State (data is guaranteed to be available here)
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
    `,
};
