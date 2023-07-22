import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import axios from "axios";

const CertificateSearch = () => {
  const [searchName, setSearchName] = useState("");
  const [certificates, setCertificates] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`/api/certificates?name=${searchName}`);
      setCertificates(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = (certificate) => {
    // Implement download logic here
    console.log(`Downloading certificate for ${certificate.name}`);
  };

  return (
    <div>
      <h1>Certificate Search</h1>
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="searchName">
          <Form.Control
            type="text"
            placeholder="Search name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ backgroundColor: "#00345b" }}>
          Search
        </Button>
      </Form>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((certificate) => (
            <tr key={certificate.id}>
              <td>{certificate.name}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => handleDownload(certificate)}>
                  Download
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CertificateSearch;
