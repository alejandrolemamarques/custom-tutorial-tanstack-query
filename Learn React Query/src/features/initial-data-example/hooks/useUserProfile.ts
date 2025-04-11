import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "../api/api";
import { UserProfile } from "../types/types";

// Placeholder data to show while fetching
const placeholderProfile: UserProfile = {
    id: 0,
    name: "Loading User...",
    email: "loading@example.com",
    bio: "Loading user profile information... Please wait.",
};

export const useUserProfile = (userId: number) => {
    return useQuery<UserProfile, Error>({
        queryKey: ["userProfile", userId], // Unique key for this query
        queryFn: () => fetchUserProfile(userId), // Function to fetch data
        enabled: !!userId, // Only run the query if userId is truthy
        placeholderData: placeholderProfile, // Data to show initially
        // You could also use initialData for data that's considered "fresh"
        // initialData: placeholderProfile,
    });
};
