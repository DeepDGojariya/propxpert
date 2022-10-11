import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Listings() {
  const [myProperties, setMyProperties] = useState([])
  const username = localStorage.getItem('username')
  const url = 'http://localhost:4000/api/v1/get-my-property-listings/' + username
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setMyProperties(res.data.myProperties)
      })
      .catch(err => console.log(err))
  }, [])

  const viewEnquiries = (pid)=>{
    navigate('/view-enquiries/'+pid)

  }
  return (
    <>

      <div class="container">
        <h2>My Listings</h2>
        <div class="row">

          {myProperties.map((property, index) => (
            <div class="col-12 mt-3" key={index}>
              <div class="card">
                <div class="card-horizontal" style={{ display: "flex", flex: "1 1 auto" }}>
                  <div class="img-square-wrapper col-3">
                    <img className='card-img img-thumbnail' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8IQrpci_lb0KcKSoTutxeFX25kDxHk2SfcDguEUp&s" alt="Card cap" />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">{property.title}</h4>
                    <p class="card-text">{property.address}</p>
                    <span className="badge rounded-pill bg-dark mx-1">{property.noBHK}</span>
                    <span className="badge rounded-pill bg-dark mx-1">{property.owner}</span>
                    <span className="badge rounded-pill bg-dark mx-1">{property.locality }</span>
                    {property.type === "sale" ? <span class="badge bg-success">For Rent</span> : <span class="badge bg-info">For Sale</span>}
                    <br/>
                    {property.status === "approved" ? 
                    <>
                    <span class="my-2 badge p-2 bg-success">Approved Property</span>
                    <br></br>
                    <div className="col-12 d-flex justify-content-end">
                    <button className='btn' style={{backgroundColor: "#51557E",color: "white"}} onClick={()=>viewEnquiries(property.id)}>View Enquiries</button>
                    </div>
                    </>
                     : <span class="my-2 p-2 badge bg-danger">Pending Property</span>}
                    
                  </div>
                </div>
                {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div> */}
              </div>
            </div>
          ))}


        </div>
      </div>
    </>
  )
}
