import { CurrentDescription, TechStack } from "../../../utils/constants";
import ExperienceCard from "./ExperienceCard";

/* eslint-disable react/no-unescaped-entities */
const Experience = () => {
  return (
    <div>
      <ExperienceCard
        date={"Oct 2023 - Present"}
        company={"Vince"}
        position={"Software Engineer"}
        description={CurrentDescription}
        techstack={TechStack}
      />
    </div>
  );
};

export default Experience;
