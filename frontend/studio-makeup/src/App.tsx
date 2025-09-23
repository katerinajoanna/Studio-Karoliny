import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPanel from "./admin/AdminPanel";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
