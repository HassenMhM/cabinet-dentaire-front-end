import { Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const ProtectedLogedRoute=({children})=>{
    var token=null
    document.cookie==''?token=null:token=document.cookie
    const link=`/${token}` 
    return token!=null ?<Navigate to={link} replace />:children
}