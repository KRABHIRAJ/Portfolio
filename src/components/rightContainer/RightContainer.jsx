import { About, Experience } from "../index"

const RightContainer = () => {
  return (
    <div className="h-screen overflow-auto pt-32 no-scrollbar">
      <About />
      <Experience />
    </div>
  )
}

export default RightContainer