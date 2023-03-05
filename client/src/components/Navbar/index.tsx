import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.png";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
  NavLogoImage,
  DropMenu,
  DropMenuItems,
  DropMenuLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavLogoImage src={logo} alt="logo" />
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
        <NavMenu>
          <NavItem>
            <NavLinks to="home">HOME</NavLinks>
          </NavItem>
          <NavItem className="service">
            <NavLinks to="service">SERVICE</NavLinks>
            <DropMenu>
              <DropMenuItems>
                <DropMenuLink to="staffing">Staffing</DropMenuLink>
                <DropMenuLink to="ssp">SSP</DropMenuLink>
                <DropMenuLink to="training">Training</DropMenuLink>
              </DropMenuItems>
            </DropMenu>
          </NavItem>
          <NavItem>
            <NavLinks to="contact">CONTACT</NavLinks>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
