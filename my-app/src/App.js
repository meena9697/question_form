import React from "react";
import { ToastContainer } from "react-toastify";

import QuestionDetails from "./components/QuestionDetail/QuestionDetails";
import ManageQuestions from "./components/ManageQuestions/ManageQuestions";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <ManageQuestions/>
      <QuestionDetails/>
    </div>
  );
}

export default App;
