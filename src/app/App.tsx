import { Suspense, lazy } from "react";
import NavBar from "@/components/NavBar/NavBar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// --- Code Splitting with React.lazy ---
// By using React.lazy and dynamic import(), we tell Vite to split the code
// for each of these components into separate JavaScript chunks.
// This significantly reduces the initial bundle size, leading to faster
// first page loads.
// The user only downloads the code for the specific page they visit initially.
//
// Vite automatically adds <link rel="modulepreload"> hints for these lazy chunks
// in the generated index.html. This tells the browser to start downloading
// the code for other pages in the background *after* the initial page is loaded,
// making subsequent navigations faster as the code might already be cached.
// ----------------------------------------

// Dynamically import page/feature components
const Home = lazy(() => import("./pages/Home/Home"));
const BasicQueryExample = lazy(() =>
    import("@/features/react-query-basics/components/BasicQueryExample").then(
        (module) => ({ default: module.BasicQueryExample })
    )
);
const PaginationExample = lazy(() =>
    import("@/features/pagination-example/components/PaginationExample").then(
        (module) => ({ default: module.PaginationExample })
    )
);
const InfiniteLoadingExample = lazy(() =>
    import(
        "@/features/infinite-loading-example/components/InfiniteLoadingExample"
    ).then((module) => ({ default: module.InfiniteLoadingExample }))
);
const OptimisticTodoList = lazy(() =>
    import("@/features/optimistic-todos/components/OptimisticTodoList").then(
        (module) => ({ default: module.OptimisticTodoList })
    )
);
const ReactQueryGuide = lazy(() =>
    import("@/features/react-query-guide/components/ReactQueryGuide").then(
        (module) => ({ default: module.ReactQueryGuide })
    )
);
const InitialDataExample = lazy(() =>
    import(
        "@/features/initial-data-example/components/InitialDataExample"
    ).then((module) => ({ default: module.InitialDataExample }))
);
const PrefetchingExample = lazy(() =>
    import("@/features/prefetching-example/components/PrefetchingExample").then(
        (module) => ({ default: module.PrefetchingExample })
    )
);
const OtherInfoPage = lazy(() =>
    import("@/features/other-info/components/OtherInfoPage").then((module) => ({
        default: module.OtherInfoPage,
    }))
);

const LoadingFallback = () => (
    <div
        style={{
            padding: "3rem",
            textAlign: "center",
            color: "white",
            fontSize: "1.2rem",
        }}
    >
        Loading Page...
    </div>
);

function App() {
    return (
        <Router>
            <NavBar />
            <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/guide" element={<ReactQueryGuide />} />
                    <Route
                        path="/basic-query"
                        element={<BasicQueryExample />}
                    />
                    <Route path="/pagination" element={<PaginationExample />} />
                    <Route
                        path="/infinite-loading"
                        element={<InfiniteLoadingExample />}
                    />
                    <Route
                        path="/optimistic-updates"
                        element={<OptimisticTodoList />}
                    />
                    <Route
                        path="/initial-data"
                        element={<InitialDataExample />}
                    />
                    <Route
                        path="/prefetching"
                        element={<PrefetchingExample />}
                    />
                    <Route path="/other-info" element={<OtherInfoPage />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
