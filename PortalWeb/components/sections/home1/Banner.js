import React from "react";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="banner-section p_relative">
      <div
        className="pattern-layer wow slideInDown animated"
        data-wow-delay="00ms"
        data-wow-duration="1500ms"
        style={{ background: "#00051c" }}
      ></div>
      <div className="shape">
        <div
          className="shape-1"
          style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
        ></div>

        <div
          className="shape-3"
          style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}
        ></div>
        <div
          className="shape-4"
          style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="row align-items-center ">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <figure className="image float-bob-y">
                <img src="assets/images/banner/oridenbanner2.png" alt="" />
              </figure>
              <figure className="image upper-text">
                <img src="assets/images/banner/oridenbanner.png" alt="" />
              </figure>
              <figure className="image upper-text mt-2">
                <img src="assets/images/banner/oridenbanner3.png" alt="" />
              </figure>
              <div className="btn-box float-bob-y m_10">
                <Link href="/tra-cuu-bao-hanh" className="theme-btn btn-four">
                  <span>Tra cứu bảo hành</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 image-column ">
            <div className="image-box image-bg-right">
              <figure className="image float-bob-y">
                <img src="assets/images/banner/oridenbanner4.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
