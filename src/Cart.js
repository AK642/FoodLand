import React from 'react';
import './scss/Cart.scss'
import { Button, Container } from '@material-ui/core';
import EmptyCart from './img/empty__cart.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TomatoPizza from './img/tomato-pizza.png';

function Cart() {
    return (
        <div className="cart">
            <Container maxWidth="lg">
                <div className="order">
                    <div className="order__title">
                        <ShoppingCartIcon />
                        <h1>Order summary</h1>
                    </div>
                    <div className="item__list">
                        <div className="item">
                            <img src={TomatoPizza} alt="Tomato Pizza"></img>
                            <div className="item__details">
                                <h1 className="item__name">Tomato Pizza</h1>
                                <span className="item__size">medium</span>
                            </div>
                            <span className="item__quantity">1 Pcs</span>
                            <span className="item__price">₹399.00</span>
                        </div>
                        <div className="item">
                            <img src={TomatoPizza} alt="Tomato Pizza"></img>
                            <div className="item__details">
                                <h1 className="item__name">Tomato Pizza</h1>
                                <span className="item__size">medium</span>
                            </div>
                            <span className="item__quantity">1 Pcs</span>
                            <span className="item__price">₹399.00</span>
                        </div>
                        <div className="item">
                            <img src={TomatoPizza} alt="Tomato Pizza"></img>
                            <div className="item__details">
                                <h1 className="item__name">Tomato Pizza</h1>
                                <span className="item__size">medium</span>
                            </div>
                            <span className="item__quantity">1 Pcs</span>
                            <span className="item__price">₹399.00</span>
                        </div>
                    </div>
                    <div className="bill__details">
                        <div className="bill__amount">
                            <span className="title">Total Amount:</span>
                            <span className="total__amount">₹399.00</span>
                        </div>
                        <div className="shipping__details">
                            <form>
                                <input type="tel" placeholder="Phone number"></input>
                                <input type="text" placeholder="Address"></input>
                                <div className="submit__button">
                                    <Button type="submit" className="button">Order Now</Button>
                                </div>
                            </form>
                        </div>
                        {/* <a href="#">Login to continue</a> */}
                    </div>
                </div>
            </Container>
            {/* <Container maxWidth="lg" className="empty__cart">
                <h1>Cart Empty 🙁</h1>
                <p>
                    You probably haven't ordered any food yet.<br/>
                    To order a food, go to the home page.
                </p>
                <img src={EmptyCart} alt="Empty Cart"></img>
                <Button className="button">
                    Go back
                </Button>
            </Container> */}
        </div>
    )
}

export default Cart