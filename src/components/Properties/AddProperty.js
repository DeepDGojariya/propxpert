import React from 'react'

export default function AddProperty() {
    return (
        <>
            <form className='container'>
                <div class="mb-3">
                    <label for="username" class="form-label">Name</label>
                    <input type="text" class="form-control" id="username" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="mobile_number" class="form-label">Mobile</label>
                    <input type="text" class="form-control" id="mobile_number" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <p className='mx-2'>Property Details</p>
                <div class="form-check" className='mx-2'>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        For Sale
                    </label>
                </div>
                <div class="form-check" className='mx-2'>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label" for="flexRadioDefault2">
                        For Rent
                    </label>
                </div>
                <br></br>
                <div>
                    <label for="loc_city" className='mx-2'>Location:</label>
                    <select name="loc_city" id="loc_city">
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

                <div class="mb-3">
                    <label for="locality" class="form-label">Locality</label>
                    <input type="text" class="form-control" id="locality" />
                </div>
                <div class="mb-3">
                    <label for="Address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="Address" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form></> 

  )
}
