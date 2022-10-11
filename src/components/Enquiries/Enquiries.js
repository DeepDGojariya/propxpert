import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Enquiries() {
    const [enquiredProperties, setEnquiredProperties] = useState([])
    const username = localStorage.getItem('username')
    const url = 'http://localhost:4000/api/v1/get-my-enquiries/' + username
    const [pids, setPids] = useState([])
    const properties = []
    useEffect(() => {
        const setEP = () => {
            setEnquiredProperties([...properties])
        }
        axios.get(url).then(res => setPids(res.data.propertyIds)).catch(err => console.log(err))

        pids.map((id) => {
            let uri = 'http://localhost:4000/api/v1/get-a-property/' + id
            axios.get(uri).then(res => {
                properties.push(res.data.property)
                setEP()
            }).catch(err => console.log(err))
            return true
        })


    })
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h4>My Enquiries</h4>
                    <hr />
                </div>
                <div className="row">
                    {enquiredProperties.length >= 0 && enquiredProperties.map((property, index) => (
                        <div className="card col-md-4 m-2" key={index} style={{ width: "18rem" }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{property.title}</h5>
                                <p className="card-text">{property.address}</p>
                                <span className="badge rounded-pill bg-dark mx-1">{property.noBHK}</span>
                                <span className="badge rounded-pill bg-dark mx-1">{property.location}</span>
                                {property.type === "sale" ? <span class="badge bg-success">For Rent</span> : <span class="badge bg-info">For Sale</span>}
                                <hr />
                                <h6>Owner Info</h6>
                                <p className='card-text'>Name: {property.owner.name}</p>
                                <p className='card-text'>Email: {property.owner.email}</p>
                                <p className='card-text'>Phone Number: {property.owner.number}</p>
                            </div>
                        </div>
                    ))

                    }
                </div>
            </div>

        </div>
    )
}
