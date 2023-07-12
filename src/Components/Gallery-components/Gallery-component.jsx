import React from "react";
import "../../Css/gallery.css";
import ImageComponent from "./ImageComponent";
import ModalGalleryComponent from "./ModalGalleryComponent";
import FilterComponent from "./galleri";
import galleri1 from "../../Assets/gallery/som15th/gallery1.jpg";
import galleri2 from "../../Assets/gallery/som15th/gallery2.jpg";
import galleri3 from "../../Assets/gallery/som15th/gallery3.jpg";
import galleri4 from "../../Assets/gallery/som15th/gallery4.jpg";

const GalleryComponent = () => {
  return (
    <>
      <section className="starting-point gallery-som15">
        <div className="container">
          <h1 className="fw-light text-center text-lg-start mt-4 mb-0">
            Thumbnail Gallery
          </h1>
          <hr className="mt-2 mb-5" />
          <div className="items btns-group">
            <button
              type="button"
              className="item buttons btn btn-outline-primary btn-lg active"
              data-name="all">
              All
            </button>
            <button
              type="button"
              className="item buttons btn btn-outline-primary btn-lg"
              data-name="som15th">
              SOM15th
            </button>
            <button
              type="button"
              className="item buttons btn btn-outline-primary btn-lg"
              data-name="pelantikan">
              Pelantikan
            </button>
            <button
              type="button"
              className="item buttons btn btn-outline-primary btn-lg"
              data-name="fam-gath">
              Family Gathering
            </button>
          </div>

          <div className="row text-center text-lg-start">
            {/* <!-- som15th --> */}
            <ImageComponent
              src={galleri1}
              dataName="som15th"
              dataBsTarget="#gambar1-1"
            />

            <ImageComponent
              src={galleri2}
              dataName="som15th"
              dataBsTarget="#gambar1-2"
            />

            <ImageComponent
              src={galleri3}
              dataName="som15th"
              dataBsTarget="#gambar1-3"
            />

            <ImageComponent
              src={galleri4}
              dataName="som15th"
              dataBsTarget="#gambar1-4"
            />

            {/* <!-- pelantikan --> */}

            {/* <!-- family-gathering --> */}
          </div>

          {/* <!-- Modal gambar 1 --> */}
          <ModalGalleryComponent imageId="gambar1-1" src={galleri1} />
          <ModalGalleryComponent imageId="gambar1-2" src={galleri2} />
          <ModalGalleryComponent imageId="gambar1-3" src={galleri3} />
          <ModalGalleryComponent imageId="gambar1-4" src={galleri4} />
          <FilterComponent />
        </div>
      </section>
    </>
  );
};

export default GalleryComponent;
