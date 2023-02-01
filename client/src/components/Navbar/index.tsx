import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
} from "./NavbarElements";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          {/* <NavLogo>Hoym Satery Consulting</NavLogo> */}
        </NavbarContainer>
        <NavMenu>
          <NavItem>HOME</NavItem>
          <NavItem>SERVICE</NavItem>
          <NavItem>CONTACT</NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
