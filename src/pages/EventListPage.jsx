import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";
import { EventContext } from "../context/EventContext";

function EventListPage() {
  const { events } = useContext(EventContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterLocation, setFilterLocation] = useState("All");
  const [filterDate, setFilterDate] = useState("");

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.host.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = filterType === "All" || event.type === filterType;

    const matchesLocation =
      filterLocation === "All" || event.location === filterLocation;

    const matchesDate = filterDate === "" || event.date === filterDate;

    return matchesSearch && matchesType && matchesLocation && matchesDate;
  });

  return (
    <div className="event-list-page">
      <h2>Explore Upcoming Events</h2>

      <Link to="/create-event" className="create-event-button">
        Host a New Event
      </Link>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Search for a particular event or host"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          onChange={(e) => setFilterType(e.target.value)}
          value={filterType}
        >
          <option value="All">Select Event Type</option>
          <option value="Fitness">Fitness</option>
          <option value="Music">Music</option>
          <option value="Meetup">Meetup</option>
          <option value="Workshop">Workshop</option>
          <option value="Sports">Sports</option>
          <option value="Social">Social</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <select
          onChange={(e) => setFilterLocation(e.target.value)}
          value={filterLocation}
        >
          <option value="All">Select Locations</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Pune">Pune</option>
          <option value="Chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Goa">Goa</option>
          <option value="Rishikesh">Rishikesh</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Kochi">Kochi</option>
        </select>

        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>

      <div className="event-list">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventListPage;
