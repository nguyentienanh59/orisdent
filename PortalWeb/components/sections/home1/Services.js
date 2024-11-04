import Link from "next/link";
import React from "react";

export default function service() {
  return (
    <section className="about-section pt_120 pb_120 bg-color-1">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box ml_30">
                <div className="sec-title mb_15">
                  <figure className="image">
                    <img src="assets/images/resource/about-2.png" alt="" />
                  </figure>
                  <figure className="image mt_10">
                    <img src="assets/images/resource/about-3.png" alt="" />
                  </figure>
                  <figure className="image">
                    <img src="assets/images/resource/about-4.png" alt="" />
                  </figure>
                </div>
                <div className="text-box mb_40">
                  <ul className="list-style-one clearfix">
                    <li className="text-uppercase">
                      <img
                        className="mr-15"
                        src="assets/images/resource/service-1.png"
                        alt=""
                      />
                      Độ trong mờ: 47.6%
                    </li>

                    <li className="text-uppercase">
                      <img
                        className="mr-15"
                        src="assets/images/resource/service-1.png"
                        alt=""
                      />
                      Độ bền uốn: 1300 MPa
                    </li>
                    <li className="text-uppercase">
                      <img
                        className="mr-15"
                        src="assets/images/resource/service-1.png"
                        alt=""
                      />
                      Ứng dụng: Phục hình nguyên khối, mão và cầu răng (lên tới
                      18 đơn vị), implant...
                    </li>
                    <li className="text-uppercase">
                      <img
                        className="mr-15"
                        src="assets/images/resource/service-1.png"
                        alt=""
                      />
                      Thành phục hình tối thiểu: 0.4 mm
                    </li>
                    <li className="text-uppercase">
                      <img
                        className="mr-15"
                        src="assets/images/resource/service-1.png"
                        alt=""
                      />
                      Độ dày: 12 và 14mm
                    </li>
                    <li className="text-uppercase">
                      <img
                        className="mr-15"
                        src="assets/images/resource/service-1.png"
                        alt=""
                      />
                      Đường kính: 98 mm
                    </li>
                    <li className="text-uppercase">
                      <img
                        className="mr-15"
                        src="assets/images/resource/service-1.png"
                        alt=""
                      />
                      Màu: Trắng lấp lánh (thành phần chứa tinh thể Vàng)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_one">
              <div className="image-box">
                <figure className="image">
                  <img src="assets/images/resource/about-1.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
