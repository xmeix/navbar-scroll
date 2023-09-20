import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Route1 from "./components/Routes/Route1";
import Route2 from "./components/Routes/Route2";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Route1 />} />
        <Route path="/route2" element={<Route2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
