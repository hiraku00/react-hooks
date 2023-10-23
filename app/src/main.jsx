import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const hooksInfo = {
  name: "hooks",
  age: 30,
};

const HooksContext = createContext(hooksInfo);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HooksContext.Provider value={hooksInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HooksContext.Provider>
);

export default HooksContext;
