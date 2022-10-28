import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ManageUsers() {
    const [users,setUsers] = useState([])
    const navigate = useNavigate()
    const url = 'http://localhost:4000/api/v1/get-users'
    useEffect(()=>{
        axios.get(url).then((res)=>{console.log(res.data.users);
            setUsers(res.data.users)}).catch((err)=>console.log(err))
    },[])
    const manageProperties = ()=>{
        navigate('/admin/manage-properties')
    }
    const deleteUser = (id)=>{
        console.log("Here");
        axios.delete('http://localhost:4000/api/v1/delete-user/'+id)
        .then((res)=>{}).catch(err=>console.log(err))
    }
    return (
        <div>
        <button type='button' className='btn btn-secondary mx-2' onClick={manageProperties}>Manage properties</button>
            <table className="table table-striped table-responsive-md btn-table">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Phone Number</th>
                        <th>Subscribed</th>
                        <th>Delete User</th>

                    </tr>
                </thead>

                <tbody>
                {users&&users.map((user,index)=>(
                    <tr>
                        <th scope="row">{index+1}</th>

                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.number}</td>
                        {user.subscribed&&<td>Yes</td>}
                        {!user.subscribed&&<td>No</td>}
                        

                        <td>
                            <button type="button" className=" btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))
                    
                }   
                </tbody>

            </table>
        </div>
    )
}
