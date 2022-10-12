import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Properties({fp}) {
    const [propertyList,setPropertyList] = useState([])
    // const [filteredProperty,setFilteredProperty] = useState([])
    const [location, setLocation] = useState('')
    const [type, setType] = useState('')
    const url = 'http://localhost:4000/api/v1/get-all-properties'
    const navigate = useNavigate()
    useEffect(()=>{
        if(fp.length!==0){
           setPropertyList(fp)
        }else{
            axios.get(url)
            .then(res=>{
                setPropertyList(res.data.properties)
            })
            .catch(err=>console.log(err))
        }
    },[])

    const filterHandler = (e)=>{
        e.preventDefault()
        const url = 'http://localhost:4000/api/v1/filter-property?location='+location+'&type='+type
        axios.get(url).then((res)=>{setPropertyList(res.data.propertiesData)}).catch(err=>console.log(err))
        navigate("/")
    }

    const propertyDetail = (pid)=>{
        navigate('/property/'+pid)
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4" style={{ borderRight: "2px solid #1B2430" }}>
                    <h5>Filters</h5>
            <form onSubmit={filterHandler}>
                <select className="form-control search-slt" id="location-select" value={location} onChange={e => setLocation(e.target.value)}>
                    <option>Location</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="delhi">Delhi</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="chennai">Chennai</option>
                </select>
                <br />
                <br />
                <select className="form-control search-slt" id="property-type-select" value={type} onChange={e => setType(e.target.value)}>
                    <option>Type</option>
                    <option value="sale">Sale</option>
                    <option value="rent">Rent</option>
                </select>
                <br />
                <br />

                <button className="btn my-4" style={{ backgroundColor: "#51557E", color: "white" }} type="submit">Filter Properties</button>
            </form>
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
