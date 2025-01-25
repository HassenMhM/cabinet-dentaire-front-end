/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import background from '../assets/home-background.jpg'
export const Header=(props)=>{
    const logedIn=props.logedIn
    return(
    <>
    <img src={background} className='absolute -z-10 top-0 h-max w-screen brightness-50' alt="" />
    <div className="flex  justify-evenly mt-7">
        <div className="mr-20 text-3xs -mt-2" >
            <h3 className='text-3xl'><i className="fa-solid fa-tooth text-white mr-2"></i><span className='text-white font-bold'>Cabinet</span> <span className='text-white'>El <span className='text-blue-400' >Shifa</span></span></h3>
        </div>
        <div className="flex flex-row">
            <a href="" className="mr-3 ml-3 text-white font-extralight text-lg " >Accueil</a>
            <a href="#apropos" className="mr-3 ml-3 text-white font-extralight text-lg" >A propos</a>
            <a href="#services" className="mr-3 ml-3 text-white font-extralight text-lg" >Services</a>
            <a href="#gallery" className="mr-3 ml-3 text-white font-extralight text-lg">Galerie</a>
            <a href="#apropos" className="mr-3 ml-3 text-white font-extralight text-lg">Blog</a>
            <a href="#contact" className="mr-3 ml-3 text-white font-extralight text-lg">Contact</a>
            {logedIn==true?<Link to={`/${document.cookie}/my-account`} className="mr-3 ml-3 text-white font-extralight text-lg">Mon compte</Link>:<a href="/login"  className="mr-3 ml-3 text-white font-extralight text-lg">Se connecter</a>}
        </div>
    </div>
    </>)
}