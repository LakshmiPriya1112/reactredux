import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="p-4">
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
