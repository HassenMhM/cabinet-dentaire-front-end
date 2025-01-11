import { useEffect, useState } from "react"
import { AnotherHeader } from "../utils/AnotherHeader"
import { Footer } from "../utils/Footer"

export const ChangePasswordPage=()=>{
    const [form,setForm]=useState({
        "oldPassword":'',
        "newPassword":''
    })
    const [oldPasswordError,setOldPasswordError]=useState({
        error:false,
        message:""
    })
    const [newPasswordError,setNewPasswordError]=useState({
        error:false,
        message:""
    })
    const [passwordChanged,setPasswordChanged]=useState({
        successfuly:false,
        message:""
    })
    const [isResultLoading,setIsResultLoading]=useState(false)
    const handleChange=(e)=>{
        const {name,value}=e.target
        setForm((prev)=>({...prev,[name]:value}))
    }
    const hanldeClick= async()=>{
        setIsResultLoading((prev)=>!prev)
        await fetch(`/api/users/${localStorage.getItem('UserEmail')}/password`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(form), 
            })
            .then((response) => response.json()) 
            .then((result) => {
                console.log('Success:', result);
                setIsResultLoading((prev)=>!prev)
                if(result.message=="Invalid old password"){
                    setOldPasswordError((prev)=>({...prev,error:true,message:"Votre ancien mot de passe est incorrect"}))
                }else{
                    setPasswordChanged((prev)=>({...prev,successfuly:true,message:"Votre mot de passe a est été changé correctement !!"}))
                    setOldPasswordError((prev)=>({...prev,error:false,message:""}))
                    setNewPasswordError((prev)=>({...prev,error:false,message:""}))
                    window.location.replace(`/${localStorage.getItem('AuthSecure')}/my-account/Sécurité&confidentialité`)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
        });
    }
    useEffect(()=>{
        if(form.newPassword.length<6 && form.newPassword.length>0){
            setNewPasswordError((prev)=>({...prev,error:true,message:"Le mot de passe doit contenir plus de 6 caractere !!"}))
        }else{setNewPasswordError((prev)=>({...prev,error:false,message:""}))}
        },[form.newPassword])
    return(<>
        <AnotherHeader/>
        <div className="flex flex-col mt-32 mb-14 bg-white mr-52 ml-52 rounded-2xl pl-12 pr-20 pb-8 pt-8" style={{boxShadow:"0 4px 10px rgba(0, 0, 0, 0.2)"}}>
            <h1 className="text-center text-4xl text-black mb-10">changement de mot de passe</h1>
            <input type="password" name="oldPassword" className='bg-gray-50  p-2 border-solid border-2 border-gray-200  mb-8 text-lg' id="password" value={form.oldPassword} onChange={handleChange} placeholder="Ecrire votre ancien mot de passe" />
            {oldPasswordError.error==true?<p className="-mt-8 mb-2 text-red-600">{oldPasswordError.message}</p>:''}
            <input type="password" name="newPassword" className='bg-gray-50  p-2 border-solid border-2 border-gray-200  mb-8 text-lg' value={form.newPassword} onChange={handleChange} placeholder="Ecrire un nouveau mot de passe" />
            {newPasswordError.error==true?<p className="-mt-8 mb-2 text-red-600">{newPasswordError.message}</p>:''}
            {isResultLoading==true?<button className="bg-blue-200 text-white rounded transition-all duration-300 hover:bg-blue-300">Attend...</button>:
            <button className="bg-blue-400 text-white rounded transition-all duration-300 hover:bg-blue-700 hover:scale-105" onClick={hanldeClick}>Enregistré</button>}
            <p className="text-blue-400 text-base  mt-7 ml-2 ">Mot de passe oublié ?</p>
            {passwordChanged.successfuly==true?<p className="text-green-500 m-0">{passwordChanged.message}</p>:""}
        </div>
        <Footer/>
    </>)
}