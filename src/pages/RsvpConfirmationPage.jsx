import React from "react";
import { Link } from "react-router-dom";

function RsvpConfirmationPage() {
  return (
    <div className="rsvp-confirmation-page">
      <h2>RSVP Confirmed!</h2>
      <p>You have successfully registered for the event.</p>
      <p>We'll see you there!</p>
      <Link to="/" className="back-home-button">
        Back to Home
      </Link>
    </div>
  );
}

export default RsvpConfirmationPage;
