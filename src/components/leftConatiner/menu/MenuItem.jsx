/* eslint-disable react/prop-types */
const MenuItem = ({title}) => {
  return (
    <div className="group cursor-pointer flex items-center gap-x-2 px-2 w-fit">
        <div className="h-[2px] w-8 group-hover:w-16 bg-slate-600 group-hover:bg-slate-200 transition-all" />
        <p className="group-hover:text-slate-200 text-slate-500 text-xs uppercase font-bold tracking-widest transition-all">{title}</p>
    </div>
  )
}

export default MenuItem