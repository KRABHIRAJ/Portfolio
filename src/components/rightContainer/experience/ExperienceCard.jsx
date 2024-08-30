import {TechCard} from "../../index"

/* eslint-disable react/prop-types */
const ExperienceCard = ({date, company, position, description, techstack}) => {
  return (
    <div>
        <div>
            <p>{date}</p>
        </div>
        <div>
            <p>{`${position} . ${company}`}</p>
            <p>{description}</p>
            {
                techstack?.map((tech) => {
                    return <TechCard key={tech} title={tech}/>
                })
            }
        </div>
    </div>
  )
}

export default ExperienceCard