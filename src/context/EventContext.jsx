import React, { createContext, useState } from "react";
import eventsData from "../data/events.json";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(eventsData.events);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [
      ...prevEvents,
      {
        ...newEvent,
        id: prevEvents.length + 1,
      },
    ]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};
