import React from "react";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="banner-section bg-color-1 p_relative">
      <div className="auto-container">
        <div className="row align-items-center ">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <figure className="image mobile-none">
                <img src="assets/images/banner/oridenbanner2.png" alt="" />
              </figure>
              <figure className="image upper-text">
                <img src="assets/images/banner/oridenbanner.png" alt="" />
              </figure>
              <figure className="image mobile-none upper-text mt-2">
                <img src="assets/images/banner/oridenbanner3.png" alt="" />
              </figure>
              <div className="btn-box mobile-none m_10">
                <Link href="/tra-cuu-bao-hanh" className="theme-btn btn-four">
                  <span>Tra cứu bảo hành</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 image-column ">
            <div className="image-box image-bg-right">
              <figure
                className="image"
                style={{ position: "relative", zIndex: 1 }}
              >
                <img src="assets/images/banner/oridenbanner4.png" alt="" />
              </figure>
              <img
                className="img-home"
                src="assets/images/banner/oridenbanner6.png"
                alt=""
              />
            </div>
          </div>

          <div className="mobile-block col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <figure className="image upper-text mt-2">
                <img src="assets/images/banner/oridenbanner3.png" alt="" />
              </figure>
              <div className="btn-box m_10">
                <Link href="/tra-cuu-bao-hanh" className="theme-btn btn-four">
                  <span>Tra cứu bảo hành</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
