import { Link } from "react-scroll"
import {MenuItem} from "../../index"

const Menu = () => {
  return (
    <div className="flex flex-col justify-center gap-y-4 mt-8">
      <Link to="about" spy={true} smooth={true} offset={-60} duration={500}>
          <MenuItem title={'ABOUT'} />
      </Link>
      <Link to="experience" spy={true} smooth={true} offset={-60} duration={500}>
          <MenuItem title={'EXPERIENCE'} />
      </Link>
      <Link to="project" spy={true} smooth={true} offset={-60} duration={500}>
          <MenuItem title={'PROJECT'} />
      </Link>
    </div>
  )
}

export default Menu