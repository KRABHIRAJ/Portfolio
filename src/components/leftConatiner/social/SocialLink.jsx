/* eslint-disable react/prop-types */
const SocialLink = ({icon, link}) => {
    const handleLinkClick = () => {
        window.open(link, '_blank');
    }
  return (
    <div onClick={handleLinkClick} className="bg-slate-500 p-1 w-fit rounded-lg cursor-pointer" >
        <img src={icon} alt={'Logo'} height={20} width={20}/>
    </div>
  )
}

export default SocialLink