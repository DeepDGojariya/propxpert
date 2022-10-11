import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Properties() {
    const [propertyList,setPropertyList] = useState([])
    const url = 'http://localhost:4000/api/v1/get-all-properties'
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(url)
        .then(res=>{
            setPropertyList(res.data.properties)
        })
        .catch(err=>console.log(err))
    },[])

    const propertyDetail = (pid)=>{
        navigate('/property/'+pid)
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4" style={{ borderRight: "2px solid #1B2430" }}>
                        <h5>Filters</h5>
                        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                            <input type="checkbox" className="btn-check" id="bhk1" autocomplete="off" />
                            <label className="btn btn-outline-primary" for="bhk1" style={{ borderColor: "#51557E", color: "#1B2430" }}>1BHK</label>

                            <input type="checkbox" className="btn-check" id="bhk2" autocomplete="off" />
                            <label className="btn btn-outline-primary" for="bhk2" style={{ borderColor: "#51557E", color: "#1B2430" }}>2BHK</label>

                            <input type="checkbox" className="btn-check" id="bhk3" autocomplete="off" />
                            <label className="btn btn-outline-primary" for="bhk3" style={{ borderColor: "#51557E", color: "#1B2430" }}>3BHK</label>
                        </div>
                        <br />
                        <br />
                        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                            <input type="checkbox" className="btn-check" id="city1" autocomplete="off" />
                            <label className="btn btn-outline-primary" for="city1" style={{ borderColor: "#51557E", color: "#1B2430" }}>Mumbai</label>

                            <input type="checkbox" className="btn-check" id="city2" autocomplete="off" />
                            <label className="btn btn-outline-primary" for="city2" style={{ borderColor: "#51557E", color: "#1B2430" }}>Bangalore</label>

                            <input type="checkbox" className="btn-check" id="city3" autocomplete="off" />
                            <label className="btn btn-outline-primary" for="city3" style={{ borderColor: "#51557E", color: "#1B2430" }}>Delhi</label>
                            <br />
                            <br />
                            <input type="checkbox" className="btn-check" id="city4" autocomplete="off" />
                            <label className="btn btn-outline-primary" for="city4" style={{ borderColor: "#51557E", color: "#1B2430" }}>Kolkata</label>

                            <input type="checkbox" className="btn-check" id="city5" autocomplete="off" />
                            <label className="btn btn-outline-primary" for="city5" style={{ borderColor: "#51557E", color: "#1B2430" }}>Chennai</label>
                        </div>
                        <br />
                        <br />
                        <div className="" style={{ width: "200px" }}>
                            <label for="customRange1" className="form-label"><h6>Price Range</h6></label>
                            <input type="range" className="form-range" id="customRange1"></input>
                        </div>

                        <button className="btn my-2" style={{backgroundColor: "#51557E",color: "white"}}>Filter Properties</button>
                    </div>
                    <div className="col-md-8">
                        <h5>Properties</h5>
                        <div className="container">
                        {propertyList.map((property,index)=>(
                            <div className="card mb-3" key={index} style={{ maxWidth: "540px" }}>
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-body">
                                            <h5 className="card-title">{property.title}</h5>
                                            <p className="card-text">{property.address}</p>
                                            <div className="row">
                                            <div className="col-12">
                                            <span className="badge rounded-pill bg-dark mx-1">{property.noBHK}</span>
                                            <span className="badge rounded-pill bg-dark mx-1">{property.location}</span>
                                            {/* <span className="badge rounded-pill bg-dark mx-1">{}</span> */}
                                            {property.type==="sale"?<span class="badge bg-success">For Rent</span>:<span class="badge bg-info">For Sale</span>}
                                            </div>
                                            </div>
                                            <button className='btn btn-sm mt-2 text-white' style={{backgroundColor:"#51557E"}} onClick={()=>propertyDetail(property.id)}>View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                            
                        }   
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
