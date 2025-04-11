import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchData, postData } from "../api/fetchData";
import styles from "./BasicQueryExample.module.css";
import { DescriptionBox } from "@/components/DescriptionBox/DescriptionBox";

export const BasicQueryExample = () => {
    // Local state for the input field
    const [inputText, setInputText] = useState("");
    // Get the QueryClient instance for cache interactions like invalidation
    const queryClient = useQueryClient();

    // useQuery hook to fetch and cache data
    const {
        data: queryData, // Renaming data to queryData
        error: queryError,
        isLoading: queryIsLoading, // True only during initial load or hard refresh
        isFetching, // True whenever a fetch is in progress (initial or background)
    } = useQuery({
        queryKey: ["basicData"], // Unique key to identify this query in the cache
        queryFn: fetchData, // The async function that fetches the data
        staleTime: 30 * 1000, // Data is considered fresh for 30 seconds
    });

    // useMutation hook for operations that modify server data
    const mutation = useMutation({
        mutationFn: postData, // The async function that performs the mutation
        // Callback function on successful mutation
        onSuccess: (data) => {
            // Invalidate the 'basicData' query, marking it stale and triggering a refetch
            queryClient.invalidateQueries({ queryKey: ["basicData"] });
            console.log("Mutation successful:", data.message);
            setInputText(""); // Clear input on success
        },
        // Callback function on mutation error
        onError: (error) => {
            console.error("Mutation failed:", error.message);
        },
    });

    // Handler to trigger the mutation
    const handlePost = () => {
        if (inputText.trim()) {
            // Call mutate with the data needed by the mutationFn (postData)
            mutation.mutate(inputText);
        }
    };

    // Render loading state
    if (queryIsLoading)
        return (
            <div className={styles.container}>
                <div className={styles.loadingText}>Loading query data...</div>
            </div>
        );
    if (queryError instanceof Error)
        return (
            <div className={styles.container}>
                <div className={styles.errorText}>
                    Query error: {queryError.message}
                </div>
            </div>
        );

    return (
        <div className={styles.container}>
            <div className={styles.descriptionColumn}>
                <DescriptionBox title="useQuery, useMutation, and Invalidation">
                    <p>
                        This example demonstrates the fundamental hooks of React
                        Query:
                    </p>
                    <ul>
                        <li>
                            <code>useQuery</code>: Used to fetch data (
                            <code>fetchData</code> API call). It automatically
                            handles loading states, error states, and caching.
                            The <code>queryKey</code> (
                            <code>['basicData']</code>) uniquely identifies this
                            query's data in the cache. We've also set a{" "}
                            <code>staleTime</code> of 30 seconds, meaning the
                            data won't be automatically refetched on mount or
                            window focus within that period unless invalidated.
                        </li>
                        <li>
                            <code>useMutation</code>: Used to modify data on the
                            server (simulated by <code>postData</code>). It
                            provides status states like <code>isPending</code>,{" "}
                            <code>isError</code>, <code>isSuccess</code>.
                        </li>
                        <li>
                            <code>queryClient.invalidateQueries()</code>: Called
                            in the <code>onSuccess</code> callback of the
                            mutation. This marks the query associated with{" "}
                            <code>['basicData']</code> as stale, prompting React
                            Query to refetch it automatically to keep the UI
                            synchronized with the (simulated) server state.
                        </li>
                    </ul>
                </DescriptionBox>
            </div>

            <div className={styles.exampleColumn}>
                <h1 className={styles.heading}>
                    Tanstack Query Basics (with staleTime)
                </h1>
                <p>
                    <strong>Fetched Data:</strong>{" "}
                    {isFetching ? "(Fetching...)" : ""}
                </p>
                <div className={styles.dataDisplay}>{queryData}</div>

                <h2 className={styles.subHeading}>Simulate Posting Data</h2>
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Enter data to post"
                        className={styles.inputField}
                        disabled={mutation.isPending}
                    />
                    <button
                        onClick={handlePost}
                        className={styles.button}
                        disabled={mutation.isPending || !inputText.trim()}
                        type="button"
                    >
                        {mutation.isPending ? "Posting..." : "Post Data"}
                    </button>
                </div>

                {mutation.isError && (
                    <div className={styles.errorText}>
                        Mutation Error:{" "}
                        {mutation.error instanceof Error
                            ? mutation.error.message
                            : "An unknown error occurred"}
                    </div>
                )}
                {mutation.isSuccess && (
                    <div className={styles.successText}>
                        {mutation.data?.message}
                    </div>
                )}
            </div>
        </div>
    );
};
