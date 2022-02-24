import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* Home (with search on) */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/searchpage" element={<SearchPage />}></Route>

          {/* Search Page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
