import { Login } from "./components/Login"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LandingPage from "./LandingPage"
import { SignUp } from "./components/SignUp"
import { ProtectedRoute } from "./utils/ProtectedRoute"
import { ProtectedLogedRoute } from "./utils/ProtectedLogedRoute"
import { MyAccount } from "./components/MyAccount"

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
