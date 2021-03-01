import React from 'react';
import './scss/FoodViewLeft.scss';
import TomatoPizza from './img/tomato-pizza.png';

function FoodViewLeft({image}) {
    return (
        <div className="foodViewLeft">
            <img src={image} alt="Food Image"></img>
        </div>
    )
}

export default FoodViewLeft
