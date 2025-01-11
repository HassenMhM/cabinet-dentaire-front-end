import { useEffect, useRef, useState } from "react"
import { AnotherHeader } from "../utils/AnotherHeader"
import { Footer } from "../utils/Footer"
import { LoadingPage } from "../utils/LoadingPage"
import html2pdf from 'html2pdf.js';
export const RendezVous=()=>{
    const formRef = useRef();
    const [form,setForm]=useState({
        name:"",
        surname:"",
        phone_number:"",
        email:"",
    })
    const isInitialMountName=useRef(true)
    const isInitialMountSurname=useRef(true)
    const isInitialMountPhoneNumber=useRef(true)
    const isInitialMountEmail=useRef(true)
    const [isFormLoading,setIsFormLoading]=useState(false)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState({
        name:{
            error:false,
            message:""
        },
        surname:{
            error:false,
            message:""
        },
        phone_number:{
            error:false,
            message:""
        },
        email:{
            error:false,
            message:""
        }
    })
    const [aleardyExist,setAleardyExist]=useState({error:false,message:""})
    useEffect(()=>{
        if(isInitialMountName.current){isInitialMountName.current=false}
        else if(!/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,50}$/.test(form.name)){
            setError((prev)=>({...prev,name:{error:true,message:"Nom invalide,veuillez entrer un autre nom"}}))
        }else{setError((prev)=>({...prev,name:{error:false,message:""}}))}
    },[form.name])
    useEffect(()=>{
        if(isInitialMountSurname.current){isInitialMountSurname.current=false}
        else if(!/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,50}$/.test(form.surname)){
            setError((prev)=>({...prev,surname:{error:true,message:"Prenom invalide,veuillez entrer un autre prenom"}}))
        }else{setError((prev)=>({...prev,surname:{error:false,message:""}}))}
    },[form.surname])
    useEffect(()=>{
        if(isInitialMountPhoneNumber.current){isInitialMountPhoneNumber.current=false}
        else if(!/^(0(5|6|7)[0-9]{8}|025[0-9]{6})$/.test(form.phone_number)){
            setError((prev)=>({...prev,phone_number:{error:true,message:"Numero de telephone invalide,veuillez entrer un autre numero"}}))
        }else{setError((prev)=>({...prev,phone_number:{error:false,message:""}}))}
    },[form.phone_number])
    useEffect(()=>{
        if(isInitialMountEmail.current){isInitialMountEmail.current=false}
        else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(form.email)){
            setError((prev)=>({...prev,email:{error:true,message:"Adresse email invalide,veuillez entrer une autre adresse"}}))
        }else{setError((prev)=>({...prev,email:{error:false,message:""}}))}
    },[form.email])
    const handleChange=(e)=>{
        const {name,value}=e.target
        setForm((prev)=>({...prev,[name]:value}))
    }
    const errorFound=()=>{
        if((error.name.error==true)||(error.surname.error==true)||(error.phone_number.error==true)||(error.email.error==true)) return true
        else return false
    }
    const generatePDF = () => {
            const element = formRef.current;
            element.style.display='inline'
            const options = {
                margin: 10,
                filename: 'carte-rendez-vous.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
            html2pdf().from(element).set(options).save();
            setTimeout(() => {
                setIsFormLoading(prev=>!prev)
                setLoading(true)
                window.location.replace(`/`)
            }, 3000);
        };
    const handleClick= async ()=>{
        if(form.name.length==0){setError((prev)=>({...prev,name:{error:true,message:'Veuillez entrer votre nom'}}))}
        if(form.surname.length==0){setError((prev)=>({...prev,surname:{error:true,message:'Veuillez entrer votre prenom'}}))}
        if(form.phone_number.length==0){setError((prev)=>({...prev,phone_number:{error:true,message:'Veuillez entrer votre numero de telephone'}}))}
        if(form.email.length==0){setError((prev)=>({...prev,email:{error:true,message:'Veuillez entrer votre adresse email'}}))}
        if(errorFound()) return(0)
        setIsFormLoading(prev=>!prev)
        await fetch("/api/patients/",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(form),
        })
        .then((res)=>res.json())
        .then((result)=>{
            console.log("Success:",result)
            if("error" in result){
                setIsFormLoading(prev=>!prev)
                setAleardyExist((prev)=>({...prev,error:true,message:"Adresse email deja utilisé !"}))
            }else{
                setAleardyExist((prev)=>({...prev,error:false,message:''}))
                generatePDF()
            }
        })
    }
    return(<>
    {loading?(<LoadingPage text={"Votre rendez vous a été enregsitré"}/>):
    <>
    <AnotherHeader/>
    <div className="flex flex-col mt-32 mb-14 bg-white mr-52 ml-52 rounded-2xl pl-12 pr-20 pb-8 pt-8" style={{boxShadow:"0 4px 10px rgba(0, 0, 0, 0.2)"}}>
        <h1 className="text-center text-4xl text-black mb-10">Prendre rendez vous</h1>
        <p className="text-lg text-black mb-2">Nom</p><input type="text" name="name" value={form.name} className='bg-gray-50  p-2 border-solid border-2 border-gray-200  mb-8 text-lg' onChange={handleChange} required/>
        {error.name.error ?<p className="-mt-8 mb-2 text-red-600">{error.name.message}</p>:''}
        <p className="text-lg text-black mb-2">Prenom</p><input type="text" name="surname" value={form.surname} className='bg-gray-50  p-2 border-solid border-2 border-gray-200  mb-8 text-lg' onChange={handleChange} required/>
        {error.surname.error ?<p className="-mt-8 mb-2 text-red-600">{error.surname.message}</p>:''}
        <p className="text-lg text-black mb-2">Numero de telephone</p><input type="tel" name="phone_number" value={form.phone_number} className='bg-gray-50  p-2 border-solid border-2 border-gray-200  mb-8 text-lg' onChange={handleChange} required/>
        {error.phone_number.error ?<p className="-mt-8 mb-2 text-red-600">{error.phone_number.message}</p>:''}
        <p className="text-lg text-black mb-2">Adresse email</p><input type="email" name="email" value={form.email} className='bg-gray-50  p-2 border-solid border-2 border-gray-200  mb-8 text-lg' onChange={handleChange} required/>
        {error.email.error ?<p className="-mt-8 mb-2 text-red-600">{error.email.message}</p>:''}
        <p className="text-lg text-black mb-2">Tu est disponible a partir du</p><input type="date" name="date" className='bg-gray-50  p-2 border-solid border-2 border-gray-200  mb-8 text-lg' onChange={handleChange} required/>
        {aleardyExist.error? <p className="-mt-8 mb-2 text-red-600">{aleardyExist.message}</p>:''}
        {isFormLoading?<button className="bg-blue-200 text-white rounded transition-all duration-300 hover:bg-blue-300 hover:scale-105">Attend...</button>:<button className="bg-blue-400 text-white rounded transition-all duration-300 hover:bg-blue-700 hover:scale-105" onClick={handleClick}>Envoyé</button>}
    </div>
    <Footer/>
    <div ref={formRef} className="flex flex-col ml-72 mr-72 mt-2  p-8 pl-14" style={{display:'none'}} >
        <div className=" text-3xs" >
            <h3 className='text-3xl'><i className="fa-solid fa-tooth text-slate-500 mr-2"></i><span className='text-blue-400 font-bold'>Cabinet</span> <span className='font-normal text-slate-500'>dentaire</span></h3>
        </div>
        <div className='flex flex-col ' >
            <h2 className='text-2xl font-normal text-slate-500 text-center mt-6 mb-12 '>Carte ren<span className="text-blue-400">dez vous</span></h2>
            <p className='text-lg text-start mb-4'><span className="font-semibold">Nom:</span> {form.name}</p>
            <p className='text-lg text-start mb-4'><span className="font-semibold">Prenom:</span> {form.surname}</p>
            <p className='text-lg text-start mb-4'><span className="font-semibold">Numero de telephone:</span> {form.phone_number}</p>
            <p className='text-lg text-start mb-4'><span className="font-semibold">Adresse email:</span> {form.email}</p>
            <p className='text-lg text-start mb-4'><span className="font-semibold">Date de rendez vous:</span> 13/05/2024</p>
            <p className='text-lg text-start mb-4'><span className="font-semibold">Centre:</span> Cabinet dentaire</p>
            <p className="mt-4">Si vous souhaitez modifier ou annuler ce rendez-vous, veuillez effectuer la demande <br />d&apos;annulation de rendez vous : <span className="text-blue-400">https://cabinet-dentaire/annuler-rendez-vous</span><br />
            <span className="font-semibold">Attention:</span>Il n&apos;y a pas de garantie de trouver un autre rendez-vous à la place de celui-ci.
            </p>
            <p className='text-2xl text-blue-600 mt-8 text-center'>Bienvenue chez nous!</p>
        </div>
    </div>
    </>
    }
    </>)
}