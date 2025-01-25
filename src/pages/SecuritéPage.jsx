import {AnotherHeader} from "../utils/AnotherHeader"
import { Footer } from "../utils/Footer"
import { Link } from "react-router-dom"
export const SecuritéPage=()=>{
    return(<>
    <AnotherHeader/>
    <div className="flex flex-col mt-36 ml-48 mr-48 p-11 justify-center mb-32">
        <h1 className="text-center text-black mb-14">Centre de compte</h1>
        <Link className="p-4 hover:cursor-pointer pl-7 mb-3 hover:text-blue-900" to={`/${document.cookie}/my-account/Sécurité&confidentialité/ChangePassword`} style={{boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)"}}>Changer mot de passe</Link>
        <Link className="text-red-600 p-4 pl-7 hover:cursor-pointer hover:text-red-900" style={{boxShadow:"0 4px 10px rgba(0, 0, 0, 0.2)"}}>Supprimer votre compte</Link>
    </div>
    <Footer/>
    </>)
}