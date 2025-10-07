import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "leaflet/dist/leaflet.css"; 
import "./index.css"; 
import "./i18n"; 
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <BrowserRouter>
      <ThemeProvider>  
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
