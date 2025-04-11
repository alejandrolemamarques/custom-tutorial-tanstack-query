export const fetchData = async (): Promise<string> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return "Hello from Tanstack Query!";
};

// Added function to simulate posting data
export const postData = async (
    newData: string
): Promise<{ success: boolean; message: string }> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("Simulating post with:", newData); // Simulate sending data
    // Simulate a successful response
    return { success: true, message: `Data '${newData}' posted successfully!` };
};
