import React from "react";
import FamGathCarousel from "./FamGath-Carousel-Component";
import Img from "../../Assets/pelantikan/(5) H1.e. Pelantikan Pengurus Perdami.jpg";

const PelantikanPengurus = () => {
  return (
    <>
      <div class="starting-point head-pelantikan">
        <div class="container">
          <h2 class="border-bottom">
            Pelantikan Pengurus Wilayah Cabang PERDAMI
          </h2>
          <div class="row">
            <div class="col-md-6 col-sm-12 order-sm-last text-center">
              <img src={Img} alt="" />
            </div>
            <div class="col-md-6 col-sm-12 order-sm-first text-start">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                laudantium veritatis tempore cumque modi culpa eaque magni
                inventore eligendi quisquam esse dicta accusantium a error hic
                rerum corrupti aliquid ex reiciendis ea quas aliquam suscipit
                deserunt. Dolore voluptates necessitatibus accusantium
                asperiores sapiente ex ab officia tenetur, repellat deleniti
                similique non.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FamGathCarousel />
    </>
  );
};

export default PelantikanPengurus;
