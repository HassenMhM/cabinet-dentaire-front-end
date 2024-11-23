import { AproposPage } from "./components/AproposPage"
import { Header } from "./components/Header"
import { HomePage } from "./components/HomePage"
import { ServicesPage } from "./components/services/ServicesPage"

function LandingPage() {
    return (
    <>
        <Header/>
        <HomePage/>
        <AproposPage/>
        <ServicesPage/>
    </>
    )
}

export default LandingPage