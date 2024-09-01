import { TechCard } from "../../index";

/* eslint-disable react/prop-types */
const Card = ({
  leftDesc,
  title,
  description,
  techstack,
  isExperienceCard,
}) => {
  return (
    <div className={`${!isExperienceCard && 'items-center'} flex group cursor-pointer  p-4 rounded-lg mb-4 hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg`}>
      {isExperienceCard ? (
        <div className="flex-[0.3] mt-[2px]">
          <p className="text-sm font-[500] uppercase">{leftDesc}</p>
        </div>
      ) : (
        <div className="flex-[0.3] p-2 pr-4 rounded-lg">
            <img className="rounded-lg" src={leftDesc} alt={'bannerImg'} />
        </div>
      )}
      <div className="flex-[0.7]">
        <p className="text-slate-200 group-hover:text-[#55D3D5] font-[600] cursor-pointer">
          {title}
        </p>
        <p className="text-[15px] my-2">{description}</p>
        <div className="flex items-center flex-wrap gap-2">
          {techstack?.map((tech) => {
            return <TechCard key={tech} title={tech} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
