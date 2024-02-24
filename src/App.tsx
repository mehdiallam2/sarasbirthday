import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home name="Sara" month={2} day={25} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
