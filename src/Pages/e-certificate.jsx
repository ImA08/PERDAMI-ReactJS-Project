import Navbar from "../Components/Navbar-components/Navbar";
import Footer from "../Components/Footer-components/Footer";
import CertificateSearch from "../Components/e-certificate-components/CertificateSearch";
import CertificateDownload from "../Components/e-certificate-components/CertificateDownload";

const E_Certificate = () => {
  return (
    <>
      <Navbar />
      {/* <CertificateSearch /> */}
      <CertificateDownload />
      <Footer />
    </>
  );
};

export default E_Certificate;
