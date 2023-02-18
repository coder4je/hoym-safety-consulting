import styled from "styled-components";

export const MenuContainer = styled.div`
  height: 140px;
  width: 160px;
  position: absolute;
  // background: #fff;
  margin: 20% auto;
  left: 0;
  right: 0;
`;

export const MenuToggle = styled.div`
  height: 0;
  width: 160px;
  border-bottom: 71px solid #f9d230;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  top: 0;

  &:before {
    content: "";
    height: 0;
    width: 80px;
    border-top: 70px solid #f9d230;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    position: absolute;
    top: 70px;
    left: 0;
  }
`;
