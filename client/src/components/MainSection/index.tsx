import Video from "../../videos/Video.mp4";
import {
  MainContainer,
  MainContent,
  MainBg,
  MainBtnWrapper,
  MainH1,
  MainP,
  VideoBg,
} from "./MainElements";
import { Button } from "../ButtonElements";

function MainSection() {
  return (
    <MainContainer>
      <MainBg>
        <VideoBg autoPlay loop muted src={Video}></VideoBg>
      </MainBg>
      <MainContent>
        <MainH1>Improve health and safety in your workplace</MainH1>
        <MainP>
          Construction sites are full of potential dangers, not just for workers
          but for the public, too. Our services will help you maintain
          productivity while complying with federal, state, and local regulatory
          guidelines.
        </MainP>
        <MainBtnWrapper>
          <Button to="/">Get Started</Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  );
}

export default MainSection;
