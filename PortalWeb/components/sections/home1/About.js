
export default function about() {
  return (
    <section className="about-section pt_120 pb_120 bg-color-1">
      <div
        style={{
          backgroundImage: "url(assets/images/resource/about.png)",
          backgroundSize: "contain",
        }}
        className="auto-container"
      >
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_one">
              <div className="image-box">
                <figure className="image">
                  <img src="assets/images/resource/about-1.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box ml_30">
                <div className="content-about mb_15">
                  <figure className="image">
                    <img src="assets/images/resource/about-2.png" alt="" />
                  </figure>
                  <figure className="image pt_10 ">
                    <img src="assets/images/resource/about-3.png" alt="" />
                  </figure>
                  <figure className="image">
                    <img src="assets/images/resource/about-4.png" alt="" />
                  </figure>
                </div>
                <div className="text-box mb_40">
                  <p>
                    Người Việt - Hàng Việt - Chất lượng Việt. Với mong muốn kiến
                    tạo mão sứ dành riêng cho khách hàng Việt Nam, phù hợp với
                    thể trạng, thói quen sinh hoạt và thẩm mỹ. Nha khoa Lavie
                    kết hợp với Orodent kiến tạo sản phẩm mão sứ Orisdent mang
                    trên mình sứ mệnh Việt, đón đầu xu hướng toàn cầu.
                  </p>
                  <p>
                    Orisdent là dòng răng sứ mới nhất của hãng Orodent Germany,
                    được nghiên cứu và phát triển nâng cấp từ dòng Orodent
                    Bleach truyền thống. Mạ bên ngoài một lớp tinh thể vàng, đây
                    là biểu tượng cho Mặt Trời sáng rọi và mang đến sự hạnh phúc
                    và ấm áp. Màu xanh bao bọc bên ngoài mão sứ thể hiện sự bình
                    ổn, ôn hòa trong cuộc sống. Trong phong thủy, lớp mạ vàng
                    còn được xem là màu mang đến sự may mắn và thăng tiến trong
                    công danh sự nghiệp cho người sở hữu, còn màu xanh thể hiện
                    gia đình thuận hòa, êm ấm, hạnh phúc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
