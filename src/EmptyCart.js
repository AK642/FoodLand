import React from 'react';
import './scss/EmptyCart.scss';
import { Button, Container } from '@material-ui/core';
import Emptycart from './img/empty__cart.svg';
import {Link} from 'react-router-dom';

function EmptyCart() {
    return (
        <div className="emptyCart">
            <Container maxWidth="lg" className="empty__cart">
                <h1>Cart Empty 🙁</h1>
                <p>
                    You probably haven't ordered any food yet.<br/>
                    To order a food, go to the home page.
                </p>
                <img src={Emptycart} alt="Empty Cart"></img>
                <Link to="/" className="back__button">
                    <Button className="button">
                        Go back
                    </Button>
                </Link>
            </Container> 
        </div>
    )
}

export default EmptyCart
