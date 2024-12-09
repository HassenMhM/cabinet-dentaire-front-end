import { useEffect } from "react"
import { AnotherHeader } from "../utils/AnotherHeader"
import { AccountOption } from "./AccountOption"

export const MyAccount=()=>{
    const disabelScroll=()=>{
        document.body.style.overflow="hidden"
    }
    useEffect(()=>{
        disabelScroll()
    },[])
    return(<>
    <AnotherHeader/>
    <div className="flex justify-center mt-28 bg-whitext-white pt-3">
        <div className="flex justify-around bg-white  rounded-2xl p-10 pt-9 pb-9" style={{boxShadow:"0 4px 10px rgba(0, 0, 0, 0.2)"}}>
            <i className="fa-regular fa-user text-6xl text-blue-400 bg-gray-100 rounded-full mr-9 p-10"></i>
            <div className="flex flex-col">
                <h2 className="font-semibold text-2xl mb-4">Mes informations</h2>
                <h2 className="font-semibold">Nom d&apos;utilisateur :</h2>
                <p>Hassenmh</p>
                <h2 className="font-semibold">Email :</h2>
                <p>hassenmh@gmail.com</p>
            </div>
        </div> 
    </div>
    <div className="grid grid-cols-4 gap-5 bg-white text-black pb-12 pr-8 pl-8 pt-10">
        <AccountOption title={"Sécurité & confidentialité"} icon={"fa-solid fa-lock"} text={"Changer mot de passe, supprimer compte"}/>
        <AccountOption title={"Rendez vous & calendrier"} icon={"fa-regular fa-calendar-days"} text={"Historique des rendez vous, calendrier"}/>
        <AccountOption title={"Support & aide"} icon={"fa-solid fa-phone"} text={"Contacter le support, FAQ, soumettre des commentaires"}/>
        <AccountOption title={"Mes informations & addresse"} icon={"fa-solid fa-tachograph-digital"} text={"informations personelle, addresse, date de naissance..."}/>
    </div>
    <div className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Cabinet Dentaire. Tous droits réservés.</p>
    </div>
    </>)
}