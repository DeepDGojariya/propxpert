import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <>
      <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ border: "5px solid", borderRadius: "1rem",backgroundColor:"#1B2430",color:"white" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://img.freepik.com/premium-photo/small-toy-house-background-plants-as-symbol-private-country-house-concept-real-estate-mortgages-vertical-photo_431724-277.jpg?w=2000"
                                            alt="login form" className="img-fluid rounded-start" style={{ height:"100%" ,borderRadius: "1rem 0 0 1rem",width:"100%" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
  
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x " style={{ color: "#1B2430" }}></i>
                                                <span className="h1 fw-bold mb-0" style={{ color: "white" }}>PropXpert</span>
                                            </div>
 
                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign-up into your account</h5>
 
                                            <div className="form-outline mb-2">
                                                <input type="text" id="form2Example16" className="form-control form-control-lg" />
                                                <label className="form-label" for="form2Example16">Username</label>
                                            </div>

                                            <div className="form-outline mb-2">
                                                <input type="email" id="form2Example17" className="form-control form-control-lg" />
                                                <label className="form-label" for="form2Example17">Email address</label>
                                            </div>
 
                                            <div className="form-outline mb-2">
                                            <input type="tel" id="typePhone" class="form-control" />
                                            <label class="form-label" for="typePhone">Phone number</label>
                                            </div> 
 
                                            <div className="form-outline mb-2">
                                                <input type="password" id="form2Example27" className="form-control form-control-lg" />
                                                <label className="form-label" for="form2Example27">Password</label>
                                            </div>
 
                                            <div className="form-outline mb-1">
                                                <input type="password" id="form2Example27" className="form-control form-control-lg" />
                                                <label className="form-label" for="form2Example27">Confirm Password</label>
                                            </div>
 
                                            <div className="pt-1 mb-1">
                                                <button className="btn btn-lg btn-block" style={{backgroundColor:"#51557E",color:"white"}} type="button">Sign-up</button>
                                            </div>
 
 
 
                                            <p className="mb-5 pb-lg-2" style={{ color: "white" }}>Already have an account?&nbsp;
                                                <Link to="/login" className="text-muted">Login here</Link>
                                            </p>
 
 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
    </>
  )
}
