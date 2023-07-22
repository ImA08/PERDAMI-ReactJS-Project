const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/certificates", (req, res) => {
  // Implement certificate search logic here
  const { name } = req.query;
  const certificates = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "David Johnson" },
    // ...
  ];
  const filteredCertificates = certificates.filter((certificate) =>
    certificate.name.toLowerCase().includes(name.toLowerCase())
  );
  res.json(filteredCertificates);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
