import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { ThemeProvider } from "./shared/ThemeProvider";
import "./index.css";
import "glider-js/glider.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider><App /></ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
