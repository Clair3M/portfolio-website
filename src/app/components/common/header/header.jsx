import "./header.css"

import Navbar from "./navbar"

export default function Header () {

    return (
        <section className="header">
            <section className="header-logo-section">
                <a href="/" className="header-logo m-plus-1-code-550">Claire Mather.</a>
            </section>
            <section className="header-navbar-section">
                <Navbar />
            </section>
        </section>
    )
}