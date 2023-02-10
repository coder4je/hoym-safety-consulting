import {
  MainContainer,
  MainContent,
  MainBtnWrapper,
  MainH1,
  MainP,
} from "./MainElements";
import { Button } from "../ButtonElements";

function MainSection() {
  return (
    <MainContainer>
      <MainContent>
        <MainH1>IMPROVE HEALTH AND SAFETY IN YOUR WORKPLACE</MainH1>
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
