import { Link } from "react-router-dom"
import { AnotherHeader } from "../utils/AnotherHeader"
import { useEffect, useRef, useState } from "react"
import { LoadingPage } from "../utils/LoadingPage";

export const SignUp=()=>{
  const [loading, setLoading] = useState(false);
  const [resultLoading, setResultLoading] = useState(false);
  const [form,setForm]=useState({
    "username":'',
    "email":'',
    "password":'',
    "role_id":"2"
  })
  const [warning,setWarning]=useState({
    "username":null,
    "passwordNotSame":null,
    "shortPassword":null,
    "invalidEmail":null
  })
  const isInitialMountEmail=useRef(true)
  const [alreadyExist,setAlreadyExist]=useState({error:null})
  const handleChange=(e)=>{
    const {name,value}=e.target
    setForm((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  const handleKeyDown=(e)=>{
    if(e.key==='Enter'){signup()}
}
  useEffect(()=>{
    if(form.username.length<4 && form.username.length>0){
      setWarning((prev)=>({...prev,"username":"Le nom d'utilisateur doit contenir plus de trois caractere !!"}))
    }else{setWarning((prev)=>({...prev,"username":null}))}
  },[form.username])
  useEffect(()=>{
    if(form.password.length<6 && form.password.length>0){
      setWarning((prev)=>({...prev,"shortPassword":"Le mot de passe doit contenir plus de 6 caractere !!"}))
    }else{setWarning((prev)=>({...prev,"shortPassword":null}))}
  },[form.password])
  useEffect(()=>{
    if(isInitialMountEmail.current){isInitialMountEmail.current=false}
    else if(form.email.length===0){setWarning((prev)=>({...prev,"invalidEmail":null}))}
    else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(form.email)){
        setWarning((prev)=>({...prev,"invalidEmail":"Adresse email invalide,veuillez entrer une autre adresse"}))
    }else{setWarning((prev)=>({...prev,"invalidEmail":null}))}
},[form.email])
  const signup= async ()=>{
    setResultLoading((prev)=>!prev)
    if(form.password!==document.getElementById('confirmedPassword').value){
      setWarning((prev)=>({...prev,"passwordNotSame":"Les deux mot de passe doivent étre les memes !!"}))
      setResultLoading((prev)=>!prev)
    }else{
      await fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(form), 
        })
        .then((response) => response.json()) 
        .then((result) => {
            console.log('Success:', result);
            setResultLoading((prev)=>!prev)
            if("error" in result){
              if(result.error=='duplicate key value violates unique constraint "users_email_key"'){
                setAlreadyExist((prev)=>({...prev,error:"Email déja inscrit !!"}))
              }
              if(result.error=='duplicate key value violates unique constraint "unique_username"'){
                setAlreadyExist((prev)=>({...prev,error:"Username déja utilisé !!"}))
              }
            }else{
              setLoading(true);
              window.location.replace("/login") 
            }
        })
        .catch((error) => {
            console.error('Error:', error);
      });
    }
    }
    return(<>
    {loading?(<LoadingPage text={"Votre compte a été creé avec success"}/>):(<>
      <AnotherHeader/>
    <div className="flex justify-between bg-blue-400 pb-20 pt-10">
        <div className="flex flex-col text-xl justify-start  text-white p-20 pt-36">
            <h1>Nouveau patient</h1>
            <p className="text-xl mt-9 max-w-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium id animi amet cupiditate <br />quae ex, rerum consectetur dolorum ratione sunt ipsa repellat commodi voluptatum rem  laboriosam voluptatibus. Fugiat, minus.</p>
            <div className="text-2xl font-bold mt-8"><p><i className="fa-solid fa-phone mr-3"></i>Besoin d&apos;aide?</p></div>
            <p className="text-2xl font-bold mt-4">+(213)0561037192</p>
        </div>
        <div className=" form w-3/5">
            <div action="" className="flex flex-col  mr-24 ml-20 mt-28 bg-white p-11 pt-7 rounded-2xl">
                <div className="flex  justify-center">
                    <i className="fa-regular fa-user text-6xl text-center mb-5 mt-0 text-blue-400 bg-gray-100 rounded-full p-2"></i>
                </div>
                <input type="text" className='bg-gray-50  p-2 border-solid border-2 border-gray-200 w-full mb-8 text-lg'placeholder="Entrez votre nom d'utilisateur" name="username" value={form.username} onChange={handleChange} required id="username"/>
                {warning.username ===null ? '':<p className="-mt-8 mb-2 text-red-600">{warning.username}</p>}
                <input type="email" className='bg-gray-50  p-2 border-solid border-2 border-gray-200 w-full mb-8 text-lg'placeholder="Entrez votre email" required name='email' value={form.email} onChange={handleChange} id="email"/>
                {warning.invalidEmail===null?'':<p className="-mt-8 mb-2 text-red-600">{warning.invalidEmail}</p>}
                <input type="password" className="bg-gray-50 border-solid border-2 border-gray-200 p-2 mb-8 text-lg " placeholder="Entrez votre mot de passe" id="password" name="password" value={form.password} onChange={handleChange} required/>
                {warning.shortPassword === null ? <></>:<p className="-mt-8 mb-2 text-red-600">{warning.shortPassword}</p>}
                <input type="password" className="bg-gray-50 border-solid border-2 border-gray-200 p-2 mb-8 text-lg " placeholder="Confirmez votre mot de passe" id="confirmedPassword" onKeyDown={handleKeyDown} required/>
                {warning.passwordNotSame === null ? <></>:<p className="-mt-8 mb-2 text-red-600">{warning.passwordNotSame}</p>}
                {alreadyExist.error==null?<></>:<p className="-mt-3 mb-2  text-red-600">{alreadyExist.error}</p>}
                {resultLoading==true?<button className="bg-blue-300 text-white rounded transition-all duration-300 hover:bg-blue-200 ">Attend...</button>:<button className="bg-blue-400 text-white rounded transition-all duration-300 hover:bg-blue-700 hover:scale-105" onClick={signup}>S&apos;identifier</button>}
                <p className="text-black text-base  mt-7 ml-2 ">T&apos;as un compte ? <Link to={'/login'}>Se connecter</Link></p>
            </div>
        </div>
    </div>
    </>)}
    </>)
}