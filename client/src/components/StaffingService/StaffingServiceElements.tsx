import styled from "styled-components";
import "../../App.css";
import { Link } from "react-router-dom";

export const StaffingContainer = styled.div``;

export const StaffingBg = styled.div``;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  transition: 1s;
  justify-content: center;
  margin: 4rem;
`;

export const TitleStart = styled.span`
  width: 50px;
  height: 100px;
  border-left: 8px solid #febb26;
  border-top: 8px solid #febb26;
  border-bottom: 8px solid #febb26;
`;

export const TitleContent = styled.h1`
  color: white;
  font-size: clamp(1rem, 5vw, 3rem);
  margin: auto 3rem;
  font-family: "Permanent Marker", cursive;
`;

export const TitleEnd = styled.span`
  width: 50px;
  height: 100px;
  border-right: 8px solid #febb26;
  border-top: 8px solid #febb26;
  border-bottom: 8px solid #febb26;
`;

export const StaffingList = styled.div`
  max-width: 800px;
  width: 100%;
  min-height: 100vh
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

`;
export const StaffingListTitle = styled.h2`
  color: white;
  font-size: 2rem;
  line-height: 10rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
`;
export const StaffingListCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const StaffingListCard = styled(Link)`
  font-size: clamp(1rem, 5vw, 1.5rem);
  height: 10rem;
  color: black;
  flex: 0 0 calc(50% - 2rem);
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 5rem;
  transition: 0.3s;
  // border: 3px solid transparent;
  text-align: center;
  padding-top: 3rem;
  text-decoration: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 20px 2px #febb26;
  }
`;
