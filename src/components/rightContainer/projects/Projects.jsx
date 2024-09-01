import { projectDetail } from "../../../utils/constants";
import { Card } from "../../index";

const Projects = () => {
  const openProject = (githubUrl) => {
    window.open(githubUrl, "_blank");
  };
  return (
    <div id="project">
      {projectDetail?.map((project) => {
        return (
          <div
            onClick={() => openProject(project.githubUrl)}
            key={project.title}
          >
            <Card
              title={project.title}
              leftDesc={project.imageUrl}
              description={project.description}
              techstack={project.techStack}
              isExperienceCard={false}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
