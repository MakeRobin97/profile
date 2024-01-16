import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import GlobalFonts from "./styles/fonts/fonts";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HelmetProvider>
      <GlobalFonts />
        <App />
    </HelmetProvider>
);
reportWebVitals();
