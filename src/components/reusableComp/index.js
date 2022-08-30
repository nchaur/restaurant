import React from "react";
import { Card, CardImg, CardText, CardTitle, Container, Row, Col } from "reactstrap";

const ImageAndContent = ({ src, alt, content, title, locationTitle, id }) => {
  return (
    <Container id={id}>
      <Row sm="3" xs="1" className="reusableCont">
        <Col sm="6" className="reusableImgCol">
          <CardImg style={{ width: "100%" }} src={src} alt={alt} />
        </Col>

        <Col sm="6" className="reusableTextCol">
          <Card style={{ border: "none" }}>
            <CardTitle className="titleCard" tag="h1">
              {title}
            </CardTitle>
            <h5>{locationTitle}</h5> <CardText className="contentCard">{content}</CardText>
            {/* <SocialIcons /> */}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageAndContent;
