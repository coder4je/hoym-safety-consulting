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
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={logo} alt="logo" />
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
        <NavMenu>
          <NavItem>
            <NavLinks to="home">HOME</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="service">SERVICE</NavLinks>
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
