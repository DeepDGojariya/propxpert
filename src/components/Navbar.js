import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand nav-item" to="/">
                        {/* <img src={logo} alt="" width="20" height="20" className="d-inline-block align-text-top" style={{borderRadius:"50%"}} /> */}
                        PropXpert
                    </Link>

                    <ul className="d-flex nav-list">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn post-property-btn">Post property</button>
                        </li>
                        <li className="nav-item">
                            <div class="dropdown">
                                <button className="nav-link mx-2 btn dropdown-toggle post-property-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Username
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><Link class="dropdown-item" to="/my-listings">My Listings</Link></li>
                                    <li><Link class="dropdown-item" to="/my-enquiries">My Enquiries</Link></li>
                                    <li><Link class="dropdown-item" to="/logout">Logout</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>


            </nav>
            <div className="container-fluid sub-nav">
                <ul className="d-flex sub-nav-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/properties">Buy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/properties">Rent</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
