import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './scss/Register.scss';
import {useHistory} from 'react-router-dom';
import { auth } from "./firebase";

function Register() {

    // const [name, setName] = useState('');
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registration = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // console.log(auth);
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="register">
            <div className="register__title">
                <h1>Registration</h1>
            </div>
            <div className="register__form">
                <form>
                    <div className="label">
                        <label for="name">Name</label>
                    </div>
                    <input type="text" placeholder="Name"></input>
                    <div className="label">
                        <label for="email">Email</label>
                    </div>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"></input>
                    <div className="label">
                        <label for="password">Password</label>
                    </div>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"></input>
                    <div className="button__link">
                        <Button className="button" type="submit" onClick={registration}>
                            Register
                        </Button>
                        <a href="/login">Already have account?</a>
                    </div>
                </form>
            </div>
            <p className="copyrights">
                ©2021 FoodLand. All rights reserved.
            </p>
        </div>
    )
}

export default Register
