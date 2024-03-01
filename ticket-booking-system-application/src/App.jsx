import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import {
  AboutUs,
  AdminPanel,
  ContactUs,
  Dashboard,
  Login,
  Register,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
