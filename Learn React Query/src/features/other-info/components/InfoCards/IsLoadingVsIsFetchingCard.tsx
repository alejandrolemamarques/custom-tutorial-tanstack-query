import styles from "../OtherInfoPage.module.css";

export const IsLoadingVsIsFetchingCard = () => {
    return (
        <div className={styles.infoCard}>
            <h2>
                <code>isLoading</code> vs <code>isFetching</code>
            </h2>
            <br />
            <h3>
                1. <code>isLoading</code>
            </h3>
            <p>
                <strong>Definition:</strong> Indicates the query is fetching and
                has <strong>no data yet</strong>. True when the query makes its{" "}
                <strong>first fetch</strong> with no cached data.
            </p>
            <ul>
                <li>
                    <strong>When true:</strong> Initial fetch, no data in cache
                    (e.g., first render).
                </li>
                <li>
                    <strong>When false:</strong> Data is available (even if
                    refetching).
                </li>
                <li>
                    <strong>Use Case:</strong> Show loading spinner or
                    placeholder UI when no data exists.
                </li>
            </ul>

            <br />
            <h3>
                2. <code>isFetching</code>
            </h3>
            <p>
                <strong>Definition:</strong> Indicates the query is{" "}
                <strong>actively fetching</strong>, including initial fetches
                and background refetches.
            </p>
            <ul>
                <li>
                    <strong>When true:</strong> During initial fetch or
                    background refetch (e.g., window refocus, manual refetch).
                </li>
                <li>
                    <strong>When false:</strong> No active network request.
                </li>
                <li>
                    <strong>Use Case:</strong> Show subtle UI updates (e.g.,
                    refresh indicator) during fetches.
                </li>
            </ul>

            <br />
            <h3>Key Differences</h3>
            <table>
                <thead>
                    <tr>
                        <th>Aspect</th>
                        <th>
                            <code>isLoading</code>
                        </th>
                        <th>
                            <code>isFetching</code>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>Definition</strong>
                        </td>
                        <td>Query is fetching, no data yet.</td>
                        <td>Query is actively fetching.</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Scope</strong>
                        </td>
                        <td>Only initial fetch, no cache.</td>
                        <td>Any fetch (initial or refetch).</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Data Available</strong>
                        </td>
                        <td>No data in cache.</td>
                        <td>Data may be in cache.</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Use Case</strong>
                        </td>
                        <td>Full loading UI (e.g., spinner).</td>
                        <td>Ongoing fetch indicator.</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Example</strong>
                        </td>
                        <td>True on first render, no cache.</td>
                        <td>True during refetch, even with data.</td>
                    </tr>
                </tbody>
            </table>

            <br />
            <h3>Summary</h3>
            <p>
                <code>isLoading</code>: Use for initial loading when no data is
                available.
                <br />
                <code>isFetching</code>: Use to track any active fetch,
                including background refetches.
            </p>
        </div>
    );
};
