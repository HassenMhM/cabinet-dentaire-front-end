import { Link } from "react-router-dom"
import { AnotherHeader } from "../utils/AnotherHeader"
import { useState } from "react"

export const Login=()=>{
    const [form,setForm]=useState({
        "email":"",
        "password":""
    })
    const [notExist,setNotExist]=useState({
        error:false,message:""
    })
    const [passwordWarning,setpasswordWarning]=useState({error:false,message:""})
    const handleChange=(e)=>{
        const {name,value}=e.target
        setForm((prev)=>({...prev,[name]:value}))
    }
    const handleKeyDown=(e)=>{
        if(e.key==='Enter'){logIn()}
    }
    const logIn = async()=>{
        await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(form), 
            })
            .then((response) => response.json()) 
            .then((result) => {
                console.log('Success:', result);
                if(result.message=="Invalid password"||form.password.length===0){
                    setpasswordWarning((prev)=>({...prev,error:true,message:"Votre mot de passe est incorrect !"}))
                }else if(result.message==="User not found"){
                    setNotExist((prev)=>({...prev,error:true,message:"Utilisateur n'existe pas"}))
                }else if("token" in result){
                    localStorage.setItem('isAuth',"true")
                    localStorage.setItem('AuthSecure',result.token)
                    window.location.replace(`/${result.token}`)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
        });
    }
    return(
    <>
    <AnotherHeader/>
    <div className="flex justify-between bg-blue-400 h-full pb-40 pt-10">
        <div className="flex flex-col text-xl justify-start  text-white p-20 pt-36">
            <h1>Se connecter</h1>
            <p className="text-xl mt-9 max-w-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium id animi amet cupiditate <br />quae ex, rerum consectetur dolorum ratione sunt ipsa repellat commodi voluptatum rem  laboriosam voluptatibus. Fugiat, minus.</p>
            <div className="text-2xl font-bold mt-8"><p><i className="fa-solid fa-phone mr-3"></i>Besoin d&apos;aide?</p></div>
            <p className="text-2xl font-bold mt-4">+(213)0561037192</p>
        </div>
        <div className=" form w-3/5">
            <div action="" className="flex flex-col  mr-24 ml-20 mt-28 bg-white p-11 pt-7 rounded-2xl">
                <div className="flex  justify-center">
                    <i className="fa-regular fa-user text-6xl text-center mb-5 mt-0 text-blue-400 bg-gray-100 rounded-full p-2"></i>
                </div>
                <input type="email" className='bg-gray-50  p-2 border-solid border-2 border-gray-200  mb-8 text-lg'placeholder="Entrez votre email" id='email' name='email' value={form.email} onChange={handleChange} required/>
                {notExist.error?<p className="-mt-8 mb-2 text-red-600">{notExist.message}</p>:''}
                <input type="password" className="bg-gray-50 border-solid border-2 border-gray-200 p-2 mb-8 text-lg " placeholder="Entrez votre mot de passe" id='password' name='password' value={form.password} onChange={handleChange} onKeyDown={handleKeyDown} required/>
                {passwordWarning.error?<p className="-mt-8 mb-2 text-red-600">{passwordWarning.message}</p>:''}
                <button className="bg-blue-400 text-white rounded transition-all duration-300 hover:bg-blue-700 hover:scale-105" onClick={logIn}>Se connecter</button>
                <p className="text-black text-base  mt-7 ml-2 ">T&apos;as pas un compte ? <Link to={'/signup'}>S&apos;identifier</Link></p>
            </div>
        </div>
    </div>
    </>)
}