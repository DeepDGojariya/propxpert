import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Subscription.css'

export default function Subscription() {
    const params = useParams()
    const url = 'http://localhost:4000/api/v1/add-subscription'
    const data = {
        name:localStorage.getItem('username')
    }
    const navigate = useNavigate()
    const onSubscribe = ()=>{
        axios.patch(url,data).then((res)=>console.log(res.data)).catch(err=>console.log(err))
        localStorage.setItem('subscribed',true)
        navigate('/property/'+params.id)
    }
    return (
        <>

            <div className="container">
                <div className="section-title text-center">
                    {/* <h1 className='pricing-main'>Pricing Plan<br/></h1> */}
                </div>
                <div className="row gutters">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" >
                        <div className="pricing-plan">
                            <div className="pricing-header">
                                <h4 className="pricing-title">Starter</h4>
                                <div className="pricing-cost">$129.00</div>
                                <div className="pricing-save">Save $29.00</div>
                            </div>
                            <ul className="pricing-features">
                                <li>Post 2 properties for free</li>
                                <li>Get daily Updates </li>
                                <li>No brokerage fee</li>
                                <li className="text-muted"><del>24/7  Support</del></li>
                                <li className="text-muted"><del>Direct buyer access</del></li>
                            </ul>
                            <div className="pricing-footer">
                                <button className="btn btn-primary btn-lg" onClick={onSubscribe}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="pricing-plan">
                            <div className="pricing-header red">
                                <h4 className="pricing-title">Basic</h4>
                                <div className="pricing-cost">$229.00</div>
                                <div className="pricing-save">Save $49.00</div>
                            </div>
                            <ul className="pricing-features">
                                <li>Post 10 properties for free</li>
                                <li>Get daily Updates</li>
                                <li>No brokerage fee</li>
                                <li>24/7  Support</li>
                                <li className="text-muted"><del>No deposit for rent</del></li>
                            </ul>
                            <div className="pricing-footer">
                                <button className="btn btn-primary btn-lg" onClick={onSubscribe}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="pricing-plan">
                            <div className="pricing-header secondary">
                                <h4 className="pricing-title">Ultra</h4>
                                <div className="pricing-cost">$329.00</div>
                                <div className="pricing-save">Save $99.00</div>
                            </div>
                            <ul className="pricing-features">
                                <li>Post Unlimited properties for free</li>
                                <li>Get daily Updates</li>
                                <li>No brokerage fee</li>

                                <li>24/7  Support</li>
                                <li>No deposit for rent</li>

                            </ul>
                            <div className="pricing-footer">
                                <button className="btn btn-primary btn-lg" onClick={onSubscribe}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



