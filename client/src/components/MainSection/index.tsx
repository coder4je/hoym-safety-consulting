import {
  MainContainer,
  MainContent,
  MainH1,
  MainP,
  MainBg,
  DesignSquare,
} from "./MainElements";
import sunset from "../../images/sunset.avif";

function MainSection() {
  return (
    <MainContainer>
      <MainContent>
        <MainBg src={sunset} alt="sunset" />
        <DesignSquare />

        <MainH1>
          Keep Your Construction Site Safe and Productive with Our Services
        </MainH1>
        <DesignSquare />
        <MainP>
          Construction sites are full of potential dangers, not just for
          workers, but also for the public. Our services can help you maintain
          productivity while complying with federal, state, and local regulatory
          guidelines.
        </MainP>
        <br />
        <MainP>
          We offer a range of safety solutions tailored to your specific needs,
          including on-site safety audits, employee training, and customized
          safety plans. With our help, you can reduce the risk of accidents,
          injuries, and costly regulatory penalties. Contact us today to learn
          more about how we can assist you in keeping your construction site
          safe and productive.
        </MainP>
      </MainContent>
    </MainContainer>
  );
}

export default MainSection;
