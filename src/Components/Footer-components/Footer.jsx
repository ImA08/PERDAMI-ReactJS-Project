import React from "react";

function Footer() {
  return (
    <section className="cta">
      <div className="row">
        <div className="col-md-4">
          <p>
            <strong>Sekretariat PERDAMI Sumbar</strong>
          </p>
          <p>
            Perumahan Pondok Indah Pratama Blok B/4 Jati Gaung Kec. Padang
            Timur, Kota Padang
          </p>
        </div>
        <div className="col-md-4">
          <p>
            Tel. 123-456-7890
            <br />
            Email: perdamisumbar2023@gmail.com
            <br />
            Social: @reallygreatsite
          </p>
        </div>
        <div className="col-md-4">
          <div className="icons">
            <i className="fab fa-instagram fa-lg"></i>
            <a href="https://www.instagram.com/perdami.sumbar1/">
              {" "}
              Perdami.sumbar1
            </a>
            <br />
            <i className="fab fa-facebook-square fa-lg"></i>
            <a href="https://www.facebook.com/perdamisumbar2020">
              {" "}
              Perdami Sumbar{" "}
            </a>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
