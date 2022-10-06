import React from 'react'

export default function AddProperty() {
    return (
        <>
            <form className='container'>
                <div className="mb-3">
                    <label for="username" className="form-label">Name</label>
                    <input type="text" className="form-control" id="username" aria-describedby="userNameHelp" />
                </div>
                <div className="mb-3">
                    <label for="mobileNumber" className="form-label">Mobile</label>
                    <input type="text" className="form-control" id="mobileNumber" aria-describedby="mobileNoHelp" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <h6 className='mx-2'>Property Details</h6>
                <div className="form-check mx-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault" />
                    <label className="form-check-label" for="flexRadioDefault">
                        For Sale
                    </label>
                </div>
                <div className="form-check mx-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label className="form-check-label" for="flexRadioDefault1">
                        For Rent
                    </label>
                </div>
                <br></br>
                <div>
                    <label for="locCity" className='mx-2'>Location:</label>
                    <select name="locCity" id="locCity">
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="chennai">Chennai</option>
                        <option value="bengaluru">Bengaluru</option>
                        <option value="bengaluru">Kolkata</option>
                    </select>
                    <label for="rooms" className='mx-2'>No of Rooms:</label>
                    <select name="rooms" id="rooms">
                        <option value="1_bhk">1 BHK</option>
                        <option value="2_bhk">2 BHK</option>
                        <option value="3_bhk">3 BHK</option>
                    </select>
                </div>


                <div className="my-3">
                    <label for="locality" className="form-label">Locality</label>
                    <input type="text" className="form-control" id="locality" />
                </div>
                <div className="mb-3">
                    <label for="Address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="Address" />
                </div>
                <div className="mb-3">
                <label for="propertyImage" className="form-label">Images</label>
                <br />
                <input type="file" name="propertyImage" id="propertyImage"/>
                </div>
                <button type="submit" className="mb-3 btn btn-primary">Submit</button>
            </form>
        </>
    )
}
