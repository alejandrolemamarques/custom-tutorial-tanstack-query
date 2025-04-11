import styles from "./OtherInfoPage.module.css";
import { AutomaticRetriesCard } from "./InfoCards/AutomaticRetriesCard";
import { IsLoadingVsIsFetchingCard } from "./InfoCards/IsLoadingVsIsFetchingCard";

export const OtherInfoPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>React Query - Other Useful Info</h1>

            {/* Render the card components */}
            <AutomaticRetriesCard />
            <IsLoadingVsIsFetchingCard />

            {/* Add more info cards here (if needed) */}
        </div>
    );
};
