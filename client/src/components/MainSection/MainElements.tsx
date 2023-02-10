import styled from "styled-components";

export const MainContainer = styled.div`
  background: #111214;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;

  // :before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: linear-gradient(
  //       180deg,
  //       rgba(0, 0, 0.2) 0%,
  //       rgba(0, 0, 0.6) 100%
  //     ),
  //     linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%transparent 100%), z-index: 2;
`;

export const MainContent = styled.div`
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainH1 = styled.div`
  color: #fff;
  font-size: 60px;
  text-align: center;
  padding: 10%;
  background-color: linear-gradient(grey, darkgrey);
  font-family: "Permanent Marker", cursive;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480) {
    font-size: 32px;
  }
`;
export const MainP = styled.div`
  color: #fff;
  font-size: 24px;
  margin: 0 10%;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;
export const MainBtnWrapper = styled.div``;
