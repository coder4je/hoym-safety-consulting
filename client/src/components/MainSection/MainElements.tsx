import styled from "styled-components";

export const MainContainer = styled.div``;

export const MainBg = styled.img`
  display: block;
  width: 100%;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DesignSquare = styled.div`
  background: #febb26;
  height: 10px;
  width: 80vw;
  margin: 2rem;
`;
export const MainH1 = styled.div`
  color: #fff;
  font-size: clamp(1.8rem, 5vw, 4rem);
  text-align: center;
  font-family: "Permanent Marker", cursive;
  max-width: 80vw;
`;
export const MainP = styled.div`
  color: #fff;
  max-width: 75vw;
  line-height: 2;
  font-size: max(1.7rem, 1.2vw);
  margin: 2rem auto;
  text-align: center;
  font-family: "M PLUS Rounded 1c", sans-serif;
`;
