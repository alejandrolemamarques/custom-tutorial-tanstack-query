import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to the Tanstack Query Demo</h1>
            <p className={styles.description}>
                This application demonstrates various features and patterns
                using TanStack Query (formerly Tanstack Query).
            </p>
            <p className={styles.instruction}>
                Use the navigation bar above to explore different examples like
                basic queries, pagination, infinite loading, optimistic updates,
                etc.
            </p>
        </div>
    );
}
