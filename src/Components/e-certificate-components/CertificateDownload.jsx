import React, { useState } from "react";
import Logo from "../../Assets/img/logo.jpg";

const CertificateDownload = () => {
  const [searchName, setSearchName] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [certificates, setCertificates] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `/api/certificates?event=${selectedEvent}&name=${searchName}`
      );
      const data = await response.json();
      setCertificates(data);

      if (data.length === 0) {
        setErrorMessage("Sertifikat tidak ditemukan, periksa kembali nama");
      } else {
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Error searching certificates:", error);
      setErrorMessage("Terjadi kesalahan saat mencari sertifikat");
    }
  };

  const handleDownload = (name) => {
    // In a real scenario, you may want to fetch the download link from the server
    // For demonstration purposes, we'll just log the download action
    console.log("Downloading certificate for:", name);
  };

  return (
    <div>
      {/* ... (previous JSX code) */}

      {/* Logo */}
      <div style={{ textAlign: "center", marginTop: "10%" }}>
        <img src={Logo} alt="Logo" style={{ width: "30%" }} />
      </div>

      {/* Search Form */}
      <div style={{ textAlign: "center", marginTop: "10%" }}>
        <select
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
          style={{ width: "15%" }} // Set the width of the dropdown menu to 30%
        >
          <option value="">Events</option>
          <option value="som15th">SOM15th</option>
          <option value="event2">Event 2</option>
          <option value="event3">Event 3</option>
        </select>
      </div>

      {/* Search Form */}
      <div style={{ textAlign: "center", marginTop: "2%", marginBottom: "2%" }}>
        <input
          type="text"
          placeholder="Search name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button
          type="button"
          style={{
            backgroundColor: "#00345b",
            marginLeft: "3%",
            borderRadius: "20%",
            padding: "10px 20px",
            fontSize: "16px",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleSearch}>
          Search
        </button>
      </div>
      {/* ... (rest of the JSX code) */}
    </div>
  );

  {
    /* Error Message */
  }
  {
    errorMessage && (
      <div style={{ textAlign: "center", color: "red" }}>{errorMessage}</div>
    );
  }

  {
    /* Table */
  }
  <table>
    <thead>
      <tr>
        <th>Nama</th>
        <th>NIK</th>
        <th>Event</th>
        <th>Keterangan</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {certificates.map((certificate) => (
        <tr key={certificate.id}>
          <td>{certificate.name}</td>
          <td>{certificate.nik}</td>
          <td>{certificate.event}</td>
          <td>{certificate.description}</td>
          <td>
            <button
              type="button"
              onClick={() => handleDownload(certificate.name)}>
              Download
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>;
};

export default CertificateDownload;
