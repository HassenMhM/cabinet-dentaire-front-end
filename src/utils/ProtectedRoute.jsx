import { Navigate, useParams } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const ProtectedRoute=({children})=>{
    const {token}=useParams()
    const link=`/${token}`
    return document.cookie===token?children:<Navigate to={link} replace />
}