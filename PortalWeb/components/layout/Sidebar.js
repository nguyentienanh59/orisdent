import Link from "next/link";

export default function Sidebar({ isSidebar, handleSidebar }) {
  return (
    <div
      className={`xs-sidebar-group info-group info-sidebar ${
        isSidebar ? "isActive" : ""
      }`}
    >
      <div className="xs-overlay xs-bg-black"></div>
      <div
        className="xs-overlay xs-overlay-2 xs-bg-black"
        onClick={handleSidebar}
      ></div>
      <div
        className="xs-overlay xs-overlay-3 xs-bg-black"
        onClick={handleSidebar}
      ></div>
      <div
        className="xs-overlay xs-overlay-4 xs-bg-black"
        onClick={handleSidebar}
      ></div>
      <div
        className="xs-overlay xs-overlay-5 xs-bg-black"
        onClick={handleSidebar}
      ></div>
      <div className="xs-sidebar-widget">
        <div className="sidebar-widget-container">
          <div className="widget-heading">
            <a className="close-side-widget" onClick={handleSidebar}>
              <i className="fa fa-times"></i>
            </a>
          </div>
          <div className="sidebar-textwidget">
            <div className="sidebar-info-contents">
              <div className="content-inner">
                <div className="logo">
                  <Link href="/">
                    <img src="assets/images/footer-logo.png" alt="" />
                  </Link>
                </div>
                <div className="content-box">
                  <p>Tra cứu bảo hành nha khoa Lavie</p>
                  <Link href="/" className="theme-btn btn-one">
                    <span>Tra cứu bảo hành</span>
                  </Link>
                </div>
                <div className="contact-info">
                  <h4>ORISDENT</h4>
                  <ul>
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
    </div>
  );
}
