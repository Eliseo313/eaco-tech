import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Policies from "./Components/Policies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
    </Router>
  );
}

export default App;
