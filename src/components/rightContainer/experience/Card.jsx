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
    <div className={`${!isExperienceCard && 'items-center'} flex flex-col md:flex-row group cursor-pointer py-4 lg:p-4 rounded-lg mb-4 lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg`}>
      {isExperienceCard ? (
        <div className="md:flex-[0.3] my-4 md:my-0 mt-[2px]">
          <p className="text-sm font-[500] uppercase">{leftDesc}</p>
        </div>
      ) : (
        <div className="md:flex-[0.3] md:p-2 md:pr-4 my-4 md:my-0 rounded-lg">
            <img className="rounded-lg w-[200px]" src={leftDesc} alt={'bannerImg'} />
        </div>
      )}
      <div className="md:flex-[0.7]">
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
