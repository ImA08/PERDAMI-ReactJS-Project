import React from "react";
// import "../../Css/contact-us.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./Content-option";
import ContactForm from "./ContactForm";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const ContactUsComponent = () => {
  const position = [-0.932056, 100.371346]; // Koordinat latitude dan longitude peta

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
          <p>
            Perumahan Pondok Indah Pratama Blok B/4 Jati Gaung <br />
            Kec. Padang Timur, Kota Padang
          </p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <ContactForm />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          {/* Peta */}
          {/* <div
            style={{ height: "30%", width: "50%", border: "1px solid black" }}>
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  Perumahan Pondok Indah Pratama Blok B/4 Jati Gaung <br />
                  Kec. Padang Timur, Kota Padang
                </Popup>
              </Marker>
            </MapContainer>
          </div> */}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249.3306530489547!2d100.37116818145155!3d-0.9320302125579752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1690537635466!5m2!1sid!2sid"
            style={{
              margin: "20px 0",
              height: "350px",
              width: "100%",
              border: "1px solid black",
            }}></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsComponent;
