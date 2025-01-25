import { Login } from "./pages/Login"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {LandingPage} from "./LandingPage"
import { SignUp } from "./pages/SignUp"
import { ProtectedRoute } from "./utils/ProtectedRoute"
import { ProtectedLogedRoute } from "./utils/ProtectedLogedRoute"
import { MyAccount } from "./pages/MyAccount"
import { SecuritéPage } from "./pages/SecuritéPage"
import { ChangePasswordPage } from "./pages/ChangePasswordPage"
import { RendezVous } from "./pages/RendezVous"
import { Stock } from "./pages/Stock"
import { Users } from "./pages/Users"
import { Patients } from "./pages/Patients"
import { Doctors } from "./pages/Doctors"

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
    path:"admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/stock",
    element:<Stock/>
  },
  {
    path:"admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/patients",
    element:<Patients/>,
  },
  {
    path:"admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/doctors",
    element:<Doctors/>,
  },
  {
    path:"admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/users",
    element:<Users/>,
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
