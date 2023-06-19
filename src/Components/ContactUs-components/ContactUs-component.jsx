import React from "react";
// import "../../Css/contact-us.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./Content-option";
import ContactForm from "./ContactForm";

const ContactUsComponent = () => {
  return (
    <Container className="starting-point">
      <Row className="mb-5 mt-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Us</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4">Get in touch</h3>
          <address>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a>
            <br />
            <br />
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <p>{contactConfig.description}</p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsComponent;
