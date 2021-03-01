import React, { useState } from 'react';
import './scss/Login.scss';
import Logo from './img/FoodLand_LOGO.png';
import { Button } from '@material-ui/core';
import { auth } from './firebase';
import { useHistory } from 'react-router-dom';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
        
    }

    return (
        <div className="login">
            <div className="login__title">
                <h1>Login</h1>
            </div>
            <div className="login__form">
                <form>
                    <div className="label">
                        <label for="email">Email</label>
                    </div>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"></input>
                    <div className="label">
                        <label for="password">Password</label>
                    </div>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"></input>
                    <div className="button__link">
                        <Button className="button" type="submit" onClick={signIn}>
                            Log in
                        </Button>
                        <a href="/register">Don't have account?</a>
                    </div>
                </form>
            </div>
            <p className="copyrights">
                ©2021 FoodLand. All rights reserved.
            </p>
        </div>
    )
}

export default Login
