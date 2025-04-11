import React from "react";

// Define the structure for a guide step (can be shared or re-defined)
interface GuideStep {
    stepNumber: number;
    title: string;
    description: React.ReactNode;
    codeSnippet: string;
}

export const step2Data: GuideStep = {
    stepNumber: 2,
    title: "Queries vs. Mutations",
    description: (
        <>
            <p>
                Tanstack Query primarily deals with two types of asynchronous
                operations concerning server state: <strong>Queries</strong> and{" "}
                <strong>Mutations</strong>.
            </p>
            <ul>
                <li>
                    <strong>Queries (Reading Data):</strong> Queries are used
                    for fetching, caching, and synchronizing data from the
                    server. Think of them as any <strong>GET</strong> request in
                    REST terms. They are declarative and automatically handle
                    background updates, refetching, and caching based on query
                    keys.
                    <ul>
                        <li>
                            Key hook: <code>useQuery</code> (and{" "}
                            <code>useInfiniteQuery</code>).
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Mutations (Writing/Updating Data):</strong>{" "}
                    Mutations are used for creating, updating, or deleting data
                    on the server. Think of them as{" "}
                    <strong>POST, PUT, PATCH, DELETE</strong> requests. They are
                    typically imperative (triggered by user actions) and often
                    result in side effects, like invalidating related query data
                    to trigger refetches.
                    <ul>
                        <li>
                            Key hook: <code>useMutation</code>.
                        </li>
                    </ul>
                </li>
            </ul>
            <p>
                Understanding this distinction is fundamental. Queries are about
                reading and caching existing state, while Mutations are about
                changing that state on the server.
            </p>
        </>
    ),
    codeSnippet: `// Example usage distinction:

// Fetching data (Query)
const { data } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

// Creating data (Mutation)
const mutation = useMutation({ mutationFn: createPost });

// Trigger mutation on button click
<button onClick={() => mutation.mutate({ title: "New Post" })}>Create</button>
`,
};
