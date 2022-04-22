import axios from 'axios';
import {useState, useEffect} from 'react';
import './webpage.css'

export const Users = () => {
    const [formData, setFormData] = useState([])

    useEffect(() => {
        getData();
    },[])

    const getData = () => {
        axios.get('http://localhost:8080/users', formData).then((res) => {
            setFormData(res.data);
            console.log(res.data);
        })
    }

    return (
        <div>
            <table className="table" border='5'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((user, index) => {
                        return (
                            <tr key={user.id} className='users'>
                                <td>{user.id}</td>
                                <td>{user.Name}</td>
                                <td>{user.Age}</td>
                                <td>{user.Address}</td>
                                <td>{user.Department}</td>
                                <td>{user.Salary}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}