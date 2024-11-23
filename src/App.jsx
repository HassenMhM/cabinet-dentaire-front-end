import { AproposPage } from "./components/AproposPage"
import { Header } from "./components/Header"
import { HomePage } from "./components/HomePage"
import { ServicesPage } from "./components/services/ServicesPage"
import { Login} from "./components/Login"

function App() {
  return (
    <>
      <Header/>
      <HomePage/>
      <AproposPage/>
      <ServicesPage/>
      <Login/>
    </>
  )
}

export default App
