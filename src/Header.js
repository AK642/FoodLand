import React from 'react';
import './scss/Header.scss';
import logo from './img/FoodLand_LOGO.png';
import Search from './Search';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import { auth } from './firebase';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BookIcon from '@material-ui/icons/Book';
import { useStateValue } from './StateProvider';


function Header() {
    const [{basket, user}, dispatch] = useStateValue()

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Container maxWidth="lg" className="container">
                <nav>
                    <div className="logo">
                        <img src={logo} alt="FoodLand"></img>
                    </div>
                    <div className="nav__links">
                        <ul>
                            <li><Link to="/" className="link"><a href="#">Home</a></Link></li>
                            <li><Link to="/menu" className="link"><a href="#">Menu</a></Link></li>
                            <li><Link to="/offers" className="link"><a href="#">Offers</a></Link></li>
                            <li><Link to="/" className="link"><a href="#">My Orders</a></Link></li>
                            <li><Link to={!user && '/login'} className="link"><a onClick={handleAuthentication} href="#">{user ? 'LogOut' : 'LogIn'}</a></Link></li>
                            <li><Link to="/cart" className="cart__link"><a href="#" className="cart__icon"><span className="cart__length">{basket?.length==0 ? '' : basket?.length}</span><ShoppingCartIcon /></a></Link></li>
                        </ul>
                    </div>
                </nav>
            </Container>
        </div>
    )
}

export default Header