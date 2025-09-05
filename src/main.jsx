import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";

// Get the root element from the DOM
const container = document.getElementById("root");
const root = createRoot(container);

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
