import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Card from "./pages/Card";
import PopUp from "./components/forms/PopUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/card" element={<Card />} />
        <Route path="/popup" element={<PopUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
