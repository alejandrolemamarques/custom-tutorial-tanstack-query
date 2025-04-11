import NavBar from "@/components/NavBar/NavBar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { BasicQueryExample } from "@/features/react-query-basics/components/BasicQueryExample";
import { PaginationExample } from "@/features/pagination-example/components/PaginationExample";
import { InfiniteLoadingExample } from "@/features/infinite-loading-example/components/InfiniteLoadingExample";
import { OptimisticTodoList } from "@/features/optimistic-todos/components/OptimisticTodoList";
import { ReactQueryGuide } from "@/features/react-query-guide/components/ReactQueryGuide";
import { OtherInfoPage } from "@/features/other-info/components/OtherInfoPage";
import { InitialDataExample } from "@/features/initial-data-example/components/InitialDataExample";
import { PrefetchingExample } from "@/features/prefetching-example/components/PrefetchingExample";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/guide" element={<ReactQueryGuide />} />
                <Route path="/basic-query" element={<BasicQueryExample />} />
                <Route path="/pagination" element={<PaginationExample />} />
                <Route
                    path="/infinite-loading"
                    element={<InfiniteLoadingExample />}
                />
                <Route
                    path="/optimistic-updates"
                    element={<OptimisticTodoList />}
                />
                <Route path="/initial-data" element={<InitialDataExample />} />
                <Route path="/prefetching" element={<PrefetchingExample />} />
                <Route path="/other-info" element={<OtherInfoPage />} />
            </Routes>
        </Router>
    );
}

export default App;
