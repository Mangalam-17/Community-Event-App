import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import eventsData from "../data/events.json";

function EventDetailPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const event = eventsData.events.find((e) => e.id === parseInt(id));

  if (!event) {
    return <div className="event-detail-page">Event not found!</div>;
  }

  const handleRsvp = () => {
    navigate("/rsvp-confirm");
  };

  return (
    <div className="event-detail-page">
      <button onClick={() => window.history.back()}>
        &larr; Back to Events
      </button>
      <h2>{event.title}</h2>
      <p>
        <strong>Type:</strong> {event.type}
      </p>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <p>
        <strong>Host:</strong> {event.host}
      </p>
      <p className="description">{event.description}</p>
      <button onClick={handleRsvp} className="rsvp-button">
        RSVP / Join Event
      </button>
    </div>
  );
}

export default EventDetailPage;
