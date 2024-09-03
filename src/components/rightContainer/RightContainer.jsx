import { About, Experience, Heading, Projects } from "../index";

const RightContainer = () => {
  
  return (
    <div>
      <div className="lg:pt-32 pt-10">
        <section id="about">
          <Heading title={"ABOUT"} />
          <About />
        </section>

        <section id="experience">
          <Heading title={"Experience"} />
          <Experience />
        </section>

        <section id="project">
          <Heading title={"Projects"} />
          <Projects />
        </section>
      </div>
    </div>
  );
};

export default RightContainer;
