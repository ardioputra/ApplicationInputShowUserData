import "./App.css";
import { Router, Route } from "react-router-dom";
import DataUser from "./pages/datauser";
import Register from "./pages/register";

function App() {
  return (
    <Router>
      <Route path="/" element={<DataUser />} />
      <Route path="/register" element={<Register />} />
    </Router>
  );
}

export default App;
