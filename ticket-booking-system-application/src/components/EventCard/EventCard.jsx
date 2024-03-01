import React, { useState } from "react";

const EventCard = ({ event }) => {
  const [vipTickets, setVIPTickets] = useState(0);
  const [regularTickets, setRegularTickets] = useState(0);
  const [reservationError, setReservationError] = useState("");

  const handleReservation = () => {
    const totalTickets = vipTickets + regularTickets;
    if (totalTickets === 0) {
      setReservationError("Please select at least one ticket to reserve.");
    } else if (totalTickets > 5) {
      setReservationError("You can reserve up to 5 tickets only.");
    } else {
      // Logic for handling reservation
      console.log("Reserved VIP Tickets:", vipTickets);
      console.log("Reserved Regular Tickets:", regularTickets);
      // Clear ticket counts and any error messages
      setVIPTickets(0);
      setRegularTickets(0);
      setReservationError("");
      // You can add further logic here, such as triggering email notification
    }
  };

  return (
    <div className="card">
      <img
        src={event.image}
        class="card-img-top img-fluid "
        alt="..."
        style={{ height: "25rem" }}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{event.eventName}</h5>
        <p className="card-text">Date: {event.date}</p>
        <p className="card-text">Time: {event.time}</p>
        <p className="card-text">Location: {event.location}</p>
        <p className="card-text">Max Attendees: {event.maxAttendees}</p>
        <p className="card-text">Ticket Price (VIP): ${event.ticketPriceVIP}</p>
        <p className="card-text">
          Ticket Price (Regular): ${event.ticketPriceRegular}
        </p>
        <div className="mb-3">
          <label htmlFor="vipTickets" className="form-label">
            Number of VIP Tickets:
          </label>
          <input
            type="number"
            className="form-control shadow-none "
            id="vipTickets"
            value={vipTickets}
            onChange={(e) => setVIPTickets(parseInt(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="regularTickets" className="form-label">
            Number of Regular Tickets:
          </label>
          <input
            type="number"
            className="form-control shadow-none "
            id="regularTickets"
            value={regularTickets}
            onChange={(e) => setRegularTickets(parseInt(e.target.value))}
          />
        </div>
        {reservationError && (
          <div className="alert alert-danger">{reservationError}</div>
        )}
        <button className="btn btn-primary" onClick={handleReservation}>
          Reserve Tickets
        </button>
      </div>
    </div>
  );
};

export default EventCard;
