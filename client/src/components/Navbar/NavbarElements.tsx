import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  width: 100%
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  cursor: pointer;
`;

export const NavLogoImage = styled.img`
  width: 13rem;
`;

export const NavLogoIcon = styled(LinkR)``;

export const NavLogoName = styled(LinkR)``;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkR)`
  color: #fff;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    text-decoration: underline 3px solid #febb26;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)``;

export const DropMenu = styled.ul`
  background: black;
`;

export const DropMenuItems = styled.div`

  display: none;
  position: absolute:
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

export const NavItem = styled.li`
  height: 80px;

  &.service:hover ${DropMenuItems} {
    display: block;
  }
`;

export const DropMenuLink = styled(LinkR)`
  color: white;
  padding: 16px 20px;
  text-decoration: none;
  display: block;

  &:hover {
    text-decoration: underline 3px solid #febb26;
  }
`;
