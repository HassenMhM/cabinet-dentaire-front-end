import { Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const ProtectedLogedRoute=({children})=>{
    const isLoggedIn=localStorage.getItem("isAuth")||false
    const token=localStorage.getItem('AuthSecure')
    const link=`/${token}` 
    return isLoggedIn=="true" ?<Navigate to={link} replace />:children
}