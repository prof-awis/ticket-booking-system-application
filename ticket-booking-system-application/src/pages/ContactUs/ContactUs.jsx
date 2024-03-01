import React from "react";
import { Footer, Navbar } from "../../components";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="container px-2 pb-5 ">
        <h1 className="text-center ">Contact Us</h1>
        <h6 className="text-center ">Let Us Work Together</h6>
        <p className="text-center font-monospace ">
          If you have any questions, feedback, or inquiries, we're here to help.
        </p>
        <div className="row py-5 px-3">
          <div className="col-md-6">
            <div className="card  ">
              <div className="card-body">
                <h5 className="card-title">Get in Touch</h5>
                <p className="card-text">
                  If you have any questions, feedback, or inquiries, please feel
                  free to get in touch with us. We are always here to assist
                  you.
                </p>
                <p className="card-text">
                  You can reach out to us via email or give us a call. Our team
                  will respond to your message as soon as possible.
                </p>
                <p className="card-text">
                  We look forward to hearing from you!
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Contact Email:</strong> info@eventiz.com
                  </li>
                  <li className="list-group-item">
                    <strong>Phone:</strong> +1234567890
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.716199713216!2d36.82194631432346!3d-1.292066058890109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10403ff7779b%3A0x9baf45b48723e2ba!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1645641608910!5m2!1sen!2s"
              width="100%"
              height="300"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
