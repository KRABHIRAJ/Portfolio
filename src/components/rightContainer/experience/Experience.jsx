 
import {
  experienceDetail,
} from "../../../utils/constants";
import {Card} from "../../index";

const Experience = () => {
  return (
    <div className="mb-20 lg:h-screen">
      {experienceDetail?.map((experience) => {
        return (
          <Card
            key={experience.position}
            leftDesc={experience.duration}
            title={`${experience.position} . ${experience.company}`}
            description={experience.description}
            techstack={experience.techStack}
            isExperienceCard={true}
          />
        );
      })}
    </div>
  );
};

export default Experience;
