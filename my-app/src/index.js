import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import reduxStore from "./redux/store";

createRoot(document.getElementById('root')).render(<Provider store={reduxStore}>
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
</Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
