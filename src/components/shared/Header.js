import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success ">
        <a className="home" href="/">Home</a>

        <ul className="nav navbar-nav ml-auto white">
            <li className="nav-item">
                <a href="/api/services" className="header-links">Services</a>
            </li>
            <li className="nav-item">
                <a href="/api/materials" className="header-links">Materials</a>
            </li>
            <li className="nav-item">
                <a href="/api/clients" className="header-links">Clients</a>
            </li>
        </ul>
    </nav>
    )
}
