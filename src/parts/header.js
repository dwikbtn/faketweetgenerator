import React from 'react'
import Icon from './Icon'




export default function Header(props) {
    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : "";
    }

    return (
        <header className='spacing-sm '>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <Icon />
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item${getNavLinkClass("/home")}`}>
                                <a className="nav-link" type="link" href="/home">
                                    Home
                            </a>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/othertools")}`}>
                                <a className="nav-link" type="link" href="/othertools">
                                    Other Tools
                            </a>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/about")}`}>
                                <a className="nav-link" type="link" href="/about">
                                    About
                            </a>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/disclaimer")}`}>
                                <a className="nav-link" type="link" href="/disclaimer">
                                    Disclaimer
                            </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
