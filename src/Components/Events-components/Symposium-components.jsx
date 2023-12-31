import React from "react";
import Img1 from "../../Assets/events/symposium1.jpg";
import Img2 from "../../Assets/events/symposium2.jpg";
import Img3 from "../../Assets/events/symposium3.jpg";
import Img4 from "../../Assets/events/symposium4.jpg";
import Img5 from "../../Assets/events/symposium5.jpg";

const SymposiumComponent = () => {
  return (
    <>
      <div className="starting-point head-symposium">
        <div className="container">
          <h2 className="border-bottom">SYMPOSIUM</h2>
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
            <div className="row">
              <div className="col-md-6 col-sm-12 d-flex align-items-center">
                <img src={Img4} />
              </div>
              <div className="col-md-6 col-sm-12 d-flex align-items-center">
                <img src={Img5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SymposiumComponent;
