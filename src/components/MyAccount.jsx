import { AnotherHeader } from "../utils/AnotherHeader"
import { AccountOption } from "./AccountOption"
import { Footer } from "../utils/Footer"

export const MyAccount=()=>{
    return(<>
    <AnotherHeader/>
    <div className="grid grid-cols-4 gap-5 bg-white text-black pb-12 mt-32 pr-8 pl-8 pt-10">
        <AccountOption title={"Sécurité & confidentialité"} icon={"fa-solid fa-lock"} text={"Changer mot de passe, supprimer compte"} link={`/${localStorage.getItem('AuthSecure')}/my-account/Sécurité&confidentialité`} />
        <AccountOption title={"Rendez vous & calendrier"} icon={"fa-regular fa-calendar-days"} text={"Historique des rendez vous, calendrier"}/>
        <AccountOption title={"Support & aide"} icon={"fa-solid fa-phone"} text={"Contacter le support, FAQ, soumettre des commentaires"}/>
        <AccountOption title={"Mes informations & addresse"} icon={"fa-solid fa-tachograph-digital"} text={"informations personelle, addresse, date de naissance..."}/>
    </div>
    <div className="flex justify-center">
        <button className="bg-white text-red-600 mt-16 pl-7 pr-7 mb-24" style={{boxShadow:"0 4px 10px rgba(0, 0, 0, 0.2)"}} onClick={()=>{localStorage.setItem('isAuth',"false");localStorage.setItem('AuthSecure',"") ;window.location.replace('/')}}>Se deconnecter</button>
    </div>
    <Footer/>
    </>)
}