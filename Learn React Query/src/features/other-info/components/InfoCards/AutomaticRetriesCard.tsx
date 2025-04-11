import styles from "../OtherInfoPage.module.css";

export const AutomaticRetriesCard = () => {
    return (
        <div className={styles.infoCard}>
            <h3>Automatic Retries on Failure</h3>
            <p>
                A helpful default behavior in Tanstack Query (specifically for{" "}
                <code>useQuery</code>) is its automatic retry mechanism.
            </p>
            <p>
                If a query function fails (e.g., due to a network error or a
                server-side issue that throws an error), Tanstack Query won't
                immediately give up and return the error state. Instead, it will
                automatically retry the query function <strong>3 times</strong>{" "}
                by default, with a brief, increasing delay between attempts.
            </p>
            <p>
                Only after these default retries have failed will the query
                transition to the <code>error</code> status.
            </p>
            <p>
                This default behavior can often handle transient network issues
                without requiring manual intervention. You can configure the
                number of retries (or disable it entirely) using the{" "}
                <code>retry</code> option in <code>useQuery</code>:
            </p>
            <ul>
                <li>
                    <code>retry: 5</code> - Retry 5 times.
                </li>
                <li>
                    <code>retry: false</code> - Disable retries.
                </li>
                <li>
                    <code>
                        retry: (failureCount, error) =&gt; &#123; return
                        failureCount &lt; 2; &#125;
                    </code>{" "}
                    - Custom retry logic based on count or error type.
                </li>
            </ul>
        </div>
    );
};
