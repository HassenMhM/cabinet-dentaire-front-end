import { Login } from "./components/Login"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LandingPage from "./LandingPage"
import { SignUp } from "./components/SignUp"

const router=createBrowserRouter([
  {
    path:"/cabinait-dentaire",
    element:<LandingPage/>
  },
  {
    path:"/cabinait-dentaire/login",
    element:<Login/>,
  },
  {
    path:"/cabinait-dentaire/signup",
    element:<SignUp/>,
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
