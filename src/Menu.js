import { Container, Button } from '@material-ui/core';
import React from 'react';
import './scss/Menu.scss';

import TomatoPizza from './img/tomato-pizza.png';

function Menu() {
    return (
        <div className="menu">
            <Container maxWidth="lg" className="menu__content">
                <h1>All Items</h1>
                <div className="item__cards">
                    <div className="card">
                        <div className="item__image">
                            <img src={TomatoPizza} alt="tomato-pizza"></img>    
                        </div> 
                        <div className="item__details">
                            <h2>Tomato Pizza</h2>
                            <span className="size">medium</span>
                            <div className="item__price">
                                <span className="price">₹399.00</span>
                                <Button className="add_to_cart">
                                    <span className="plus">+</span>
                                    <span>Add</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="item__image">
                            <img src={TomatoPizza} alt="tomato-pizza"></img>    
                        </div> 
                        <div className="item__details">
                            <h2>Tomato Pizza</h2>
                            <span className="size">medium</span>
                            <div className="item__price">
                                <span className="price">₹399.00</span>
                                <Button className="add_to_cart">
                                    <span className="plus">+</span>
                                    <span>Add</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="item__image">
                            <img src={TomatoPizza} alt="tomato-pizza"></img>    
                        </div> 
                        <div className="item__details">
                            <h2>Tomato Pizza</h2>
                            <span className="size">medium</span>
                            <div className="item__price">
                                <span className="price">₹399.00</span>
                                <Button className="add_to_cart">
                                    <span className="plus">+</span>
                                    <span>Add</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="item__image">
                            <img src={TomatoPizza} alt="tomato-pizza"></img>    
                        </div> 
                        <div className="item__details">
                            <h2>Tomato Pizza</h2>
                            <span className="size">medium</span>
                            <div className="item__price">
                                <span className="price">₹399.00</span>
                                <Button className="add_to_cart">
                                    <span className="plus">+</span>
                                    <span>Add</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="item__image">
                            <img src={TomatoPizza} alt="tomato-pizza"></img>    
                        </div> 
                        <div className="item__details">
                            <h2>Tomato Pizza</h2>
                            <span className="size">medium</span>
                            <div className="item__price">
                                <span className="price">₹399.00</span>
                                <Button className="add_to_cart">
                                    <span className="plus">+</span>
                                    <span>Add</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="item__image">
                            <img src={TomatoPizza} alt="tomato-pizza"></img>    
                        </div> 
                        <div className="item__details">
                            <h2>Tomato Pizza</h2>
                            <span className="size">medium</span>
                            <div className="item__price">
                                <span className="price">₹399.00</span>
                                <Button className="add_to_cart">
                                    <span className="plus">+</span>
                                    <span>Add</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="item__image">
                            <img src={TomatoPizza} alt="tomato-pizza"></img>    
                        </div> 
                        <div className="item__details">
                            <h2>Tomato Pizza</h2>
                            <span className="size">medium</span>
                            <div className="item__price">
                                <span className="price">₹399.00</span>
                                <Button className="add_to_cart">
                                    <span className="plus">+</span>
                                    <span>Add</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="item__image">
                            <img src={TomatoPizza} alt="tomato-pizza"></img>    
                        </div> 
                        <div className="item__details">
                            <h2>Tomato Pizza</h2>
                            <span className="size">medium</span>
                            <div className="item__price">
                                <span className="price">₹399.00</span>
                                <Button className="add_to_cart">
                                    <span className="plus">+</span>
                                    <span>Add</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Menu
