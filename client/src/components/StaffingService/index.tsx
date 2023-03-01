import staffing from "../../videos/staffing.mp4";
import {
  StaffingContainer,
  StaffingBg,
  VideoBg,
  Title,
  TitleStart,
  TitleContent,
  TitleEnd,
  StaffingList,
  StaffingListTitle,
  StaffingListCards,
  StaffingListCard,
} from "./StaffingServiceElements";

import { MainP } from "../MainSection/MainElements";

function StaffingService() {
  return (
    <StaffingContainer>
      <StaffingBg>
        <VideoBg autoPlay loop muted src={staffing}></VideoBg>
      </StaffingBg>
      <Title>
        <TitleStart className="slide-left"></TitleStart>
        <TitleContent>STAFFING</TitleContent>
        <TitleEnd></TitleEnd>
      </Title>
      <MainP>
        The safety of your workers is a top priority. Our team is dedicated to
        providing you with qualified safety professionals who have the
        experience and knowledge to identify and mitigate potential hazards on
        your job site. Whether you need a safety officer, coordinator,
        supervisor, or manager, we have a pool of highly skilled professionals
        who are up-to-date on the latest safety regulations and standards.
      </MainP>
      <StaffingList>
        <StaffingListTitle>Hoym Safety Provide:</StaffingListTitle>
        <StaffingListCards>
          <StaffingListCard to="../contact">
            Construction Superintendent
          </StaffingListCard>
          <StaffingListCard to="../contact">
            Site Safety Manager
          </StaffingListCard>
          <StaffingListCard to="../contact">
            Site Safety Coordinator
          </StaffingListCard>
          <StaffingListCard to="../contact">
            Concete Site Safety Manager
          </StaffingListCard>
          <StaffingListCard to="../contact">
            Fire Site Safety Manager
          </StaffingListCard>
        </StaffingListCards>
      </StaffingList>
    </StaffingContainer>
  );
}

export default StaffingService;
