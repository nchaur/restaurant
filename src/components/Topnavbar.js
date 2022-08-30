import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import LogoImg from "../assets/images/logo.png";
import Logo from "./reusableComp/logo";

const Topnavbar = (args) => {
  const sections = {
    image: {
      src: LogoImg,
      alt: "Logo Alt",
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar sticky="top" expand="sm" style={{ background: "#edf1f2", padding: "20px 0px", position: "sticky" }}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar style={{ justifyContent: "center" }}>
          <Nav navbar style={{ margin: "0" }}>
            <NavItem>
              <NavLink href="#aboutSection">
                <h6>ABOUT US</h6>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#menuSection">
                <h6>MENU</h6>
              </NavLink>
            </NavItem>
            <NavbarBrand href="/" style={{ width: "300px" }}>
              <Logo className="d-block d-sm-none" src={sections.image.src} alt={sections.image.alt} />
            </NavbarBrand>
            <NavItem>
              <NavLink href="#locationSection">
                <h6>LOCATION</h6>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contactSection">
                <h6>CONTACT US</h6>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Topnavbar;
