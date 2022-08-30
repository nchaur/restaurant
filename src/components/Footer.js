import React from "react";
import { Row, Col } from "reactstrap";
import SocialIcons from "./SocialIcons";
import LogoImg from "../app/assets/images/logo.png";
import Logo from "./layout/ImageAndContent/logo";

const sections = {
  image: {
    src: LogoImg,
    alt: "Footer Alt",
  },
};
const Footer = () => {
  return (
    <div className="footer">
      <Row xs={1} sm={4}>
        <Col className="footerCol">
          <Logo src={sections.image.src} />
        </Col>
        <Col className="footerCol">
          <h5>LOCATION</h5>
          <p>
            3100 Kimball Bridge Rd, <br />
            Alpharetta, GA 30022
          </p>
        </Col>
        <Col className="footerCol">
          <h5>FOLLOW US</h5>
          <SocialIcons />
        </Col>
        <Col className="footerLinks">
          <h5>ABOUT US</h5>
          <h5>MENU</h5>
          <h5>LOCATION</h5>
          <h5>CONTACT US</h5>
        </Col>
      </Row>
      <Row style={{ paddingTop: "40px" }}>
        <Col>
          <p style={{ textAlign: "right", margin: "0px" }}>All Rights Reserved</p>
        </Col>
        <Col style={{ borderLeft: "solid #2b2b2b 1px" }}>
          <p style={{ textAlign: "left", margin: "0px" }}>© 2022 laforqueta.com</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
