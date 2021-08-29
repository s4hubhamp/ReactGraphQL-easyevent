import React from "react";

import EventItem from "./EventItem/EventItem";
import "./EventList.css";

const eventList = (props) => {
  if (props.events.length === 0)
    return (
      <div style={{ textAlign: "center", color: "grey", paddingTop: "1rem" }}>
        <h2>no events added.</h2>
      </div>
    );

  const events = props.events.map((event) => {
    return (
      <EventItem
        key={event._id}
        eventId={event._id}
        title={event.title}
        price={event.price}
        date={event.date}
        userId={props.authUserId}
        creatorId={event.creator._id}
        onDetail={props.onViewDetail}
      />
    );
  });

  return <ul className="event__list">{events}</ul>;
};

export default eventList;
