// import axios from 'axios'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const navigate = useNavigate()

    

    const signUpHandler =  (e) => {
        e.preventDefault()
        const url = 'http://localhost:4000/api/v1/register'
        const data = {
            username: username,
            email: email,
            number: parseInt(number),
            password: password1
        }
        axios.post(url, data)
            .then(res => {
                localStorage.setItem('username',res.data.response.username)
                localStorage.setItem('number',res.data.response.number)
                localStorage.setItem('email',res.data.response.email)
                localStorage.setItem('auth','1')
                localStorage.setItem('subscribed',res.data.response.subscribed)
            })
            .catch(err => console.log(err))
        navigate('/')
    }

    return (
        <>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ border: "5px solid", borderRadius: "1rem", backgroundColor: "#1B2430", color: "white" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://img.freepik.com/premium-photo/small-toy-house-background-plants-as-symbol-private-country-house-concept-real-estate-mortgages-vertical-photo_431724-277.jpg?w=2000"
                                        alt="login form" className="img-fluid rounded-start" style={{ height: "100%", borderRadius: "1rem 0 0 1rem", width: "100%" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <i className="fas fa-cubes fa-2x " style={{ color: "#1B2430" }}></i>
                                            <span className="h1 fw-bold mb-0" style={{ color: "white" }}>PropXpert</span>
                                        </div>

                                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign-up into your account</h5>
                                        <form onSubmit={signUpHandler}>
                                            <div className="form-outline mb-2">
                                                <input type="text" id="username" className="form-control form-control-lg" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                                                <label className="form-label" for="username" name="username" >Username</label>
                                            </div>

                                            <div className="form-outline mb-2">
                                                <input type="email" id="email" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                                <label className="form-label" for="email" name="email" >Email address</label>
                                            </div>

                                            <div className="form-outline mb-2">
                                                <input type="tel" id="number" class="form-control" value={number} onChange={(e) => setNumber(e.target.value)}/>
                                                <label class="form-label" for="number" name="number" >Phone number</label>
                                            </div>

                                            <div className="form-outline mb-2">
                                                <input type="password" id="password1" className="form-control form-control-lg" value={password1} onChange={(e) => setPassword1(e.target.value)}/>
                                                <label className="form-label" for="password1" name="password1" >Password</label>
                                            </div>

                                            <div className="form-outline mb-1">
                                                <input type="password" id="password2" className="form-control form-control-lg" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                                                <label className="form-label" for="password2" name="password2" >Confirm Password</label>
                                            </div>

                                            <div className="pt-1 mb-1">
                                                <button className="btn btn-lg btn-block" style={{ backgroundColor: "#51557E", color: "white" }} type="submit" >Sign-up</button>
                                            </div>
                                        </form>

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
