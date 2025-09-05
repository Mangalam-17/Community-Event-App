import { Routes, Route } from "react-router-dom";
import EventListPage from "./pages/EventListPage";
import EventDetailPage from "./pages/EventDetailPage";
import CreateEventPage from "./pages/CreateEventPage";
import RsvpConfirmationPage from "./pages/RsvpConfirmationPage";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EventListPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/rsvp-confirm" element={<RsvpConfirmationPage />} />
      </Routes>
    </div>
  );
}

export default App;
