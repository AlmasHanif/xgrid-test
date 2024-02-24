import React, { useEffect, useState } from 'react';
import axios from "axios";
import './table.css'
const usersUrl = 'https://jsonplaceholder.typicode.com/users'
const Table = () => {
    const [data, setData] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {

        const getUsers = async () => {
            try {
                const response = await axios.get(usersUrl)
                console.log('users', response.data)
                setUsers(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    }, [])
    //   console.log('data', data)
    console.log(users, 'user')
    return (
        <>
            <table border={2}>
                <thead>
                    <th>User Id</th>
                    <th>Post Id</th>
                    {/* <th>Title</th> */}
                    {/* <th>Body</th> */}
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </thead>
                <tbody>
                    
                        {users.map((data, index) => (
                            <>
                            <tr>
                                <td>
                                    {data.userId}
                                </td>
                                <td>
                                    {data.id}
                                </td>
                               
                                <td>
                                    {data.name}
                                </td>
                                <td>
                                    {data.username}
                                </td>
                                <td>
                                    {data.email}
                                </td>
                                <td>
                                    {data.address.city}
                                </td>
                                <td>
                                    {data.phone}
                                </td>
                                <td>
                                    {data.website}
                                </td>
                                <td>
                                    {data.company.name}
                                </td>
                                </tr>
                            </>
                        ))}

                </tbody>


            </table>
        </>
    )
}

export default Table