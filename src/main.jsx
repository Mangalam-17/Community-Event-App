import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// This is a placeholder for your EventProvider context.
// Replace this with your actual EventContext.jsx file content.
const EventContext = React.createContext();
export function EventProvider({ children }) {
  return <EventContext.Provider value={null}>{children}</EventContext.Provider>;
}

// These are placeholder components for your pages.
// Replace the content of each function with the code from your actual page files.
function EventListPage() {
  return <div>Event List Page - Replace with your code</div>;
}

function EventDetailPage() {
  return <div>Event Detail Page - Replace with your code</div>;
}

function CreateEventPage() {
  return <div>Create Event Page - Replace with your code</div>;
}

function RsvpConfirmationPage() {
  return <div>RSVP Confirmation Page - Replace with your code</div>;
}

// This is a placeholder for your styles.
// You will need to move your CSS from styles.css into this style tag.
const styles = `
  body {
    font-family: sans-serif;
  }
  .App {
    text-align: center;
    padding: 20px;
  }
`;

// This variable is necessary to handle the correct base path for GitHub Pages.
const basename = new URL(window.location.href).pathname
  .split("/")
  .slice(0, -1)
  .join("/");

function App() {
  return (
    <div className="App">
      <style>{styles}</style>
      <Routes>
        <Route path="/" element={<EventListPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/rsvp-confirm" element={<RsvpConfirmationPage />} />
      </Routes>
    </div>
  );
}

// The main rendering logic for the application.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <EventProvider>
        <App />
      </EventProvider>
    </BrowserRouter>
  </React.StrictMode>
);
