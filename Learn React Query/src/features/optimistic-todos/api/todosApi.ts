import { Todo } from "../types/todo";

// Simulate a server-side data store
const todos: Todo[] = [
    { id: 1, text: "Learn Tanstack Query basics" },
    { id: 2, text: "Implement mutations" },
    { id: 3, text: "Explore pagination" },
];
let nextId = 4;

// Simulate fetching todos
export const fetchTodos = async (): Promise<Todo[]> => {
    console.log("API: Fetching todos...");
    await new Promise((resolve) => setTimeout(resolve, 600)); // Simulate delay
    console.log("API: Todos fetched:", todos);
    return [...todos]; // Return a copy
};

// Simulate adding a todo (might fail)
export const addTodo = async (newTodoText: string): Promise<Todo> => {
    console.log(`API: Attempting to add todo: "${newTodoText}"`);
    await new Promise((resolve) => setTimeout(resolve, 700)); // Simulate delay

    // Simulate potential failure (e.g., 25% chance)
    if (Math.random() < 0.25) {
        console.error("API: Failed to add todo!");
        throw new Error("Simulated server error: Could not add todo.");
    }

    const newTodo: Todo = { id: nextId++, text: newTodoText };
    todos.push(newTodo);
    console.log("API: Todo added successfully:", newTodo);
    console.log("API: Current todos:", todos);
    return newTodo;
};
