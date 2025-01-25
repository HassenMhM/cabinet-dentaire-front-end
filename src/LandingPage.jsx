/* eslint-disable react/prop-types */
import { AproposPage } from "./components/AproposPage"
import { Header } from "./components/Header"
import { HomePage } from "./pages/HomePage"
import { ServicesPage } from "./pages/ServicesPage"
import { Contact } from "./components/Contact"
import {Gallery} from './components/Gallery'
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Footer } from "./utils/Footer"

export const LandingPage=(props) => {
    const logedIn=props.logedIn
    const location = useLocation();
    useEffect(() => {
        if (location.state?.setLoading) {
            location.state.setLoading(false);
        }
    }, [location.state]);
    return (
    <>
        <Header logedIn={logedIn}/>
        <HomePage/>
        <AproposPage/>
        <ServicesPage/>
        <Gallery/>
        <Contact/>
        <Footer/>
    </>
    )
}