import { Col } from "antd";
export default function TextItem(props) {
  const { label, children, className, textItemProps = {}, greyedOut } = props;
  const { isCol = true, spanMobNumber = 24, spanNumber = 12 } = textItemProps;

  return isCol ? (
    <Col
      className={`ComptReporttextitem ipadMiniResponsive ${className ?? ""} `}
      xs={spanMobNumber}
      md={spanNumber}
    >
      <div
        className={`compt-reporttextitem-label ${
          greyedOut && "greyedOutLabel"
        }`}
        style={props.style}
      >
        {label}
      </div>
      <div
        className={`compt-reporttextitem-text ${
          greyedOut ? "greyedOutText" : ""
        }`}
      >
        {children}
      </div>
    </Col>
  ) : (
    <div className={`ComptReporttextitem ${className ?? ""}`}>
      <div
        className={`compt-reporttextitem-label ${
          greyedOut ? "greyedOutLabel" : ""
        }`}
        style={props.style}
      >
        {label}
      </div>
      <div
        className={`compt-reporttextitem-text ${
          greyedOut ? "greyedOutText" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
