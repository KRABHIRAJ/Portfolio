import { About, Experience, Projects } from "../index"

const RightContainer = () => {
  return (
    <div className="h-screen overflow-auto pt-32 no-scrollbar">
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default RightContainer