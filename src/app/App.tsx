import NavBar from "@/components/NavBar/NavBar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Starships from "./pages/Starships/Starships";

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<Starships />} />
      </Routes>
    </Router>
  )
}

export default App
