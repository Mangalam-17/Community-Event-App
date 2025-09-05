import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client"; 
import { useState, useEffect } from "react";

const EventListPage = () => (
  <div className="p-8 text-center">
    <h1 className="text-3xl font-bold mb-4">Event List</h1>
    <p>This is the Event List page.</p>
  </div>
);

const EventDetailPage = () => (
  <div className="p-8 text-center">
    <h1 className="text-3xl font-bold mb-4">Event Detail</h1>
    <p>This is the Event Detail page.</p>
  </div>
);

const CreateEventPage = () => (
  <div className="p-8 text-center">
    <h1 className="text-3xl font-bold mb-4">Create Event</h1>
    <p>This is the Create Event page.</p>
  </div>
);

const RsvpConfirmationPage = () => (
  <div className="p-8 text-center">
    <h1 className="text-3xl font-bold mb-4">RSVP Confirmation</h1>
    <p>This is the RSVP Confirmation page.</p>
  </div>
);

const styles = `
.App {
  font-family: sans-serif;
  text-align: center;
  padding: 20px;
}
`;
