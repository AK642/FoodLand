import React from 'react';
import './scss/Header.scss';
import logo from './img/FoodLand_LOGO.png';
import Search from './Search';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BookIcon from '@material-ui/icons/Book';


function Header() {
    return (
        <div className="header">
            <Container maxWidth="lg" className="container">
                <nav>
                    <div className="logo">
                        <img src={logo} alt="FoodLand"></img>
                    </div>
                    <div className="nav__links">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Offers</a></li>
                            <li><a href="/register">Register</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/cart" className="cart__icon"><ShoppingCartIcon /></a></li>
                        </ul>
                    </div>
                </nav>
            </Container>
        </div>
    )
}

export default Header