import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ProductList = () => {
  const [events, setEvents] = useState({});
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const res = await axios.get(
        "https://psna-13ca5-default-rtdb.firebaseio.com/events.json"
      );
      setEvents(res?.data);
      setIsLoad(false);
    } catch (err) {
      console.log(err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });

    return `${day}\n${month}`;
  };

  const EventComponent = ({ event }) => {
    const formattedDate = formatDate(event.date);
    return (
      <EventCard>
        <EventDate>Event Date: {formattedDate}</EventDate>
        <EventDetails>
          <h2>{event.title}</h2>
          <p>Location: {event.location}</p>
        </EventDetails>
      </EventCard>
    );
  };

  return (
    <ProductListContainer>
      {isLoad ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1 className="page-title">Events</h1>
          <EventList>
            {events &&
              Object.values(events).map((event) => (
                <EventComponent key={event.title} event={event} />
              ))}
          </EventList>
        </div>
      )}
    </ProductListContainer>
  );
};

export default ProductList;

const ProductListContainer = styled.div`
  padding: 20px;
`;

const EventList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const EventCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  width: calc(33.33% - 20px);
  box-sizing: border-box;
`;

const EventDate = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const EventDetails = styled.div``;
