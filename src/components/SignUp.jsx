import { Link } from "react-router-dom"
import { AnotherHeader } from "../utils/AnotherHeader"
import { useState } from "react"

export const SignUp=()=>{
  const [data,setData]=useState('')
    const signup=()=>{
      const name=document.getElementById('username').value
        const email=document.getElementById('email').value
        const password=document.getElementById('password').value
        setData({
          "name":name,
          "email":email,
          "password":password,
          "role_id":"2"
        })
        fetch('/api/users/register', {
            method: 'POST', // HTTP method
            headers: {
              'Content-Type': 'application/json', // Sending JSON data
            },
            body: JSON.stringify(data), // Converting JS object to JSON string
          })
            .then((response) => response.json()) // Parsing JSON response
            .then((result) => {
              console.log('Success:', result);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }
    console.log(data)
    return(<>
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
                <input type="text" className='bg-gray-50  p-2 border-solid border-2 border-gray-200  mb-8 text-lg'placeholder="Entrez votre nom d'utilisateur" required id="username"/>
                <input type="email" className='bg-gray-50  p-2 border-solid border-2 border-gray-200  mb-8 text-lg'placeholder="Entrez votre email" required id="email"/>
                <input type="password" className="bg-gray-50 border-solid border-2 border-gray-200 p-2 mb-8 text-lg " placeholder="Entrez votre mot de passe"  required/>
                <input type="password" className="bg-gray-50 border-solid border-2 border-gray-200 p-2 mb-8 text-lg " placeholder="Confirmez votre mot de passe" id="password" required/>
                <button className="bg-blue-400 text-white rounded transition-all duration-300 hover:bg-blue-700 hover:scale-105" onClick={signup}>S&apos;identifier</button>
                <p className="text-black text-base  mt-7 ml-2 ">T&apos;as un compte ? <Link to={'/cabinait-dentaire/login'}>Se connecter</Link></p>
            </div>
        </div>
    </div>
    </>)
}