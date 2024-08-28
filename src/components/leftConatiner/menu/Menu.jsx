import {MenuItem} from "../../index"

const Menu = () => {
  return (
    <div className="flex flex-col justify-center gap-y-4 mt-8">
        <MenuItem title={'ABOUT'} />
        <MenuItem title={'EXPERIENCE'} />
        <MenuItem title={'PROJECT'} />
    </div>
  )
}

export default Menu