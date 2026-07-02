import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetChEvents = async () => {
      const res = await fetch(`http://localhost:3001/api/events`);
      const data = await res.json();
      setEvents(data.results);
    };
    fetChEvents();
  }, []);

  return (
    <div>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <Link to={`/event/${event.id}`}>
              <span> {event.title} </span>
              <br />
              <span> {event.description} </span>
              <br />
              <span> {event.date} </span>
              <br />
              <span> {event.location} </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
