import React from "react";
import Img1 from "../../Assets/events/gallery1.jpg";
import Img2 from "../../Assets/events/Gunting_Pita2.jpg";
import Img3 from "../../Assets/events/Gunting_Pita3.jpg";

const Gunting_pita = () => {
  return (
    <>
      <div className="starting-point head-symposium">
        <div className="container">
          <h2 className="border-bottom">Gunting Pita</h2>
          <div className="row">
            <div className="col-md-6 col-sm-12 order-sm-first text-center">
              <img src={Img1} className="float-start me-3" />
            </div>
            <div className="col-md-6 col-sm-12 order-sm-last text-start">
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
          <br />
          <br />
          <div className="symposium-part">
            <div className="row">
              <div className="col-md-6 col-sm-12 d-flex align-items-center">
                <img src={Img2} />
              </div>
              <div className="col-md-6 col-sm-12 d-flex align-items-center">
                <img src={Img3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gunting_pita;
