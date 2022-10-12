import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const adminLogin = ()=>{
        if(username==='admin' && password==='1234'){
            localStorage.setItem('admin','1')
            navigate('/admin/manage-properties')
            
        }
    }
    const loginHandler = (e)=>{
        e.preventDefault()
        
        
        const url = 'http://localhost:4000/api/v1/login'
        const data = {
            username:username,
            password:password
        }
        
        axios.post(url,data)
        .then((res)=>{
            localStorage.setItem('auth-token',res.data.token)
            localStorage.setItem('auth','1')
            localStorage.setItem('username',res.data.username)
            localStorage.setItem('email',res.data.email)
            localStorage.setItem('number',res.data.number)
            localStorage.setItem('subscribed',res.data.subscribed)
            localStorage.setItem('admin','0')
        })
        .catch((err)=>console.log(err))
        navigate('/')
        
    }
    return (
        <>
            {/* <section className="vh-100"> */}
            <div className="container h-100 mb-4">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ border: "5px solid", borderRadius: "1rem", backgroundColor: "#1B2430", color: "white" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://media.istockphoto.com/photos/london-house-for-sale-picture-id1152256383?k=20&m=1152256383&s=612x612&w=0&h=D8zhmV1jJzXb29PeuXJHMPSehfrf1zS09k_4J7nIkic="
                                        alt="login form" className="img-fluid rounded-start" style={{ borderRadius: "1rem 0 0 1rem", width: "90%", height: "100%" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">


                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <i className="fas fa-cubes fa-2x " style={{ color: "#1B2430" }}></i>
                                            <span className="h1 fw-bold mb-0" style={{ color: "white" }}>PropXpert</span>
                                        </div>

                                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>
                                        <form onSubmit={loginHandler}>
                                            <div className="form-outline mb-2">
                                                <input type="text" id="username" className="form-control form-control-lg" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                                                <label className="form-label" for="username" name="username">Username</label>
                                            </div>

                                            <div className="form-outline mb-2">
                                                <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                                <label className="form-label" for="password">Password</label>
                                            </div>

                                            <div className="pt-1 mb-2">
                                                <button className="btn btn-lg btn-block mx-2" style={{ backgroundColor: "#51557E", color: "white" }} type="submit">Login</button>
                                                <button className="btn btn-lg btn-block" style={{ backgroundColor: "#51557E", color: "white" }} onClick={adminLogin} type="button">Admin Login</button>
                                            </div>
                                        </form>

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
