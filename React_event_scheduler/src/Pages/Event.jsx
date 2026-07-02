import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Event = () => {
  const { id } = useParams();

  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetch(`http://localhost:3001/api/events/${id}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error('server error');
      }
      setEvent(data);
    };
    fetchEvent();
  }, []);

  return (
    <div>
      <span> {event.title} </span>
      <br />
      <span> {event.description} </span>
      <br />
      <span> {event.date} </span>
      <br />
      <span> {event.title} </span>
    </div>
  );
};

export default Event;
