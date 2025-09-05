import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx"; // App is imported as a named export
import { BrowserRouter } from "react-router-dom";
import { EventProvider } from "./context/EventContext.jsx";
import "./styles.css";

// This variable is necessary to handle the correct base path for GitHub Pages.
const basename = new URL(window.location.href).pathname
  .split("/")
  .slice(0, -1)
  .join("/");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <EventProvider>
        <App />
      </EventProvider>
    </BrowserRouter>
  </React.StrictMode>
);
