import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Css/main.css";
import PageNotFound from "./Pages/Page-not-found";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import StrukturOrganisasi from "./Components/Struktur-organisasi/StrukturOrganisasi-component";
import Som15th from "./Components/Events-components/som15th";
import Pelantikan from "./Pages/Events/Pelantikan";
import Rakernas from "./Pages/Events/Rakernas/Rakernas";
import Gallery from "./Pages/Gallery";
import FamilyGathering from "./Pages/Events/FamilyGathering";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/StrukturOrganisasi" element={<StrukturOrganisasi />} />
        <Route path="/Som15th" element={<Som15th />} />
        {/* <Route path="/Pelantikan" element={<Pelantikan />} /> */}
        <Route path="/Rakernas" element={<Rakernas />} />
        <Route path="/FamilyGathering" element={<FamilyGathering />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
