import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="main-footer bg-color-1" id="footer">
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}
          ></div>
          <div
            className="pattern-2"
            style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}
          ></div>
          <div
            className="pattern-3"
            style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}
          ></div>
          <div className="pattern-4"></div>
        </div>
        <div className="widget-section pt_120 pb_100">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link href="/">
                      <img src="assets/images/footer-logo.png" alt="" />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget ml_110">
                  <div className="widget-title">
                    <h3>LIÊN HỆ</h3>
                    <p>Bạn cần hỗ trợ</p>
                    <div>
                      <Link href="tel:0944666363">0944 66 6363</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-content">
                    <ul className="info-list">
                      <li>Website: www.orisdent.vn</li>
                      <li>
                        Số điện thoại:{" "}
                        <Link href="tel:01989526503">0198-9526503</Link>
                      </li>
                      <li>
                        Gmail:{" "}
                        <Link href="mailto:LavieDental@gmail.com">
                          LavieDental@gmail.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="bottom-inner">
              <div className="copyright">
                <p>&copy; 2024 copyright by Orisdent</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
