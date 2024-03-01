import React, { useState } from "react";
import { Footer, Navbar } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const AdminPanel = () => {
  // Sample data for events
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Concert",
      ticketPrice: {
        VIP: 50,
        regular: 30,
      },
      maxAttendees: 100,
    },
    {
      id: 2,
      name: "Conference",
      ticketPrice: {
        VIP: 100,
        regular: 50,
      },
      maxAttendees: 50,
    },
  ]);

  // State for storing new event data
  const [newEventData, setNewEventData] = useState({
    name: "",
    ticketPriceVIP: 0,
    ticketPriceRegular: 0,
    maxAttendees: 0,
  });

  // Function to handle input changes in the modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEventData({
      ...newEventData,
      [name]: value,
    });
  };

  // Function to handle form submission in the modal
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new event to events array (you can implement backend logic here)
    const newEvent = {
      id: events.length + 1,
      ...newEventData,
    };
    setEvents([...events, newEvent]);

    // Clear form data
    setNewEventData({
      name: "",
      ticketPriceVIP: 0,
      ticketPriceRegular: 0,
      maxAttendees: 0,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Admin Panel</h1>
        <p className="text-center font-monospace ">
          Manage events and bookings efficiently
        </p>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Events</h5>
              </div>
              <div className="card-body">
                {/* Table displaying events */}
                <div className="table table-responsive ">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Ticket Price (VIP)</th>
                        <th>Ticket Price (Regular)</th>
                        <th>Max Attendees</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map((event) => (
                        <tr key={event.id}>
                          <td>{event.name}</td>
                          <td>${event.ticketPrice.VIP}</td>
                          <td>${event.ticketPrice.regular}</td>
                          <td>{event.maxAttendees}</td>
                          <td>
                            <button className="btn btn-warning me-2">
                              <FontAwesomeIcon icon={faEdit} /> Edit
                            </button>
                            <button className="btn btn-danger">
                              <FontAwesomeIcon icon={faTrash} /> Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer text-end">
                {/* Button to open modal */}
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <FontAwesomeIcon icon={faPlusCircle} /> Add Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for adding events */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Event
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                {/* Input fields for event details */}
                <div className="mb-3">
                  <label className="form-label">Event Name</label>
                  <input
                    type="text"
                    className="form-control shadow-none "
                    name="name"
                    value={newEventData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Ticket Price (VIP)</label>
                  <input
                    type="number"
                    className="form-control shadow-none "
                    name="ticketPriceVIP"
                    value={newEventData.ticketPriceVIP}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Ticket Price (Regular)</label>
                  <input
                    type="number"
                    className="form-control shadow-none "
                    name="ticketPriceRegular"
                    value={newEventData.ticketPriceRegular}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Max Attendees</label>
                  <input
                    type="number"
                    className="form-control shadow-none "
                    name="maxAttendees"
                    value={newEventData.maxAttendees}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button type="submit" class="btn btn-primary">
                  Add Event
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPanel;
