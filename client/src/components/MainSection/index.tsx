import {
  MainContainer,
  MainContent,
  MainH1,
  MainP,
  MainBg,
} from "./MainElements";
import hardhat from "../../images/hardhat.jpeg";

function MainSection() {
  return (
    <MainContainer>
      <MainBg src={hardhat} alt="hardhat" />
      <MainContent>
        <MainH1>IMPROVE HEALTH AND SAFETY IN YOUR WORKPLACE</MainH1>
        <MainP>
          Construction sites are full of potential dangers, not just for workers
          but for the public, too. Our services will help you maintain
          productivity while complying with federal, state, and local regulatory
          guidelines.
        </MainP>
      </MainContent>
    </MainContainer>
  );
}

export default MainSection;
