import React, { useState } from "react";
import { useUserProfile } from "../hooks/useUserProfile";
import styles from "./InitialDataExample.module.css"; // We'll create this CSS module next

export const InitialDataExample: React.FC = () => {
    const [selectedUserId, setSelectedUserId] = useState<number>(1);

    const {
        data: userProfile,
        isLoading,
        isFetching,
        error,
        isPlaceholderData,
    } = useUserProfile(selectedUserId);

    const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedUserId(Number(event.target.value));
    };

    return (
        <div className={styles.container}>
            <h1>Initial/Placeholder Data Example</h1>
            <p>
                Select a user ID to view their profile. You'll notice
                placeholder data is shown instantly while the actual profile is
                being fetched in the background (simulated 1.5s delay).
            </p>

            <label htmlFor="user-select">Select User ID: </label>
            <select
                id="user-select"
                value={selectedUserId}
                onChange={handleUserChange}
                className={styles.select}
            >
                <option value="1">User 1</option>
                <option value="2">User 2</option>
                <option value="3">User 3</option>
            </select>

            <div className={styles.profileCard}>
                {isFetching && (
                    <div className={styles.loadingIndicator}>Loading...</div>
                )}
                {error && (
                    <div className={styles.error}>Error: {error.message}</div>
                )}

                {userProfile && (
                    <>
                        <h2>
                            {userProfile.name}{" "}
                            {isPlaceholderData && "(Placeholder)"}
                        </h2>
                        <p>
                            <strong>Email:</strong> {userProfile.email}
                        </p>
                        <p>
                            <strong>Bio:</strong> {userProfile.bio}
                        </p>
                        <p>
                            <em>
                                (Is Placeholder:{" "}
                                {isPlaceholderData ? "Yes" : "No"})
                            </em>
                        </p>
                        <p>
                            <em>(Is Loading: {isLoading ? "Yes" : "No"})</em>
                        </p>
                        <p>
                            <em>(Is Fetching: {isFetching ? "Yes" : "No"})</em>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};
