import { SocialLink } from "../../index"
import github from '../../../assets/github.svg';
import linkedin from '../../../assets/linkedin.svg';
import insta from '../../../assets/insta.svg';

const SocialLinks = () => {
  return (
    <div className="flex gap-x-4 mt-8">
        <SocialLink icon={github} link={'https://github.com/KRABHIRAJ'} />
        <SocialLink icon={linkedin} link={'https://www.linkedin.com/in/krabhiraj'}/>
        <SocialLink icon={insta} link={'https://www.instagram.com/kr__abhiraj/'}/>
    </div>
  )
}

export default SocialLinks