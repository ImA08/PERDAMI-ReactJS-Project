import React from "react";
import "../../Css/gallery.css";
import ImageComponent from "./ImageComponent";
import ModalGalleryComponent from "./ModalGalleryComponent";
import FilterComponent from "./galleri";
import galleri1 from "../../Assets/gallery/som15th/gallery1.jpg";
import galleri2 from "../../Assets/gallery/som15th/gallery2.jpg";
import galleri3 from "../../Assets/gallery/som15th/gallery3.jpg";
import galleri4 from "../../Assets/gallery/som15th/gallery4.jpg";
import galleri5 from "../../Assets/gallery/som15th/gallery5.jpg";
import galleri6 from "../../Assets/gallery/som15th/gallery6.jpg";
import galleri7 from "../../Assets/gallery/som15th/gallery7.jpg";
import galleri8 from "../../Assets/gallery/som15th/gallery8.jpg";
import galleri9 from "../../Assets/gallery/som15th/gallery9.jpg";
import galleri10 from "../../Assets/gallery/som15th/gallery10.jpg";
import galleri11 from "../../Assets/gallery/som15th/gallery11.jpg";
import galleri12 from "../../Assets/gallery/som15th/gallery12.jpg";
import galleri13 from "../../Assets/gallery/som15th/gallery13.jpg";
import galleri14 from "../../Assets/gallery/som15th/gallery14.jpg";
import galleri15 from "../../Assets/gallery/som15th/gallery15.jpg";
import galleri16 from "../../Assets/gallery/som15th/gallery16.jpg";
import galleri17 from "../../Assets/gallery/som15th/gallery17.jpg";
import galleri18 from "../../Assets/gallery/som15th/gallery18.jpg";
import galleri19 from "../../Assets/gallery/som15th/gallery19.jpg";
import galleri20 from "../../Assets/gallery/som15th/gallery20.jpg";
import galleri21 from "../../Assets/gallery/som15th/gallery21.jpg";

import pelantikan1 from "../../Assets/pelantikan/pelantikan1.jpg";
import pelantikan2 from "../../Assets/pelantikan/pelantikan2.jpg";
import pelantikan3 from "../../Assets/pelantikan/pelantikan3.jpg";
import pelantikan4 from "../../Assets/pelantikan/pelantikan4.jpg";
import pelantikan5 from "../../Assets/pelantikan/pelantikan5.jpg";
import pelantikan6 from "../../Assets/pelantikan/pelantikan6.jpg";
import pelantikan7 from "../../Assets/pelantikan/pelantikan7.jpg";
import pelantikan8 from "../../Assets/pelantikan/pelantikan8.jpg";
import pelantikan9 from "../../Assets/pelantikan/pelantikan9.jpg";

import Famgath1 from "../../Assets/FamGath/Fun-Bike1.jpg";
import Famgath2 from "../../Assets/FamGath/Fun-Bike2.jpg";
import Famgath3 from "../../Assets/FamGath/Fun-Bike3.jpg";
import Famgath4 from "../../Assets/FamGath/Fun-Bike4.jpg";
import Famgath5 from "../../Assets/FamGath/Fun-Bike5.jpg";
import Famgath6 from "../../Assets/FamGath/SenamPagi1.jpg";
import Famgath7 from "../../Assets/FamGath/SenamPagi2.jpg";
import Famgath8 from "../../Assets/FamGath/SenamPagi3.jpg";
import Famgath9 from "../../Assets/FamGath/SenamPagi4.jpg";
import Famgath10 from "../../Assets/FamGath/SenamPagi5.jpg";
import Famgath11 from "../../Assets/FamGath/SOM-Idol1.jpg";
import Famgath12 from "../../Assets/FamGath/SOM-Idol2.jpg";
import Famgath13 from "../../Assets/FamGath/SOM-Idol3.jpg";
import Famgath14 from "../../Assets/FamGath/SOM-Idol4.jpg";
import Famgath15 from "../../Assets/FamGath/SOM-Idol5.jpg";
import Famgath16 from "../../Assets/FamGath/StandKuliner1.jpg";
import Famgath17 from "../../Assets/FamGath/StandKuliner2.jpg";
import Famgath18 from "../../Assets/FamGath/StandKuliner3.jpg";
import Famgath19 from "../../Assets/FamGath/StandKuliner4.jpg";
import Famgath20 from "../../Assets/FamGath/StandKuliner5.jpg";

const GalleryComponent = () => {
  return (
    <>
      <section className="starting-point gallery-som15">
        <div className="container">
          <h1 className="fw-light text-center text-lg-start mt-4 mb-0">
            Gallery
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

            <ImageComponent
              src={galleri5}
              dataName="som15th"
              dataBsTarget="#gambar1-5"
            />

            <ImageComponent
              src={galleri6}
              dataName="som15th"
              dataBsTarget="#gambar1-6"
            />

            <ImageComponent
              src={galleri7}
              dataName="som15th"
              dataBsTarget="#gambar1-7"
            />

            <ImageComponent
              src={galleri8}
              dataName="som15th"
              dataBsTarget="#gambar1-8"
            />
            <ImageComponent
              src={galleri9}
              dataName="som15th"
              dataBsTarget="#gambar1-9"
            />
            <ImageComponent
              src={galleri10}
              dataName="som15th"
              dataBsTarget="#gambar1-10"
            />
            <ImageComponent
              src={galleri11}
              dataName="som15th"
              dataBsTarget="#gambar1-11"
            />
            <ImageComponent
              src={galleri12}
              dataName="som15th"
              dataBsTarget="#gambar1-12"
            />
            <ImageComponent
              src={galleri13}
              dataName="som15th"
              dataBsTarget="#gambar1-13"
            />
            <ImageComponent
              src={galleri14}
              dataName="som15th"
              dataBsTarget="#gambar1-14"
            />
            <ImageComponent
              src={galleri15}
              dataName="som15th"
              dataBsTarget="#gambar1-15"
            />
            <ImageComponent
              src={galleri16}
              dataName="som15th"
              dataBsTarget="#gambar1-16"
            />
            <ImageComponent
              src={galleri17}
              dataName="som15th"
              dataBsTarget="#gambar1-17"
            />
            <ImageComponent
              src={galleri18}
              dataName="som15th"
              dataBsTarget="#gambar1-18"
            />
            <ImageComponent
              src={galleri19}
              dataName="som15th"
              dataBsTarget="#gambar1-19"
            />
            <ImageComponent
              src={galleri20}
              dataName="som15th"
              dataBsTarget="#gambar1-20"
            />
            <ImageComponent
              src={galleri21}
              dataName="som15th"
              dataBsTarget="#gambar1-21"
            />

            {/* pelantikan */}

            <ImageComponent
              src={pelantikan1}
              dataName="pelantikan"
              dataBsTarget="#gambar2-1"
            />
            <ImageComponent
              src={pelantikan2}
              dataName="pelantikan"
              dataBsTarget="#gambar2-2"
            />
            <ImageComponent
              src={pelantikan3}
              dataName="pelantikan"
              dataBsTarget="#gambar2-3"
            />
            <ImageComponent
              src={pelantikan4}
              dataName="pelantikan"
              dataBsTarget="#gambar2-4"
            />
            <ImageComponent
              src={pelantikan5}
              dataName="pelantikan"
              dataBsTarget="#gambar2-5"
            />
            <ImageComponent
              src={pelantikan6}
              dataName="pelantikan"
              dataBsTarget="#gambar2-6"
            />
            <ImageComponent
              src={pelantikan7}
              dataName="pelantikan"
              dataBsTarget="#gambar2-7"
            />
            <ImageComponent
              src={pelantikan8}
              dataName="pelantikan"
              dataBsTarget="#gambar2-8"
            />
            <ImageComponent
              src={pelantikan9}
              dataName="pelantikan"
              dataBsTarget="#gambar2-9"
            />

            {/* <!-- family-gathering --> */}

            <ImageComponent
              src={Famgath1}
              dataName="fam-gath"
              dataBsTarget="#gambar3-1"
            />
            <ImageComponent
              src={Famgath2}
              dataName="fam-gath"
              dataBsTarget="#gambar3-2"
            />
            <ImageComponent
              src={Famgath3}
              dataName="fam-gath"
              dataBsTarget="#gambar3-3"
            />
            <ImageComponent
              src={Famgath4}
              dataName="fam-gath"
              dataBsTarget="#gambar3-4"
            />
            <ImageComponent
              src={Famgath5}
              dataName="fam-gath"
              dataBsTarget="#gambar3-5"
            />

            <ImageComponent
              src={Famgath6}
              dataName="fam-gath"
              dataBsTarget="#gambar3-6"
            />
            <ImageComponent
              src={Famgath7}
              dataName="fam-gath"
              dataBsTarget="#gambar3-7"
            />
            <ImageComponent
              src={Famgath8}
              dataName="fam-gath"
              dataBsTarget="#gambar3-8"
            />
            <ImageComponent
              src={Famgath9}
              dataName="fam-gath"
              dataBsTarget="#gambar3-9"
            />
            <ImageComponent
              src={Famgath10}
              dataName="fam-gath"
              dataBsTarget="#gambar3-10"
            />

            <ImageComponent
              src={Famgath11}
              dataName="fam-gath"
              dataBsTarget="#gambar3-11"
            />
            <ImageComponent
              src={Famgath12}
              dataName="fam-gath"
              dataBsTarget="#gambar3-12"
            />
            <ImageComponent
              src={Famgath13}
              dataName="fam-gath"
              dataBsTarget="#gambar3-13"
            />
            <ImageComponent
              src={Famgath14}
              dataName="fam-gath"
              dataBsTarget="#gambar3-14"
            />
            <ImageComponent
              src={Famgath15}
              dataName="fam-gath"
              dataBsTarget="#gambar3-15"
            />

            <ImageComponent
              src={Famgath16}
              dataName="fam-gath"
              dataBsTarget="#gambar3-16"
            />
            <ImageComponent
              src={Famgath17}
              dataName="fam-gath"
              dataBsTarget="#gambar3-17"
            />
            <ImageComponent
              src={Famgath18}
              dataName="fam-gath"
              dataBsTarget="#gambar3-18"
            />
            <ImageComponent
              src={Famgath19}
              dataName="fam-gath"
              dataBsTarget="#gambar3-19"
            />
            <ImageComponent
              src={Famgath20}
              dataName="fam-gath"
              dataBsTarget="#gambar3-20"
            />
          </div>

          {/* <!-- Modal gambar 1 --> */}
          <ModalGalleryComponent imageId="gambar1-1" src={galleri1} />
          <ModalGalleryComponent imageId="gambar1-2" src={galleri2} />
          <ModalGalleryComponent imageId="gambar1-3" src={galleri3} />
          <ModalGalleryComponent imageId="gambar1-4" src={galleri4} />
          <ModalGalleryComponent imageId="gambar1-5" src={galleri5} />
          <ModalGalleryComponent imageId="gambar1-6" src={galleri6} />
          <ModalGalleryComponent imageId="gambar1-7" src={galleri7} />
          <ModalGalleryComponent imageId="gambar1-8" src={galleri8} />
          <ModalGalleryComponent imageId="gambar1-9" src={galleri9} />
          <ModalGalleryComponent imageId="gambar1-10" src={galleri10} />
          <ModalGalleryComponent imageId="gambar1-11" src={galleri11} />
          <ModalGalleryComponent imageId="gambar1-12" src={galleri12} />
          <ModalGalleryComponent imageId="gambar1-13" src={galleri13} />
          <ModalGalleryComponent imageId="gambar1-14" src={galleri14} />
          <ModalGalleryComponent imageId="gambar1-15" src={galleri15} />
          <ModalGalleryComponent imageId="gambar1-16" src={galleri16} />
          <ModalGalleryComponent imageId="gambar1-17" src={galleri17} />
          <ModalGalleryComponent imageId="gambar1-18" src={galleri18} />
          <ModalGalleryComponent imageId="gambar1-19" src={galleri19} />
          <ModalGalleryComponent imageId="gambar1-20" src={galleri20} />
          <ModalGalleryComponent imageId="gambar1-21" src={galleri21} />

          <ModalGalleryComponent imageId="gambar2-1" src={pelantikan1} />
          <ModalGalleryComponent imageId="gambar2-2" src={pelantikan2} />
          <ModalGalleryComponent imageId="gambar2-3" src={pelantikan3} />
          <ModalGalleryComponent imageId="gambar2-4" src={pelantikan4} />
          <ModalGalleryComponent imageId="gambar2-5" src={pelantikan5} />
          <ModalGalleryComponent imageId="gambar2-6" src={pelantikan6} />
          <ModalGalleryComponent imageId="gambar2-7" src={pelantikan7} />
          <ModalGalleryComponent imageId="gambar2-8" src={pelantikan8} />
          <ModalGalleryComponent imageId="gambar2-9" src={pelantikan9} />

          <ModalGalleryComponent imageId="gambar3-1" src={Famgath1} />
          <ModalGalleryComponent imageId="gambar3-2" src={Famgath2} />
          <ModalGalleryComponent imageId="gambar3-3" src={Famgath3} />
          <ModalGalleryComponent imageId="gambar3-4" src={Famgath4} />
          <ModalGalleryComponent imageId="gambar3-5" src={Famgath5} />
          <ModalGalleryComponent imageId="gambar3-6" src={Famgath6} />
          <ModalGalleryComponent imageId="gambar3-7" src={Famgath7} />
          <ModalGalleryComponent imageId="gambar3-8" src={Famgath8} />
          <ModalGalleryComponent imageId="gambar3-9" src={Famgath9} />
          <ModalGalleryComponent imageId="gambar3-10" src={Famgath10} />
          <ModalGalleryComponent imageId="gambar3-11" src={Famgath11} />
          <ModalGalleryComponent imageId="gambar3-12" src={Famgath12} />
          <ModalGalleryComponent imageId="gambar3-13" src={Famgath13} />
          <ModalGalleryComponent imageId="gambar3-14" src={Famgath14} />
          <ModalGalleryComponent imageId="gambar3-15" src={Famgath15} />
          <ModalGalleryComponent imageId="gambar3-16" src={Famgath16} />
          <ModalGalleryComponent imageId="gambar3-17" src={Famgath17} />
          <ModalGalleryComponent imageId="gambar3-18" src={Famgath18} />
          <ModalGalleryComponent imageId="gambar3-19" src={Famgath19} />
          <ModalGalleryComponent imageId="gambar3-20" src={Famgath20} />
          <FilterComponent />
        </div>
      </section>
    </>
  );
};

export default GalleryComponent;
