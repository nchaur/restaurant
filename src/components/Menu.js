import React from "react";
import { Row, Col, Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
import mainMenuImg from "../app/assets/images/mainMenu.png";
import { SALTY } from "../app/shared/MENUSALTY";
import { SWEET } from "../app/shared/MENUSWEETS";

const Menu = () => {
  const menuSweet = SWEET;
  const sweetList = menuSweet.map((sweet) => {
    return (
      <>
        <h5>{sweet.title}</h5>
        <p style={{ marginBottom: "40px" }}>{sweet.desc}</p>
      </>
    );
  });

  const menuSalty = SALTY;
  const saltyList = menuSalty.map((salty) => {
    return (
      <>
        <h5>{salty.title}</h5>
        <p style={{ marginBottom: "40px" }}>{salty.desc}</p>
      </>
    );
  });

  return (
    <div id="menuSection">
      {/* Desktop view */}
      <div className="d-none d-sm-block">
        <Row>
          <Col>
            <h1 className="menuCard">Menu</h1>
          </Col>
        </Row>

        <Row className="menuRow">
          <Col className="menuCol">{saltyList}</Col>
          <Col xs="6">
            <img src={mainMenuImg} alt="Hello" style={{ width: "100%" }} />
          </Col>
          <Col className="menuCol">{sweetList}</Col>
        </Row>
      </div>

      {/* Mobile  view */}
      <div className="d-block d-sm-none">
        <Row>
          <Col>
            <h1 className="menuCard">Menu</h1>
          </Col>
        </Row>
        <Card className="mobileMenu" inverse>
          <CardBody>
            <CardText>{saltyList}</CardText>
          </CardBody>
        </Card>
        <Card className="my-2" inverse style={{ background: "#faf9f7", textAlign: "center", border: "none" }}>
          <CardBody>
            <CardText>{sweetList}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Menu;
