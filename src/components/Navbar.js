import React from 'react'
import "./Navbar.css"
export default function Navbar() {
    return (
        <>


            <nav className="navbar" style={{ backgroundColor: "#1B2430" }}>
                <div className="container-fluid">
                    <a className="navbar-brand nav-item" href="/">
                        {/* <img src={logo} alt="" width="20" height="20" className="d-inline-block align-text-top" style={{borderRadius:"50%"}} /> */}
                        PropXpert
                    </a>

                    <ul className="d-flex" style={{ listStyle: "none" }}>

                        <li className="nav-item">
                            <a className="nav-link" href="/">Login</a>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn" href="/" style={{ backgroundColor: "#51557E" }}>Post property</button>
                        </li>
                    </ul>
                </div>


            </nav>
            <div className="container-fluid-2" style={{ backgroundColor: "#51557E" }}>
                <ul className="d-flex" style={{ listStyle: "none" }}>
                    <li className="nav-item" style={{ backgroundColor: "#51557E" }}>
                        <a className="nav-link" href="/">Buy</a>
                    </li>
                    <li className="nav-item-2" style={{ backgroundColor: "#51557E" }}>
                        <a className="nav-link" href="/">Sell</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
