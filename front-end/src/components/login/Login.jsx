import React from 'react';
import '../login/login.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/');
        }
    })

    const handleLogin = async () => {
        console.warn("email, password", email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })

        result = await result.json();
        console.warn(result);
        if (result.email) {
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/')
        } else {
            alert("please enter correct details")
        }
    }

    return (
        <div className='login-container'>
            <h1>Login</h1>
            Email: <input className='inputbox' type='text' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
            Password: <input className='inputbox' type='password' placeholder='*********' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} className='login-btn' type='button'>Login</button>
        </div>
    )
}

export default Login;