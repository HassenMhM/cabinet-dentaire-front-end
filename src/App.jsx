import { Login } from "./components/Login"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LandingPage from "./LandingPage"
import { SignUp } from "./components/SignUp"
import { ProtectedRoute } from "./utils/ProtectedRoute"
import { ProtectedLogedRoute } from "./utils/ProtectedLogedRoute"
import { MyAccount } from "./components/MyAccount"
import { SecuritéPage } from "./components/SecuritéPage"
import { ChangePasswordPage } from "./components/ChangePasswordPage"
import { RendezVous } from "./components/RendezVous"

const router=createBrowserRouter([
  {
    path:"/",
    element:<ProtectedLogedRoute><LandingPage logedIn={false}/></ProtectedLogedRoute> 
  },
  {
    path:"/login",
    element:<ProtectedLogedRoute><Login/></ProtectedLogedRoute>,
  },
  {
    path:"/signup",
    element:<ProtectedLogedRoute><SignUp/></ProtectedLogedRoute>,
  },
  {
    path:"/:token",
    element:<ProtectedRoute><LandingPage logedIn={true}/></ProtectedRoute>
  },
  {
    path:"/:token/my-account",
    element:<ProtectedRoute><MyAccount/></ProtectedRoute> 
  },
  {
    path:"/:token/my-account/Sécurité&confidentialité",
    element:<ProtectedRoute><SecuritéPage/></ProtectedRoute> 
  },
  {
    path:"/:token/my-account/Sécurité&confidentialité/ChangePassword",
    element:<ProtectedRoute><ChangePasswordPage/></ProtectedRoute> 
  },
  {
    path:"/:token/rendez-vous",
    element:<ProtectedRoute><RendezVous/></ProtectedRoute> 
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
