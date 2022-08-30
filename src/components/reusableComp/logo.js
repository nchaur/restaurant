import React from "react";
import { Container, CardImg } from "reactstrap";

const Logo = ({ src, alt }) => {
  return (
    <Container>
      <CardImg src={src} alt={alt} />
    </Container>
  );
};

export default Logo;
