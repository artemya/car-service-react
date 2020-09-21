import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <a href="/">Home</a>

        <ul className="nav navbar-nav ml-auto white">
            <li className="nav-item">
                <a href="/services" className="header-links">Services</a>
            </li>
            <li className="nav-item">
                <a href="/materials" className="header-links">Materials</a>
            </li>
        </ul>
    </nav>
    )
}
