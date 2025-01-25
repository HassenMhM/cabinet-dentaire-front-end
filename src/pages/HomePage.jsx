
export const HomePage=()=>{
    const handleClick=()=>{
        document.cookie?window.location.replace(`${document.cookie}/rendez-vous`):window.location.replace('/login')
    }
    return(<>
    <div className="flex text-center flex-col text-white mt-56">
        <p className="text-5xl font-serif">Une vie meilleure commence par <br />un beau sourire</p>
        <p className="text-xl font-serif mt-3">Notre objectif rendre votre sourire plus que beau</p>
        <button className="text-xl rounded-xl bg-slate-300 text-black mt-5 self-center transition-all duration-300 hover:bg-slate-400  hover:scale-105 " onClick={handleClick}>Prendre rendez-vous</button>
    </div> 
    </>)
}