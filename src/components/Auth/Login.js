import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            {/* <section className="vh-100"> */}
                <div className="container h-100 mb-4">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ border: "5px solid", borderRadius: "1rem",backgroundColor:"#1B2430",color:"white" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://media.istockphoto.com/photos/london-house-for-sale-picture-id1152256383?k=20&m=1152256383&s=612x612&w=0&h=D8zhmV1jJzXb29PeuXJHMPSehfrf1zS09k_4J7nIkic="
                                            alt="login form" className="img-fluid rounded-start" style={{ borderRadius: "1rem 0 0 1rem",width:"90%",height:"100%" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">


                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x " style={{ color: "#1B2430" }}></i>
                                                <span className="h1 fw-bold mb-0" style={{ color: "white" }}>PropXpert</span>
                                            </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                                            <div className="form-outline mb-2">
                                                <input type="email" id="form2Example17" className="form-control form-control-lg" />
                                                <label className="form-label" for="form2Example17">Email address</label>
                                            </div>

                                            <div className="form-outline mb-2">
                                                <input type="password" id="form2Example27" className="form-control form-control-lg" />
                                                <label className="form-label" for="form2Example27">Password</label>
                                            </div>

                                            <div className="pt-1 mb-2">
                                                <button className="btn btn-lg btn-block" style={{backgroundColor:"#51557E",color:"white"}} type="button">Login</button>
                                            </div>

                                            {/* <a className="small text-muted" href="/">Forgot password?</a> */}

                                            <p className="mb-5 pb-lg-2" style={{ color: " white" }}>Don't have an account? &nbsp;
                                            <Link to="/register" className="text-muted">Register here</Link></p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </section> */}
        </>
    )
}
