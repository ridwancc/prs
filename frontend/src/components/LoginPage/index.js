import './styles.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [form, setForm] = useState(1);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [success, setSuccess] = useState();

    const handleClick = () => {
        const registerTitle = document.getElementById('register-title');
        const loginTitle = document.getElementById('login-title');
        const button = document.getElementsByClassName('login button')[0];

        if (form) {
            registerTitle.className="";
            loginTitle.className="inactive";
            button.innerHTML="Register";
        } else {
            registerTitle.className="inactive";
            loginTitle.className="";
            button.innerHTML="Login";
        }

        return form ? setForm(0) : setForm(1);
    }

    const handleLogin = () => {
        if (form) {
            login();
        } else {
            registerAccount();
        }
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const login = () => {
        const data = {email, password}
        axios.post('http://localhost:8080/account', data)
        .then(response => {
            console.log(response);
            setSuccess(true);
        })
        .catch(error => {
        console.error(error);
        setSuccess(false)
    })

    }

    const registerAccount = () => {
        const data = {email, password}
        axios.post('http://localhost:8080/account', data)
            .then(response => {
                console.log(response);
                setSuccess(true);
            })
            .catch(error => {
            console.error(error);
            setSuccess(false)
        })
    }

    return (
        <div className="wrapper">
            <div className="login-wrapper">
            <div className="login-page-title">
                    <h2 id="login-title" onClick={handleClick}>Login</h2>
                    <h2 className="inactive" id="register-title" onClick={handleClick}>Register</h2>  
                </div>
                <div className="login-form">
                    <label>Email</label>
                    <input type="email" onChange={handleEmail}></input>
                    <label>Password</label>
                    <input type="password" onChange={handlePassword}></input>
                    <div className="login button" onClick={handleLogin}>Login</div>
                </div>
            </div>
        </div>
    )

}

export default LoginPage;