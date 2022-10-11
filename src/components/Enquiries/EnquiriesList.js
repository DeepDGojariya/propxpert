import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function EnquiriesList() {
  const [buyers,setBuyers] = useState([])
  const params = useParams()
  const url = 'http://localhost:4000/api/v1/get-enquiries/'+params.id
  useEffect(()=>{
    axios.get(url).then(res=>setBuyers(res.data.buyersList)).catch(err=>console.log(err))
  },[])
  return (
    <div className='container'>
      <table class="table">
                        <thead class="thead-dark" style={{backgroundColor:"#1B2430",color:"white"}}>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                        {buyers.length===0 && <tr>No enquiries</tr>}
                        {buyers.map((buyer,index)=>(
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.number}</td>
                            </tr>
                        ))
                            
                        }   
                        </tbody>
                    </table>
    </div>
  )
}
