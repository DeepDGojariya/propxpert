import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function PropertyDetail() {
    const params = useParams()
    const [property,setProperty] = useState({})
    const navigate = useNavigate()
    const url = 'http://localhost:4000/api/v1/get-a-property/'+params.id
    useEffect(()=>{
        const fetchData = ()=>{

            axios.get(url).then(res=>{setProperty(res.data.property)}).catch(err=>console.log(err))
        }
        fetchData()
    },[])

    const contactOwner = ()=>{
        if(localStorage.getItem('subscribed')==='false'){
            navigate('/subscribe/'+params.id)
        }else{
            const data = {
                name:localStorage.getItem('username'),
                email:localStorage.getItem('email'),
                number:localStorage.getItem('number')
            }
            axios.post('http://localhost:4000/api/v1/add-enquiry/'+params.id,data).then(res=>{}).catch((err)=>console.log(err))
            navigate('/my-enquiries')
        }
    }
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-6 my-4">
                    <img src="https://media.istockphoto.com/photos/meenakshi-hindu-temple-in-madurai-tamil-nadu-south-india-picture-id490736905?k=20&m=490736905&s=612x612&w=0&h=p0AkEjfTfQC6sfSnP1mEU-0BpkYMBYQn_fwcXHiq6kI=" class="img-fluid" alt="Responsive" />
                </div>
                <div className="col-md-6 my-4">
                    <table class="table">
                        <thead class="thead-dark" style={{backgroundColor:"#1B2430",color:"white"}}>
                            <tr>
                                <th scope="col">Property Detail</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Title</th>
                                <td>{property.title}</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">Address</th>
                                <td>{property.address}</td>
                                
                            </tr>
                            <tr>
                                <th scope="row"># BHK</th>
                                <td>{property.noBHK}</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">Type</th>
                                <td>For {property.type}</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">Locality</th>
                                <td>{property.locality}</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">Location</th>
                                <td>{property.location}</td>
                                
                            </tr>
                            
                        </tbody>
                    </table>
                <div className="row">
                <div className="col-md-12">
                
                <button className="btn" type='button' style={{backgroundColor: "#51557E",color: "white"}} onClick={contactOwner}>Contact Owner</button>
                </div>
                </div>    

                    
                </div>
            </div>
        </div>
    )
}
