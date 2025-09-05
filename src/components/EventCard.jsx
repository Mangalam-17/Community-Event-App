import React from "react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <Link to={`/event/${event.id}`} className="event-card-link">
      <div className="event-card">
        <h3>{event.title}</h3>
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
      </div>
    </Link>
  );
}

export default EventCard;
