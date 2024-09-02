import  {LeftContainer, RightContainer } from "../index"

const MainContainer = () => {
  return (
    <div className="flex flex-col lg:flex-row px-4 py-8 md:px-10 md:py-16 lg:py-0 lg:px-20  ">
        <div className="flex lg:flex-[0.5]">
            <LeftContainer />
        </div>
        <div className="lg:flex-[0.5]">
            <RightContainer />
        </div>
    </div>
  )
}

export default MainContainer