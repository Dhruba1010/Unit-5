import {useState, useEffect} from 'react';
import axios from 'axios';
import './webpage.css'

export const Form = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Age: '',
        Address: '',
        Department: '',
        Salary: '',
        MaritalStatus: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : [e.target.value]
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post('http://localhost:8080/users', formData).then(()=>{
            alert('Successfully Registered');
        })
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label>Name  </label>
            <input type="text" id='Name' onChange={handleChange}/>
            
            <br />

            <label>Age  </label>
            <input type="number" id='Age' onChange={handleChange}/>

            <br />

            <label>Address  </label>
            <input type="text" id='Address' onChange={handleChange}/>

            <br />

            <label>Department  </label>
            <select id='Department' onChange={handleChange}>
                <option value="">Select</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="UIUX Engineering">UIUX Engineering</option>
            </select>

            <br />

            <label>Salary  </label>
            <input type="number" id='Salary' onChange={handleChange}/>

            <br />

            <label>Marital Status : </label>
            <label>Married</label>
            <input type="checkbox" value='Married' onChange={handleChange}/>
            <label>Unmarried</label>
            <input type="checkbox" value='Unmarried' onChange={handleChange}/>

            <br />

            <input type="submit" value='Submit'/>
        </form>
    )
}