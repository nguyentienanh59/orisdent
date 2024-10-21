import { Button, Col, Modal, Row } from "antd";
import TextItem from "./TexItem";

const ModalSearch = ({ open, setOpen, dataSearch }) => {
  return (
    <Modal open={open} closable={false} className="fullModal" footer={false}>
      <div className="irSignatureWrap">
        <div className="title">Bảng thông tin bảo hành</div>
        <div className="bodya">
          <div className="d-flex">
            <div className="avatar">
              <img alt="Thông tin bảo hành" src="assets/images/cert.png" />
            </div>
            <div className="nameCon">
              <div className="name d-two-rows">{dataSearch?.name}</div>
              <div className="time">{dataSearch?.dateOfBirth ?? "N/A"}</div>
            </div>
          </div>
          <Col>
            <Row>
              <TextItem label="Số thẻ">
                {dataSearch?.numberCard ?? "N/A"}
              </TextItem>
              <TextItem label="Răng sứ">{dataSearch?.teeth ?? "N/A"}</TextItem>
            </Row>
            <Row>
              <TextItem label="Labo/LAB">{dataSearch?.labo ?? "N/A"}</TextItem>
              <TextItem label="Nguồn gốc">
                {dataSearch?.source ?? "N/A"}
              </TextItem>
            </Row>
            <Row>
              <TextItem label="Ngày làm">
                {dataSearch?.dentalDay ?? "N/A"}
              </TextItem>
              <TextItem label="Hạn sử dụng">
                {dataSearch?.expiry ?? "N/A"}
              </TextItem>
            </Row>
          </Col>
          <Row className="action-bottom">
            <Button
              className="bg_red fw_sbold color_light"
              onClick={() => setOpen(false)}
            >
              Đóng lại
            </Button>
          </Row>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSearch;
