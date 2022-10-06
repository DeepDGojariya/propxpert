import React from 'react'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        Bootstrap
                    </a>
                    {/* <<div className="collapse navbar-collapse" id="navbarNav"> */}
                        <ul className="d-flex" style={{listStyle:"none"}}>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Post property</a>
                            </li>
                        </ul>
                    </div>
                {/* </div> */}
            </nav>
        </>
    )
}
