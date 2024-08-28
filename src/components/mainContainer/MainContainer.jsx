import  {LeftContainer, RightContainer } from "../index"

const MainContainer = () => {
  return (
    <div className="flex px-20">
        <div className="flex flex-[0.5]">
            <LeftContainer />
        </div>
        <div className="flex flex-[0.5]">
            <RightContainer />
        </div>
    </div>
  )
}

export default MainContainer