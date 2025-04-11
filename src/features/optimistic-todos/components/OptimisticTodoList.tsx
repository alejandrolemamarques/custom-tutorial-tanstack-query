import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, addTodo } from "../api/todosApi";
import { Todo } from "../types/todo";
import styles from "./OptimisticTodoList.module.css"; // Create this CSS module next
import { DescriptionBox } from "@/components/DescriptionBox/DescriptionBox";

const queryKey = ["todos"];

export const OptimisticTodoList = () => {
    const [newTodoText, setNewTodoText] = useState("");
    const queryClient = useQueryClient();

    // Query for fetching todos
    const {
        data: todos = [],
        status,
        error,
    } = useQuery<Todo[], Error>({
        queryKey,
        queryFn: fetchTodos,
    });

    // Mutation for adding todos with optimistic updates
    const addTodoMutation = useMutation<
        Todo,
        Error,
        string,
        { previousTodos?: Todo[] }
    >({
        mutationFn: addTodo,
        // When mutate is called:
        onMutate: async (text) => {
            // 1. Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries({ queryKey });

            // 2. Snapshot the previous value
            const previousTodos = queryClient.getQueryData<Todo[]>(queryKey);

            // 3. Optimistically update to the new value
            if (previousTodos) {
                const optimisticTodo: Todo = {
                    id: `optimistic-${Date.now()}`, // Temporary unique ID
                    text,
                    isOptimistic: true, // Flag for styling
                };
                queryClient.setQueryData<Todo[]>(queryKey, [
                    ...previousTodos,
                    optimisticTodo,
                ]);
            }

            // 4. Return context with the snapshot
            return { previousTodos };
        },
        // If the mutation fails, use the context we returned from onMutate to roll back
        onError: (err, newTodo, context) => {
            console.error("Mutation failed:", err.message);
            if (context?.previousTodos) {
                queryClient.setQueryData<Todo[]>(
                    queryKey,
                    context.previousTodos
                );
            }
        },
        // Always refetch after error or success (or invalidate)
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey });
        },
    });

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTodoText.trim()) {
            addTodoMutation.mutate(newTodoText);
            setNewTodoText("");
        }
    };

    return (
        <div className={styles.container}>
            {/* Description Column */}
            <div className={styles.descriptionColumn}>
                <DescriptionBox title="Optimistic Updates with useMutation">
                    <p>
                        Optimistic updates improve perceived performance by
                        updating the UI *before* the server confirms the change.
                        If the server update fails, the UI change is rolled
                        back.
                    </p>
                    <ul>
                        <li>
                            <code>onMutate</code>: Runs first when{" "}
                            <code>mutate()</code> is called.
                            <ul>
                                <li>
                                    We cancel ongoing queries for this data (
                                    <code>queryClient.cancelQueries</code>) to
                                    prevent conflicts.
                                </li>
                                <li>
                                    We snapshot the current data (
                                    <code>queryClient.getQueryData</code>).
                                </li>
                                <li>
                                    We manually update the cache with the new
                                    item marked as optimistic (
                                    <code>queryClient.setQueryData</code>).
                                </li>
                                <li>
                                    We return the snapshot in the context
                                    object.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <code>onError</code>: Runs if the{" "}
                            <code>mutationFn</code> (<code>addTodo</code>)
                            throws an error.
                            <ul>
                                <li>
                                    We use the{" "}
                                    <code>context.previousTodos</code> snapshot
                                    returned by <code>onMutate</code> to restore
                                    the cache to its pre-mutation state (
                                    <code>queryClient.setQueryData</code>).
                                </li>
                            </ul>
                        </li>
                        <li>
                            <code>onSettled</code>: Runs after the mutation
                            finishes (success or error).
                            <ul>
                                <li>
                                    We invalidate the query (
                                    <code>queryClient.invalidateQueries</code>)
                                    to ensure the UI eventually syncs with the
                                    true server state, correcting any optimistic
                                    discrepancies or confirming the success.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                        Try adding todos. Some will fail randomly (simulated API
                        error), demonstrating the rollback.
                    </p>
                </DescriptionBox>
            </div>

            {/* Example Column */}
            <div className={styles.exampleColumn}>
                <h1 className={styles.heading}>Optimistic Todo List</h1>

                <form onSubmit={handleAddTodo} className={styles.addForm}>
                    <input
                        type="text"
                        value={newTodoText}
                        onChange={(e) => setNewTodoText(e.target.value)}
                        placeholder="Add a new todo..."
                        className={styles.inputField}
                        disabled={addTodoMutation.isPending} // Disable while mutation is processing
                    />
                    <button
                        type="submit"
                        className={styles.button}
                        disabled={addTodoMutation.isPending}
                    >
                        {addTodoMutation.isPending ? "Adding..." : "Add Todo"}
                    </button>
                </form>

                {status === "pending" ? (
                    <p className={styles.loadingText}>Loading todos...</p>
                ) : status === "error" ? (
                    <p className={styles.errorText}>
                        Error fetching todos: {error.message}
                    </p>
                ) : (
                    <ul className={styles.todoList}>
                        {todos.map((todo) => (
                            <li
                                key={todo.id}
                                className={`${styles.todoItem} ${
                                    todo.isOptimistic ? styles.optimistic : ""
                                }`}
                            >
                                {todo.text} {todo.isOptimistic && "(Adding...)"}
                            </li>
                        ))}
                    </ul>
                )}
                {addTodoMutation.isError && (
                    <p className={styles.errorText}>
                        Failed to add todo: {addTodoMutation.error.message}
                    </p>
                )}
            </div>
        </div>
    );
};
