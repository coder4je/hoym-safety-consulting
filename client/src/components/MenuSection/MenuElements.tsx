import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const DefaultContainer = css`
  height: 140px;
  width: 160px;
  position: absolute;
  margin: 22% auto;
  top: 100;
  left: 0;
  right: 0;
  margin-bottom: 100px;
`;

export const MenuToggleContainer = styled.div`
  ${DefaultContainer}
  cursor: pointer;
`;

export const MenuToggle = styled.div`
  height: 0;
  width: 160px;
  border-bottom: 71px solid #febb26;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  top: 0;

  &:before {
    content: "";
    height: 0;
    width: 80px;
    border-top: 70px solid #febb26;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    position: absolute;
    top: 70px;
    left: 0;
  }
`;

export const MenuPlus = styled.span`
  font-size: 100px;
  color: white;
  position: relative;
  top: 20px;
  right: 10px;
  background-color: transparent;
  transition: 1s;
`;

export const Menu = styled.div`
  ${DefaultContainer}
  cursor: pointer;
  z-index: -1;
  transform: scale(0.9);
`;
export const MenuItem = styled.div`
  height: 0;
  width: 160px;
  border-bottom: 71px solid #ffffff;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  top: 0;
  position: absolute;
  transition: 1s;

  &:before {
    content: "";
    height: 0;
    width: 80px;
    border-top: 70px solid #ffffff;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    position: absolute;
    top: 70px;
    left: -40px;
  }
`;

export const MenuItemStaffing = styled.div`
  user-select: none;
`;

export const MenuItemStaffingIcon = styled.span`
  color: darkgrey;
  font-size: 60px;
  position: relative;
  top: 40px;
  left: 10px;

  &:hover {
    color: #febb26;
    transform: scale(1.3);
  }
`;
