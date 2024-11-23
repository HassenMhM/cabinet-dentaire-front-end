import { useNavigate } from "react-router-dom"

export const HomePage=()=>{
    const navigate=useNavigate()
    return(<>
    <div className="flex text-center flex-col text-white mt-56">
        <p className="text-5xl font-serif">Une vie meilleure commence par <br />un beau sourire</p>
        <p className="text-xl font-serif mt-3">Notre objectif rendre votre sourire plus que beau</p>
        <button className="text-xl rounded-xl bg-slate-300 text-black mt-5 self-center" onClick={()=>navigate('/cabinait-dentaire/login')}>Prendre rendez-vous</button>
    </div> 
    </>)
}