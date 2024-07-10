import "./header.css"
import AltNavbar from "./alt-navbar"

export default function Navbar () {

    return (
        <section className="navbar">
            <div className="navbar-links">
            <a href="#home" className="navbar-item lekton-regular">Home</a>
                <a href="#about" className="navbar-item lekton-regular">About</a>
                <a href="#projects" className="navbar-item lekton-regular">Projects</a>
                <a href="#contacts" className="navbar-item lekton-regular">Contact</a>
                <a href="/coop" className="navbar-item lekton-regular">Co-op Experience</a>
            </div>
            <div className="navbar-alt-button">

            </div>
            <AltNavbar />
        </section>
    )
}