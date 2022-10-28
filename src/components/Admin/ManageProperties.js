import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function ManageProperties() {
    const [properties, setProperties] = useState([])
    const navigate = useNavigate()
    const url = 'http://localhost:4000/api/v1/get-all-properties?q=all'
    useEffect(() => {
        axios.get(url).then(res => setProperties(res.data.properties)).catch(err => console.log(err))
    }, [])
    const manageUser = () => {
        navigate('/admin/manage-users')
    }
    const deleteProperty = (id)=>{
        axios.delete('http://localhost:4000/api/v1/delete-my-property/'+id)
        .then((res)=>{}).catch(err=>console.log(err))
    }

    const approveProperty = (id)=>{
        axios.patch('http://localhost:4000/api/v1/approve-property/'+id).then(res=>{}).catch(err=>console.log(err))
    }
    return (
        <div>
            <button type='button' className='btn btn-secondary mx-2' onClick={manageUser}>Manage Users</button>
            <table className="table table-striped table-responsive-md btn-table">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Phone Number</th>
                        <th>Title</th>
                        <th>Address</th>
                        <th>BHK</th>
                        <th>Location</th>
                        <th>Locality</th>
                        <th>Approve</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {properties && properties.map((property, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>

                            <td>{property.owner.name}</td>
                            <td>{property.owner.email}</td>
                            <td>{property.owner.number}</td>
                            <td>{property.title}</td>
                            <td>{property.address}</td>
                            <td>{property.noBHK}</td>
                            <td>{property.location}</td>
                            <td>{property.locality}</td>
                            {property.status === "approved" && <td><p>Approved</p></td>}
                            {property.status === "pending" &&
                                <td>
                                    <button type="button" className=" btn btn-success" onClick={()=>approveProperty(property.id)}>Approve</button>
                                </td>
                            }
                            <td>
                                <button type="button" className=" btn btn-danger" onClick={()=>deleteProperty(property.id)}>Delete</button>
                            </td>

                        </tr>
                    ))

                    }
                </tbody>

            </table>

        </div>
    )
}
