// Export the interface
export interface PaginatedData {
    items: string[];
    hasMore: boolean;
    totalItems: number;
}

// Simulate a larger dataset
const totalItems = 50;
const itemsPerPage = 10;

export const fetchPaginatedData = async (
    page: number = 1
): Promise<PaginatedData> => {
    console.log(`Fetching page: ${page}`);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 750));

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const items = Array.from(
        { length: totalItems },
        (_, i) => `Item ${i + 1}`
    ).slice(start, end);

    const hasMore = end < totalItems;

    return { items, hasMore, totalItems };
};
