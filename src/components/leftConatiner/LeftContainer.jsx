import {Menu, SocialLinks} from "../index"

const LeftContainer = () => {
  return (
    <div className="flex lg:fixed flex-col justify-center lg:m-auto lg:h-screen m-0"> 
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Abhiraj Kumar</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software Engineer</h2>
        <p className="mt-4 max-w-xs leading-normal">I build pixel-perfect, engaging, and accessible digital experiences.</p>
        <Menu />
        <SocialLinks />
    </div>
  )
}

export default LeftContainer