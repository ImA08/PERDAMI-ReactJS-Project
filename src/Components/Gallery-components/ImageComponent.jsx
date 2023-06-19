import React from "react";

const ImageComponent = ({ src, dataName, dataBsTarget }) => {
  return (
    <div className="image col-lg-3 col-md-4 col-6" data-name={dataName}>
      <a
        href="#"
        className="d-block mb-4 h-100"
        data-bs-toggle="modal"
        data-bs-target={dataBsTarget}>
        <img className="img-fluid img-thumbnail" src={src} alt="Gallery" />
      </a>
    </div>
  );
};

export default ImageComponent;
