import { AproposPage } from "./components/AproposPage"
import { Header } from "./components/Header"
import { HomePage } from "./components/HomePage"
import { ServicesPage } from "./components/services/ServicesPage"
import { Contact } from "./Contact"

function LandingPage() {
    return (
    <>
        <Header/>
        <HomePage/>
        <AproposPage/>
        <ServicesPage/>
        <Contact/>
    </>
    )
}

export default LandingPage