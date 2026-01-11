import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Khushi from "./pages/Khushi";
import Nikhil from "./pages/Nikhil";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/khushi" element={<Khushi />} />
      <Route path="/nikhil" element={<Nikhil />} />
    </Routes>
  );
}

export default App;
