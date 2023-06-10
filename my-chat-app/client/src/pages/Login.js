import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { loginRoute } from '../Router';
import axios from 'axios'
export default function Login() {
    const NavPage = useNavigate()
    const [Values, Setvalues] = useState({
        username: "",
        password: "",
    })

    const InputDisplay = [
        {name: "username", value: "Username", type: "text"},
        {name: "password", value: "Password", type: "password"}
    ]
    
    const SubmitEvent = async (e) => {
        e.preventDefault(); 
        if (validateValues()) {
            const { username, password } = Values;
            const { data } = await axios.post(
                loginRoute, {
                    username,
                    password,
                });
            if (data.status === false) {
                alert(data.msg)
            }
            if (data.status === true) {
              localStorage.setItem(
                'chat-app-current-user',
                JSON.stringify(data.user)
              );
              NavPage("/");
            }
        }
    }

    const getInputValue = (e) => {
        Setvalues({...Values, [e.target.name]: e.target.value})
    }

    const validateValues = (e) => {
        const { username, password } = Values
        if( username.length == 0 || password.length == 0) {
            alert("Please enter your username and password.")
            return false;
        } else {
            return true;
        }

    }

    return (
    <div className='container'>
        <form onSubmit={(e) => SubmitEvent(e)} className='Login-form'>
            <div className='header'>
                <h1>Login</h1>
            </div>
            <div className='Card-content'>
                {InputDisplay.map((data) => (
                    <div 
                        key={data.name}
                        className='Card-Text'>
                        {/* <label htmlFor={data.name}>
                            {data.value + " :"}
                        </label> */}
                        <input 
                            id={data.name}
                            name={data.name}
                            type={data.type}
                            placeholder={'Enter ' + data.value}
                            onChange={(e) => getInputValue(e)}
                        />
                    </div>
                ))}
            </div>
            <div className='Card-button'>
                <button type='submit'>Sign In</button>
                <label htmlFor='TextLink'>
                <Link
                    id="TextLink"
                    className='TextLink'
                    to="/Register"
                >
                Create Account
                </Link>
                </label>
            </div>
        </form>
    </div>
  )
}
