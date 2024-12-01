import { AproposPage } from "./components/AproposPage"
import { Header } from "./components/Header"
import { HomePage } from "./components/HomePage"
import { ServicesPage } from "./components/services/ServicesPage"
import { Contact } from "./components/Contact"
import {Gallery} from './components/Gallery'

function LandingPage() {
    return (
    <>
        <Header/>
        <HomePage/>
        <AproposPage/>
        <ServicesPage/>
        <Gallery/>
        <Contact/>
    </>
    )
}

export default LandingPage