import { About, Experience, Heading, Projects } from "../index"

const RightContainer = () => {
  return (
    <div className="lg:pt-32 pt-10">
      <Heading title={'ABOUT'} />
      <About />

      <Heading title={'Experience'} />
      <Experience />
      
      <Heading title={'Projects'} />
      <Projects />
    </div>
  )
}

export default RightContainer