import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPaginatedData } from "../api/fetchData";
import type { PaginatedData } from "../api/fetchData"; // Import the type
import styles from "./PaginationExample.module.css"; // We'll create this CSS module next
import { DescriptionBox } from "@/components/DescriptionBox/DescriptionBox";

export const PaginationExample = () => {
    const [page, setPage] = useState(1);

    const {
        data,
        error,
        isFetching, // Use isFetching to show loading state without clearing old data
        isPlaceholderData, // Indicates if the displayed data is from a previous page
    } = useQuery<PaginatedData, Error>({
        queryKey: ["paginatedData", page], // Include page in the query key
        queryFn: () => fetchPaginatedData(page),
        placeholderData: (previousData: PaginatedData | undefined) =>
            previousData, // Provide type for previousData
        staleTime: 5 * 60 * 1000, // Keep data fresh for 5 minutes
    });

    const totalPages = data ? Math.ceil(data.totalItems / 10) : 0; // Calculate total pages

    return (
        <div className={styles.container}>
            <div className={styles.descriptionColumn}>
                <DescriptionBox title="Pagination with useQuery and placeholderData">
                    <p>
                        This example shows how to implement pagination using{" "}
                        <code>useQuery</code>.
                    </p>
                    <ul>
                        <li>
                            The current <code>page</code> number is included in
                            the <code>queryKey</code> (
                            <code>['paginatedData', page]</code>). This makes
                            React Query cache the data for each page separately.
                        </li>
                        <li>
                            <code>placeholderData</code> is used (previously{" "}
                            <code>keepPreviousData</code>). When fetching a new
                            page, React Query keeps displaying the data from the{" "}
                            <em>previous</em> page until the new data arrives.
                            This prevents the UI from jumping to a loading state
                            and provides a smoother experience.
                        </li>
                        <li>
                            <code>isPlaceholderData</code> becomes true when
                            placeholder data is being shown while new data is
                            loading in the background. We use this to disable
                            the "Next Page" button during that time.
                        </li>
                        <li>
                            <code>isFetching</code> indicates when a fetch is
                            happening (either initial or background refetch),
                            used here to show "(Updating...)".
                        </li>
                    </ul>
                </DescriptionBox>
            </div>

            <div className={styles.exampleColumn}>
                <h1 className={styles.heading}>Pagination Example</h1>

                {error instanceof Error && (
                    <div className={styles.errorText}>
                        Error: {error.message}
                    </div>
                )}

                {data ? (
                    <>
                        <ul className={styles.itemList}>
                            {data.items.map((item: string) => (
                                <li key={item} className={styles.item}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.paginationControls}>
                            <button
                                onClick={() =>
                                    setPage((old) => Math.max(old - 1, 1))
                                }
                                disabled={page === 1}
                                className={styles.button}
                            >
                                Previous Page
                            </button>
                            <span className={styles.pageInfo}>
                                Page {page} of {totalPages}{" "}
                                {isFetching ? "(Updating...)" : ""}
                            </span>
                            <button
                                onClick={() =>
                                    setPage((old) =>
                                        data?.hasMore ? old + 1 : old
                                    )
                                }
                                disabled={isPlaceholderData || !data?.hasMore} // Disable if placeholder data or no more pages
                                className={styles.button}
                            >
                                Next Page
                            </button>
                        </div>
                        {isFetching && !isPlaceholderData && (
                            <div className={styles.loadingText}>
                                Fetching next page...
                            </div>
                        )}
                    </>
                ) : (
                    // Initial loading state before any data is available
                    !isFetching && (
                        <div className={styles.loadingText}>
                            Loading initial data...
                        </div>
                    )
                )}
            </div>
        </div>
    );
};
