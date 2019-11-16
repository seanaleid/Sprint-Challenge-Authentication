import React, { useState } from 'react';
import axiosWithAuth from './utils/axiosWithAuth.js';
import { Link } from 'react-router-dom';

const Register = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.username]: e.target,value
        });
    };

    const register = e => {
        console.log(user)
        e.preventDefault();
        props.axiosWithAuth()
            .post('/auth/register', user)
            .then(res => {
                console.log(`This is the success console.log inside register.js`, res)
            })
            .catch(err => {
                console.log(`This is the error console.log inside register.js`, err)
            })
        props.history.push('/jokes/')
    }

    return(
        <div>
            <form onSubmit={register}> 
                <input 
                    type="text"
                    label="username"
                    name="username"
                    value="username"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    label="password"
                    name="password"
                    value="password"
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Register;