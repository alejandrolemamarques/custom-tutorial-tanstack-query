interface InfiniteData {
    items: string[];
    nextPage: number | null; // The page number for the *next* fetch
    totalItems: number;
}

// Simulate a larger dataset
const totalItems = 45; // Make it not perfectly divisible by itemsPerPage for testing 'hasNextPage'
const itemsPerPage = 10;

export const fetchInfiniteData = async ({
    pageParam = 1,
}: {
    pageParam?: number;
}): Promise<InfiniteData> => {
    console.log(`Fetching infinite data - pageParam: ${pageParam}`);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 750));

    const start = (pageParam - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const items = Array.from(
        { length: totalItems },
        (_, i) => `Infinite Item ${i + 1}`
    ).slice(start, end);

    const nextPage = end < totalItems ? pageParam + 1 : null; // Determine the *next* page number

    return { items, nextPage, totalItems };
};
