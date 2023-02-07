import styled from "styled-components";

export const MainContainer = styled.div`
  background: "#000";
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 0 30;
  height: 800px;
  position: relative;
  z-index: 1;

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
export const MainBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #232a34;
`;
export const MainContent = styled.div`
  z-index: 2;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainH1 = styled.div`
  color: #fff;
  font-size: 48px;
  text-align: center;
  padding: 10%;
  text-shadow: -5px 0 black, 0 5px black, 5px 0 black, 0 -5px black;

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
  text-shadow: -5px 0 black, 0 5px black, 5px 0 black, 0 -5px black;
`;
export const MainBtnWrapper = styled.div``;
