import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
export const AccountOption=(props)=>{
    return(<>
    <div className="flex flex-col bg-white rounded-2xl p-6 pb-8 pt-8" style={{boxShadow:"0 4px 10px rgba(0, 0, 0, 0.2)"}}>
        <div className="flex justify-around">
            <i className={`${props.icon} text-3xl text-blue-400`} ></i>
            <Link className="font-semibold">{props.title}</Link>
        </div>
        <p className="mt-4 ml-1">
            {props.text}
        </p>
    </div>
    </>)
}