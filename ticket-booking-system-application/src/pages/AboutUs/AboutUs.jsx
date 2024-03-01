import React from "react";
import nature from "../../assets/images/camera.jpg";
import { Footer, Navbar } from "../../components";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center mb-2">About Us</h1>
        <h6 className="text-center ">Why Choose Us</h6>
        <p className="text-center font-monospace ">
          Your premier destination for event ticket booking
        </p>
        <div className="row px-2 py-5 align-items-center">
          <div className="col-md-6 p-md-5">
            <img src={nature} alt="Company Image" className="img-fluid" />
          </div>
          <div className="col-md-6 text-center px-2">
            <p>
              Eventiz is your premier destination for event ticket booking. We
              are a team of dedicated professionals committed to delivering
              exceptional products and services to our customers.
            </p>
            <p>
              With years of industry experience, we have earned a reputation for
              excellence and reliability. Our mission is to provide innovative
              solutions that meet and exceed our clients' expectations.
            </p>
            <p>
              At Eventiz, we prioritize transparency, integrity, and
              accountability. We value our customers and strive to prioritize
              their satisfaction above all else. Thank you for choosing Eventiz
              as your trusted partner.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
