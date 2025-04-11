import { UserProfile } from "../types/types";

// Simulate fetching data from an API
export const fetchUserProfile = async (
    userId: number
): Promise<UserProfile> => {
    console.log(`Fetching profile for user ${userId}...`);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real app, you would fetch from an endpoint:
    // const response = await fetch(`/api/users/${userId}`);
    // if (!response.ok) {
    //     throw new Error("Network response was not ok");
    // }
    // const data: UserProfile = await response.json();
    // return data;

    // Mock data
    const mockProfile: UserProfile = {
        id: userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`,
        bio: `This is the bio for user ${userId}. It contains some details about them.`,
    };

    console.log(`Fetched profile for user ${userId}:`, mockProfile);
    return mockProfile;
};
