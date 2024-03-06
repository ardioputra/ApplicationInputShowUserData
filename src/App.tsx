import "./App.css";
import { Routes, Route } from "react-router-dom";
import DataUser from "./pages/datauser";
import Register from "./pages/register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DataUser />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
