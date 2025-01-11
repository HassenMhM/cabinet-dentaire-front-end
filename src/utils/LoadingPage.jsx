/* eslint-disable react/prop-types */
import { AnotherHeader } from "./AnotherHeader"
import '../utils/animation.css'
export const LoadingPage=(props)=>{
    return(<>
    <AnotherHeader/> 
    <div className="flex flex-col pt-60">
        <i className="fa-solid fa-spinner text-center text-8xl rotate-animation" ></i>
        <p className="text-xl mt-4 text-center text-green-500">{props.text}</p>
    </div>
    </>)
}
