import React from "react";
import { Link } from "react-router-dom";
import { EventCard, Footer, Navbar } from "../../components";
import dining from "../../assets/images/dining.jpg";
import nature from "../../assets/images/nature.jpg";
import eatery from "../../assets/images/eatery.jpg";
import music from "../../assets/images/music.jpg";

const Dashboard = () => {
  // Dummy event data
  const events = [
    {
      id: 1,
      image: dining,
      eventName: "Dining Event",
      date: "2024-03-10",
      time: "18:00",
      location: "Rustic Haven",
      maxAttendees: 100,
      ticketPriceVIP: 50,
      ticketPriceRegular: 30,
    },
    {
      id: 2,
      image: nature,
      eventName: "Nature Event",
      date: "2024-03-15",
      time: "20:00",
      location: "Oloolua Nature Trail",
      maxAttendees: 50,
      ticketPriceVIP: 60,
      ticketPriceRegular: 40,
    },
    {
      id: 3,
      image: eatery,
      eventName: "Seminar",
      date: "2024-04-05",
      time: "09:00",
      location: "Sarova Stanley",
      maxAttendees: 80,
      ticketPriceVIP: 75,
      ticketPriceRegular: 45,
    },
    {
      id: 4,
      image: dining,
      eventName: "Workshop",
      date: "2024-04-20",
      time: "14:00",
      location: "Swiss Lenana Mount Hotel",
      maxAttendees: 60,
      ticketPriceVIP: 55,
      ticketPriceRegular: 35,
    },
    {
      id: 5,
      image: music,
      eventName: "Exhibition",
      date: "2024-05-10",
      time: "10:00",
      location: "Kenyatta International Convention Centre",
      maxAttendees: 120,
      ticketPriceVIP: 80,
      ticketPriceRegular: 50,
    },
  ];

  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      <section className="hero text-center">
        <div className="container">
          <h1 className="mb-2">Welcome to Eventiz</h1>
          <h6>Your one-stop destination for event ticket booking</h6>
          <p className="font-monospace ">
            Book tickets for various events with ease, view upcoming events and
            manage reservations
          </p>
        </div>
      </section>

      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {events.map((event) => (
            <div key={event.id} className="col">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
