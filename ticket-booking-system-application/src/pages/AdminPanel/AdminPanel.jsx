import React, { useState } from "react";
import { EditModal, Footer, Navbar } from "../../components";
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
  
  const [editEventData, setEditEventData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

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
    // Add new event to events array
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

  // Function to delete an event
  const deleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  };

  const handleEdit = (event) => {
    setEditEventData(event);
    setShowEditModal(true); // Set state to show the edit modal
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditEventData({
      ...editEventData,
      [name]: value,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Update the event in the events array
    const updatedEvents = events.map((event) =>
      event.id === editEventData.id ? editEventData : event
    );
    setEvents(updatedEvents);
    // Close the edit modal
    setShowEditModal(false);
    // Clear editEventData state
    setEditEventData(null);
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
                <div className="table-responsive">
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
                          <td>
                            Kshs.
                            {event.ticketPrice ? event.ticketPrice.VIP : "-"}
                          </td>
                          <td>
                            Kshs.
                            {event.ticketPrice
                              ? event.ticketPrice.regular
                              : "-"}
                          </td>

                          <td>{event.maxAttendees}</td>
                          <td>
                            <button
                              className="btn btn-warning me-2"
                              onClick={() => handleEdit(event)}
                            >
                              <FontAwesomeIcon icon={faEdit} /> Edit
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => deleteEvent(event.id)}
                            >
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
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Event
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Event Name</label>
                  <input
                    type="text"
                    className="form-control"
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
                    className="form-control"
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
                    className="form-control"
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
                    className="form-control"
                    name="maxAttendees"
                    value={newEventData.maxAttendees}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Event
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for editing  */}
      <EditModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        eventData={editEventData}
        handleInputChange={handleEditInputChange}
        handleSubmit={handleEditSubmit}
      />
      <Footer />
    </div>
  );
};

export default AdminPanel;
