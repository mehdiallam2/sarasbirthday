import { Route, Routes } from "react-router-dom";
import Snowfall from "react-snowfall";
import Home from "./pages/Home";
import Wish from "./pages/Wish";
import Secret from "./pages/Secret";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Snowfall
        snowflakeCount={200}
        speed={[0, 0.5]}
        wind={[0, 0.5]}
        radius={[0.5, 2]}
        color="#fff"
      />
      <Routes>
        <Route path="/" element={<Home name="Sara" month={2} day={25} />} />
        <Route path="/wish" element={<Wish name="Sara" />} />
        <Route path="/secret" element={<Secret />} />
      </Routes>
    </div>
  );
}

export default App;
