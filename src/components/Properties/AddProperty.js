import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddProperty() {
    const username = localStorage.getItem('username')
    const number = localStorage.getItem('number')
    const email = localStorage.getItem('email')
    const [type,setType] = useState('')
    const [title,setTitle] = useState('')
    const [location,setLocation] = useState('')
    const [rooms,setRooms] = useState('')
    const [locality,setLocality] = useState('')
    const [address,setAddress] = useState('')
    const navigate = useNavigate()

    const addPropertyHandler = (e)=>{
        e.preventDefault()
        const url = 'http://localhost:4000/api/v1/add-property'
        const data = {
            owner:{
                name:username,
                email:email,
                number:parseInt(number)
            },
            title,
            address,
            location,
            locality,
            noBHK:rooms,
            type
        }
        console.log(data);
        axios.post(url,data).then((res)=>console.log(res.data)).catch(err=>console.log(err))
        navigate('/properties')
    }


    return (
        <>
            <form className='container' onSubmit={addPropertyHandler}>
                <div className="mb-3">
                    <label for="username" className="form-label">Name</label>
                    <input type="text" className="form-control" id="username" value={username} aria-describedby="userNameHelp" readOnly />
                </div>
                <div className="mb-3">
                    <label for="mobileNumber" className="form-label">Mobile</label>
                    <input type="text" className="form-control" id="mobileNumber" value={number} aria-describedby="mobileNoHelp" readOnly/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={email} aria-describedby="emailHelp" readOnly/>
                </div>
                <h6 className='mx-2'>Property Details</h6>
                <div className="my-3">
                    <label for="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div className="form-check mx-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault" value="sale" onChange={(e)=>{setType(e.target.value)}}/>
                    <label className="form-check-label" for="flexRadioDefault">
                        For Sale
                    </label>
                </div>
                <div className="form-check mx-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="rent" onChange={(e)=>{setType(e.target.value)}}/>
                    <label className="form-check-label" for="flexRadioDefault1">
                        For Rent
                    </label>
                </div>
                <br></br>
                <div>
                    <label for="locCity" className='mx-2'>Location:</label>
                    <select name="locCity" id="locCity" value={location} onChange={e=>setLocation(e.target.value)}>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="chennai">Chennai</option>
                        <option value="bengaluru">Bengaluru</option>
                        <option value="bengaluru">Kolkata</option>
                    </select>
                    <label for="rooms" className='mx-2'>No of Rooms:</label>
                    <select name="rooms" id="rooms" value={rooms} onChange={e=>setRooms(e.target.value)}>
                        <option value="1_bhk">1 BHK</option>
                        <option value="2_bhk">2 BHK</option>
                        <option value="3_bhk">3 BHK</option>
                        <option value="3_bhk">4 BHK</option>
                    </select>
                </div>


                <div className="my-3">
                    <label for="locality" className="form-label">Locality</label>
                    <input type="text" className="form-control" id="locality" value={locality} onChange={e=>setLocality(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="Address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="Address" value={address} onChange={e=>setAddress(e.target.value)} />
                </div>
                <button type="submit" className="mb-3 btn btn-primary">Submit</button>
            </form>
        </>
    )
}
