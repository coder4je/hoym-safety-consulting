import React from "react";
import training from "../../videos/training.mp4";
import { useNavigate } from "react-router-dom";
import { SSPContainer } from "../SiteSafetyPlan/SiteSafetyPlanElements";
import {
  StaffingBg,
  VideoBg,
  Title,
  TitleStart,
  TitleContent,
  TitleEnd,
} from "../StaffingService/StaffingServiceElements";
import { MainP } from "../MainSection/MainElements";
import {
  SubTitle,
  ButtonContainer,
} from "../SiteSafetyPlan/SiteSafetyPlanElements";
import { Button } from "../ButtonElements";

function Training() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/contact");
  }

  return (
    <SSPContainer>
      <StaffingBg>
        <VideoBg autoPlay loop muted src={training} />
      </StaffingBg>
      <Title>
        <TitleStart className="slide-left"></TitleStart>
        <TitleContent>Training</TitleContent>
        <TitleEnd>Safety and Health Training</TitleEnd>
      </Title>
      <MainP>
        Training employees on workplace safety is time and money well-spent. An
        effective occupational safety and health training program can result in
        fewer injuries and illnesses, better morale, and lower workers,
        compensation insurance premiums. Hoym Safety offers your company
        flexible onsite or online delivery options that meet your training
        needs.
      </MainP>
      <SubTitle>On-Site Training</SubTitle>
      <MainP>
        Hoym Safety offers onsite safety and health training courses that are
        customized to your business needs. A qualified OSHA trainer can travel
        to your workplace across the United States to conduct onsite training.
        This option is recommended for advanced, hands-on topics.
      </MainP>
      <SubTitle>Online Training</SubTitle>
      <MainP>
        Hoym Consulting provides onsite safety and health training courses that
        can be tailored to meet the specific needs of your business. A qualified
        OSHA trainer can travel to your workplace anywhere in the United States
        to conduct the training. This option is recommended for advanced,
        hands-on topics.
      </MainP>
      <ButtonContainer>
        <Button
          type="button"
          primary={true}
          big={true}
          dark={true}
          fontBig={true}
          onClick={handleNavigate}>
          Contact Us
        </Button>
      </ButtonContainer>
    </SSPContainer>
  );
}

export default Training;
