import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../signup/signup.css';


const Signup = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [telephoneno, setTelephone] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    })

    const collecData = async () => {
        console.log(name, address, telephoneno, aadhar, username, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, address, telephoneno, aadhar, username, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result));
        if (result) {
            navigate('/');
        }
    }


    return (
        <div className='signup-container'>
            <h1>Register</h1>
            Name: <input className='inputbox' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
            Address: <input className='inputbox' type='text' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter Address' />
            Telephoneno: <input className='inputbox' type='number' value={telephoneno} onChange={(e) => setTelephone(e.target.value)} placeholder='Enter Telephone' />
            Aadhar: <input className='inputbox' type='number' value={aadhar} onChange={(e) => setAadhar(e.target.value)} placeholder='Enter Aaadhar' />
            
            Username: <input className='inputbox' type='text' value={username} onChange={(e) => setUserName(e.target.value)} placeholder='Enter Username' />

            Password: <input className='inputbox' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
            <button onClick={collecData} className='signup-btn' type='button'>Sign up</button>
        </div>
    )
}
export default Signup;