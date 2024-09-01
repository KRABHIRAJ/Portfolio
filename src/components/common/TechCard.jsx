// eslint-disable-next-line react/prop-types
const TechCard = ({title}) => {
  return (
    <div className="bg-[#193755] w-fit pb-1 px-4 rounded-[50px]">
        <p className="text-[#55D3D5] text-sm font-[500]">{title}</p>
    </div>
  )
}

export default TechCard