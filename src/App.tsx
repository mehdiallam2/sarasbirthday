import { BrowserRouter, Routes, Route } from "react-router-dom";
import Birthday from "./Birthday";
import Wish from "./Wish";
import Snowfall from "react-snowfall";
import "./App.css";
import Secret from "./Secret";

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
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={<Birthday name="Sara" day={25} month={2} />}
          />
          <Route path="/wish" element={<Wish name="Sara" />} />
          <Route path="/secret" element={<Secret />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
