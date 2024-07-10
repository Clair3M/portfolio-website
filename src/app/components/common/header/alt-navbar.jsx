import "./header.css"

export default function AltNavbar () {

    return (
        <div className="navbar-alt">
            <div className="alt-close-button">
                beep
            </div>
            <div className="alt-navbar-item">
                <a href="#home" className="lekton-semibold">Home</a>
            </div>
            <div className="alt-navbar-item">
                <a href="#about" className="lekton-semibold">About</a>
            </div>
            <div className="alt-navbar-item">
                <a href="#projects" className="lekton-semibold">Projects</a>
            </div>
            <div className="alt-navbar-item">
                <a href="#contact" className="lekton-semibold">Contact</a>
            </div>
        </div>
    )
}