import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { registerRoute } from '../Router';
import axios from 'axios'
export default function Register() {
    const NavPage = useNavigate()
    const [Values, Setvalues] = useState({
        username: "",
        password: "",
        confpassword: ""
    })

    const InputDisplay = [
        {name: "username", value: "Username", type: "text"},
        {name: "password", value: "Password", type: "password"},
        {name: "confpassword", value: "Confirm Password", type: "password"}
    ]
    
    const SubmitEvent = async (e) => {
        e.preventDefault(); // Prevent from rendering after submit
       
        if (validateValues()) {
            const { username, password } = Values
            const { data } = await axios.post(
                registerRoute, {
                    username,
                    password,
            });
            if (data.status === true) {
                localStorage.setItem(
                    'chat-app-user',
                    JSON.stringify(data.user)
                )
                alert("User has been created!")
                NavPage("/Login");
            } else  {
                alert(data.msg);
            }

        }
    }

    const getInputValue = (e) => {
        Setvalues({...Values, [e.target.name]: e.target.value})
    }

    const validateValues = (e) => {
        const { username, password, confpassword } = Values;

        if(username.length === 0 || password.length === 0 || confpassword.length === 0){
            alert("Please fill the fields properly");
            return false;
        } else if (username.length < 3 ) {
            alert("Username should be more then 3 letters");
            return false;
        } else if (password.length < 4) {
            alert("Password should be more then 4 letters");
            return false;
        } else {
            return true;
        }

    }

    return (
    <div className='container'>
        <form onSubmit={(e) => SubmitEvent(e)}>
            <div className='header'>
                <h1>Register</h1>
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
                <button type='submit'>Sign Up</button>
                <label htmlFor='TextLink'>
                <Link
                    id="TextLink"
                    className='TextLink'
                    to="/Login"
                >Return to Login
                </Link>
                </label>
            </div>
        </form>
    </div>
  )
}
