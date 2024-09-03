/* eslint-disable react/prop-types */
const Header = ({title}) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white p-4 shadow-md z-10">
        <h1 id="section-header" className="text-xl font-bold text-center">{title}</h1>
    </div>
  )
}
export default Header