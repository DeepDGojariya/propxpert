import React from 'react'
import "./Navbar.css"
export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand nav-item" href="/">
                        {/* <img src={logo} alt="" width="20" height="20" className="d-inline-block align-text-top" style={{borderRadius:"50%"}} /> */}
                        PropXpert
                    </a>

                    <ul className="d-flex nav-list">

                        <li className="nav-item">
                            <a className="nav-link" href="/">Login</a>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn post-property-btn">Post property</button>
                        </li>
                    </ul>
                </div>


            </nav>
            <div className="container-fluid sub-nav">
                <ul className="d-flex sub-nav-list">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Buy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Sell</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
