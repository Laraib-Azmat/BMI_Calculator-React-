import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import CalculatePage from "./Components/CalculatePage/CalculatePage";
import Result from "./Components/ResultPage/Result";
import NotFound from "./Components/PageNotFound/NotFound";

import "./App.css";
import { useState } from "react";

function App() {
  const [selectedGender, setSelectedGender] = useState("male");
  const [result, setResult] = useState();

  function calculatedValues(gender, result) {
    setResult(result);
    setSelectedGender(gender);
  }
  
  return (
    <Routes>
      <Route path="/" exact element={<Navigate to={"/Home"} />} />
      <Route path="/Home" element={<HomePage />} />
      <Route
        path="/Calculate/*"
        element={<CalculatePage storeResult={calculatedValues} />}
      />
      <Route
        path="/Calculate/result"
        element={<Result gender={selectedGender} result={result} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
