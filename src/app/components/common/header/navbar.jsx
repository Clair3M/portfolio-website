import "./header.css"

export default function Navbar () {

    return (
        <section className="navbar">
            <a href="/about" className="navbar-item lekton-regular">About</a>
            <a href="/projects" className="navbar-item lekton-regular">Projects</a>
            <a href="/contacts" className="navbar-item lekton-regular">Contacts</a>
            <a href="/coop" className="navbar-item lekton-regular">Co-op Experience</a>
        </section>
    )
}