import React from 'react';
import './scss/Login.scss';
import Logo from './img/FoodLand_LOGO.png';
import { Button } from '@material-ui/core';

function Login() {
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
                    <input type="email" name="email" id="email" placeholder="Email"></input>
                    <div className="label">
                        <label for="password">Password</label>
                    </div>
                    <input type="password" name="password" id="password" placeholder="Password"></input>
                    <div className="button__link">
                        <Button className="button" type="submit">
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
