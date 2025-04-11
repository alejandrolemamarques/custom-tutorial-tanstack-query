import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchInfiniteData } from "../api/fetchData";
import styles from "./InfiniteLoadingExample.module.css"; // We'll create this next
import { DescriptionBox } from "@/components/DescriptionBox/DescriptionBox";

export const InfiniteLoadingExample = () => {
    const {
        data,
        error,
        fetchNextPage, // Function to fetch the next page
        hasNextPage, // Boolean indicating if there is a next page
        isFetching, // Is fetching initial page or refetching
        isFetchingNextPage, // Is fetching the next page specifically
        status, // 'pending', 'error', 'success' in v5
    } = useInfiniteQuery({
        queryKey: ["infiniteData"],
        queryFn: fetchInfiniteData,
        initialPageParam: 1, // Start fetching from page 1
        getNextPageParam: (lastPage) => lastPage.nextPage, // Simplified getNextPageParam
        // Optionally, add staleTime, cacheTime etc. as needed
    });

    return (
        <div className={styles.container}>
            <div className={styles.descriptionColumn}>
                <DescriptionBox title="Infinite Loading with useInfiniteQuery">
                    <p>
                        This example uses <code>useInfiniteQuery</code> for
                        loading data in chunks, suitable for "load more" or
                        infinite scroll interfaces.
                    </p>
                    <ul>
                        <li>
                            The API function (<code>fetchInfiniteData</code>)
                            receives a <code>pageParam</code> and is expected to
                            return the data items along with information about
                            the <em>next</em> page (<code>nextPage</code> in
                            this case).
                        </li>
                        <li>
                            <code>initialPageParam: 1</code> tells React Query
                            what parameter to use for the very first fetch.
                        </li>
                        <li>
                            <code>getNextPageParam</code> is a function that
                            receives the <em>last fetched page</em> and
                            determines the parameter for the <em>next</em> page
                            request. Here, it simply returns the{" "}
                            <code>nextPage</code> value from our API response.
                            It returns <code>undefined</code> or{" "}
                            <code>null</code> when there are no more pages.
                        </li>
                        <li>
                            The fetched data is accumulated in{" "}
                            <code>data.pages</code>, an array where each element
                            corresponds to the data returned for one page fetch.
                            We need to map over this array to render all items.
                        </li>
                        <li>
                            <code>fetchNextPage()</code> is called to trigger
                            loading the next chunk of data.
                        </li>
                        <li>
                            <code>hasNextPage</code> is a boolean derived from
                            the return value of <code>getNextPageParam</code>,
                            indicating if more data can be loaded.
                        </li>
                        <li>
                            <code>isFetchingNextPage</code> is true specifically
                            when the <em>next</em> page is being fetched via{" "}
                            <code>fetchNextPage</code>.
                        </li>
                    </ul>
                </DescriptionBox>
            </div>

            <div className={styles.exampleColumn}>
                <h1 className={styles.heading}>Infinite Loading Example</h1>

                {status === "pending" ? (
                    <p className={styles.loadingText}>
                        Loading initial data...
                    </p>
                ) : status === "error" ? (
                    <p className={styles.errorText}>
                        Error:{" "}
                        {error instanceof Error
                            ? error.message
                            : "Unknown error"}
                    </p>
                ) : (
                    <>
                        <ul className={styles.itemList}>
                            {data &&
                                data.pages.map((page, i) => (
                                    <React.Fragment key={i}>
                                        {" "}
                                        {/* Use React.Fragment for keys when mapping pages */}
                                        {page.items.map((item: string) => (
                                            <li
                                                key={item}
                                                className={styles.item}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </React.Fragment>
                                ))}
                        </ul>

                        <div className={styles.loadMoreContainer}>
                            <button
                                onClick={() => fetchNextPage()}
                                disabled={!hasNextPage || isFetchingNextPage}
                                className={styles.button}
                            >
                                {isFetchingNextPage
                                    ? "Loading more..."
                                    : hasNextPage
                                    ? "Load More"
                                    : "Nothing more to load"}
                            </button>
                        </div>
                        {isFetching && !isFetchingNextPage && (
                            <div className={styles.loadingText}>
                                Fetching in background...
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
