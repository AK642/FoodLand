import { Button } from '@material-ui/core';
import React from 'react';
import './scss/Register.scss';

function Register() {
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
                    <input type="text" name="name" id="name" placeholder="Name"></input>
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
