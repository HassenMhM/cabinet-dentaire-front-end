import background from '../assets/home-background.jpg'
export const Header=()=>{
    return(
    <>
    <img src={background} className='absolute -z-10 top-0 h-max w-screen brightness-50' alt="" />
    <div className="flex  justify-evenly mt-7">
        <div className="mr-20 text-3xs -mt-2" >
            <h3 className='text-3xl'><span className='text-white font-bold'>Cabinet</span> <span className='font-normal text-slate-200'>dentaire</span></h3>
        </div>
        <div className="flex flex-row">
            <a href="" className="mr-3 ml-3 text-white font-extralight text-lg " >Accueil</a>
            <a href="#apropos" className="mr-3 ml-3 text-white font-extralight text-lg" >A propos</a>
            <a href="#services" className="mr-3 ml-3 text-white font-extralight text-lg" >Services</a>
            <a href="" className="mr-3 ml-3 text-white font-extralight text-lg">Rendez-vous</a>
            <a href="" className="mr-3 ml-3 text-white font-extralight text-lg">informations patients</a>
            <a href="" className="mr-3 ml-3 text-white font-extralight text-lg">Galerie</a>
            <a href="" className="mr-3 ml-3 text-white font-extralight text-lg">Blog</a>
            <a href="" className="mr-3 ml-3 text-white font-extralight text-lg">Contact</a>
        </div>
    </div>
    </>)
}