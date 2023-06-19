import React from "react";

const ModalGalleryComponent = ({ imageId, src }) => {
  return (
    <>
      <div
        className="modal fade"
        id={imageId}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <img className="img-fluid" src={src} alt="" />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalGalleryComponent;
