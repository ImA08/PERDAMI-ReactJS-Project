import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Mengirim email
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Logika pengiriman email ke alamat tujuan
    const mailtoLink = `mailto:perdamisumbar2023@gmail.com?subject=New%20Contact%20Form%20Submission&body=Name:%20${name}%0D%0AEmail:%20${email}%0D%0AMessage:%20${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <form className="contact__form w-100" onSubmit={handleSubmit}>
      <Row>
        <Col lg="6" className="form-group">
          <input
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            required
          />
        </Col>
        <Col lg="6" className="form-group">
          <input
            className="form-control rounded-0"
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            required
          />
        </Col>
      </Row>
      <textarea
        className="form-control rounded-0"
        id="message"
        name="message"
        placeholder="Message"
        rows="5"
        required></textarea>
      <br />
      <Row>
        <Col lg="12" className="form-group">
          <button className="btn btn-primary" type="submit">
            KIRIM
            <i
              className="fa-solid fa-paper-plane-top"
              style={{ color: "#0000ff" }}></i>
          </button>
        </Col>
      </Row>
    </form>
  );
};

export default ContactForm;
