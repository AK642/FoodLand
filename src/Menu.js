import { Container, Button } from '@material-ui/core';
import React from 'react';
import './scss/Menu.scss';

import TomatoPizza from './img/tomato-pizza.png';
import SalsaPizza from './img/salsa-pizza.png';
import Burger from './img/burger.png';
import BurgerKingFries from './img/burger-king-fries.png';
import MacDFries from './img/mac-d-fries.png';
import Pastry from './img/pastry.png';
import CupCake from './img/cup-cake.png';
import ChineseNoodles from './img/chinese-noodles.png';
import Manchuriyan from './img/manchuriyan.png';
import Meal from './img/meal.png';

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
                            <img src={Burger} alt="tomato-pizza"></img>    
                        </div> 
                        <div className="item__details">
                            <h2>Burger</h2>
                            <span className="size">Large</span>
                            <div className="item__price">
                                <span className="price">₹249.00</span>
                                <Button className="add_to_cart">
                                    <span className="plus">+</span>
                                    <span>Add</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="item__image">
                            <img src={CupCake} alt="tomato-pizza"></img>    
                        </div> 
                        <div className="item__details">
                            <h2>Cup Cake</h2>
                            <span className="size">Chocolate</span>
                            <div className="item__price">
                                <span className="price">₹149.00</span>
                                <Button className="add_to_cart">
                                    <span className="plus">+</span>
                                    <span>Add</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="item__image">
                            <img src={Pastry} alt="tomato-pizza"></img>    
                        </div> 
                        <div className="item__details">
                            <h2>Pastry</h2>
                            <span className="size">Vanilla</span>
                            <div className="item__price">
                                <span className="price">₹149.00</span>
                                <Button className="add_to_cart">
                                    <span className="plus">+</span>
                                    <span>Add</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="item__image">
                            <img src={ChineseNoodles} alt="tomato-pizza"></img>    
                        </div> 
                        <div className="item__details">
                            <h2>Chinese Noodles</h2>
                            <span className="size">Full / Half</span>
                            <div className="item__price">
                                <span className="price">₹199.00</span>
                                <Button className="add_to_cart">
                                    <span className="plus">+</span>
                                    <span>Add</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="item__image">
                            <img src={Manchuriyan} alt="tomato-pizza"></img>    
                        </div> 
                        <div className="item__details">
                            <h2>Manchuriyan</h2>
                            <span className="size">Full / Half</span>
                            <div className="item__price">
                                <span className="price">₹99.00</span>
                                <Button className="add_to_cart">
                                    <span className="plus">+</span>
                                    <span>Add</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="item__image">
                            <img src={BurgerKingFries} alt="tomato-pizza"></img>    
                        </div> 
                        <div className="item__details">
                            <h2>French Fries</h2>
                            <span className="size">Burger King</span>
                            <div className="item__price">
                                <span className="price">₹149.00</span>
                                <Button className="add_to_cart">
                                    <span className="plus">+</span>
                                    <span>Add</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="item__image">
                            <img src={MacDFries} alt="tomato-pizza"></img>    
                        </div> 
                        <div className="item__details">
                            <h2>French Fries</h2>
                            <span className="size">McDonald's</span>
                            <div className="item__price">
                                <span className="price">₹199.00</span>
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
