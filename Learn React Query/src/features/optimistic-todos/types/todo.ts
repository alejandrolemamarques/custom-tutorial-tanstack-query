export interface Todo {
    id: number | string; // Allow string for temporary optimistic ID
    text: string;
    isOptimistic?: boolean; // Optional flag to style optimistic items
}
