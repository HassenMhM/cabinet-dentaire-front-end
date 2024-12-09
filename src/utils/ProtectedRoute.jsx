import { Navigate, useParams } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const ProtectedRoute=({children})=>{
    const isLoggedIn=!!localStorage.getItem("isAuth")
    const {token}=useParams()
    const link=`/${token}`
    return isLoggedIn && localStorage.getItem('AuthSecure')===token?children:<Navigate to={link} replace />
}