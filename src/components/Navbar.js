import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"
export default function Navbar() {
    
    const auth = localStorage.getItem('auth')?localStorage.getItem('auth'):'0'
    const username = localStorage.getItem('username')?localStorage.getItem('username'):'Username'
    const navigate = useNavigate()
    // useEffect(()=>{},[auth,username])
    const admin = localStorage.getItem('admin')
    const postPropertyHandler = ()=>{
        navigate('/add-property')
    }

    const logoutHandler = ()=>{
        // localStorage.clear()
        localStorage.setItem('auth','0')
        localStorage.setItem('auth-token','')
        localStorage.setItem('email','')
        localStorage.setItem('number','')
        localStorage.setItem('username','')
        navigate('/')
    }

    const adminLogoutHandler = ()=>{
        localStorage.setItem('admin','0')
        navigate('/')
    }
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand nav-item" to="/">
                    <i className  ="fa fa-home" ></i>&nbsp;
                        PropXpert
                    </Link>
                    
                    <ul className="d-flex nav-list">
                        {auth==='0'&& admin==='0'&&
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        }
                    {admin==='0'?
                        <li className="nav-item">
                            <button className="nav-link btn post-property-btn mx-2" onClick={postPropertyHandler}>Post property</button>
                        </li>:<></>
                    }
                        
                    {auth==='1'&&
                        <li className="nav-item">
                            <div class="dropdown">
                                <button className="nav-link mx-2 btn dropdown-toggle post-property-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {username}
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><Link class="dropdown-item" to="/my-listings">My Listings</Link></li>
                                    <li><Link class="dropdown-item" to="/my-enquiries">My Enquiries</Link></li>
                                    <li class="dropdown-item" onClick={logoutHandler}>Logout</li>
                                </ul>
                            </div>
                        </li>
                    }
                    {admin==='1'&&
                        <li className="nav-item">
                            <button className="nav-link btn post-property-btn" onClick={adminLogoutHandler}>Logout</button>
                        </li>
                    }
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
