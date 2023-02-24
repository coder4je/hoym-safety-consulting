import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  rotate?: boolean;
}

export const DefaultContainer = css`
  height: var(--height, 8.75rem);
  width: var(--width, 10rem);
  position: absolute;
  margin: auto;
  inset: 0 0;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  position: relative;
  height: 35rem;
  isolation: isolate;
  user-select: none;
`;

export const MenuToggleContainer = styled.div`
  ${DefaultContainer}
`;

export const MenuToggle = styled.div`
  height: 0;
  --width;
  border-bottom: 4.41rem solid #febb26;
  border-left: 2.5rem solid transparent;
  border-right: 2.5rem solid transparent;
  top: 0;
  gap: -1;

  &:before {
    content: "";
    height: 0;
    width: 5rem;
    border-top: 4.41rem solid #febb26;
    border-left: 2.5rem solid transparent;
    border-right: 2.5rem solid transparent;
    position: absolute;
    top: 4.375rem;
    left: 0;
  }


`;

export const MenuPlus = styled.span<Props>`
  font-size: 6rem;
  color: white;
  position: relative;
  top: 1.25rem;
  right: 0.625rem;
  background-color: transparent;
  transition: 1s;
  transform: ${({ rotate }) => (rotate ? "rotate(45deg)" : "rotate(0)")};
`;

export const Menu = styled.div`
  ${DefaultContainer}
  z-index: -1;
  transform: scale(0.9);
`;

export const MenuItems = styled(Link)`
  height: 0;
  width: 10rem;
  border-bottom: 4.41rem solid #ffffff;
  border-left: 2.5rem solid transparent;
  border-right: 2.5rem solid transparent;
  top: 0;
  position: absolute;
  transition: 1s;

  &:before {
    content: "";
    height: 0;
    width: 5rem;
    border-top: 4.41rem solid #ffffff;
    border-left: 2.5rem solid transparent;
    border-right: 2.5rem solid transparent;
    position: absolute;
    top: 4.375rem;
    left: -2.5rem;
  }
`;

export const MenuItemIcon = styled.span`
  color: darkgrey;
  font-size: 3.75rem;
  position: relative;
  top: 2.5rem;
  left: 0.625rem;
`;

export const MenuItemText = styled.div`
  visibility: hidden;
  position: relative;
  top: -0.5rem;
`;

export const MenuItem = styled.div`
  user-select: none;

  &:hover {
    color: #febb26;
    transform: scale(1.3);
    ${MenuItemIcon} {
      visibility: hidden;
    }
    ${MenuItemText} {
      color: darkgrey;
      visibility: visible;
    }
  }
`;