import React from "react";
import QuestionDetails from "./components/QuestionDetails";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<QuestionDetails />} />
      </Routes>
    </div>
  );
}

export default App;
