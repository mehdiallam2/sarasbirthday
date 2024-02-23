import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wish from "./pages/Wish";
import Secret from "./pages/Secret";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home name="Sara" month={2} day={25} />} />
      <Route path="/wish" element={<Wish name="Sara" />} />
      <Route path="/secret" element={<Secret />} />
    </Routes>
  );
}

export default App;
