import React from "react";
import { Modal, Button } from "react-bootstrap";

const EditModal = ({ show, handleClose, eventData, handleInputChange, handleSubmit }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Event Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={eventData ? eventData.name : ""}
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
              value={eventData ? eventData.ticketPrice.VIP : ""}
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
              value={eventData ? eventData.ticketPrice.regular : ""}
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
              value={eventData ? eventData.maxAttendees : ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
