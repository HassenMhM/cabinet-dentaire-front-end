import { Login } from "./components/Login"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LandingPage from "./LandingPage"

const router=createBrowserRouter([
  {
    path:"/cabinait-dentaire",
    element:<LandingPage/>
  },
  {
    path:"/cabinait-dentaire/login",
    element:<Login/>,
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
