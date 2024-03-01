import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container-fluid bg-info  text-dark  py-5">
      <footer>
        <div className="row justify-content-center ">
          <div className="col-md-3">
            <h3>Eventiz Logo</h3>
          </div>
          <div className="col-md-3">
            <h4>About Us</h4>
            <p>
              Welcome to Eventiz - your premier destination for event ticket
              booking. As your one-stop solution, we offer seamless access to a
              wide range of events, making ticket booking easier than ever
              before. From concerts to conferences, we've got you covered.
            </p>
          </div>
          <div className="col-md-3">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Address: 123 Main Street, Nairobi, Kenya</li>
              <li>Email: info@eventiz.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Follow Us</h4>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="#" className="text-dark">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="text-dark">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="text-dark">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
