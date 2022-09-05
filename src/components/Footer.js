import React from "react";
import { Row, Col } from "reactstrap";
import LogoImg from "../assets/images/logo.png";
import Logo from "./reusableComp/logo";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const sections = {
  image: {
    src: LogoImg,
    alt: "Footer Alt",
  },
};
const Footer = () => {
  return (
    <div className="footer">
      <Row xs={1} sm={4} style={{ margin: "auto", maxWidth: "1540px" }}>
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
          <div>
            <FaFacebook />
            <FaInstagram className="mx-5" />
            <FaTwitter />
          </div>
        </Col>
        <Col className="footerLinks">
          <a href="#aboutSection" className="socialIcons">
            <h5>ABOUT US</h5>
          </a>
          <a href="#menuSection" className="socialIcons">
            <h5>MENU</h5>
          </a>
          <a href="#locationSection" className="socialIcons">
            <h5>LOCATION</h5>
          </a>
          <a href="#contactSection" className="socialIcons">
            <h5>CONTACT US</h5>
          </a>
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
