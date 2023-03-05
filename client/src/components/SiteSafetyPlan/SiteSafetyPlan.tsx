import React from "react";
import plan from "../../images/plan.jpeg";
import {
  SSPContainer,
  SSPBg,
  SubTitle,
  ButtonContainer,
} from "./SiteSafetyPlanElements";
import {
  Title,
  TitleStart,
  TitleContent,
  TitleEnd,
} from "../StaffingService/StaffingServiceElements";
import { MainP } from "../MainSection/MainElements";
import { Button } from "../ButtonElements";
import { useNavigate } from "react-router-dom";

function SiteSafetyPlan() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/contact");
  }

  return (
    <SSPContainer>
      <SSPBg src={plan} alt="plan" />
      <Title>
        <TitleStart className="slide-left"></TitleStart>
        <TitleContent>Site Safety Plan</TitleContent>
        <TitleEnd></TitleEnd>
      </Title>
      <MainP>
        Site safety plans are crucial for ensuring the safety of workers and
        pedestrians in and around job sites. The primary objective of these
        plans is to prevent workplace hazards and accidents. Depending on the
        type of project, there are different site safety plans that must be
        implemented.
      </MainP>
      <SubTitle>Low-Rise Buildings</SubTitle>
      <MainP>
        For low-rise buildings that are 9 stories or below, a superintendent is
        required to oversee the site safety plan. Normally, a PE stamp is not
        required for site safety plans of low-rise buildings. However, if you
        require a PE stamp, we are always ready to assist you in obtaining one.
      </MainP>
      <SubTitle>High-Rise Buildings</SubTitle>
      <MainP>
        High-rise buildings that are 10 stories or more and 100 feet or higher
        require a site safety plan that must be approved by the BEST (Buildings
        Enforcement Safety Team) Squad. It is crucial to ensure that the site
        safety plan is in place and adhered to in order to prevent workplace
        accidents and hazards.
      </MainP>
      <SubTitle>Façade Projects</SubTitle>
      <MainP>
        Façade projects also require a site safety plan approved by the BEST
        Squad. It is important to ensure that the site safety plan is in place
        to protect workers and pedestrians during the project. If you are unsure
        about which site safety plan you require for your project, feel free to
        reach out to us for guidance. We are always ready to assist you to
        ensure that your project is safe for everyone involved.
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

export default SiteSafetyPlan;
