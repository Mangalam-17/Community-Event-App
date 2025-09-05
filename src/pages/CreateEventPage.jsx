import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../context/EventContext";

function CreateEventPage() {
  const { addEvent } = useContext(EventContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    type: "Workshop",
    date: "",
    location: "",
    host: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.title.trim()) {
      validationErrors.title = "Title is required.";
    }
    if (!formData.date.trim()) {
      validationErrors.date = "Date is required.";
    }
    if (!formData.location.trim()) {
      validationErrors.location = "Location is required.";
    }
    if (!formData.host.trim()) {
      validationErrors.host = "Host name is required.";
    }
    if (!formData.description.trim()) {
      validationErrors.description = "Description is required.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addEvent(formData);

    navigate("/");
  };

  return (
    <div className="create-event-page">
      <h2>Host a New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Event Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          {errors.title && (
            <span className="error-message">{errors.title}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="host">Host Name</label>
          <input
            type="text"
            id="host"
            name="host"
            value={formData.host}
            onChange={handleInputChange}
          />
          {errors.host && <span className="error-message">{errors.host}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="type">Event Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          >
            <option value="Workshop">Workshop</option>
            <option value="Fitness">Fitness</option>
            <option value="Music">Music</option>
            <option value="Meetup">Meetup</option>
            <option value="Sports">Sports</option>
            <option value="Social">Social</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
          {errors.date && <span className="error-message">{errors.date}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
          {errors.location && (
            <span className="error-message">{errors.location}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
          {errors.description && (
            <span className="error-message">{errors.description}</span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Create Event
        </button>
      </form>
    </div>
  );
}

export default CreateEventPage;
