
export const AnotherHeader=()=>{
    return(
    <>
    <div className="flex  justify-evenly pt-7 pb-5 fixed top-0 bg-white w-full" style={{boxShadow:"0 10px 15px rgba(0, 0, 0, 0.1)"}} >
        <div className="mr-20 text-3xs -mt-2" >
            <h3 className='text-3xl'><i className="fa-solid fa-tooth text-slate-500 mr-2"></i><span className='text-blue-400 font-bold'>Cabinet</span> <span className='font-normal text-slate-500'>El Shifa</span></h3>
        </div>
        <div className="flex flex-row">
            <a href="/" className="mr-3 ml-3 text-blue-400 font-semibold  text-lg hover:cursor-pointer ">Accueil</a>
            <a href="/#apropos" className="mr-3 ml-3 text-blue-400 font-semibold  text-lg hover:cursor-pointer">A propos</a>
            <a href="/#services" className="mr-3 ml-3 text-blue-400 font-semibold  text-lg hover:cursor-pointer">Services</a>
            <a href="/#gallery" className="mr-3 ml-3 text-blue-400 font-semibold  text-lg hover:cursor-pointer">Galerie</a>
            <a href="/#apropos" className="mr-3 ml-3 text-blue-400 font-semibold  text-lg hover:cursor-pointer">Blog</a>
            <a href="/#contact" className="mr-3 ml-3 text-blue-400 font-semibold  text-lg hover:cursor-pointer">Contact</a>
        </div>
    </div>
    </>)
}