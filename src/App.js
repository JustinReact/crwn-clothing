import HomePage from "./pages/homepage/homepage.component";
import { Routes, Route } from "react-router-dom";

import "./App.css";

const HatsPage = () => (
  <div className="hats">
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
